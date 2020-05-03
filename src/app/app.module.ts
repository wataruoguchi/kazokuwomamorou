import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SituationComponent } from './components/situation/situation.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';

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
  providers: [Meta, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
