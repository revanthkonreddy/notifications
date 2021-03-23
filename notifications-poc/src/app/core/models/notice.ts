import { User } from "./user";

export class Notice {
    user: User;
    study: string; // Current, Shopping Study, Concept Reviews etc
    isRead: boolean; // Default (false)
    action: string; // commented, liked
    subject: string; // post, activity, reply, response
    topic: string; // Online Shopping, Shopping preferences etc
    timestamp: Date; // timestamp

    constructor(){
        this.isRead = false;
    }
}