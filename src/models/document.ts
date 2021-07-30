import { User } from './user';

export interface IDocument {
   id: string;
   url: string;
   user: string;
   affair: string;
   title: string;
   hash: string;
   userDto: User;
   documentName?: any;
}

export class DocumentForm {
   affair: string = '';
   title: string = '';
   constructor(document?: IDocument) {
      if (document) {
         this.affair = document.affair;
         this.title = document.title;
      }
   }
}
