
import { useState } from 'react';
import { ButtonComponent } from './button';
import { CounterComponent } from './counter';
import { DateComponent } from './date';


export const App: React.FunctionComponent = () => {
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
    const [text, setText] = useState("");

    // let date = new Date();
    return <div>

        <div className="box">
            <input type="text" placeholder="Scrivi qui.." onChange={(event) => {
                const value = event.target.value;
                console.log(value);
                setText(value);
            }} />
            <div>{text}</div>
            {text.length >= 5 && <div>Il testo inserito è piu lungo di 5 caratteri</div>}
            {text === "contatore" && <CounterComponent
                name={"Contatore condizionale"}
                initialValue={70}
                callback={(value) => { console.log(value); }}
            />}
        </div>


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
            resetDisabled={true}
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

        <ButtonComponent clickCallback={() => { console.log("bottone1"); }} >Log</ButtonComponent>
        <ButtonComponent clickCallback={() => { alert("bottone2"); }}>Alert</ButtonComponent>
        <ButtonComponent clickCallback={() => { console.log("bottone3"); }} disabled={true}>Disabled</ButtonComponent>

    </div>;
};