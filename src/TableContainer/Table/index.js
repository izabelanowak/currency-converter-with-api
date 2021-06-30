import { Wrapper, Caption, TableRow } from "./styled";
import TableData from "./TableData";
import TableHeader from "./TableHeader";

const Table = ({ currencies, hideTable }) => (
    <Wrapper hidden={hideTable}>
        <Caption>Aktualne kursy walut</Caption>
        <thead>
            <TableRow>
                <TableHeader scope="col" title="Nazwa" />
                <TableHeader scope="col" title="Waluta" />
                <TableHeader scope="col" title="Kurs" />
            </TableRow>
        </thead>
        <tbody>
            {currencies.map(currency => (
                <TableRow key={currency.id}>
                    <TableHeader scope="row" title={currency.name} />
                    <TableData>
                        {currency.id}
                    </TableData>
                    <TableData>
                        {currency.exchangeRate}
                    </TableData>
                </TableRow>
            ))}
        </tbody>
    </Wrapper>
);

export default Table;


