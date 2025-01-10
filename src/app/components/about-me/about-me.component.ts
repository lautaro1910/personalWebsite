import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: false,

  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {


  birthday: string = '19 oct 2000';
  linkedin: string = '/lautaro-soria';
  email: string = 'lautaro.s1910@gmail.com';
  email2: string = 'd.lautaro.soria@gmail.com';
  github: string = '/lautaro1910';
  education: string = 'Ingenieria Informatica';
  ingles: string = 'B2-C1';
}
