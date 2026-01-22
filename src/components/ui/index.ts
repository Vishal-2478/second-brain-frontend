export interface iconProps {
    size: "sm" | "md" | "lg" | "xl";
    onClick?: () => void;
}

export const iconSizes = new Map<string, string>();
iconSizes.set("sm", "size-2");
iconSizes.set("md", "size-4");
iconSizes.set("lg", "size-6");
iconSizes.set("xl", "size-8");