// src/pages/SharedBrain.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../ui/Card";
import type { Content } from "../../Types/ContentTypes";
import { BACKEND_URL } from "../../config";


export function SharedBrain() {
    const { hash } = useParams<{ hash: string }>();
    const [contents, setContents] = useState<Content[]>([]);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSharedBrain() {
            const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
            setContents(response.data.content);
        }
        fetchSharedBrain();
    }, [hash]);

    // if (error) {
    //     return <div className="p-4 text-red-500">{error}</div>;
    // }

    return (
        <div className="p-6 bg-gradient-to-r from-violet-300 to-orange-300 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Shared Brain</h1>
            <div className="grid grid-cols-3 gap-6">
                {contents.map((cont, index) => (
                    <Card
                        key={index}
                        _id={cont._id}
                        title={cont.title}
                        link={cont.link}
                        type={cont.type}
                    />
                ))}
            </div>
        </div>
    );
}
