import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pg-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pg-card.component.html',
  styleUrl: './pg-card.component.scss'
})
export class PgCardComponent {
  generatedPw: string = "SEL23X832";
  charLength: number = 10;
  progressBar: number = 10;

  // ngOnInit() {
  //   this.progressBar= document.querySelector('.progressBar');
  //   this.charLength = this.progressBar.value;
  // }

  // charLength: any;
  // progressBar: any;
  // isChecked = true;
  // upperCaseCheck: any;

  // ngOnInit() {
  //   this.charLength = document.querySelector('.char-length');
  //   this.progressBar= document.querySelector('.progressBar');
  //   this.upperCaseCheck = document.querySelector('#upperCaseIncluded');
  // }

  // getProgressValue = () => {
  //   this.charLength.textContent = this.progressBar.value;
  //   // console.log(this.charLength.textContent);
  //   console.log(this.upperCaseCheck);
  // }
}
