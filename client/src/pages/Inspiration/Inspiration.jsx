import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Inspiration.scss'

const Inspiration = () => {
    const [link, setLink] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasTried, setHasTried] = useState(false);

    useEffect(() => {
        // Fetch new image only if hasTried is true and there's no current link (reset scenario)
        if (hasTried && !link) {
            getImage();
        }
    }, [hasTried, link]);

    const getImage = async () => {
        setIsLoading(true);
        try {
            const response1 = await axios.get(`${import.meta.env.VITE_BASEURL}/closet/tops`);
            const length1 = response1.data.length;
            const randomIndex1 = Math.floor(Math.random() * length1);
            const newRandomTop = {
                color: response1.data[randomIndex1].color,
                category: response1.data[randomIndex1].category,
            };

            const response2 = await axios.get(`${import.meta.env.VITE_BASEURL}/closet/bottoms`);
            const length2 = response2.data.length;
            const randomIndex2 = Math.floor(Math.random() * length2);
            const newRandomBottom = {
                color: response2.data[randomIndex2].color,
                category: response2.data[randomIndex2].category,
            };

            const query = `${newRandomTop.color} ${newRandomTop.category} ${newRandomBottom.color} ${newRandomBottom.category}`;

            const response3 = await axios.post(`${import.meta.env.VITE_BASEURL}/inspiration/api/proxy/image`, { prompt: query, aspect_ratio: '1:1' });
            setLink(response3.data.data[0].asset_url)
            setIsLoading(false)
        }

        catch (error) {
            console.error("Error fetching image:", error);
        }
    };


    const handleClick = () => {
        setHasTried(true);
        getImage();
    };

    const handleRetryClick = () => {
        setLink(null);
        setHasTried(false);
    };

    return (
        <>
            <header className="header2">
                <Link to="/">
                    <img className="header2__nav" alt='go_back_arrow' src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1 className='header2__logo'>Inspiration</h1>
            </header>
            <div className='section'>
                {!link && !isLoading && (<button
                    className='section__button1'
                    onClick={handleClick}
                >
                    Magic mirror on the wall...
                </button>)}
                {isLoading && (
                    <p>Generating your outfit inspiration...</p>
                )}
                {!isLoading && link && (
                    <>
                        <img className='section__img' src={link} alt="Outfit_Image" />
                        <button className='section__button2' onClick={handleRetryClick}>
                            Try again!
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default Inspiration;