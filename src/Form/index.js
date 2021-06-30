import { Wrapper, Fieldset, Legend, Input } from "./styled";
import { Button } from "../styledButton";
import { useState } from "react";
import Clock from "./Clock";
import FormField from "./FormField";
import Result from "./Result";

const Form = ({ currencies }) => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].id);
    const [result, setResult] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currency = currencies.find(({ id }) => id === selectedCurrency);
        const result = calculateResult(amount, currency.exchangeRate);
        setResult({ value: result, currency: currency.id });
    };

    const calculateResult = (amount, rate) => {
        return amount / rate;
    };

    return (
        <Wrapper onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator walut</Legend>
                <Clock />
                <FormField label="Kwota w złotych - PLN*:">
                    <Input
                        type="number"
                        min="0.01"
                        max="1000000000"
                        step="0.01"
                        required
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </FormField>
                <FormField label="Waluta:">
                    <Input as="select"
                        value={selectedCurrency}
                        onChange={({ target }) => setSelectedCurrency(target.value)}
                    >
                        {currencies.map(currency => (
                            <option key={currency.id} value={currency.id}>
                                {currency.name} - {currency.id}
                            </option>)
                        )}
                    </Input>
                </FormField>
                <Result result={result} />
            </Fieldset>
            <Button type="submit">Przelicz!</Button>
        </Wrapper>
    )
};

export default Form;