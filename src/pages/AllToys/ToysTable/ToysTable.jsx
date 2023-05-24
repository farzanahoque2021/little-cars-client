import { Link } from "react-router-dom";


const ToysTable = ({ toy, index }) => {
    const { name, seller, subCategory, price, quantity } = toy;
    return (

        <tr>
            <td>{index + 1}</td>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>${price} </td>
            <td>{quantity} pcs</td>
            <th>
                <Link to='/login'><button className="btn btn-outline btn-success">View Details</button></Link>
            </th>
        </tr>


    );
};

export default ToysTable;