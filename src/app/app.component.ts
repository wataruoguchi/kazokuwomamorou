import {Component, OnInit} from '@angular/core';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {tipsData} from './situation/tips-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'kazokuwomamorou';

  faCaretRight = faCaretRight;

  situations = tipsData;

  urlToBeShared = 'https://make-2020-better.github.io/kazokuwomamorou/';
  lineShareLink = `https://social-plugins.line.me/lineit/share?url=${this.urlToBeShared}`;
  fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${this.urlToBeShared}`;
  twitterShareLink = `http://twitter.com/share?text=家族を守ろう − 自分と大切な人を守るために、今できること。&url=${this.urlToBeShared}`;

  isWidthSmall = false;

  ngOnInit(): void {
    if (window.screen.width <= 430) {
      this.isWidthSmall = true;
    }
  }
}
