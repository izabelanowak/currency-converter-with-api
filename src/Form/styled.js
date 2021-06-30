import styled from "styled-components";

export const Wrapper = styled.form`
    margin: 20px auto;
    width: 100%;
    max-width: 600px;
    font-size: 20px;
`;

export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.accentColor};
`;

export const Legend = styled.legend`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 15px;
    border-radius: 10px;
`;

export const Input = styled.input`
    background-color: ${({ theme }) => theme.colors.accentColor};
    padding: 10px;
    width: 100%;
    max-width: 300px;
`;