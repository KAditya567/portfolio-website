import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AllComponent } from '../all/all.component';
import { GraphicComponent } from '../graphic/graphic.component';
import { UiComponent } from '../ui/ui.component';
import { WebComponent } from '../web/web.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive,AllComponent,GraphicComponent,UiComponent,WebComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
