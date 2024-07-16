import { Component } from '@angular/core';

@Component({
  selector: 'app-pg-card',
  standalone: true,
  imports: [],
  templateUrl: './pg-card.component.html',
  styleUrl: './pg-card.component.scss'
})
export class PgCardComponent {
  charLength: any;
  progressBar: any;
  isChecked = true;
  upperCaseCheck: any;

  ngOnInit() {
    this.charLength = document.querySelector('.char-length');
    this.progressBar= document.querySelector('.progressBar');
    this.upperCaseCheck = document.querySelector('#upperCaseIncluded');
  }

  getProgressValue = () => {
    this.charLength.textContent = this.progressBar.value;
    console.log(this.charLength.textContent);
  }
}
