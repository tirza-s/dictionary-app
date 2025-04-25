import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
    return (
        <div className="Meaning">

            <h4>{meaning.partOfSpeech}</h4>
            <p><strong>Definition:</strong> {meaning.definition}</p>

            {meaning.example && (
                <p><em>Example:</em> {meaning.example}</p>
            )}

            <Synonyms synonyms={meaning.synonyms} />

        </div>
    );
}