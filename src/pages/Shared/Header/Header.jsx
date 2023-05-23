import { useContext } from 'react';
import logo from '../../../assets/car-logo.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>All Toys</a></li>
                        <li><a>My Toys</a></li>
                        <li><a>Add Toy</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className='ml-4 lg:ml-0'>
                    <img src={logo} className='w-40 h-16' alt="little cars" />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/alltoys'>All Toys</Link></li>
                    <li><Link to='/mytoys'>My Toys</Link></li>
                    <li><Link to='/addtoy'>Add Toy</Link></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex'><label className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-success mr-2" data-tip={user.displayName}>
                        <div className="w-12 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label><button onClick={handleLogOut} className="btn bg-gradient-to-t from-blue-700 to-sky-500 border-none">Log out</button></div> : <Link to="/login"><button className="btn bg-gradient-to-t from-blue-700 to-sky-500 border-none">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Header;