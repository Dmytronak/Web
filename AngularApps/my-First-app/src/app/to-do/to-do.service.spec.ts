import { TestBed } from '@angular/core/testing';

import { TodoService } from './to-do.service';

describe('ToDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
