import { GlobalConfig, ToastrService, ActiveToast} from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ToastrConfig {
    private options: GlobalConfig;
    constructor(private readonly toastr:ToastrService) {
        this.options = this.toastr.toastrConfig;
        this.options.preventDuplicates = true;
        this.options.progressBar = true;
    }
    error(error:string) : ActiveToast<any>{
        return this.toastr.error(error);
    }
    info(error:string): ActiveToast<any>{
        return this.toastr.info(error);
    }
    warning(error:string): ActiveToast<any>{
      return this.toastr.warning(error);
    }
}