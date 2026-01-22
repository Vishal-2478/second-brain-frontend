
export interface Content {
    _id: string;
    link: string;
    type: 'image' | 'video' | 'article' | 'audio' | 'tweet';
    title: string;
    tags?: string[];
    userId: string;
}
