import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
    return (
        <div className="Meaning">

            <section className="Meaning-section">
                <h4>{meaning.partOfSpeech}</h4>

                <span className="definition">definition : </span>

                <span>{meaning.definition}</span>

                <Synonyms synonyms={meaning.synonyms} />

                {meaning.example && (
                    <p className="example">Example : <em>{meaning.example}</em></p>
                )}

            </section>



        </div>
    );
}