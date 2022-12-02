import { Request, Response } from "express";

export const getAuthors = (req:Request,res:Response) => {
    res.json('getAuthors');
}
export const getAuthor = (req:Request,res:Response) => {
    res.json('getAuthor');
}
export const addAuthor = (req:Request,res:Response) => {
    res.json('addAuthor');
}
export const modifyAuthor = (req:Request,res:Response) => {
    res.json('modifyAuthor');
}
export const deleteAuthor = (req:Request,res:Response) => {
    res.json('deleteAuthor');
}