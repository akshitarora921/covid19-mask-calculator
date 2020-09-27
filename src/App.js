import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./Components/Table";
import InfoBox from "./Components/InfoBox";

function App() {
    const [data, setData] = useState(null);
    const [maskNumber, setMaskNumber] = useState();
    const [stateWithMask, setStateWithMask] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    useEffect(() => {
        fetch(
            "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
            });
    }, []);
    useEffect(() => {
        const total = data?.total.active;
        const yo = data?.statewise.map((state) => ({
            state: state.state,
            active: parseInt((maskNumber * state.active) / total),
        }));
        setStateWithMask(yo);
    }, [maskNumber, data]);
    return (
        <div className='app'>
            {/* <div className='app__left'> */}
            <div className='app__header'>
                <h1>COVID-19 India</h1>
            </div>
            <div className='app__stats'>
                <InfoBox
                    onClick={(e) => setCasesType("cases")}
                    title='Active Cases'
                    isRed
                    active={casesType === "cases"}
                    cases={data?.total.active}
                />
                <InfoBox
                    onClick={(e) => setCasesType("recovered")}
                    title='Recovered'
                    active={casesType === "recovered"}
                    cases={data?.total.recovered}
                />
                <InfoBox
                    onClick={(e) => setCasesType("deaths")}
                    title='Deaths'
                    isRed
                    active={casesType === "deaths"}
                    cases={data?.total.deaths}
                />
            </div>
            <div className='app__body'>
                <div className='searchContainer'>
                    <div className='inputContainer'>
                        <img
                            className='maskIcon'
                            src='https://static.thenounproject.com/png/577778-200.png'
                            alt=''
                        />
                        <input
                            type='text'
                            pattern='[A-Za-z]{3}'
                            placeholder='Number of Mask Available'
                            value={maskNumber}
                            onChange={(e) => setMaskNumber(e.target.value)}
                        />
                    </div>
                    {maskNumber && (
                        <Table
                            title='Masks per states'
                            states={stateWithMask}
                            mask
                        />
                    )}
                </div>
                <Table title='Cases per states' states={data?.statewise} />
            </div>
        </div>
        // </div>
    );
}

export default App;
