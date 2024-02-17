import { Component } from '@angular/core';
import { MenuTittleComponent } from "../../components/menu-tittle/menu-tittle.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component"
import { BigCardComponent } from "../../components/big-card/big-card.component"
import { SmallCardComponent } from "../../components/small-card/small-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTittleComponent, BigCardComponent, MenuBarComponent, SmallCardComponent]
})
export class HomeComponent {

}
