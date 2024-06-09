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
            const newItem = {
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
            <header className="header">
                <Link to="/closet">
                    <img className="header_nav" alt='go_back_arrow' src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1>Add new item</h1>
            </header>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form_container1">
                    <div className="form_container2">
                        <div className="form_icon">
                            <img className="form_cloth" alt="cloth_icon"
                                src={category?
                                    `${import.meta.env.VITE_BASEURL}/${category}.png`
                                    : `${import.meta.env.VITE_BASEURL}/question.svg`}></img>
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
                                <option value=""></option>
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
                                <option value=""></option>
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
                                <option value=""></option>
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
