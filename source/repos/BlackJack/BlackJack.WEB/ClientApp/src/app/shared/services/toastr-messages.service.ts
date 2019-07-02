import { GlobalConfig, ToastrService, ActiveToast} from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ToastrMessagesService {
    private options: GlobalConfig;
    private title : string = 'Dear user';
    constructor(private readonly toastr:ToastrService) {
        this.options = this.toastr.toastrConfig;
        this.options.progressBar = true;
        this.options.closeButton = true;
        this.options.preventDuplicates = true;
        this.options.countDuplicates = true;
    }
    public error(message:string) : ActiveToast<any>{
        return this.toastr.error(message,this.title);
    }
    public info(message:string): ActiveToast<any>{
        return this.toastr.info(message,this.title);
    }
    public warning(message:string): ActiveToast<any>{
      return this.toastr.warning(message,this.title);
    } 
    public success(message:string): ActiveToast<any>{
        return this.toastr.success(message,this.title);
      }
}