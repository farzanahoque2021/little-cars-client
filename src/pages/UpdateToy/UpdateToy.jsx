import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const toy = useLoaderData();
    const { _id, price, details, quantity } = toy;
    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const details = form.details.value;
        const quantity = form.quantity.value;

        const updatedToy = { price, details, quantity }
        console.log(updatedToy)

        fetch(`https://little-cars-server-farzanahoque2021.vercel.app/updatedtoy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy has been Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="w-1/2 mx-auto border shadow-sm my-6">
            <div className="card-body">
                <p>Update Toy Information</p>
                <form onSubmit={handleUpdateToy}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 w-1/2 mx-auto">
                        <input type="submit" className="btn btn-outline btn-success" value="Update"></input>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default UpdateToy;