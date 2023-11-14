import React, { useEffect, useState } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = React.useState(1)



    //Side Effects
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count])

    

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>

        </div>
    )
}
