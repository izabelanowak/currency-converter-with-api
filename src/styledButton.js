import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;
    border: none;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.accentColor};

    &:hover {
        background-color: ${({ theme }) => theme.colors.hoverColor};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.activeColor};
    }
`;