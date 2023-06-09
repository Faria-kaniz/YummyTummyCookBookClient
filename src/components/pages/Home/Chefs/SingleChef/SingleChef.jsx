import React, { useContext } from 'react';
import LazyLoad from "react-lazy-load";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProviders';

const SingleChef = ({chef}) => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-gray-100 p-6 rounded shadow-lg">
            <LazyLoad>
                <img
                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                    src={chef.chef_picture}
                    alt=""
                />
            </LazyLoad>
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                {chef.chef_name}
            </p>
            <p className="text-gray-700 ">{chef.chef_bio}</p>
            <div className="card-actions my-4 justify-between">
                <div className="badge badge-outline">
                    Year of experience: {chef.year_of_experience}
                </div>
                <div className="badge badge-outline">
                    Number of recipes: {chef.recipes.length}
                </div>
            </div>
            <div className="card-actions my-4 justify-between">
                <div className="badge badge-outline">Likes: {chef.likes}</div>
            </div>
            {user && (
                <Link
                    className="btn bg-gray-900 w-full"
                    to={`/chef/${chef.chef_id}`}
                >
                    view recipes
                </Link>
            )}
        </div>
    );
};

export default SingleChef;