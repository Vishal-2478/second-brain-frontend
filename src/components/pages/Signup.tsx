import { useRef } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { BACKEND_URL } from "../../config";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function SignUp() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        try {
            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
            });

            alert("Signup Successful");
            navigate("/signin");

        } catch (err) {
            const error = err as AxiosError<{ message: string }>;

            const message =
                error.response?.data?.message || "Something went wrong";

            alert(message);
        }

    }

    return (
        <div className="w-screen h-screen fixed top-0 left-0 bg-gradient-to-l from-violet-200 to-orange-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border p-6">
                <Input reference={usernameRef} type="text" placeholder="Username" />
                <Input reference={passwordRef} type="password" placeholder="Password" />
                <div className="flex justify-center items-center pt-6">
                    <Button onClick={SignUp} text="Sign up" variant="primary" size="md" loading={false} />
                </div>
            </div>
        </div>
    );
};
