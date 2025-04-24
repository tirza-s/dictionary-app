import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data.meanings[5]);
    }

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`)
        let apiKey = "b164e02a4a760t33f3o317f1aa0024b6"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse)
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyWordChange} />
            </form>
        </div>
    )
}