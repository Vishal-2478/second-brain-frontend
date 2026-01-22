import { useEffect } from "react";
import { BACKEND_URL } from "../../config";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon"
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface CardProps {
    _id: string;
    title: string;
    link: string;
    type: 'image' | 'video' | 'article' | 'audio' | 'tweet';
    tags?: string[];
}

export const Card = ({ title, link, type, _id }: CardProps) => {

    useEffect(() => {
        if (type === "tweet" && window.twttr) {
            window.twttr.widgets.load();
        }
    }, [link, type]);

    const navigate = useNavigate();

    async function deleteContent() {

        await axios.delete(`${BACKEND_URL}/api/v1/content/${_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        alert("Content Deleted");
        navigate("/dashboard");
        // refreshContent();
    }

    return (
        <div>
            <div className="rounded-md border max-w-80 p-4 bg-white border-gray-200 shadow-sm min-h-48 min-w-80">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3 text-md font-semibold">
                        <div>
                            {type === 'video' && <YoutubeIcon />}
                            {type === 'tweet' && <TwitterIcon />}
                        </div>
                        <span>{title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-gray-500 cursor-pointer">
                            <a href={link} target="_blank">
                                <ShareIcon size="md" />
                            </a>
                        </div>
                        <div className="text-gray-500 cursor-pointer">
                            <DeleteIcon size="md" onClick={deleteContent} />
                        </div>
                    </div>
                </div>
                <div className="pt-4 ">
                    {type === "video" &&
                        <iframe
                            className="w-full"
                            src={link.replace("watch?v=", "embed/").replace("live", "embed")}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    }
                    {type === "tweet" &&
                        <blockquote className="twitter-tweet">
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>
                    }
                </div>


            </div>
        </div>
    )
}