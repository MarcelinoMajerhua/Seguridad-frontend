import {User} from "./user";

export interface IDocument {
    id: string
    url: string
    user: string
    affair: string
    title: string
    hash: string
    userDto: User
}

export interface FormDocument {
    affair : string,
    title : string,
    file : any
}
