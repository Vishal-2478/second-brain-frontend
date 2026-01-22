import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

enum ContentType {
    video = "video",
    article = "article",
    tweet = "tweet",
    image = "image",
    audio = "audio",
}
//controlled component
export const CreateContentModal = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);

    const [type, setType] = useState(ContentType.video);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function CreateContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if (!title || !link) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);
            await axios.post(`${BACKEND_URL}/api/v1/content`, {
                title,
                link,
                type,
            }, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`, // no extra quotes in storage
                },
            }
            );
            onClose();
            navigate("/dashboard");
        }
        catch (err) {
            console.error(err);
            alert("Failed to create content. Please try again.");
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div>
            {open &&
                <div className="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="  bg-gradient-to-b from-violet-200 to-orange-200 opacity-100  p-4 rounded  ">
                            <div className="flex justify-end" >
                                <span onClick={onClose} className="cursor-pointer">
                                    <CrossIcon />
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <Input reference={titleRef} type="text" placeholder="Add Title" />
                                <Input reference={linkRef} type="text" placeholder="Add Link" />
                            </div>
                            <div className="flex  gap-2 mt-3">
                                {(Object.values(ContentType) as ContentType[]).map((contentType) => (
                                    <Button
                                        key={contentType}
                                        onClick={() => setType(contentType)}
                                        variant={type === contentType ? "primary" : "secondary"}
                                        text={contentType}
                                        size="md"
                                    />
                                ))}
                            </div>
                            <div>

                            </div>

                            <div className="flex justify-center mt-8">
                                <Button onClick={CreateContent} variant="primary" size="md"
                                    loading={loading} text={loading ? "Creating..." : "Create"} />
                            </div>
                        </span>
                    </div>
                </div>}
        </div>
    )
}