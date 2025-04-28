import React from "react";
import "./Photos.css"

export default function Photos({ photos }) {
    return (
        <section className="Photos">
            <div className="row">
                {photos.map((photo, index) => (
                    <div className="col-4" key={index}>
                        <a href={photo.src.original} target="_blank" rel="noreferrer" >
                            <img
                                src={photo.src.landscape}
                                alt={photo.alt}
                                className="img-fluid rounded shadow-sm"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}