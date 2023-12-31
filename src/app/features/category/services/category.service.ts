import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from 'src/app/models/add-category-request.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`https://localhost:7100/api/categories`, model);
  }
}
