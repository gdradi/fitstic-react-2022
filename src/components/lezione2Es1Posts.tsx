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
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';



// Step 1. Interfaccia che modella il concetto di Post
// cos'è un post?
export interface Post {
    readonly titolo: string;
    readonly autore: string;
    readonly testo: string;
}

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



interface PostStatsProps {
    readonly listaDiPost: Post[];
};
export const PostStatsComponent: React.FunctionComponent<PostStatsProps> = (props) => {
    const { listaDiPost } = props;
    return <div className="postStats">
        <div>Numero di post presenti: {listaDiPost.length}</div>
    </div>;
};






function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}


export const App: React.FunctionComponent = () => {

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
        }
    ];


    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="app">

            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>


            {/* <PostForm
                onPostCreated={(post) => {
                    console.log(post);
                    createPostApi(post)
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }}
            />


            <PostStatsComponent listaDiPost={posts} />
            <div className="wrapper">
                {_.map(posts, (post, index) => {
                    return <PostComponent key={index} post={post} />;
                })}
            </div>



            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            Valore di age nello state: {age} */}

        </div>
    );
};