import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Card } from "../ui/Card";
import { SideBar } from "../Sidebar";
import type { Content } from "../../Types/ContentTypes";

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
            } catch {
                setError("This brain is not shared or link is invalid");
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
        <div>
            <SideBar />

            <div className="p-4 ml-59 bg-gradient-to-r from-violet-300 to-orange-300 min-h-screen">
                <h1 className="text-xl font-bold mb-4 text-center">
                    Shared Brain (Read Only)
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
        </div>
    );
}
