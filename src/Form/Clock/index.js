import { ClockContainer } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate.js";

const formatDate = (date) => date.toLocaleDateString(
    undefined,
    {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    },
);

const Clock = () => {
    const currentDate = useCurrentDate();

    return (
        <ClockContainer>
            Dziś jest {formatDate(currentDate)}
        </ClockContainer>
    )
};

export default Clock;