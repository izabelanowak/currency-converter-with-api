import { LabelText} from "./styled";

const FormField = ({ label, children }) => (
    <p>
        <label>
            <LabelText>{label}</LabelText>
            {children}
        </label>
    </p>
);

export default FormField;