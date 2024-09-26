import { Component } from '@angular/core';
import 'jquery';
import Typed from 'typed.js';
import { AboutComponent } from "../about/about.component";
import { ResumeComponent } from "../resume/resume.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from "../contact/contact.component";
declare var $:any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ResumeComponent, PortfolioComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    const typed = new Typed('#role', {
      strings: ['Designer', 'Developer'],
      loop: true,
      typeSpeed: 50,
      backSpeed: 60,
    });
  }
}
