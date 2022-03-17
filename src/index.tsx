import './index.scss';
// import "./ripasso";
import _ from "lodash";

import ReactDOM from 'react-dom';



const utente = <div>
    <span className="name">Giacomo</span>
    <span className="surname">Dradi</span>
</div>;

const listaDiElementiJsx = [
    <div key={1}>Elemento1</div>,
    <div key={2}>Elemento2</div>
];


const numero = 0;
const str = "ciao!";
const bool = false;

interface Point {
    readonly x: number;
    readonly y: number;
};

const punto1: Point = {
    x: 5,
    y: 6
};

const myFunction = (messaggio: string) => {
    return <div>Jsx restituito da funzione myFunction(). Messaggio: {messaggio}</div>;
};


const mioMessaggio = "messaggio2";



const funzioneCheRenderizzaInModoCondizionale = (num: number) => {
    if (num === 0) {
        return <div>Il numero è 0</div>;
    } else if (num % 2 === 0) {
        return <div>Il numero è pari</div>;
    } else {
        return <div>Il numero è dispari</div>;
    }
    // switch(num) {
    //     case 0:
    //         return <div>..</div>;
    // }
};


const lista = [2, 4, 6, 7, 23];

const app = <div className="title" style={{
    border: "1px solid black"
}}>
    <div>1</div>
    <div>2</div>
    <span className="subtitle">testo in italic</span>
    <div>Hello fitstic!!!!!!!!!!</div>
    {utente}
    {utente}
    { }
    {listaDiElementiJsx}
    <div>Numero: {numero}</div>
    <div>Stringa: {str}</div>
    <div>Boolean: {bool}</div>
    <div>Punto: (x: {punto1.x}, y: {punto1.y})</div>
    <div>Punto in json: {JSON.stringify(punto1)}</div>
    {myFunction(mioMessaggio)}

    {/* Rendering condizionale */}
    {numero % 2 === 0
        ? <div>Il numero è pari</div>
        : <div>Dispari</div>
    }
    {numero % 2 === 0 && <div>Numero è pari con operatore &&</div>}
    {numero % 2 !== 0 && <div>Numero è dispari con operatore &&</div>}
    {funzioneCheRenderizzaInModoCondizionale(numero)}
    {numero === 0
        ? <div>0</div>
        : numero % 2 === 0
            ? <div>pari</div>
            : <div>dispari</div>
    }

    {/* Rendering ciclico */}
    {_.map(lista, (value, index) => {
        return <div key={index}>Elemento alla posizione {index}: {value}</div>;
    })}

    {_.filter(lista, (value, index) => {
        return value % 2 === 0;
    }).map((value, index) => {
        return <div key={index}>Elemento filtrato alla posizione {index}: {value}</div>;
    })}

</div>;



ReactDOM.render(
    app,
    document.getElementById('root')
);