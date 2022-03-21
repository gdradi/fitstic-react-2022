/**
 * Step:
 * 
 * 1. Modellare l'interfaccia di un Post (interfaccia di tipo 3)
 * 2. Creare una lista di Post
 * 3. Creare un componente che prenda in input un Post e lo visualizzi come vi pare
 * 4. Renderizzare la lista di Post del punto 2 utilizzando il componente del punto 3
 * 
 * Modalità di consegna:
 * - 1. inviare la cartella "src" zippata a giacomo.dradi@gmail.com
 * - 2. create un repo gitHub privato e invitate l'utente "gdradi"
 */


// Step 1. Interfaccia che modella il concetto di Post
// cos'è un post?
interface Post {
    readonly titolo: string;
    readonly autore: string;
    readonly testo: string;
}

// Step 2: definire una lista di post
const posts: Post[] = [
    {
        titolo: "Post 1",
        autore: "Autore 1",
        testo: "Testo 1",
    },
    {
        titolo: "Post 2",
        autore: "Autore 2",
        testo: "Testo 2",
    },
    {
        titolo: "Post 3",
        autore: "Autore 3",
        testo: "Testo 3",
    },
    {
        titolo: "Post 4",
        autore: "Autore 4",
        testo: "Testo 4",
    },
    {
        titolo: "Post 5",
        autore: "Autore 5",
        testo: "Testo 5",
    },
];


// Step 3: componente che riceve in input un Post e lo renderizza

interface PostComponentProps {
    readonly post: Post;
}

export const PostComponent: React.FunctionComponent<PostComponentProps> = (props) => {
    // const { titolo, autore, testo } = props.post;
    return (
        <div className="post">
            <div className="title">{props.post.titolo}</div>
            <div className="author">{props.post.autore}</div>
            <div className="tex<t">{props.post.testo}</div>
        </div>
    );
};



export const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <div className="wrapper">
                {posts.map((post) => {
                    return <PostComponent post={post} />;
                })}
            </div>
        </div>
    );
};