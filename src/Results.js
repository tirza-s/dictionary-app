import React from "react";
import Meaning from "./Meaning"

export default function Results(props) {
    const results = props.results;

    if (results && Array.isArray(results.meanings)) {

        const firstNoun = results.meanings.find(m => m.partOfSpeech === "noun");
        const firstAdjective = results.meanings.find(m => m.partOfSpeech === "adjective");

        const filterdMeanings = [firstNoun, firstAdjective].filter(Boolean);

        return (
            <div className="Results">
                <h3>{results.word}</h3>
                <p className="phonetic">/{results.phonetic}/</p>

                {filterdMeanings.map((meaning, index) => (
                    <Meaning key={index} meaning={meaning} />
                ))}
            </div>
        );
    } else {
        return <p>We couldn't find that word or there was a problem. Please try another word. </p>;
    }
}

