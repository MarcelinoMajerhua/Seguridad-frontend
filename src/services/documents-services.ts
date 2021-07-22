import request from '../api/api';
import { IDocument } from '../models/document';
import axios, { AxiosResponse } from 'axios';

const documentsServices = {
   list: () => request.get<IDocument[]>('/documents'),
   check: (formData: FormData) => request.post<IDocument>('/documents/check',formData),
   add: (formData: FormData) =>
      axios
         .post<IDocument>('/documents', formData, {
            headers: { 'Content-type': 'multipart/form-data' },
         })
         .then((response: AxiosResponse<IDocument>) => response.data),
};

export default documentsServices;
