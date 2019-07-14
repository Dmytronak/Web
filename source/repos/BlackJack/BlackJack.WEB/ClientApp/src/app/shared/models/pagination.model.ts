import { PaginationConfig } from 'src/app/shared/configs/pagination.config';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class PaginationModel {
    collectionSize: number;
    pageNumber: number;
    maxSize: number;
    constructor() {
        this.collectionSize = PaginationConfig.collectionSize;
        this.pageNumber = PaginationConfig.pageNumber;
        this.maxSize = PaginationConfig.maxSize;
    }
}