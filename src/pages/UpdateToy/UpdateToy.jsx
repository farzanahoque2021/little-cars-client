// import { useLoaderData } from "react-router-dom";



// const UpdateToy = () => {
//     const toy = useLoaderData();

//     const { _id, name, price, rating, details, quantity } = toy;
//     const handleUpdateToy = event => {
//         event.preventDefault();

//         const form = event.target;
//         const name = form.name.value;
//         const price = form.price.value;
//         const rating = form.rating.value;
//         const details = form.details.value;
//         const quantity = form.quantity.value;

//         const updatedToy = { name, price, rating, details, quantity }
//         console.log(updatedToy)

//         fetch(`http://localhost:5000/updatedtoy/${_id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(updatedToy)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.modifiedCount > 0) {
//                     alert("Toy has been updated successfully!")
//                 }
//             })
//     }
//     return (

//         <div>
//             <h2 className="text-center font-bold text-3xl text-cyan-600">Update Toy</h2>
//             <div className="flex items-center justify-center bg-sky-50 mt-4 p-12">
//                 <div className="w-1/2 mx-auto shadow-xl rounded-lg bg-base-100">
//                     <div className="card-body">
//                         <form onSubmit={handleUpdateToy}>
//                             <div className="form-control w-full">
//                                 <label className="label">
//                                     <span className="label-text">Toy Name</span>
//                                 </label>
//                                 <input type="text" placeholder="Toy Name" name="name" defaultValue={name} className="input input-bordered" />
//                             </div>

//                             <div className="flex gap-2">
//                                 <div className="form-control w-1/2">
//                                     <label className="label">
//                                         <span className="label-text">Price</span>
//                                     </label>
//                                     <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control w-1/2">
//                                     <label className="label">
//                                         <span className="label-text">Quantity</span>
//                                     </label>
//                                     <input type="number" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered" />

//                                 </div>
//                                 <div className="form-control w-1/2">
//                                     <label className="label">
//                                         <span className="label-text">Rating</span>
//                                     </label>
//                                     <input type="number" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" />

//                                 </div>
//                             </div>


//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Details: </span>
//                                 </label>
//                                 <textarea name="details" defaultValue={details} className="textarea textarea-bordered" rows="8">

//                                 </textarea>
//                             </div>
//                             <div className="form-control mt-6 w-1/2 mx-auto">
//                                 <input type="submit" className="btn btn-outline btn-success" value="Update"></input>
//                             </div>
//                         </form>
//                     </div>

//                 </div>
//             </div>
//         </div >

//     );
// };

// export default UpdateToy;


