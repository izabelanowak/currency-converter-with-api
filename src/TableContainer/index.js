import { Container, Paragraph } from "./styled";
import { Button } from "../styledButton";
import Table from "./Table";
import { useState } from "react";

const TableContainer = ({ currencies }) => {
    const [hideTable, setHideTable] = useState(true);

    const toggleHideTable = () => {
        setHideTable(hideTable => !hideTable);
    };

    return (
        <Container>
            <Button onClick={toggleHideTable}>
                {hideTable ? "Wyświetl" : "Ukryj"} aktualne kursy walut
            </Button>
            <Table currencies={currencies} hideTable={hideTable} />
            <Paragraph hidden={hideTable}>
                Srednie kursy walut aktualne na dzień 01.05.2021r.
            </Paragraph>
        </Container>
    )
};

export default TableContainer;