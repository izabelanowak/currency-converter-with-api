import Container from "./Container";
import Form from "./Form";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { useAPI } from "./useAPI";
import { ratesData } from "./data.js";

function App() {
  useAPI();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form rates={ratesData.rates} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
