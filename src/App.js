import Container from "./Container";
import Form from "./Form";
import currencies from "./currencies";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { useAPI } from "./useAPI";
import { ratesData } from "./data.js";

function App() {
  // const rates = JSON.parse("data.json");
  // console.log(rates);
  useAPI();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form currencies={currencies} rates={ratesData.rates} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
