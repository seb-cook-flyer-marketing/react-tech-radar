import React from 'react';
function Line(props: LineProps) {

    return (
        <line
            x1="0" y1="0"
            x2={props.x2}
            y2={props.y2}
            stroke={props.stroke}
        >
        </line>
    )
}

interface LineProps {
    x2: number;
    y2: number;
    stroke: string;
}

export default Line;
