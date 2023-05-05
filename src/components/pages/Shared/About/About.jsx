import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
            <div className="bg-gray-100 p-6 rounded shadow-lg mt-8">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/GchQLRv/male1.jpg" />
                    </div>
                </div>
                <div className="card-actions my-4 justify-end">
                    <div className="badge badge-outline">
                        call us : +0089854984958
                    </div>
                </div>
                <p>
                    Bangladeshi cuisine is rich and varied, and it is shaped by
                    the country's geography, history, and culture. Rice and fish
                    are the staples of Bangladeshi cuisine, and they are often
                    accompanied by various types of vegetables, lentils, and
                    spicy sauces. Bangladeshi cuisine typically features a wide
                    range of spices and herbs, such as cumin, coriander,
                    turmeric, ginger, garlic, and chili powder. These
                    ingredients are used to create complex and flavorful dishes
                    that are often enjoyed with flatbreads like naan or roti.
                    Some of the popular Bangladeshi dishes include biryani (a
                    rice dish with spices and meat or vegetables), dal (lentil
                    soup), chutney (spicy condiment), and various types of fish
                    and seafood dishes. Bangladeshi sweets and desserts are also
                    a popular part of the cuisine, and include treats like
                    rasgulla (cheese balls soaked in syrup) and mishti doi
                    (sweet yogurt).
                </p>
            </div>
        </>
    );
};

export default About;