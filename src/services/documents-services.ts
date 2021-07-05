import request from '../api/api';
import { FormDocument, IDocument } from '../models/document';
import axios from 'axios';

const documentsServices = {
   list: () => request.get<IDocument[]>('/documents'),
   add: (data: FormDocument) => request.post('/documents', data),
   upload: (formDocument: FormDocument) => {
      /*const formData = new FormData();
      formData.append('File', file);*/
      return axios.post<IDocument>('/documents', formDocument, {
         headers: { 'Content-type': 'multipart/form-data' },
      });
   },
};

export default documentsServices;
