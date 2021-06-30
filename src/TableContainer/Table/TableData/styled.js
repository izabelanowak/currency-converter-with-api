import styled from "styled-components";

export const Cell = styled.td`
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    padding: 10px;
    text-align: center;
    vertical-align: middle;
`;