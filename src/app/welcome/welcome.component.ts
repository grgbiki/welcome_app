import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  displayWelcome = true;
  displayAbout = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAbout() {
    this.displayWelcome = false;
    this.displayAbout = true;
  }

}
