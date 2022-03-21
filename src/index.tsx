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
    const currentDate = props.date.toString();
    return <div>
        Data e ora attuali: {currentDate}
    </div>;
};
const App: React.FunctionComponent = () => {
    /**
     * Questo componente HA uno stato, "date", di tipo Date
     * Per modificare questo stato, devo usare la funzione setDate
     */
    const [date, setDate] = useState<Date>(new Date());

    // let date = new Date();
    return <div>
        <DateComponent date={date} />
        <button onClick={() => {
            console.log("onClick del bottone!");
            setDate(new Date());
        }}>Bottone</button>
    </div>;
};

ReactDOM.render(<App />, document.getElementById('root'));


// setInterval(() => {
//     console.log(new Date().toString());
// }, 1000);