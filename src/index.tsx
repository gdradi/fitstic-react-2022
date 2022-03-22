import './index.scss';
import _ from "lodash";
// import "./ripasso";
// import "./lezione2.tsx";

import ReactDOM from 'react-dom';
import { TestComponent, TestComponentSenzaTag } from './components';
import { useState } from 'react';
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
    const [date, setDate] = useState(new Date());

    // let date = new Date();
    return <div>
        <DateComponent date={date} />
        <button onClick={() => {
            console.log("onClick del bottone!");
            setDate(new Date());
        }}>Bottone</button>
    </div>;
};

export const CounterComponent: React.FunctionComponent = () => {
    // Stato
    const [value, setValue] = useState(0);
    return <div>
        Value: {value}
        <button onClick={() => { setValue(value + 1); }}>Inc</button>
        <button onClick={() => { setValue(value - 1); }}>Dec</button>
        <button onClick={() => { setValue(0); }}>Reset</button>
    </div>;
};



ReactDOM.render(<CounterComponent />, document.getElementById('root'));


// setInterval(() => {
//     console.log(new Date().toString());
// }, 1000);