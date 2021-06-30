import { HeaderCell } from "./styled";

const TableHeader = ({ scope, title }) => (
    <HeaderCell as="th" scope={scope}>
        {title}
    </HeaderCell>
);

export default TableHeader;