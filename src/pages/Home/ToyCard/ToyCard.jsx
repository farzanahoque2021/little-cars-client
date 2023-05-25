
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { HiCurrencyDollar, HiArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const ToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { _id, picture, name, price, rating } = toy;
    const ratingStar = Array.from({ length: 5 }, (element, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {rating >= index + 1 ? (
                    <FaStar className="icon" />
                ) : rating >= number ? (<FaStarHalfAlt className="icon" />) : (
                    <AiOutlineStar className="icon" />
                )}

            </span>
        )
    })

    const handleViewClick = () => {
        Swal.fire({
            title: 'You have to login first to view details',
            text: 'Do you want to continue?',
            icon: 'warning',
            confirmButtonText: 'Okay'
        })
    }
    return (
        <div className="card shadow-xl bg-base-100">
            <figure className="px-10 pt-10">
                <img src={picture} alt="toy picture" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl">Name: {name}</h2>
                <div className='flex flex-col lg:flex-row gap-6 my-4'>
                    <p className="text-base font-semibold text-cyan-600 flex items-center">Price: <HiCurrencyDollar /> {price}</p>
                    <p className="text-base font-semibold text-cyan-600 flex items-center">Rating: <span className='flex ml-3 text-yellow-400'>{ratingStar}</span></p>
                </div>

                <div className="card-actions">
                    <Link to={`toy/${_id}`}><button onClick={() => { !user && handleViewClick() }} className="btn btn-outline btn-info">View Details<HiArrowSmRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;