import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    useTitle('My Toys')

    useEffect(() => {
        fetch(`https://little-cars-server-farzanahoque2021.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                console.log(data);
            })

    }, [user])



    const handleSortDescend = () => {
        fetch(`https://little-cars-server-farzanahoque2021.vercel.app/sortToysDescend/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }

    const handleSortAscend = () => {
        fetch(`https://little-cars-server-farzanahoque2021.vercel.app/sortToysAscend/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://little-cars-server-farzanahoque2021.vercel.app/mytoys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining)
                        }
                    })
            }
        })

    }


    return (
        <div>
            <h3 className="text-3xl text-sky-600 font-bold text-center mb-4">Toys Added By: {user?.displayName}</h3>
            <p className="text-center mb-4">Sort By Price: <button onClick={handleSortDescend} className="btn btn-success ml-4">High to Low</button>
                <button onClick={handleSortAscend} className="btn btn-success ml-4">Low to High</button></p>
            <div className="overflow-x-auto w-full">
                <table className="table mx-auto">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Picture</th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) =>
                                <tr key={toy._id}>
                                    <td>{index + 1}</td>
                                    <td><img src={toy.picture} className="w-28 h-28" alt="" /></td>

                                    <td>{toy.name}</td>
                                    <td>{toy.seller}</td>
                                    <td>{toy.email}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>${toy.price} </td>
                                    <td>{toy.rating} </td>
                                    <td>{toy.quantity} </td>
                                    <td>{toy.details} pcs</td>
                                    <td>
                                        <Link to={`/updatetoy/${toy._id}`}><button className="btn btn-outline btn-success ">Update</button></Link>
                                    </td>

                                    <td>
                                        <button onClick={() => handleDelete(toy._id)} className="btn btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>)
                        }


                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default MyToys;