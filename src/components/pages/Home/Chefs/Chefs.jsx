import React, { useEffect, useState } from 'react';
import SingleChef from './singleChef/singleChef';

const Chefs = () => {
    const [chefList, setChefList] = useState([]);

    useEffect(() => {
        fetch("https://yummy-tummy-cook-book-server.vercel.app/chef-list")
            .then((res) => res.json())
            .then((data) => setChefList(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8  mb-8 md:grid-cols-2 lg:grid-cols-3">
                {chefList.map((chef) => (
                    <SingleChef key={chef.chef_id} chef={chef}></SingleChef>
                ))}
            </div>
        </div>
    );
};

export default Chefs;