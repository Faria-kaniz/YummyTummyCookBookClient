import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
    addToFavourite,
    getFavouriteList,
} from "../../../../../utility/fakedb";

const ChefDetails = () => {
    const [loading, setLoading] = useState(true);
    const chefData = useLoaderData();
    let [heartIcon, setheartIcon] = useState(farHeart);
    let [favList, setFavList] = useState([]);

    const setLocalBookmark = (id) => {
        if (!favList.includes(id)) {
            if (heartIcon == farHeart && favList.includes(id)) {
                setheartIcon(fasHeart);
                setLoading(true);
            } else {
                setheartIcon(farHeart);
            }
            setFavourite(id);
        }
    };

    const setFavourite = (id) => {
        addToFavourite(id);
        setLoading(true);
    };

    useEffect(() => {
        const fav = getFavouriteList();
        const favArr = JSON.parse(fav);
        if (favArr.length > 0) {
            setFavList(favArr);
            setLoading(true);
        }
    }, []);

    return (
        <div className="min-h-screen min-w-screen bg-base-200">
            <div className="hero-content flex-col sm:flex-row">
                <div className="avatar w-56">
                    <img
                        src={chefData.chef_picture}
                        className="rounded-full  shadow-xl"
                    />
                </div>
                <div className="overflow-x-auto">
                    <h1 className="text-5xl font-bold">{chefData.chef_name}</h1>
                    <p className="py-6">{chefData.chef_bio}</p>
                    <div className="card-actions my-4 justify-between">
                        <div className="badge badge-outline">
                            <strong>Year of experience:</strong>
                            {chefData.year_of_experience}
                        </div>
                        <div className="badge badge-outline">
                            <strong>Number of recipes:</strong>
                            {chefData.recipes.length}
                        </div>
                        <div className="badge badge-outline">
                            <strong>Likes:</strong> {chefData.likes}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-4xl font-bold">Recipe List</h1>
            </div>
            <div className="hero-content pb-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
                <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-3">
                    {chefData.recipes.map((recipe, index) => {
                        return (
                            <div
                                className="card w-72 bg-base-100 shadow-xl"
                                key={index}
                            >
                                <div className="card-body ">
                                    <h3 className="card-title border-b-2 h-20 inline-block align-text-top">
                                        {recipe.recipe_name}
                                    </h3>
                                    <p className="h-24">
                                        <strong>Ingredients</strong>
                                        <br />
                                        {recipe.ingredients.map(
                                            (ele, eleIndex) => {
                                                return (
                                                    <span
                                                        className="mr-2"
                                                        key={eleIndex}
                                                    >
                                                        <span className="badge badge-outline">
                                                            {ele}
                                                        </span>
                                                    </span>
                                                );
                                            }
                                        )}
                                    </p>
                                    <p className="m-0 leading-none">
                                        <strong>COOKING METHOD: </strong>
                                        {recipe.cooking_method}
                                    </p>

                                    <p className="m-0 leading-none flex justify-between">
                                        <span>
                                            <strong>Rating: </strong>
                                            {recipe.rating}
                                        </span>

                                        <span className="border-2 p-2 hover:border-red-600 rounded-full cursor-pointer text-red-600">
                                            <FontAwesomeIcon
                                                className="font-red"
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
                                        </span>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;
