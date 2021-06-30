import styled from "styled-components";
import { Cell } from "../TableData/styled";


export const HeaderCell = styled(Cell)`
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    font-style: normal;
    font-weight: normal;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hoverColor};
    }
`;