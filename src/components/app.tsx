
import _ from 'lodash';
import { useState } from 'react';
import { ButtonComponent } from './button';
import { CounterComponent } from './counter';
import { DateComponent } from './date';


export const App: React.FunctionComponent = () => {

    // Stati
    const [date, setDate] = useState(new Date());
    const [valueContatore1, setTempValue] = useState(0);
    const [valueContatore2, setTempValue2] = useState(200);
    const [text, setText] = useState("");
    const [numero, setNumero] = useState(0);

    // Variabili/funzioni di appoggio
    const array = _.range(numero);

    // Rendering
    return <div>

        <div className="box">
            <input type="text" placeholder="Scrivi qui.." value={text} onChange={(event) => {
                const value = event.target.value;
                console.log(value);
                setText(value);
            }} />
            <ButtonComponent clickCallback={() => { setText(""); }}>cancella</ButtonComponent>
            <div>{text}</div>
            {_.size(text) >= 5 && <div>Il testo inserito è piu lungo di 5 caratteri</div>}
            {/* {text === "contatore" && <CounterComponent
                name={"Contatore condizionale"}
                initialValue={70}
                callback={(value) => { console.log(value); }}
            />} */}
        </div>

        <div className="box">
            <input type="number" onChange={(event) => {
                const value = event.target.value;
                const valueAsNumber = Number(value);
                if (isNaN(valueAsNumber)) {
                    alert("valore inserito sbagliato");
                } else {
                    setNumero(valueAsNumber);
                }
            }} />
            {numero > 0 && _.map(array, (value) => <ButtonComponent key={value} clickCallback={() => { }}>Bottone {value + 1}</ButtonComponent> )}
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
            //initialValue={initialValue}
            value={valueContatore1}
            callback={(value) => {
                console.log(value);
                setTempValue(value);
            }}
            resetDisabled={false}
        />
        <CounterComponent
            name={"Contatore 2"}
            //initialValue={initialValue2}
            value={valueContatore2}
            callback={(value) => {
                console.log(value);
                setTempValue2(value);
            }}
        />

        <div>Il valore del contatore 1 è {valueContatore1}</div>
        <div>Il valore del contatore 2 è {valueContatore2}</div>

        <ButtonComponent clickCallback={() => { console.log("bottone1"); }} >Log</ButtonComponent>
        <ButtonComponent clickCallback={() => { alert("bottone2"); }}>Alert</ButtonComponent>
        <ButtonComponent clickCallback={() => { console.log("bottone3"); }} disabled={true}>Disabled</ButtonComponent>

    </div>;
};