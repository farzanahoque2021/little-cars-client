import useTitle from "../../../hooks/useTitle";
import AllCategory from "../AllCategory/AllCategory";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SectionIcon from "../SectionIcon/SectionIcon";




const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SectionIcon></SectionIcon>
            <AllCategory></AllCategory>


        </div>
    );
};

export default Home;