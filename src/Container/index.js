import styled from "styled-components";
import background from "./background.jpg";

const Container = styled.main`
    margin: 0 auto;
    padding: 30px;
    background-image: url("${background}");
    background-size: cover;
    background-position: bottom;
    min-height: 100vh;
    max-width: 100%;
`;

export default Container;