import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders-create.component.html',
  styleUrl: './orders-create.component.css'
})
export class OrdersCreateComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({   
      nombre: new FormControl('', [Validators.required ,Validators.min(3)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Implementar enviar los datos
      console.log(this.myForm.value);
    }
  }
}
