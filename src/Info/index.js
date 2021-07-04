import styled from "styled-components";

const Info = styled.p`
    margin: 10px auto;
    padding: 10px 5px;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    width: 100%;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.accentColor};
`;

export default Info;