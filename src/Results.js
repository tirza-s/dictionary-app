import React from "react";

export default function Results(props) {
    const results = props.results;

    if (results && Array.isArray(results.meanings)) {

        {/* Only get the first noun and first adjective */ }
        const firstNoun = results.meanings.find(m => m.partOfSpeech === "noun");
        const firstAdjective = results.meanings.find(m => m.partOfSpeech === "adjective");

        {/* remove any undifined */ }
        const filterdMeanings = [firstNoun, firstAdjective].filter(Boolean);

        return (
            <div className="Results">
                <h3>{results.word}</h3>
                <p className="phonetic">/{results.phonetic}/</p>

                {filterdMeanings.map((meaning, index) => (
                    <div key={index}>
                        <h4>{meaning.partOfSpeech}</h4>
                        <p><strong>Definition:</strong> {meaning.definition}</p>
                        {meaning.example && (
                            <p><em>Example:</em> {meaning.example}</p>
                        )}
                        {Array.isArray(meaning.synonyms) && meaning.synonyms.length > 0 && (
                            <p><strong>Synonyms:</strong> {meaning.synonyms.join(", ")}</p>
                        )}
                    </div>
                ))}
            </div>
        );
    } else {
        return null;
    }
}

