import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  imports: [FormsModule],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.css'
})
export class CalculateComponent {

  n1: number = 0;
  n2: number = 0;
  result: number = 0;


  calculate() {
    this.result = Number(this.n1) + Number(this.n2);
  }
}
