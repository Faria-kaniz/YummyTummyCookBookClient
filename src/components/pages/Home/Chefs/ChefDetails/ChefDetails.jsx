import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    addToFavourite,
    getFavouriteList,
} from "../../../../../utility/fakedb";

const ChefDetails = () => {
    const chefData = useLoaderData();
    let [heartIcon, setheartIcon] = useState(farHeart);
    let [favList, setFavList] = useState([]);

    const setLocalBookmark = (id) => {
        if (!favList.includes(id)) {
            if (heartIcon == farHeart && favList.includes(id)) {
                setheartIcon(fasHeart);
            } else {
                setheartIcon(farHeart);
            }
            setFavourite(id);
        }
    };

    const setFavourite = (id) => {
        addToFavourite(id);
    };

    useEffect(() => {
        const fav = getFavouriteList();
        const favArr = JSON.parse(fav);
        if (favArr.length > 0) {
        setFavList(favArr);
        }
    }, []);
    return (
        <div className="hero min-h-screen min-w-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={chefData.chef_picture}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="overflow-x-auto">
                    <h1 className="text-5xl font-bold">{chefData.chef_name}</h1>
                    <p className="py-6">{chefData.chef_bio}</p>
                    <div className="card-actions my-4 justify-between">
                        <div className="badge badge-outline">
                            Year of experience: {chefData.year_of_experience}
                        </div>
                        <div className="badge badge-outline">
                            Number of recipes: {chefData.recipes.length}
                        </div>
                        <div className="badge badge-outline">
                            Likes: {chefData.likes}
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Recipe Name</th>
                                    <th>Ingredients</th>
                                    <th>Cooking Method</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {chefData.recipes.map((recipe, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{recipe.recipe_name}</td>
                                            <td>
                                                {recipe.ingredients.map(
                                                    (ele,eleIndex) => {
                                                        return (
                                                            <span
                                                                className="mr-2"
                                                                key={eleIndex}
                                                            >
                                                                <div className="badge badge-outline">
                                                                    {ele}
                                                                </div>
                                                            </span>
                                                        );
                                                    }
                                                )}
                                            </td>
                                            <td>{recipe.cooking_method}</td>
                                            <td>{recipe.rating}</td>
                                            <td>
                                                <FontAwesomeIcon
                                                    onClick={() =>
                                                        setLocalBookmark(
                                                            recipe.recipe_id
                                                        )
                                                    }
                                                    icon={
                                                        favList.includes(
                                                            recipe.recipe_id
                                                        )
                                                            ? fasHeart
                                                            : heartIcon
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;