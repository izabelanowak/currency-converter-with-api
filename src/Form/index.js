import { Wrapper, Fieldset, Legend, Input } from "./styled";
import { Button } from "../styledButton";
import Clock from "./Clock";
import FormField from "./FormField";
import Result from "./Result";
import { useFormResult } from "./useFormResult";

const Form = ({ rates }) => {
    const {
        amount,
        setAmount,
        selectedCurrency,
        setSelectedCurrency,
        result,
        setResult,
        calculateResult
    } = useFormResult();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const result = calculateResult(amount, rates[selectedCurrency]);
        setResult({ value: result, currency: selectedCurrency });
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