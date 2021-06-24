import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

const App = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get('/recipes')
            .then((res) => setData(res.data.message))
            .catch((error) => console.log('Error occurred', error))
    })

    return (
        <div>
            <h1>Delightful recipes</h1>
            <p>{data}</p>
        </div>
    )
}

export default App
