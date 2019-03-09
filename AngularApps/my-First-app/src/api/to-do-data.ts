import {Todo} from '../app/to-do/to-do';

export const TODO_ITEMS: Todo[] = [
 {
   id: 1,
   name: 'Myrhorod',
   author: 'N. Gogol',
   due: new Date(new Date().setDate(new Date().getDate() + 4)),
   done: false,
   price: 54
 }, {
   id: 2,
   name: 'C#',
   author: 'G.Albakhari',
   due: new Date(new Date().setDate(new Date().getDate() + 5)),
   done: false,
   price: 222
 }, {
   id: 3,
   name: 'Nights near Dykanyka',
   author: 'N. Gogol',
   due: new Date(new Date().setDate(new Date().getDate() - 1)),
   done: true,
   price: 20
 }
];
