import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../ToyCard/ToyCard';

const AllCategory = () => {
    const [toys, setToys] = useState([]);

    const [activeTab, setActiveTab] = useState("battery")

    useEffect(() => {
        fetch(`https://little-cars-server-farzanahoque2021.vercel.app/allToysByCategory/${activeTab}`)
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
                    <Tab onClick={() => handleTabClick("remote")} className='tab tab-lifted'>Remote Controlled</Tab>
                    <Tab onClick={() => handleTabClick("rechargeable")} className='tab tab-lifted'>Rechargeable</Tab>
                    <Tab onClick={() => handleTabClick("model")} className='tab tab-lifted'>Model</Tab>
                    <Tab onClick={() => handleTabClick("school")} className='tab tab-lifted'>School Bus</Tab>
                    <Tab onClick={() => handleTabClick("coaster")} className='tab tab-lifted'>Coaster</Tab>
                    <Tab onClick={() => handleTabClick("transporter")} className='tab tab-lifted'>Transporter</Tab>
                    <Tab onClick={() => handleTabClick("music")} className='tab tab-lifted'>Music Operated</Tab>
                    <Tab onClick={() => handleTabClick("pullback")} className='tab tab-lifted'>Pull Back</Tab>
                    <Tab onClick={() => handleTabClick("battery")} className='tab tab-lifted'>Battery Powered</Tab>


                </TabList>


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