import { useEffect, useState } from "react";
import ToysTable from "./ToysTable/ToysTable";


const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setToys(data))
    })
    return (
        <div>
            <h3 className="text-3xl text-sky-600 font-bold text-center mb-4">All Toys</h3>
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
                            toys.map((toy, index) => <ToysTable key={toy._id}
                                toy={toy}
                                index={index}></ToysTable>)
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AllToys;