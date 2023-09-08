import { NgModule } from '@angular/core';
import { ServersComponent } from './servers.component';
import { ServerModule } from '../server/server.module';

@NgModule({
  declarations: [ServersComponent],
  imports: [ServerModule],
  exports: [ServersComponent],
  bootstrap: [ServersComponent],
})
export class ServersModule {}
