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
        <div>
            {chefList.map(chef => <SingleChef
            key={chef.id}
            chef={chef}
            ></SingleChef>)}
        </div>
    );
};

export default Chefs;