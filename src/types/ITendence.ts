import { INew } from "./INew";

export interface ITendence {
    id: number;
    img: string;
    name: string;
    bgColor: string;
    summary: string;
    expanded_info: string;
    news: INew[]
}