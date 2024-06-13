import { Link, useNavigate, useParams } from "react-router-dom";
import "./Edit.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Edit() {
    const navigate = useNavigate();
    const params = useParams();

    const colorRef = useRef();
    const categoryRef = useRef();
    const typeRef = useRef();

    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [dirty, setDirty] = useState("");
    const [cloth, setCloth] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = {
            type: (type ? type : typeRef.current.value),
            category: (category ? category : categoryRef.current.value),
            color: (color ? color : colorRef.current.value),
            dirty: (dirty ? dirty : false),
        };
        try {
            const response = await axios.put(`${import.meta.env.VITE_BASEURL}/closet/${params.cloth_id}`, newItem)
            if (response.status === 200) {
                navigate(`/${typeRef.current.value}s`);
            }
        }
        catch (err) {
            console.log(err);
        };
    };

    const handleDelete = async (e) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BASEURL}/closet/${params.cloth_id}`)
            if (response.status === 204) {
                navigate(`/${typeRef.current.value}s`);
            }
        }
        catch (err) {
            console.log(err);
        };
    };

    useEffect(() => {
        const fetchCloth = async (id) => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASEURL}/closet/${id}`);
                setCloth(response.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchCloth(params.cloth_id);
    }, [params.cloth_id]);

    if (!cloth) {
        return <p>Loading...🫠</p>
    }

    return (
        <>
            <header className="header2">
                <Link to="/closet">
                    <img className="header2__nav" alt='go_back_arrow' src={`${import.meta.env.VITE_BASEURL}/arrow.svg`}></img>
                </Link>
                <h1 className="header2__logo">Edit item</h1>
            </header>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__container1">

                    <div className="form__icon" style={{ backgroundColor: color ? color : cloth.color }}>
                        <img className="form__cloth" alt="cloth_icon" src={`${import.meta.env.VITE_BASEURL}/${cloth.icon}`}></img>
                    </div>
                    <div className="form__details">
                        <label className="form__label">Color</label>
                        <select className="form__select"
                            ref={colorRef}
                            name="color"
                            id="color"
                            value={cloth.color}
                            onChange={(e) => {
                                setColor(e.target.value);
                                if (color) {
                                    colorRef.current.classList.remove("form__select--error");
                                }
                            }}
                        >
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Yellow</option>
                            <option>Grey    </option>
                            <option>White</option>
                        </select>
                        <label className="form__label">Type</label>
                        <select className="form__select"
                            name="type"
                            id="type"
                            ref={typeRef}
                            value={type ? type : cloth.type}
                            onChange={(e) => {
                                setType(e.target.value);
                                if (type) {
                                    typeRef.current.classList.remove("form__select--error");
                                }
                            }} >
                            <option>Top</option>
                            <option>Bottom</option>
                        </select>
                        <label className="form__label">Category</label>
                        <select className="form__select"
                            name="category"
                            id="category"
                            ref={categoryRef}
                            value={category ? category : cloth.category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                if (category) {
                                    categoryRef.current.classList.remove("form__select--error");
                                }
                            }}>
                            <option>Shirt</option>
                            <option>Pants</option>
                            <option>Skirt</option>
                            <option>Shorts</option>
                            <option>T-shirt</option>
                            <option>Longsleeve</option>
                        </select>
                        <label className="form__label">Dirty?</label>
                        <input className="form__select"
                            name="dirty"
                            id="dirty"
                            type="checkbox"
                            checked={dirty ? dirty : cloth.dirty}
                            onChange={(e) => {
                                setDirty(e.target.checked);
                            }}>
                        </input>
                    </div>
                </div>
                <div className="form__container2">
                    <button className="form__delete"
                        type="button"
                        onClick={handleDelete}>Delete</button>
                    <button className="form__save" type="submit">Save</button>
                </div>
            </form>
        </>
    );
};
