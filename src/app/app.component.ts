import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio_lsoria';

  currentComponent: string = 'homePage';  // 'homePage' es el valor por defecto
  loading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  changePage(event: string): void {
    this.currentComponent = event;
  }
}