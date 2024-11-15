import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {

    const {userSignIn, setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

       userSignIn(email, password)
       .then(result => {
        const user = result.user;
        setUser(user);
       })
       .catch(error => {
        alert(error.message)
       })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0">
                <h2 className='text-3xl font-semibold p-6 text-center'>Login Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className='text-center'>Don't have a account? <Link to={"/auth/register"}><strong className='text-[#D72050]'>Register</strong></Link></p>
            </div>
        </div>
    );
};

export default Login;