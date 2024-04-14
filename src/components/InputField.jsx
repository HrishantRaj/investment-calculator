import { useState } from "react";

export default function InputField({name}) {
    const [val,setVal] = useState('');

    function handleInputChange(e) {
        setVal(e.target.value);
    }

    return (
        <div>
            <h1>{val}</h1>
            <label>{name}</label>
            <input type="text" value={val} onChange={handleInputChange}></input>
        </div>
    )
}