import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/signup.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from "firebase/auth";
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useTitle('Signup')

    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photourl.value;


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('');
                setSuccess('User account has been created successfully');
                navigate('/');
                updateUserData(loggedUser, name, photo)
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })

    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('Username updated');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">

                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        {/* Form Code */}
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="url" placeholder="photourl" name="photourl" className="input input-bordered" required />

                            </div>
                            <p className='mb-4 text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-t from-blue-700 to-sky-500 border-none" type="submit" value="Sign Up"></input>
                            </div>
                        </form>
                        <p className='my-4 text-center' >Already have an account in Little Cars? <Link className='text-sky-400 font-semibold' to="/login">Login</Link></p>
                        <p className='mb-4 ml-8 text-green-600'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;