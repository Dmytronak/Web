import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
    public getItem<T>(key: string) : T {
        let result = <T>JSON.parse(localStorage.getItem(key));
        return result;
    }
    public setItem(key: string, value: any){
        localStorage.setItem(key,JSON.stringify(value));
    }
    public removeItem(key: string){
        localStorage.removeItem(key);
    }
    public clear() {
        localStorage.clear();
    }
}
