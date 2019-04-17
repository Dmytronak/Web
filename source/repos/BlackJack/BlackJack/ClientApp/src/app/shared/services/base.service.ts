import { Observable, throwError } from 'rxjs';


export abstract class BaseService {

  constructor() { }

   handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error}`;
    } else {
      // server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    } debugger
    // window.alert(errorMessage);
    //window.alert(errorMessage);
    throwError(new Error(errorMessage));
    
    return errorMessage;
  }
}
