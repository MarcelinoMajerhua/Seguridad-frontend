import { makeAutoObservable, runInAction } from 'mobx';
import documentsServices from '../services/documents-services';
import { IDocument } from '../models/document';

export default class TestStore {
   /*Varaibles*/
   test: string = '';
   test1: string = '';
   test2: string = '';
   test3: string = '';
   documents: IDocument[] = [];
   /*Varaibles*/

   /*Obligatorio*/
   constructor() {
      makeAutoObservable(this);
   }
   /*Obligatorio*/

   /*Methodos*/
   testMethod = async () => {
      try {
         const responseDocument = await documentsServices.list();
         /*Cada vez que modifiquen una variable*/
         runInAction(() => {
            this.documents = responseDocument;
         });
         return this.documents;
      } catch (e) {}
   };

   /*Methodos*/
}
