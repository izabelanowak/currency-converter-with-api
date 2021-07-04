import { Wrapper, Fieldset, Legend, Input } from "./styled";
import { Button } from "../styledButton";
import { useState } from "react";
import Clock from "./Clock";
import FormField from "./FormField";
import Result from "./Result";

const Form = ({ rates }) => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("EUR");
    const [result, setResult] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const result = calculateResult(amount, rates[selectedCurrency]);
        setResult({ value: result, currency: selectedCurrency });
    };

    const calculateResult = (amount, rate) => {
        return amount * rate;
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
                        {Object.keys(rates).map(currency => (
                            <option key={currency} value={currency}>
                                {currency}
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