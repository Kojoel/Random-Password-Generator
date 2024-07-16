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
  private readonly lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  private readonly uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly digitChars = '0123456789';
  private readonly specialChars = '!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';

  generatedPw: string = "SEL23X832";
  charLength: number = 10;
  progressBar: number = 10;
  upperCaseIncluded: boolean = true;
  lowerCaseIncluded: boolean = true;
  numbersIncluded: boolean = true;
  symbolsIncluded: boolean = false;

  generatePassword(): void {
    let charSet = '';
    if (this.upperCaseIncluded) charSet += this.uppercaseChars;
    if (this.lowerCaseIncluded) charSet += this.lowercaseChars;
    if (this.numbersIncluded) charSet += this.digitChars;
    if (this.symbolsIncluded) charSet += this.specialChars;

    if (charSet.length === 0) {
      throw new Error('Please select at least one character set option');
    }

    let password = '';
    for (let i = 0; i < this.charLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
    this.generatedPw = password;
    // return password;
  }


  ratePasswordStrength(password: string): string {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()-_=+[{]}\\\|;:\'\",<.>\/\?]/.test(password);

    const typesCount = [hasLowercase, hasUppercase, hasDigits, hasSpecialChars].filter(Boolean).length;

    if (password.length < 8) {
      return 'Too Weak';
    } else if (password.length >= 8 && typesCount === 1) {
      return 'Weak';
    } else if (password.length >= 8 && typesCount >= 2) {
      return 'Medium';
    } else if (password.length >= 12 && typesCount >= 3) {
      return 'Strong';
    } else {
      return 'Medium'; // Default to Medium if none of the above conditions are met
    }
  }

  
  

}
