import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'


const SingleToy = () => {
    const singleToy = useLoaderData();
    console.log(singleToy)
    const { picture, seller, email, rating, quantity, details, name, price } = singleToy;
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
    return (
        <div className="hero min-h-screen bg-sky-50">
            <div className="hero-content flex-col lg:flex-row border-1 rounded-lg bg-white">
                <img src={picture} className="max-w-sm rounded-lg shadow-md" />
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-sky-600">{name}</h1>
                    <div className="space-y-3">
                        <p><span className="font-bold text-base">Details: </span>{details}</p>
                        <p><span className="font-bold text-base">Name of the Seller: </span> {seller}</p>
                        <p><span className="font-bold text-base">Seller Email: </span> {email}</p>
                        <p><span className="font-bold text-base">Price: </span> ${price}</p>
                        <p><span className="font-bold text-base">Available Quantity: </span> {quantity}pcs</p>
                        <p className="flex items-center"><span className="font-bold text-base">Rating:</span><span className='flex ml-3 text-yellow-400'>{ratingStar}</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleToy;