import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import ActiveLink from "../../../routes/ActiveLink/ActiveLink";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.error(error));
    };
    return (
        <div className="navbar bg-base-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link
                                className="btn btn-ghost normal-case text-xl"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="btn btn-ghost normal-case text-xl"
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="btn btn-ghost normal-case text-xl"
                                to="/about"
                            >
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
                <a className="btn text-[#ddd] normal-case md:text-xl">
                    Yummy Tummy Cook Book
                </a>
            </div>
            <div className="navbar-center hidden lg:flex text-[#ddd]">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <ActiveLink
                            className="btn btn-ghost normal-case text-xl"
                            to="/"
                        >
                            Home
                        </ActiveLink>
                    </li>
                    {user && (
                        <li>
                            <ActiveLink
                                className="btn btn-ghost normal-case text-xl"
                                to="/chefs"
                            >
                                Chef
                            </ActiveLink>
                        </li>
                    )}
                    <li>
                        <ActiveLink
                            className="btn btn-ghost normal-case text-xl"
                            to="/blog"
                        >
                            Blog
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink
                            className="btn btn-ghost normal-case text-xl"
                            to="/about"
                        >
                            About us
                        </ActiveLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end cols">
                {user ? (
                    <>
                        (<span style={{ color: "#ddd" }}>{user.email}</span>)
                        <button onClick={handleLogOut} className="btn btn-xs">
                            Sign out
                        </button>
                    </>
                ) : (
                    <>
                        <ActiveLink
                            className="btn btn-outline btn-accent mr-4"
                            to="/register"
                        >
                            Sign Up
                        </ActiveLink>
                        <ActiveLink
                            className="btn btn-outline btn-accent"
                            to="/login"
                        >
                            Login
                        </ActiveLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
