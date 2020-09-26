import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get(
                "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
            )
            .then((res) => setData(res.data));
    }, []);
    return (
        <div className='app'>
            <h1>Covid 19 Mask distributer</h1>
        </div>
    );
}

export default App;
