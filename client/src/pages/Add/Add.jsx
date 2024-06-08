import { Link } from "react-router-dom";
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

    const handleSubmit = async (e) => {
        //validate first if all fields are filled out, if not add the class name to the empty filed and prevent from submission
        e.preventDefault();
        if (!type || !category || !color) {
            if (!type) {
                typeRef.current.classList.add("form_select--error");
            }
            if (!category) {
                categoryRef.current.classList.add("form_select--error");
            }
            if (!color) {
                colorRef.current.classList.add("form_select--error");
            }
        } else {
            //if all fields are filled out, submit the form
            const newItem = {
                type: type,
                category: category,
                color: color,
                dirty: false
            };
            //make axios call to post new item to database, using async function and await
            try {
                const response = await axios.post(`${import.meta.env.VITE_BASEURL}`, newItem)
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
            <header className="header">
                <Link to="/closet">
                    <img className="header_nav" src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1>Add new item</h1>
            </header>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form_container1">
                    <div className="form_container2">
                        <div className="form_icon">
                            <img alt="icon"></img>
                        </div>
                        <div className="form_details">
                            <label className="form_label">Color</label>
                            <select className="form_select"
                                ref={colorRef}
                                name="color"
                                id="color"
                                value={color}
                                onChange={(e) => {
                                    setColor(e.target.value);
                                    if (color) {
                                        colorRef.current.classList.remove("form_select--error");
                                    }
                                }}
                            >
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Yellow</option>
                                <option>Black</option>
                                <option>White</option>
                            </select>
                            <label className="form_label">Type</label>
                            <select className="form_select"
                                name="type"
                                id="type"
                                value={type}
                                onChange={(e) => {
                                    setType(e.target.value);
                                    if (type) {
                                        typeRef.current.classList.remove("form_select--error");
                                    }
                                }} >
                                <option>Top</option>
                                <option>Tottom</option>
                            </select>
                            <label className="form_label">Category</label>
                            <select className="form_select"
                                name="category"
                                id="category"
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                    if (category) {
                                        categoryRef.current.classList.remove("form_select--error");
                                    }
                                }}>
                                <option>Shirt</option>
                                <option>Pants</option>
                                <option>Skirt</option>
                                <option>Shorts</option>
                                <option>T-shirt</option>
                                <option>Longsleeve</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form_container3">
                    <button className="form_save">Save</button>
                </div>
            </form>
        </>
    );
};
