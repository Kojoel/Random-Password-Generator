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

  generatedPw: string = "";
  charLength: number = 10;
  progressBar: number = 10;
  passwordStrength: string = '';
  upperCaseIncluded: boolean = true;
  lowerCaseIncluded: boolean = true;
  numbersIncluded: boolean = true;
  symbolsIncluded: boolean = false;
  isActive : boolean = true;

  generatePassword(): string {
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

    return password;
  }

  ratePasswordStrength(): void {
    let password = this.generatePassword();
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()\-=+[{\]}\\|;:'",<.>\/?]/.test(password);

    const typesCount = [hasLowercase, hasUppercase, hasDigits, hasSpecialChars].filter(Boolean).length;

    if(password.length < 8) {
      this.passwordStrength = 'Too Weak';
    }
    else if(password.length >= 8 && typesCount === 1) {
      this.passwordStrength = 'Weak';
    }
    else if(password.length >= 8 && password.length <12 && typesCount >= 2) {
      this.passwordStrength = 'Medium';
    }
    else if(password.length >= 12 && typesCount >= 3) {
      this.passwordStrength = 'Strong';
    }
    else this.passwordStrength = 'Medium';
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  toggleNotice(): void {
    const copiedNotice = document.querySelector('.copied-notice');
      copiedNotice?.classList.toggle('active');
  }

  hideNotice(): void {
    const copiedNotice = document.querySelector('.copied-notice');
    copiedNotice?.classList.remove('active');
  }

}
