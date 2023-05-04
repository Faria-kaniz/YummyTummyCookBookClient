import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ClientReview = () => {
    const [clientReview, setClientReview] = useState([]);

    useEffect(() => {
        fetch("../../../../../public/data/clientReview.json")
            .then((res) => res.json())
            .then((data) => setClientReview(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            <h1 className="text-5xl text-center mb-4 font-bold">
                Client Reviews
            </h1>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3">
                    {clientReview.map((ele) => {
                        return (
                            <div
                                className="card flex bg-base-100 shadow-xl"
                                key={ele.id}
                            >
                                <div className="avatar w-24 mx-8">
                                    <img
                                        src={ele.image}
                                        className="rounded-full text-center"
                                        alt="customer"
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title mt-0">
                                        {ele.name}
                                    </h2>
                                    <p className="card-description">
                                        {ele.review}
                                    </p>
                                    <p className="text-center mt-3">
                                        {[...Array(ele.rating)].map(
                                            (ele, i) => {
                                                return (
                                                    <FontAwesomeIcon
                                                        className="mr-2 text-3xl text-red-700"
                                                        key={i}
                                                        icon={fasHeart}
                                                    />
                                                );
                                            }
                                        )}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ClientReview;
