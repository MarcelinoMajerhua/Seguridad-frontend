import request from "../api/api";
import {FormDocument, IDocument} from "../models/document";

const documentsServices = {
    list : () => request.get<IDocument[]>("/documents/listar"),
    add : (data : FormDocument) => request.post("/documents/crear",data),
};

export default documentsServices;