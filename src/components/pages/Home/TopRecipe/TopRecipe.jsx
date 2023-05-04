import React, { useEffect, useState } from 'react';

const TopRecipe = () => {
    const [topRecipe, settopRecipe] = useState([]);

    useEffect(() => {
        fetch("https://yummy-tummy-cook-book-server.vercel.app/chef-list")
            .then((res) => res.json())
            .then((data) => {
                const temp = [];
                data.forEach((element) => {
                    if (temp.length < 9 ) {
                        temp.push(...element.recipes);
                    }
                });
                settopRecipe(temp);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <h1 className="text-5xl text-center mb-4 font-bold">
                Most Recent Recipe List
            </h1>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3">
                    {topRecipe.map((ele) => {
                        return (
                            <div
                                className="card w-96 bg-base-100 shadow-xl"
                                key={ele.recipe_id}
                            >
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">
                                        {ele.recipe_name}
                                    </h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default TopRecipe;