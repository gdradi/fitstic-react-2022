
// interface CallbackFunction {
//     (value: number): void

import { useEffect, useState } from "react";
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

    // Stato
    const [value, setValue] = useState(initialValue);

    // Use effect
    // Come si legge in italiano questa riga di codice?
    //    "tutte le volte che il valore della variabile value cambia,
    //     esegui la funzione che scrivo qui"
    useEffect(() => {
        console.log("useEffect di Counter, value: ", value);
        callback(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return <div className="box">
        <h4>{name}</h4>
        Value: {value}
        <ButtonComponent clickCallback={() => { setValue(value + 1); }}>Inc</ButtonComponent>
        <ButtonComponent clickCallback={() => { setValue(value - 1); }}>Dec</ButtonComponent>
        <ButtonComponent clickCallback={() => { setValue(initialValue); }} disabled={resetDisabled}>Reset</ButtonComponent>
        {/* <button onClick={() => { clickHandler(value + 1); } }>Inc</button>
        <button onClick={() => { clickHandler(value - 1); }}>Dec</button>
        <button onClick={() => { clickHandler(initialValue); }}>Reset</button> */}
    </div>;
};

