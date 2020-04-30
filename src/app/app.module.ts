import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SituationComponent } from './situation/situation.component';

@NgModule({
  declarations: [
    AppComponent,
    SituationComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ScrollToModule.forRoot()
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
