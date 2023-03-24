import React from "react";


export default function ListPlanet({singlePlanet}){
    return (
        <li key={singlePlanet.id}>
            {singlePlanet.name}, {singlePlanet.funfact} {singlePlanet.img}
        </li>
    )
}




