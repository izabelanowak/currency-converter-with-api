import { ResultParagraph, Strong } from "./styled";

const Result = ({ result }) => (
    result !== undefined && (
        <ResultParagraph>
            Otrzymasz: <Strong>{result.value.toFixed(2)}</Strong> {result.currency}
        </ResultParagraph>
    )
);

export default Result;