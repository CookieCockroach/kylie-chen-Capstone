import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import { Link } from 'react-router-dom';

const Inspiration = () => {
    const [photos, setPhotos] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const client = createClient('XuFFBFXtZbsCh6tRm8WHH04vCbFYD9PwRscYLvUNMOAVcRKkA0kDh6gv');

    // useEffect(() => {
    //     if (isButtonClicked) {
    //         document.getElementById('fetchButton').classList.add('moved');
    //     }
    // }, [isButtonClicked]);

    const fetchImage = async () => {
        try {
            const query = 'OOTD';
            const response = await client.photos.curated({ query, per_page: 1 });
            setPhotos(response.photos);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    return (
        <div>
            <header className="header">
                <Link to="/">
                    <img className="header_nav" alt='go_back_arrow' src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1>Inspiration</h1>
            </header>
            <button
                className={isButtonClicked ? 'moved' : 'initial'}
                onClick={fetchImage}
            >
                Magic mirror on the wall...
            </button>
            <div>
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo.src.large} // Using 'large' size for better view, adjust as needed
                        alt={`${photo.alt}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Inspiration;