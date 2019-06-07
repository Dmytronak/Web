import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
    getItem<T>(key: string) : T {
        let result = <T>JSON.parse(localStorage.getItem(key));
        return result;
    }
    setItem(key: string, value: any){
        localStorage.setItem(key,JSON.stringify(value));
    }
    removeItem(key: string){
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
