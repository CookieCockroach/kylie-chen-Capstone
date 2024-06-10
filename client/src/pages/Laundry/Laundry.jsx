import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'; 
import Cloth from "../../components/Cloth/Cloth";
import "./Laundry.scss";

const Laundry = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchLaundry() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASEURL}/closet/laundry`);
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching tops:', error);
            }
        }
        fetchLaundry();    
    }, []);

    async function handleClick(){
        try{
        const updatedItems = await axios.put(`${import.meta.env.VITE_BASEURL}/closet/laundry`)
        setItems(updatedItems);
        navigate("/closet")
        }
        catch(error){
            console.error('Error updating items:', error);
        }
    }

    return (
        <>
            <header className="header2">
                <Link to="/closet">
                    <img className="header2__nav" src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1 className="header2__logo">Luandry Basket</h1>
            </header>
            <main className="body">
                {items.map((item) => (
                    <Cloth key={item.cloth_id} item={item}/>
                ))}
            </main>
            <button className="clean" onClick={handleClick}>Laundry Day!</button>
        </>
    );
};

export default Laundry;