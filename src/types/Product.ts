export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    tags: { id: number; name: string }[];
};
