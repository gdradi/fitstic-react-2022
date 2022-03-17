import './index.scss';

// let a: number = 1;
// let b: string = "ciao";
// let c = a+b;
// console.log(c);


interface Shape {
    getNumeroDiLati(): number;
}

class Quadrato implements Shape {

    getNumeroDiLati(): number {
        return 4;
    }

}
class Triangolo implements Shape {

    getNumeroDiLati(): number {
        return 3;
    }

}
// const obj: Shape = new Quadrato();


// Logica della mia applicazione

// const stampNumeroDiLati = (oggetto: Shape) => {
//     const numDiLati = oggetto.getNumeroDiLati();
//     console.log(`Numero di lati: ${numDiLati}`);
// };

// stampNumeroDiLati(new Quadrato());
// stampNumeroDiLati(new Triangolo());


// interface SocialNetworkClient {
//     getLastPosts(numeroDiPost: number): any[];
// }

// class FacebookClient implements SocialNetworkClient {

//     getLastPosts(numeroDiPost: number): any[] {
//         // logica che recupera i post da facebook
//         // e li restituisce 
//         return [];
//     }

// }

// class InstagramClient implements SocialNetworkClient {

//     getLastPosts(numeroDiPost: number): any[] {
//         // logica che recupera i post da instagram
//         // e li restituisce 
//         return [];

//     }
// }


// const client: SocialNetworkClient = new FacebookClient();
// client.getLastPosts(5);




// function myFunc(n1: number, n2: number): number {
//     return n1+n2;
// }

// const myFunc2 = (n1: number, n2: number) => {
//     return n1+n2;
// };

// const result = myFunc2(3,3);
// console.log(result);


// const myFunc3 = function (n1: number, n2: number): number {
//     return n1+n2;
// };


interface FunzioneSomma {
    (n1: number, n2: number): number;
}

const sommaSemplice: FunzioneSomma = (x, y) => {
    // tanto codice..
    console.log("sommaSemplice()");
    return x + y;
};

const sommaInutilmenteArticolata: FunzioneSomma = (x, y) => {
    return x + y + 1;
};




// console.log("step 1");
// // faccio cose
// const somma = sommaSemplice(2,2);
// // STOP
// console.log("step 2");


//------------------------

const myF = function () { console.log("sono dentro al setTimeout!"); };

console.log("step 1");
const result = setTimeout(myF, 1000);
console.log("step 2");
console.log("step 3");



const myApp = (n1: number, n2: number, f: FunzioneSomma): void => {
    const result = f(n1, n2);
    console.log(result);
};


// myApp(2, 3, sommaSemplice);
// myApp(2, 3, sommaInutilmenteArticolata);



interface Punto {
    x: number;
    y: number;
    z: number;
};
const p: Punto = { x: 5, y: 10, z: 0 };
const p2: Punto = { x: 7, y: 5, z: 0 };

const sommaPunti = (p1: Punto, p2: Punto) => {

};


// import ReactDOM from 'react-dom';


// ReactDOM.render(
//   <div>Hello world from FITSTIC - React app!</div>,
//   document.getElementById('root')
// );