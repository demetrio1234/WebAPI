import { Component } from '@angular/core';
import { AddCategoryRequest } from 'src/app/models/add-category-request.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  constructor() {
    this.model = {
      name: '',
      urlHandle: '',
    };
  }

  model: AddCategoryRequest;

  onSubmit() {
    console.log(this.model);
  }
}
