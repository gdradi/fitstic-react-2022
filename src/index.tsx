import './index.scss';
import _ from "lodash";
// import "./ripasso";
// import "./lezione2.tsx";

import ReactDOM from 'react-dom';
import { TestComponent, TestComponentSenzaTag } from './components';
import { useState } from 'react';
import { ButtonComponent } from './button';
// import { App } from './lezione2Es1Posts';


// const App: React.FunctionComponent = () => {
//     const numero = 4;
//     const messaggio1 = "messaggio1";
//     const messaggio2 = "messaggio2";
//     const messaggio3 = "messaggio3";

//     return <div className='app'>
//         <div>app!</div>
//         <div>Numero: {numero}</div>
//         {numero === 4 && <div>condizione true</div>}
//         <div className="wrapper">
//             <TestComponent messaggio={messaggio1} />
//             <TestComponent messaggio={messaggio2} />
//             <TestComponent messaggio={messaggio3}/>
//         </div>
//         {/* <TestComponentSenzaTag /> */}
//     </div>;
// };
interface DateProps {
    readonly date: Date;
};


const DateComponent: React.FunctionComponent<DateProps> = (props) => {
    console.log("[DateComponent] execution()");
    const currentDate = props.date.toString();
    return <div>
        Data e ora attuali: {currentDate}
    </div>;
};



const App: React.FunctionComponent = () => {
    /**
     * Questo componente HA uno stato, "date", di tipo Date
     * Per modificare questo stato, devo usare la funzione setDate
     * Il suo valore iniziale è new Date()
     */
    const initialValue = 0;
    const initialValue2 = 200;
    const [date, setDate] = useState(new Date());
    const [tempValue, setTempValue] = useState(initialValue);
    const [tempValue2, setTempValue2] = useState(initialValue2);

    // let date = new Date();
    return <div>

        <div className="box">
            <DateComponent date={date} />
            <button onClick={() => {
                console.log("onClick del bottone!");
                setDate(new Date());
            }}>Refresh date</button>
        </div>

        <CounterComponent
            name={"Contatore 1"}
            initialValue={initialValue}
            callback={(value) => {
                console.log(value);
                setTempValue(value);
            }}
        />
        <CounterComponent
            name={"Contatore 2"}
            initialValue={initialValue2}
            callback={(value) => {
                console.log(value);
                setTempValue2(value);
            }}
        />

        <div>Il valore del contatore 1 è {tempValue}</div>
        <div>Il valore del contatore 2 è {tempValue2}</div>


        <ButtonComponent clickCallback={() => { console.log("bottone1"); }} text={"Log"} />
        <ButtonComponent clickCallback={() => { alert("bottone2"); }} text={"Alert"} />
        <ButtonComponent clickCallback={() => { console.log("bottone3"); }} text={"Disabled"} disabled={true} />


    </div>;
};

// interface CallbackFunction {
//     (value: number): void
// }
interface CounterProps {
    readonly initialValue: number;
    readonly name: string;
    readonly callback: (value: number) => void;
    // readonly callback: CallbackFunction;

}
export const CounterComponent: React.FunctionComponent<CounterProps> = (props) => {
    const { initialValue, name, callback } = props;

    const clickHandler = (newValue: number) => {
        setValue(newValue);
        callback(newValue);
    };

    // Stato
    const [value, setValue] = useState(initialValue);
    return <div className="box">
        <h4>{name}</h4>
        Value: {value}
        <button onClick={() => { clickHandler(value + 1); }}>Inc</button>
        <button onClick={() => { clickHandler(value - 1); }}>Dec</button>
        <button onClick={() => { clickHandler(initialValue); }}>Reset</button>
    </div>;
};



ReactDOM.render(<App />, document.getElementById('root'));


// setInterval(() => {
//     console.log(new Date().toString());
// }, 1000);