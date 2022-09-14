import React, { useEffect, useState } from "react";

const StateWise = () => {
    const [covidData, setCovidData]= useState([]);
    const getCovidData = async ()=>{
        const res = await fetch('https://api.apify.com/v2/datasets/9eUGCilmJ8HDf60mL/items?format=json&clean=1');
        const data = await res.json();
        setCovidData(data);
    }

    useEffect ( ()=>{
        getCovidData();
    },[]);

    return(
        <div className="main_div">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="headingClass">
                            👽 Covid -19 Trackor Pakistan
                        </h1>
                    </div>
                    <div className="col-12">
                    <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Infected</th>
                                <th scope="col">Critical</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">deceased</th>
                                <th scope="col">lastUpdatedAt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {covidData.map((value, index)=>{
                                    return (<>
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.infected}</td>
                                            <td>{value.critical}</td>
                                            <td>{value.recovered}</td>
                                            <td>{value.deceased}</td>
                                            <td>{value.lastUpdatedAtSource}</td>
                                        </tr>

                                    </>);
                                })}
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default StateWise;