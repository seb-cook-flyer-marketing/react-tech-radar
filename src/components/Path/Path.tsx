import React, {useContext} from 'react';
import {rgb as d3rgb } from 'd3-color';
import {  arc as d3arc } from 'd3-shape';
import {ThemeContext} from "../theme-context";

function Path(props: PathProps) {

    //context variables
    const {fontSize, fontFamily, colorScale} = useContext(ThemeContext);

    const rgb = d3rgb(colorScale(props.quadIndex));
    const fill = rgb.brighter(props.ringIndex / props.ringsLength * 0.9).toString();
    const uniquePathId = props.quadIndex + "-" + props.ringIndex;
/*
    const archFunction = () => {
        return d3arc()
            .outerRadius(() => {
                return props.outerRadius * props.ringWidth;
            })
            .innerRadius(() => {
                return props.innerRadius * props.ringWidth;
            })
            .startAngle(() => {
                return Math.PI / 2;
            })
            .endAngle(() => {
                return props.quad_angle + Math.PI / 2;
            });
    };*/

    const arc = d3arc()

    const arcOutPut = arc({
        outerRadius: props.outerRadius * props.ringWidth,
        innerRadius: props.innerRadius * props.ringWidth,
        startAngle: Math.PI / 2,
        endAngle: props.quad_angle + Math.PI / 2
    }) as string | undefined;



    return (
        <g>
            <path id={uniquePathId} className={"quadrant"}
                  d={arcOutPut}
                  fill={fill}
            >
            </path>

            {props.title &&
            <text
                dx={props.ringWidth / 2}
                fontSize={fontSize}
                fontFamily={fontFamily}
            >
                <textPath href={'#' + uniquePathId}>
                    {props.title}
                </textPath>
            </text>
            }
        </g>
    )
}

interface PathProps {
    quadIndex: number;
    ringIndex: number;
    ringWidth: number;
    ringsLength: number;
    quad_angle: number;
    outerRadius: number;
    innerRadius: number;
    title: string;
}

 

export default Path;
