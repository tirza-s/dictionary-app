import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    const [photos, setPhotos] = useState([]);

    function handleDictionaryResponse(response) {
        if (response.data.error) {
            setResults(null);
        } else {
            setResults(response.data)
            setError(null);
        }
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);
        setError(null)
    }

    function search(event) {
        event.preventDefault();

        let apiKey = "b164e02a4a760t33f3o317f1aa0024b6"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios
            .get(apiUrl)
            .then(handleDictionaryResponse)
            .catch(function (error) {
                console.log("Error fetching data:", error);
                setError("Oops! We couldn't find the definition for that word, or there was an issue retrieving it. Please double-check the word or try another one! ");
                setResults(null);
            });

        let pexelsApiKey = "JpjmzAoF0GO83tpI0DW7H0RfwHgFgUooBvdAmyoNj1WP0ArNGIiTxFBv";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`

        axios
            .get(pexelsApiUrl, { headers: { Authorization: pexelsApiKey } })
            .then(handlePexelsResponse)
            .catch(function (error) {
                console.log("Error fetching image: ", error);
            })
    }

    return (
        <div className="Dictionary">
            <section className="Dictionary-section">
                <form onSubmit={search}>
                    <h3 className="dictionary-word">What word do you want to look up?</h3>
                    <input type="search" onChange={handleKeyWordChange} />
                    <p className="word-example">i.e. bali, beach, sunset </p>
                </form>
            </section>
            {error && <div className="error">{error}</div>}
            {results && <Results results={results} />}
            {photos.length > 0 && <Photos photos={photos} />}

        </div>
    )
}