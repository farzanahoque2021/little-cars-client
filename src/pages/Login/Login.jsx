import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn, signInGoogle } = useContext(AuthContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('');
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                // navigate('/');
                navigate(from, { replace: true });
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">

                    <img className='rounded-lg' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        {/* Form Code */}
                        <form onSubmit={handleLogin}>
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
                            <p className='mb-4 text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-t from-blue-700 to-sky-500 border-none" type="submit" value="Login"></input>
                            </div>
                        </form>
                        <p className='my-4 text-center' >New to Little Cars? <Link className='text-sky-400 font-semibold' to="/signup">Sign Up</Link></p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info mb-4">Sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;