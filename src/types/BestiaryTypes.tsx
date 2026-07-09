export interface Creature {
    id: number;
    name: string;
    image: string;
    category: string;
    type: string;
    size: string;
    overview: string;
    strengths: string;
    weaknesses: string;
    features: string;
    lures: string;
    harvesting: string;
    lore: string;
}

export interface Category {
    id: number;
    name: string;
    plural: string;
    overview: string;
    image: string;
    parentCategory: string;
}