import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  text: string[] = [
    "Estudiante en Ing. Informatica",
    "Profesor Universitario aux.",
    "Desarrollador de Software",
    "Loco por la tecnologia"
  ];

  currentText: string = '';
  currentIndex: number = 0;

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let currentPhrase = this.text[this.currentIndex];
    let i = 0;

    const typingInterval = setInterval(() => {
      this.currentText = currentPhrase.slice(0, i);
      i++;

      if (i > currentPhrase.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.text.length; // Hacer bucle
          this.typeText(); // Pasar a la siguiente frase
        }, 1000); // Espera 1 segundo antes de comenzar con la siguiente frase
      }
    }, 100); // Velocidad de escritura
  }
}
