import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { User } from '@pevs/api-interfaces';
import { PevsButtonComponent } from '@pevs/shared-ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, PevsButtonComponent],
  selector: 'pevs-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pevs';

  user: User = {
    id: 1,
    name: 'PEVS',
    email: 'pevs@pevs.sk'
  };

}
