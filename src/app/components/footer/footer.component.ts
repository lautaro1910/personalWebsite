import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  linkedinUrl = 'https://www.linkedin.com/in/lautaro-soria/';
  email = 'd.lautaro.soria@gmail.com';
  githubUrl = 'https://github.com/lautaro1910';

}
