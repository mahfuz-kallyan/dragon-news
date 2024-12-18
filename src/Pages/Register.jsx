import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        if (name.length < 5) {
            setError({ ...error, name: 'must be more than 5 characters' })
            return;
        }
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                updateUserProfile({ photoURL: photo, displayName: name })
                    .then(() => {
                        navigate("/")
                    })
                    .catch(error => 
                        console.log(error.code)    
                    )
            })
            .catch(error => console.log(error.message)
            )

    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0">
                <h2 className='text-3xl font-semibold p-6 text-center'>Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && (<label className="label text-xs text-red-600">
                            {error.name}
                        </label>)
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="URL" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className='text-center py-2'>Already have a account? <Link to={"/auth/login"}><strong className='text-[#D72050]'>Login</strong></Link></p>
            </div>
        </div>
    );
};

export default Register;