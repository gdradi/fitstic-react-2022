import { useEffect, useState } from "react";
import { ButtonComponent } from "./button";
import { DateComponent } from "./date";

export const App: React.FunctionComponent = () => {
    // State
    const [isVisible, setIsVisible] = useState(true);
    return <div>
        <ButtonComponent clickCallback={() => { setIsVisible(!isVisible); }}>Toggle</ButtonComponent>
        {isVisible && <DateTimerComponent />}
    </div>;
};


export const DateTimerComponent: React.FunctionComponent = () => {
    // State
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log("useEffect()");
        const intervalId = window.setInterval(() => {
            console.log("log dentro setInterval");
            setDate(new Date());
        }, 1000);
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