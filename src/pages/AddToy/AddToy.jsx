import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Swal from 'sweetalert2'

const AddToy = () => {
    const { user } = useContext(AuthContext)
    useTitle('Add Toy')
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const subCategory = form.subCategory.value;
        const picture = form.picture.value;
        const details = form.details.value;
        const quantity = form.quantity.value;

        const newToy = { name, seller, email, price, rating, subCategory, picture, details, quantity }
        console.log(newToy)

        fetch('https://little-cars-server-farzanahoque2021.vercel.app/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <h2 className="text-center font-bold text-3xl text-cyan-600">Add Toy</h2>
            <div className="flex items-center justify-center bg-sky-50 mt-4 p-12">
                <div className="w-1/2 mx-auto shadow-xl rounded-lg bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleAddToy}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" placeholder="Toy Name" name="name" className="input input-bordered" />
                            </div>
                            <div className="flex gap-2">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="seller" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" name="rating" placeholder="Rating" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Sub-Category</span>
                                    </label>
                                    <select name="subCategory" className="select select-bordered w-full">
                                        <option>remote</option>
                                        <option>rechargeable</option>
                                        <option>model</option>
                                        <option>school</option>
                                        <option>coaster</option>
                                        <option>transporter</option>
                                        <option>music</option>
                                        <option>pullback</option>
                                        <option>battery</option>
                                    </select>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="photoURL" name="picture" placeholder="Picture URL" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details: </span>
                                </label>
                                <textarea name="details" className="textarea textarea-bordered" rows="8">

                                </textarea>
                            </div>
                            <div className="form-control mt-6 w-1/2 mx-auto">
                                <input type="submit" className="btn btn-outline btn-success" value="Add"></input>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default AddToy;