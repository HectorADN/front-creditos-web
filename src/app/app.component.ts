import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/ui/header/header.component";
import { FooterComponent } from "./shared/ui/footer/footer.component";

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es-CL';

registerLocaleData( localEs );

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ]
})
export class AppComponent {
  title = 'FrontCreditos-Web';
}
