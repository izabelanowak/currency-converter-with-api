import styled, { css } from "styled-components";

export const Wrapper = styled.table`
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    font-size: 18px;
    border-collapse: collapse;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.accentColor};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Caption = styled.caption`
    font-size: 22px;
    margin-top: 20px;
    padding: 10px 5px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const TableRow = styled.tr`
    &:hover {
        background-color: ${({ theme }) => theme.colors.accentColor};
    }
`;