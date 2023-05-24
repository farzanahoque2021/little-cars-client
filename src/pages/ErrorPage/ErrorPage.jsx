import { Link } from 'react-router-dom';
import error from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className='text-center my-6'>
            <img src={error} className='w-1/2 mx-auto' alt="" />
            <Link to='/'><button className='btn btn-primary'>Go Back To HomePage</button></Link>
        </div>

    );
};

export default ErrorPage;