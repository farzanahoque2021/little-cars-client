import { useLoaderData } from "react-router-dom";


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

        fetch(`http://localhost:5000/updatedtoy/${_id}`, {
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
                    alert("Toy has been updated successfully!")
                }
            })
    }
    return (
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


    );
};

export default UpdateToy;