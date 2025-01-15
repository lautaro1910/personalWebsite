import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() pageChanged: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(component: string): void {
    this.pageChanged.emit(component);
  }

}
