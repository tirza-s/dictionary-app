import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    function handleResponse(response) {
        if (response.data.error) {
            setResults(null);
        } else {
            setResults(response.data)
            setError(null);
        }
    }

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);
        setError(null)
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`)

        let apiKey = "b164e02a4a760t33f3o317f1aa0024b6"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios
            .get(apiUrl)
            .then(handleResponse)
            .catch(function (error) {
                console.log("Error fetching data:", error);
                setError("Opps, We couldn't find that word or there was a problem. Kindly try another word. ");
                setResults(null);
            });
    }

    return (
        <div className="Dictionary">

            <form onSubmit={search}>
                <input type="search" onChange={handleKeyWordChange} />
            </form>

            {error && <div className="error">{error}</div>}
            {results && <Results results={results} />}
        </div>
    )
}