import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';

const AllCategory = () => {
    const [toys, setToys] = useState([]);

    const [activeTab, setActiveTab] = useState("battery")

    useEffect(() => {
        fetch(`http://localhost:5000/allToysByCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div className='text-center'>
            <h2 className='text-center font-bold text-4xl text-sky-600 mb-4'>Our Category</h2>
            <Tabs>
                <TabList>
                    <Tab >Mini Sports Car</Tab>
                    <Tab>Mini Bus</Tab>
                    <Tab>Mini Police Cars</Tab>
                </TabList>

                <TabPanel>

                    <Tab onClick={() => handleTabClick("remote")} className='tab'>Remote Controlled</Tab>
                    <Tab onClick={() => handleTabClick("rechargeable")} className='tab'>Rechargeable</Tab>
                    <Tab onClick={() => handleTabClick("model")} className='tab'>Model</Tab>


                </TabPanel>
                <TabPanel>
                    <Tab onClick={() => handleTabClick("school")} className='tab'>School Bus</Tab>
                    <Tab onClick={() => handleTabClick("coaster")} className='tab'>Coaster</Tab>
                    <Tab onClick={() => handleTabClick("transporter")} className='tab'>Transporter</Tab>
                </TabPanel>
                <TabPanel>
                    <Tab onClick={() => handleTabClick("music")} className='tab'>Music Operated</Tab>
                    <Tab onClick={() => handleTabClick("pullback")} className='tab'>Pull Back</Tab>
                    <Tab onClick={() => handleTabClick("battery")} className='tab'>Battery Powered</Tab>
                </TabPanel>
            </Tabs>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-1/2 mx-auto gap-4 my-8'>
                {
                    toys?.map(toy => <ToyCard key={toy._id}
                        toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllCategory;