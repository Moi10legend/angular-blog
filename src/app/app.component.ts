import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTittleComponent } from "./components/menu-tittle/menu-tittle.component";
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from "./pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuTittleComponent, HomeComponent, MenuBarComponent]
})
export class AppComponent {
  title = 'angula-blog';
}
