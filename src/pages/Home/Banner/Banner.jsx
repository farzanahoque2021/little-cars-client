import img1 from '../../../assets/banner.jpg'
import img2 from '../../../assets/banner2.jpg'
import img3 from '../../../assets/banner3.jpg'

import { HiShoppingCart } from "react-icons/hi2";
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex items-center h-full">
                    <div className='text-white space-y-4 pl-12 w-1/2'>
                        <h1 className='font-bold text-white lg:text-6xl text-3xl'>Find Your Perfect<span className='font-bold text-transparent lg:text-6xl text-3xl bg-clip-text bg-gradient-to-r from-emerald-700 to-sky-600'><br />Little Toy Cars</span></h1>
                        <p className='font-semibold lg:text-xl text-xl text-sky-700'>With thousands of toy cars, we have just the right one for your child</p>
                        <div>
                            <button className='btn bg-gradient-to-t from-blue-700 to-sky-500 border-none'>Shop Now <span className='ml-2'><HiShoppingCart /></span></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center h-full">
                    <div className='text-white space-y-4 pl-12 w-1/2'>
                        <h1 className='font-bold text-white lg:text-6xl text-3xl'>Choose From<span className='font-bold text-transparent lg:text-6xl text-3xl bg-clip-text bg-gradient-to-r from-emerald-700 to-sky-600'><br />Our Quality Cars</span></h1>
                        <p className='font-semibold lg:text-xl text-xl text-sky-700'>With thousands of toy cars, we have just the right one for your child</p>
                        <div>
                            <button className='btn bg-gradient-to-t from-blue-700 to-sky-500 border-none'>Shop Now <span className='ml-2'><HiShoppingCart /></span></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center h-full">
                    <div className='text-white space-y-4 pl-12 w-1/2'>
                        <h1 className='font-bold text-white lg:text-6xl text-3xl'>Make Your <span className='font-bold text-transparent lg:text-6xl text-3xl bg-clip-text bg-gradient-to-r from-emerald-700 to-sky-600'><br />Little One Happy</span></h1>
                        <p className='font-semibold lg:text-xl text-xl text-sky-700'>With thousands of toy cars, we have just the right one for your child</p>
                        <div>
                            <button className='btn bg-gradient-to-t from-blue-700 to-sky-500 border-none'>Shop Now <span className='ml-2'><HiShoppingCart /></span></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;