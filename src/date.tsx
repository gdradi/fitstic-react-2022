interface DateProps {
    readonly date: Date;
};

export const DateComponent: React.FunctionComponent<DateProps> = (props) => {
    // console.log("[DateComponent] execution()");
    const currentDate = props.date.toString();
    return <div>
        Data e ora attuali: {currentDate}
    </div>;
};
