import Container from "./Container";
import Form from "./Form";
import TableContainer from "./TableContainer";
import currencies from "./currencies";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form currencies={currencies} />
        <TableContainer currencies={currencies} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
