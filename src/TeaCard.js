import React from "react"
function TeaCard ({id,src,name,taste,benefits,tea}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img
                src={src}
                alt={name}
                className="tea-image"
                />
            <p>Taste:{taste}</p>
            <p>Benefits:{benefits}</p>
        </div>
    )
}

export default TeaCard