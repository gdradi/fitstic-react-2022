import { useState } from 'react';
import { ButtonComponent } from './button';
import { Post } from './lezione2Es1Posts';

/**
 * 
 * Costruire un componente che visualizzi un form di creazione di un post.
 * Gli elementi che deve visualizzare sono:
 * 
 * - Un campo di input per il titolo
 * - Un campo di input per l'autore
 * - Un campo di input/textarea per il corpo
 * - Il bottone di invio
 * 
 * Alla pressione del bottone, deve essere invocata una callback che notifica al genitore
 * l'evento di creazione. Nella callback deve essere passato il post appena creato.
 * 
 * Visualizzare questo componente nel componente App
 */

interface PostFormProps {
    onPostCreated: (post: Post) => void;
}
export const PostForm: React.FunctionComponent<PostFormProps> = ({ onPostCreated }) => {
    // Stati
    // const [title, setTitle] = useState("");
    // const [author, setAuthor] = useState("");
    // const [body, setBody] = useState("");

    const [post, setPost] = useState<Post>({
        titolo: "",
        autore: "",
        testo: ""
    });


    return <div className="form box">
        <h3>Crea nuovo post</h3>
        <div className="inputs">
            <span>Titolo</span>
            <input type="text" placeholder="Titolo.." onChange={event => {
                //post.titolo = event.target.value;
                setPost({
                    ...post,
                    titolo: event.target.value
                });
            }} />
        </div>
        <div className="inputs">
            <span>Autore</span>
            <input type="text" placeholder="Autore.." onChange={event => {
                setPost({
                    ...post,
                    autore: event.target.value,
                });
            }} />
        </div>
        <div className="inputs">
            <span>Corpo</span>
            <textarea onChange={event => setPost({
                ...post,
                testo: event.target.value
            })} />
        </div>
        <div className="button">
            <ButtonComponent clickCallback={() => {
                onPostCreated({
                    ...post
                });
            }}>Crea</ButtonComponent>
        </div>
    </div>;
}

export { };