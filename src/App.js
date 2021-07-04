import Container from "./Container";
import Form from "./Form";
import Info from "./Info";
import { useAPI } from "./useAPI";

function App() {
  const { status, date, rates } = useAPI();

  switch (status) {
    case "success":
      return (
        <Container>
          <Form rates={rates} />
          <Info>
            Kursy walut z Europejskiego Banku Centralnego aktualne na dzień {date}
          </Info>
        </Container>
      );
    case "error":
      return (
        <Container>
          <Info>
            Wygląda na to, że wystąpił błąd 😞. Sprawdź swoje połączenie internetowe lub spróbuj ponownie później 😊.
          </Info>
        </Container>
      );
    default:
      return (
        <Container>
          <Info>
            Prosimy o chwilę cierpliwości. Trwa pobieranie danych z Europejskiego Banku Centralnego 😊.
          </Info>
        </Container>
      );
  };
}

export default App;
