import { Route, Routes  } from "react-router-dom";
import { NavBar } from "./navbar";
import { Routes as MyRoutes } from "../routes";

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
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
        </>
    );
}


export const App = () => {
    return <div>
        <NavBar />
        <Routes>
            <Route path={MyRoutes.HOME} element={<Home />} />
            <Route path={MyRoutes.ABOUT} element={<About />} />
        </Routes>
    </div>;
};