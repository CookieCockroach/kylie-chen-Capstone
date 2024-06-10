import { Link, useNavigate } from "react-router-dom";
import "./Add.scss";
import { useRef, useState } from "react";
import axios from "axios";
export default function Add() {

    const colorRef = useRef();
    const categoryRef = useRef();
    const typeRef = useRef();
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!type || !category || !color) {
            if (!type) {
                typeRef.current.classList.add("form__select--error");
            }
            if (!category) {
                categoryRef.current.classList.add("form__select--error");
            }
            if (!color) {
                colorRef.current.classList.add("form__select--error");
            }
        } else {
            const newItem = {
                icon: `${category}.png`,
                type: type,
                category: category,
                color: color,
                dirty: false
            };
            try {
                const response = await axios.post(`${import.meta.env.VITE_BASEURL}/closet`, newItem)
                if (response.status === 200) {
                    navigate("/closet");
                }
            }
            catch (err) {
                console.log(err);
            };
        }
    };

    return (
        <>
            <header className="header2">
                <Link to="/closet">
                    <img className="header2__nav" alt='go_back_arrow' src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1 className="header2__logo">Add new item</h1>
            </header>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__container1">
                    <div className="form__icon" style={{ backgroundColor: color }}>
                        <img className="form__cloth" alt="cloth_icon"
                            src={category ?
                                `${import.meta.env.VITE_BASEURL}/${category}.png`
                                : `${import.meta.env.VITE_BASEURL}/question.svg`}></img>
                    </div>
                    <div className="form__details">
                        <label className="form___label">Color</label>
                        <select className="form___select"
                            ref={colorRef}
                            name="color"
                            id="color"
                            value={color}
                            onChange={(e) => {
                                setColor(e.target.value);
                                if (color) {
                                    colorRef.current.classList.remove("form__select--error");
                                }
                            }}
                        >
                            <option value=""></option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Yellow</option>
                            <option>Grey</option>
                            <option>White</option>
                        </select>
                        <label className="form__label">Type</label>
                        <select className="form__select"
                            ref={typeRef}
                            name="type"
                            id="type"
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value);
                                if (type) {
                                    typeRef.current.classList.remove("form__select--error");
                                }
                            }} >
                            <option value=""></option>
                            <option>Top</option>
                            <option>Bottom</option>
                        </select>
                        <label className="form__label">Category</label>
                        <select className="form__select"
                            ref={categoryRef}
                            name="category"
                            id="category"
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                if (category) {
                                    categoryRef.current.classList.remove("form__select--error");
                                }
                            }}>
                            <option value=""></option>
                            {type === 'Top' && (
                                <>
                                    <option>T-shirt</option>
                                    <option>Longsleeve</option>
                                    <option>Shirt</option>
                                </>
                            )}
                            {type === 'Bottom' && (
                                <>
                                    <option>Shorts</option>
                                    <option>Pants</option>
                                    <option>Skirt</option>
                                </>
                            )}
                        </select>
                    </div>
                </div>
                <div className="form__container2">
                    <button className="form__save">Save</button>
                </div>
            </form >
        </>
    );
};
