import React from "react";

export default function Synonyms({ synonyms }) {

    if (!Array.isArray(synonyms) || synonyms.length === 0) return null;

    return (
        <div className="Synonyms">
            <span className="synonyms">synonyms : </span>{synonyms.join(", ")}
        </div>
    )
}