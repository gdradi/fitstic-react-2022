import { useEffect, useState } from "react";
import { ButtonComponent } from "./button";
import { DateComponent } from "./date";

export const App: React.FunctionComponent = () => {
    // State
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        console.log("la variabile isVisible ha cambiato valore!", isVisible);
    }, [isVisible]);

    return <div>
        isVisible: {isVisible+""}
        <ButtonComponent clickCallback={() => { setIsVisible(!isVisible); }}>Toggle</ButtonComponent>
        {isVisible && <DateTimerComponent />}
    </div>;
};


export const DateTimerComponent: React.FunctionComponent = () => {
    // State
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // Questo codice viene eseguito quando il componente viene disegnato LA PRIMA VOLTA in pagina
        // In altre parole, viene eseguito al MOUNT del componente
        console.log("useEffect()");
        const intervalId = window.setInterval(() => {
            console.log("log dentro setInterval");
            setDate(new Date());
        }, 1000);
        // Questo codice viene eseguito quando il componente viene rimosso dalla pagina
        // In altre parole, viene eseguito all'UNMOUNT del componente
        return () => {
            console.log("return della callback dello useEffect()");
            clearInterval(intervalId);
        };
    }, []);

    // useEffect(() => { setInterval(() => { setDate(new Date()); }, 1000); }, []);


    return <div className="box">
        <DateComponent date={date} />
        <button onClick={() => {
            console.log("onClick del bottone!");
            setDate(new Date());
        }}>Refresh date</button>
    </div>;
};