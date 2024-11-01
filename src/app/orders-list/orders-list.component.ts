import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent {
emailDavid = "david@gmail.com"
emailLucas = "lucas@gmail.com"
emailTomas = "tomas@gmail.com"

fechaCompraDavid = "2024-02-12"
fechaCompraLucas = "2024-07-05"
fechaCompraTomas = "2024-06-02"

totalDavid = "$400"
totalLucas = "$700"
totalTomas = "$200"
}
