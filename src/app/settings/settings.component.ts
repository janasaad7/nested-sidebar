import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {SubSidebarComponent} from '../sub-sidebar/sub-sidebar.component';

@Component({
  selector: 'app-settings',
  imports: [
    RouterOutlet,
    NavbarComponent,
    SubSidebarComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
