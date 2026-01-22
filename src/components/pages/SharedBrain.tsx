import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../ui/Card";
import type { Content } from "../../Types/ContentTypes";
import { BACKEND_URL } from "../../config";

export function SharedBrain() {
    const { hash } = useParams<{ hash: string }>();
    const [contents, setContents] = useState<Content[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSharedBrain() {
            try {
                const response = await axios.get(
                    `${BACKEND_URL}/api/v1/brain/${hash}`
                );
                setContents(response.data.content);
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    setError(
                        err.response?.data?.message ||
                        "This brain is not shared or link is invalid"
                    );
                } else {
                    setError("Unexpected error occurred");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchSharedBrain();
    }, [hash]);

    if (loading) {
        return <div className="p-6 text-center">Loading...</div>;
    }

    if (error) {
        return (
            <div className="p-6 min-h-screen flex justify-center items-center bg-gradient-to-r from-violet-300 to-orange-300">
                <div className="bg-white p-6 rounded-xl shadow-md text-lg font-semibold">
                    🚫 {error}
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gradient-to-r from-violet-300 to-orange-300 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Shared Brain
            </h1>

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
