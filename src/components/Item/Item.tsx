import React, {useState, useContext, useRef} from 'react';
import {ItemWrapper} from "./Item.style";
import {ThemeContext} from "../theme-context";

const MAX_LENGTH = 15;

function Item(props: ItemProps) {

    //create ref
    let ref = useRef(null);

    //context variables
    const {itemFontSize, fontFamily} = useContext(ThemeContext);

    //state variables
    const [isHovered, setIsHovered] = useState(false);

    const shortName = props.data.name.length > MAX_LENGTH ?
        props.data.name.substr(0, MAX_LENGTH) + "..." :
        props.data.name;

    const onMouseToggle = () => {
        setIsHovered(!isHovered);
    };

    return (
        <ItemWrapper
            className="blip"
            id={'blip-' + props.data.id}
            transform={" rotate(" + props.rotateDegrees + ") translate(" + (props.data.x) + "," + (props.data.y) + ")"}
            onMouseEnter={onMouseToggle}
            onMouseLeave={onMouseToggle}
            ref={ref}
            style={{
                opacity: isHovered ? '1.0' : '0.7',
                fontWeight: isHovered ? "Bold" : "Normal"
            }}
        >
            <circle r={"4px"}/>
            <a href={props.data.link} target="_blank" rel="noopener noreferrer">
            <text
                className={"name"}
                dx={"7px"}
                dy={"7px"}
                fontSize={itemFontSize}
                fontFamily={fontFamily}
            >
                {isHovered ? props.data.name : shortName}
            </text>
            </a>
        </ItemWrapper>
    )
}

interface ItemProps {
    rotateDegrees: number;
    data: {
        name: string;
        link: string;
        id: string;
        x: number;
        y: number;
    }
}

export default Item;
