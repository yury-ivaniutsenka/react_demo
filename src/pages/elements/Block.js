// @flow
import styled from "styled-components";
import type {ComponentType} from 'react';


type Align = "flex-start" | "center" | "flex-end" | "space-around" | "space-between";
type Justify = "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
type Direction = "row" | "column";

const Block: ComponentType<{
	width?: string,
	height?: string,
	minWidth?: string,
	minHeight?: string,
	align: Align,
	justify: Justify,
	direction: Direction,
	flex: number,
	color: string,
	overflow: string,
}> = styled.div`
    display: flex;
    ${({width}) => width && `width: ${width}`};
	${({height}) => height && `height: ${height}`};
	${({overflow}) => overflow && `height: ${overflow}`};
	${({minHeight}) => minHeight && `min-height: ${minHeight}`};
	${({minWidth}) => minWidth && `min-width: ${minWidth}`};
	${({direction}) => direction && `flex-direction: ${direction}`};
	${({flex}) => flex && `flex: ${flex}`};
	${({justify}) => justify && `justify-content: ${justify}`};
	${({align}) => align && `align-items: ${align}`};
	${({color}) => color && `background-color: ${color}`};
`;

export default Block;

