/**
 * 
 * Implementare un componente Bottone che visualizzi un bottone in modo bello.
 * 
 * Visualizzare due bottoni nella vostra app:
 * - alla pressione del primo bottone, viusalizzare un log in console
 * - alla pressione del secondo bottone, visualizzare un alert    alert("test.o..");
 */


interface ButtonProps {
    readonly text: string;
    readonly clickCallback: () => void;
    readonly disabled?: boolean;
}
export const ButtonComponent: React.FunctionComponent<ButtonProps> = (props) => {
    const { text, disabled, clickCallback } = props;
    return <button className="btn" disabled={disabled} onClick={() => clickCallback()}>{text}</button>;
};