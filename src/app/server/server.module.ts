import { NgModule } from '@angular/core';
import { ServerComponent } from './server.component';

@NgModule({
  declarations: [ServerComponent],
  exports: [ServerComponent],
  bootstrap: [ServerComponent],
})
export class ServerModule {}
