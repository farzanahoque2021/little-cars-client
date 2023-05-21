
import logo from '../../../assets/car-logo.png'
const Header = () => {
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
                    <li><a>Home</a></li>
                    <li><a>All Toys</a></li>
                    <li><a>My Toys</a></li>
                    <li><a>Add Toy</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Header;