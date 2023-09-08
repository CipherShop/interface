import { IFeedback } from "./feedback.object";

export interface ISeller {
    profilePic: string;
    items: number[];
    sold: number;
    about: string;
    feedbacks: IFeedback[];
    username: string;
    registerDate: Date;
    location: number;
}
