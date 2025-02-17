import styled from "styled-components";
import {GridItem} from "../components/skill/Skill"

type GridContainerType = {
    rowCount: number,
    colCount: number,
    colSize?: string,
    rowSize?: string
} 

export const GridContainer = styled.div<GridContainerType>`
    display: grid;
    gap: 20px;

    grid-template-columns: repeat(${props => props.colCount}, ${props => props.colSize || '1fr'});
    grid-auto-rows: minmax(200px, auto);

    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
`