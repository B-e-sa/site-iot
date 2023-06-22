import { INew } from "./INew";

export interface ITendency {
    id: number;
    img: string;
    name: string;
    bgColor: string;
    summary: string;
    expanded_info: string;
    news: INew[]
}