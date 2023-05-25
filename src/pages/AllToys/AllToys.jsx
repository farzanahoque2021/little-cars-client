import { useContext, useEffect, useState } from "react";

import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'


const AllToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    useTitle('All Toys')

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://little-cars-server-farzanahoque2021.vercel.app/cars')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleSearch = () => {
        fetch(`https://little-cars-server-farzanahoque2021.vercel.app/cars/${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data);
            })
    }

    const handleViewClick = () => {
        Swal.fire({
            title: 'You have to login first to view details',
            text: 'Do you want to continue?',
            icon: 'warning',
            confirmButtonText: 'Okay'
        })
    }
    return (
        <div>
            <h3 className="text-3xl text-sky-600 font-bold text-center mb-4">All Toys</h3>

            <div className="flex justify-center items-center my-4">
                <h4 className="text-base font-semibold mr-2">Search By Toy Name:</h4>
                <div className="flex items-center space-x-1">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" className="input input-bordered" />{" "}
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table mx-auto">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) =>
                                <tr key={toy._id}>
                                    <td>{index + 1}</td>
                                    <td>{toy.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>${toy.price} </td>
                                    <td>{toy.quantity} pcs</td>
                                    <th>
                                        <Link to={`/toy/${toy._id}`}><button onClick={() => { !user && handleViewClick() }} className="btn btn-outline btn-success">View Details</button></Link>
                                    </th>
                                </tr>)
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AllToys;