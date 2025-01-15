import { Component, EventEmitter, Output } from '@angular/core';
import { WORKS } from '../../../assets/photos/files/mock-works';
import { EDUCATION } from '../../../assets/photos/files/mock-education';

@Component({
  selector: 'app-about-me',
  standalone: false,

  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @Output() inTouch: EventEmitter<string> = new EventEmitter<string>();

  linkedin: string = '/lautaro-soria';
  email: string = 'lautaro.s1910@gmail.com';
  email2: string = 'd.lautaro.soria@gmail.com';
  github: string = '/lautaro1910';
  education: string = 'Ingenieria Informatica';
  ingles: string = 'B2-C1';

  linkedinUrl = 'https://www.linkedin.com/in/lautaro-soria/';
  githubUrl = 'https://github.com/lautaro1910';

  worksArray = WORKS;
  educationArray = EDUCATION;

  getInTouch(component: string): void {
    this.inTouch.emit(component);
  }
}
