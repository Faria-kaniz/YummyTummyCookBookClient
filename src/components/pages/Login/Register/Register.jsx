import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../../firebase/firebase.config";
import { AuthContext } from "../../../providers/AuthProviders";

const Register = () => {
    const auth = getAuth(app);
    const { user, createUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        console.log(name,photo_url);

        createUser(email, password)
            .then((result) => {
                const registerUser = result.user;
                if (registerUser) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo_url,
                    }).then(() => {
                        setLoading(true);
                        form.reset();
                        navigate("/");
                    });
                }
            })
            .catch((error) => {
                let fireBaseErr = [];
                fireBaseErr.push(error.message);
                setError(fireBaseErr);
                return;
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="mx-8 mt-4">
                        <ul>
                            {error.map((err, index) => {
                                return (
                                    <li key={index} className="text-red-500">
                                        {err}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                onChange={(e) => setPhoto(e.target.value)}
                                type="text"
                                placeholder="photo url"
                                name="photo_url"
                                className="input input-bordered"
                                required
                            />

                            <label className="label">
                                <Link
                                    to="/login"
                                    className="label-text-alt link link-hover"
                                >
                                    Already have an account?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
