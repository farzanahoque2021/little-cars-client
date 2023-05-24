import useTitle from "../../../hooks/useTitle";
import AboutSection from "../AboutSection/AboutSection";
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
            <AboutSection></AboutSection>


        </div>
    );
};

export default Home;