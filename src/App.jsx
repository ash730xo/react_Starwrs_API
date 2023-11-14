import React, { useEffect, useState } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = React.useState(0)



    //Side Effects
    useEffect(() => {
        console.log("effect function ran")
    }, [count])

    }

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}
