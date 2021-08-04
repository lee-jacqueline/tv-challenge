export interface ProgramDetails {
    id: number;
    title: string; 
    description: string;
    type: string;
    image: string;
    rating: string;
    genre: string;
    year: number;
    language: string;
}

export const InitialProgramDetails = {
    id: 0,
    title: "",
    description: "",
    type: "",
    image: "",
    rating: "",
    genre: "",
    year: 0,
    language: "",
}