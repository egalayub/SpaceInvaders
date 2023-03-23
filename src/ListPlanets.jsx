import React from "react";


export default function ListPlanets({singlePlanet}){
    return (
        <li key={singlePlanet.id}>
            {singlePlanet.name}, {singlePlanet.funfact}
        </li>
    )
}




