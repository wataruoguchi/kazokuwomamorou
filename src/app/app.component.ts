import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { tipsData } from './components/situation/tips-data';
import { Meta } from '@angular/platform-browser';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'kazokuwomamorou';

  faCaretRight = faCaretRight;

  situations = tipsData;

  urlToBeShared = 'http://家族を守ろう.com';
  lineShareLink = `https://social-plugins.line.me/lineit/share?url=${this.urlToBeShared}`;
  fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${this.urlToBeShared}`;
  twitterShareLink = `http://twitter.com/share?text=家族を守ろう − 自分と大切な人を守るために、今できること。&url=${this.urlToBeShared}`;

  isWidthSmall = false;

  constructor(private metaService: Meta, public googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    if (window.screen.width <= 430) {
      this.isWidthSmall = true;
    }

    this.metaService.addTags([
      {name: 'og:site_name', content: '家族を守ろう'},
      {name: 'og:type', content: 'website'},
      {name: 'og:url', content: 'http://家族を守ろう.com'},
      {name: 'og:title', content: '家族を守ろう'},
      {name: 'og:description', content: '今を安全に過ごし、日常を早く取り戻すためにできることを状況別にまとめました。'},
      {name: 'og:image', content: 'https://kazoku-wo-mamorou.com/assets/ogp.png'},
      {name: 'twitter:card', content: 'summary_large_image'}
    ]);
  }

  sendClickEvent(situationId: string) {
    this.googleAnalyticsService.eventEmitter('page-link', situationId);
  }
}
