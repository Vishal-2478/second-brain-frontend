import React from "react";
import type { iconProps } from ".";


export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg" | "xl";
    text: string;
    startIcon?: React.FC<iconProps>;
    endIcon?: React.FC<iconProps>;
    onClick?: () => void;
    loading?: boolean;
}

const variantStyles = new Map<string, string>();
variantStyles.set("primary", "bg-purple-600 text-white");
variantStyles.set("secondary", "bg-purple-300 text-purple-500");

const sizeStyles = new Map<string, string>();
sizeStyles.set("sm", "py-1 px-2 text-sm");
sizeStyles.set("md", "py-2 px-4 text-base");
sizeStyles.set("lg", "py-3 px-6 text-lg");
sizeStyles.set("xl", "py-4 px-8 text-xl");


const defaultStyles = "flex rounded-md items-center justify-center"


export const Button = (props: ButtonProps) => {

    const StartComp = props.startIcon;  // StartComp is now same like PlusIcon component
    const EndComp = props.endIcon;
    return (
        <button
            onClick={props.onClick}
            disabled={props.loading}
            className={`${variantStyles.get(props.variant)} 
            ${defaultStyles} 
            ${sizeStyles.get(props.size)}
            ${props.loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}

        >
            {StartComp &&
                <div className="pr-2">
                    <StartComp size={props.size} />
                </div>
            }
            {props.text}
            {EndComp &&
                <div className="pl-2">
                    <EndComp size={props.size} />
                </div>
            }
        </button>
    )

}


{/* <Button variant="primary" size="sm" text="Button" /> */ }