import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass'],
})
export class ServersComponent {
  @Input() name: string | undefined;
}
