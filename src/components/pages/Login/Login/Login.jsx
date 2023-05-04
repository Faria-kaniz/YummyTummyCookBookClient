import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        // const form = event.target;
        // const email = form.email.value;
        // const password = form.password.value;
        console.log(email, password);
        if ((email, password)) {
            signIn(email, password)
                .then((result) => {
                    const loggedUser = result.user;
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // setUser(loggedinUser);
            })
            .catch((error) => {
                console.log("error", error.message);
            });
    };

    const handleGitHubLogin = () => {
        githubSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // setUser(loggedinUser);
            })
            .catch((error) => {
                console.log("error", error.message);
            });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                onClick={handleLogin}
                                className="btn btn-active btn-ghost"
                            >
                                Login
                            </button>
                            <button
                                onClick={handleGoogleLogin}
                                className="btn btn-wide mt-2"
                            >
                                Continue with Google
                            </button>
                            <button
                                onClick={handleGitHubLogin}
                                className="btn btn-wide mt-2"
                            >
                                Continue with GitHub
                            </button>
                        </div>
                    </form>
                    <p className="mb-4 ml-3">
                        <Link
                            to="/register"
                            className="label-text-alt link link-hover"
                        >
                            New to Yummy Tummy Cook Book ? Please Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
