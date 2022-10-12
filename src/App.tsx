import React from 'react';
import Radar from "./components/Radar/Radar";

function App() {

    const setup = {
        rings: ['adopt', 'trial', 'assess', 'hold'],
        quadrants: ['tools', 'techniques', 'platforms', 'languages'],
        data: [
            {
                name: 'D3',
                quadrant: 'tools',
                ring: "assess",
                link: "https://d3js.org/"
            },
            {
                name: 'TypeScript',
                quadrant: 'languages',
                ring: "trial",
                link: "https://www.typescriptlang.org/"
            },
            {
                name: 'Storybook',
                quadrant: 'tools',
                ring: "adopt",
                link: "https://storybook.js.org/"
            }
        ]
    };

    return (
        <div className="App">
            <Radar {...setup} />
        </div>
    );
}

export default App;
