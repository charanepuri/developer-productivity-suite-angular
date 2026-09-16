import {
  Injectable,
  inject
} from '@angular/core';

import {
  NavigationEnd,
  Router
} from '@angular/router';

import {
  filter
} from 'rxjs';

import {
  RecentToolsService
} from './recent-tools.service';

@Injectable({
  providedIn: 'root'
})
export class ToolUsageTrackerService {

  private readonly router =
    inject(Router);

  private readonly recentToolsService =
    inject(RecentToolsService);

  constructor() {

    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationEnd
        )
      )
      .subscribe(event => {

        this.trackRoute(
          event.urlAfterRedirects
        );

      });

  }

  private trackRoute(url: string): void {

    const toolId =
      this.extractToolId(url);

    if (!toolId) {
      return;
    }

    this.recentToolsService
      .recordUsage(toolId);
  }

  private extractToolId(
    url: string
  ): string | null {

    const match =
      url.match(/^\/tools\/([^/?#]+)/);

    return match?.[1] ?? null;
  }
}