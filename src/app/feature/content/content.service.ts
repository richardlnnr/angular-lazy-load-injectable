import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  constructor() { }

  getValue(): string {
    return 'Teste';
  }
}
