import { Component } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { tipsData } from './situation/tips-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'kazokuwomamorou';

  faCaretRight = faCaretRight;

  situations = tipsData;
}
