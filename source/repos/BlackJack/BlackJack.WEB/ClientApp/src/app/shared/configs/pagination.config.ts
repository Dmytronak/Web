import { PaginationModel } from '../../shared/models/pagination.model';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationConfig {
  public paginationModel: PaginationModel = {
    collectionSize: 0,
    pageNumber: 1,
    maxSize: 4
  }
  constructor(config: NgbPaginationConfig) {
    config.maxSize = this.paginationModel.maxSize;
    config.rotate = true;
    config.boundaryLinks = true;
  }
}