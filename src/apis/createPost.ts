import axios from "axios";
import { SERVER_URL } from "../config";
import { Post } from "../lezione2Es1Posts";

export const createPostApi = (post: Post) => {
    return axios
        .post(`${SERVER_URL}/post/create`, {
            autore: post.autore,
            title: post.titolo,
            body: post.testo
        });
};