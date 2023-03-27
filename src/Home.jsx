import React, {isValidElement} from "react";
import {useState, useEffect} from "react";
import "./Home.css";
import {
    FaEnvelopeSquare,
    FaGithub,
    FaLinkedin,
    FaMoon,
    FaPhone,
    FaPhoneAlt,
    FaSearch,
    FaSpaceShuttle,
    FaStar,
    FaVoicemail,
    IconName
} from "react-icons/fa";
import "./ListPlanet.jsx";
import ListPlanet from "./ListPlanet.jsx";
// import ListPlanets from "./ListPlanets.jsx";

export default function Home() {

    const [ActivePlanet, setActivePlanet] = useState("");
    const [PlanetFacts, setPlanetFacts] = useState("");
    const [ShowImg, setShowImg] = useState(true);
    const [fact, setFact] = useState('The Earth is the only planet in our solar system not named after a god.');
    const [MarsFact, setMarsFact] = useState('Mars is the fourth planet from the sun and the second smallest planet in the solar system.');
    const [JupFact, setJupFact] = useState('Jupiter is the largest planet in our solar system, more than twice the size of all the other planets combined.');

    const earthFacts = [
        'About 70% of the Earth’s surface is covered in water.',
        'The Earth’s atmosphere is composed of roughly 78% nitrogen, 21% oxygen, and 1% other gases.',
        'The Earth is approximately 4.54 billion years old.',
        'The Earth has a magnetic field that protects us from harmful solar winds and cosmic radiation.',
        'The Earth’s rotation is gradually slowing down.',
        'The highest point on Earth is Mount Everest, which stands at 29,029 feet (8,848 meters).',
        'The Earth’s deepest point is the Challenger Deep in the Mariana Trench, which is approximately 36,070 feet (10,994 meters) deep.',
        'The Earth orbits the sun at an average distance of 93 million miles (149.6 million kilometers).',
        'The Earth’s orbit is not a perfect circle, but is instead an elliptical shape.',
    ]

    const marsFacts = [
        'Mars is the fourth planet from the sun and the second smallest planet in the solar system.',
        'Mars is often referred to as the "Red Planet" due to its reddish appearance caused by iron oxide (rust) on its surface.',
        'Mars has the largest volcano in the solar system, Olympus Mons, which is three times taller than Mount Everest.',
        'Mars has a very thin atmosphere, composed mainly of carbon dioxide.',
        'Mars has two small moons, Phobos and Deimos.',
        'Mars experiences massive dust storms that can cover the entire planet for months at a time.',
        'Mars has the largest canyon in the solar system, Valles Marineris, which is about 4,000 km long.',
        'Mars has the potential to support life as evidence of water has been found on its surface.',
        'Mars has a day that is almost the same length as Earth’s, at 24 hours and 39 minutes.',
        'Mars has polar ice caps that are made of frozen carbon dioxide and water.',
    ];

    const jupiterFacts = [
        'Jupiter has the shortest day of any planet in our solar system, with one day on Jupiter lasting only about 10 hours.',
        'Jupiter has at least 79 moons, with the four largest known as Io, Europa, Ganymede, and Callisto.',
        'Jupiter has a very strong magnetic field that is 14 times stronger than Earth’s.',
        'Jupiter has a giant red spot on its surface, which is a massive storm that has been raging for more than 350 years.',
        'Jupiter’s atmosphere is mostly made up of hydrogen and helium gas.',
        'Jupiter emits more heat than it receives from the sun, which suggests it has an internal heat source.',
        'Jupiter’s rings are made up of dust particles and small rocks.',
        'Jupiter has the strongest gravitational pull of any planet in our solar system.',
        'Jupiter is visible to the naked eye and can often be seen in the night sky.',
    ];

    function handleClickMars() {
        const randomMarsFact = marsFacts[Math.floor(Math.random() * marsFacts.length)];
        setMarsFact(randomMarsFact);
    }

    function handleClick() {
        const randomFact = earthFacts[Math.floor(Math.random() * earthFacts.length)];
        setFact(randomFact)

    }

    function handleClickJup() {
        const randomJupFact = jupiterFacts[Math.floor(Math.random() * jupiterFacts.length)];
        setJupFact(randomJupFact);
    }

    function lightSwitch() {
        if (ShowImg === false) {
            setShowImg(true)

        }
    }

    function displayMarsImg() {
        if (ShowImg === true && ActivePlanet === 'Mars') {
            return (
                <div>
                    <img
                        src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL21hcnMtYTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTB9fX0="
                        alt="space"/>
                    <p></p>
                </div>
            )
        }
    }

    function displayEarthImg() {
        if (ShowImg === true && ActivePlanet === 'Earth') {
            return (
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                        alt="space"/>
                </div>
            )
        }
    }

    function displayJupiterImg() {
        if (ShowImg === true && ActivePlanet === 'Jupiter') {
            return (
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Jupiter%27s_swirling_colourful_clouds.jpg"
                        alt="space"/>
                </div>
            )
        }
    }

    function earthFunFact() {
        if (ActivePlanet === "Earth") {

            return (
                <div>
                    <p>
                        {fact}
                    </p>
                    <button onClick={handleClick}>Fun Fact About Earth</button>
                </div>
            )
        }
    }

    function marsFunFact() {
        if (ActivePlanet === "Mars") {

            return (

                <div>
                    <p>
                        {MarsFact}
                    </p>
                    <button onClick={handleClickMars}>Fun Fact About Mars</button>
                </div>
            )
        }
    }

    function jupiterFunFact() {
        if (ActivePlanet === "Jupiter") {

            return (

                <div>
                    <p>
                        {JupFact}
                    </p>
                    <button onClick={handleClickJup}>Fun Fact About Jupiter</button>
                </div>

            )
        }
    }

    if (ActivePlanet === "")
        return (

            <div className="Home">
                <h1><FaStar/> ADVENTURES WITH SPACE INVADERS <FaStar/></h1>
                <h2>Which planet do you want to explore?</h2>

                <button onClick={() => setActivePlanet("Earth")}>Earth <FaSpaceShuttle/></button>
                <button onClick={() => setActivePlanet("Mars")}>Mars <FaSpaceShuttle/></button>
                <button onClick={() => setActivePlanet("Jupiter")}>Jupiter <FaSpaceShuttle/></button>


                <img src="https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.jpg" alt="space"/>
                {/* <img src="https://img.freepik.com/free-vector/paper-style-galaxy-background_23-2148985024.jpg" alt="" id="space" /> */}

                <div className="Contact">


                    <h1>
                        CONTACT
                    </h1>
                    <p>
                        <a href="https://www.linkedin.com/in/justin-cambria/">LINKEDIN <FaLinkedin/> </a>
                    </p>
                    <p>
                        <a href="mailto: jrcambria92@gmail.com">EMAIL<FaEnvelopeSquare/> </a>
                    </p>
                    <a href="">CALL<FaPhoneAlt/> </a>

                </div>

            </div>


        );

    else
        return (


            <div>
                <h1>{ActivePlanet}</h1>
                <p>{displayEarthImg()}
                    {displayMarsImg()}
                    {displayJupiterImg()}</p>

                {marsFunFact()} {earthFunFact()} {jupiterFunFact()}

                <button onClick={() => {
                    lightSwitch()
                }}>View Photo
                </button>

                <button onClick={() => setShowImg(false)}>Hide Photo</button>


                <button onClick={() => setActivePlanet("")}>Go back</button>
            </div>


        );
}
