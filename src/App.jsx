import React, { useEffect, useState } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = useState({})



    //Side Effects
    useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [])

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
