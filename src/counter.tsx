
// interface CallbackFunction {
//     (value: number): void

import { useState } from "react";
import { ButtonComponent } from "./button";

// }
interface CounterProps {
    readonly initialValue: number;
    readonly name: string;
    readonly callback: (value: number) => void;
    readonly resetDisabled?: boolean;
    // readonly callback: CallbackFunction;
}
export const CounterComponent: React.FunctionComponent<CounterProps> = (props) => {
    const { initialValue, name, callback, resetDisabled } = props;

    const clickHandler = (newValue: number) => {
        setValue(newValue);
        callback(newValue);
    };

    // Stato
    const [value, setValue] = useState(initialValue);
    return <div className="box">
        <h4>{name}</h4>
        Value: {value}
        <ButtonComponent clickCallback={() => { clickHandler(value + 1); }}>Inc</ButtonComponent>
        <ButtonComponent clickCallback={() => { clickHandler(value - 1); }}>Dec</ButtonComponent>
        <ButtonComponent clickCallback={() => { clickHandler(initialValue); }} disabled={resetDisabled}>Reset</ButtonComponent>
        {/* <button onClick={() => { clickHandler(value + 1); } }>Inc</button>
        <button onClick={() => { clickHandler(value - 1); }}>Dec</button>
        <button onClick={() => { clickHandler(initialValue); }}>Reset</button> */}
    </div>;
};

