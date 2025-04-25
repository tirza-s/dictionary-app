import React from "react";

export default function Meaning({ meaning }) {
    return (
        <div className="Meaning">

            <h4>{meaning.partOfSpeech}</h4>
            <p><strong>Definition:</strong> {meaning.definition}</p>

            {meaning.example && (
                <p><em>Example:</em> {meaning.example}</p>
            )}

            {Array.isArray(meaning.synonyms) && meaning.synonyms.length > 0 && (
                <p><strong>Synonyms:</strong> {meaning.synonyms.join(", ")}</p>
            )}
        </div>
    );
}