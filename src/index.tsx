import './index.scss';
import _ from "lodash";
// import "./ripasso";
// import "./lezione2.tsx";

import ReactDOM from 'react-dom';
import { TestComponent, TestComponentSenzaTag } from './components';




const App: React.FunctionComponent = () => {
    const numero = 4;
    const messaggio1 = "messaggio1";
    const messaggio2 = "messaggio2";
    const messaggio3 = "messaggio3";

    return <div className='app'>
        <div>app!</div>
        <div>Numero: {numero}</div>
        {numero === 4 && <div>condizione true</div>}
        <div className="wrapper">
            <TestComponent messaggio={messaggio1} />
            <TestComponent messaggio={messaggio2} />
            <TestComponent messaggio={messaggio3}/>
        </div>
        {/* <TestComponentSenzaTag /> */}
    </div>;
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);