import { GlobalConfig, ToastrService, ActiveToast} from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ToastrMessagesService {
    private options: GlobalConfig;
    constructor(private readonly toastr:ToastrService) {
        this.options = this.toastr.toastrConfig;
        this.options.progressBar = true;
        this.options.closeButton = true;
        this.options.preventDuplicates = true;
        this.options.countDuplicates = true;
    }
    error(message:string,title:string) : ActiveToast<any>{
        return this.toastr.error(message,title);
    }
    info(message:string,title:string): ActiveToast<any>{
        return this.toastr.info(message,title);
    }
    warning(message:string,title:string): ActiveToast<any>{
      return this.toastr.warning(message,title);
    } 
    success(message:string,title:string): ActiveToast<any>{
        return this.toastr.success(message,title);
      }
}