import banner from '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className='banner-bg flex items-center'>
            <div className='ml-4 space-y-4'>
                <h1 className='font-bold text-4xl text-white'>Welcome to Our Little Car Website</h1>
                <button className='btn bg-slate-600'>Get Started</button>
            </div>

        </div>
    );
};

export default Banner;