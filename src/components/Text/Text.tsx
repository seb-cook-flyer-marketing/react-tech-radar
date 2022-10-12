import React, {useContext} from 'react';
import TextWrapper from "./Text.style";
import {ThemeContext} from "../theme-context";

interface TextProps {
    name: string;
    dx: number;
    dy: number;
    fontSize: number;
    fontFamily: string;
}
function Text(props: TextProps) {

    //context variables
    const {fontSize, fontFamily} = useContext(ThemeContext);

    return (
        <TextWrapper className={"quadrant"}
                     fontSize={fontSize}
                     fontFamily={fontFamily}
                     dx={props.dx}
                     dy={props.dy}
        >
            {props.name}
        </TextWrapper>
    )
}

export default Text;
