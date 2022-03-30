import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import { ButtonComponent } from "./button";


interface User {
    readonly avatar: string;
    readonly email: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly id: number;
}
export const UsersVisualizer: React.FunctionComponent = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>(null);

    const loadData = () => {
        setIsLoading(true);
        setError(null);
        axios
            .get("https://reqres.in/api/users?delay=2")
            .then((response) => { setUsers(response.data.data as User[]); })
            .catch((error) => { setError(error.message); })
            .finally(() => { setIsLoading(false); });
    };

    useEffect(loadData, []);

    return <div>
        {isLoading
            ? <div>Caricamento dati..</div>
            : _.map(users, user => <div key={user.id}>{user.first_name}</div>)
        }
        {error != null && <div>{error}</div>}
        {!isLoading && <ButtonComponent clickCallback={loadData}>Ricarica</ButtonComponent>}
    </div>;
};