import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className='banner-bg flex items-center'>
            <div className='ml-4 space-y-4'>
                <h1 className='font-bold text-white text-5xl'>Find Your Perfect<span className='font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-emerald-700 to-sky-600'><br />Little Toy Cars</span></h1>
                <p className='font-semibold lg:text-2xl text-xl text-sky-700'>With thousands of toy cars, we have just the right one for your child</p>
                <button className='btn bg-gradient-to-t from-blue-700 to-sky-500 border-none'>Shop Now</button>
            </div>

        </div>
    );
};

export default Banner;