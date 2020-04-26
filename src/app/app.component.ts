import { Component } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'kazokuwomamorou';

  faCaretRight = faCaretRight;

  situations = ['situation 1', 'situation 2', 'situation 3', 'situation 4', 'situation 5'];
}
