import React from "react";

//Population
const data = [
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2016,
        "Year": "2016",
        "Population": 323127515,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2015,
        "Year": "2015",
        "Population": 321418821,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2014,
        "Year": "2014",
        "Population": 318857056,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2013,
        "Year": "2013",
        "Population": 316128839,
        "Slug Nation": "united-states"
    }
];

const Population = () => {
    return (
        <div>
            <br />
            {data.map((elem, index, array) => (
                <div key={index}>
                    {Object.entries(elem).map(([key, value], innerIndex) => (
                        <div key={innerIndex}>
                            <span>{key}: {value}</span>
                        </div>
                    ))}
                    {index === array.length - 1 ? <hr style={{borderColor: 'red'}}/> : <hr />}
                </div>
            ))}
        </div>
    );
};

export default Population;