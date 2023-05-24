
import logo from '../../../assets/car-logo.png'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
const Footer = () => {
    return (
        <div><footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>Little Cars Ltd.</p>
            </div>
            <div>
                <span className="footer-title">Contact Us:</span>
                <a className="link link-hover">Address: Bangladesh</a>
                <a className="link link-hover">Email: info@gmail.com</a>

            </div>
            <div>
                <span className="footer-title">Social Links</span>
                <div className='flex lg:flex-row items-center'>
                    <a className="link link-hover text-2xl"><AiFillTwitterCircle /></a>
                    <a className="link link-hover text-2xl"><FaFacebook /></a>
                    <a className="link link-hover text-2xl"><AiFillYoutube /></a>
                </div>

            </div>

        </footer>
            <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Little Cars ltd</p>
                </div>
            </footer>
        </div>

    );
};

export default Footer;