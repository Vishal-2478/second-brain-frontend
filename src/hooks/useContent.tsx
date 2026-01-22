import { useEffect, useState } from "react";
import type { Content } from "../Types/ContentTypes";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent() {
    const [contents, setContents] = useState<Content[]>([]);

    async function getContent() {
        const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setContents(response.data.content);
    }

    useEffect(() => {
        getContent();
    }, []); // runs only on first load


    useEffect(function () {
        const clock = setInterval(function () {
            getContent();
        }, 2000);

        return function () {
            clearInterval(clock);
        };
    }, []);

    return { contents, getContent };

}