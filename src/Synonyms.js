import React from "react";

export default function Synonyms({ synonyms }) {

    if (!Array.isArray(synonyms) || synonyms.length === 0) return null;

    return (
        <div className="Synonyms">

            <p><strong>Synonyms:</strong> {synonyms.join(", ")}</p>

        </div>
    )
}