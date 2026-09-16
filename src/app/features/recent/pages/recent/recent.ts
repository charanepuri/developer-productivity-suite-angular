import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { Tool } from '../../../../core/models/tool.model';
import { ToolService } from '../../../../core/services/tool.service';
import { RecentToolsService } from '../../../../core/services/recent-tools.service';

@Component({
  selector: 'app-recent',
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './recent.html',
  styleUrl: './recent.css'
})
export class Recent {

  private readonly toolService =
    inject(ToolService);

  readonly recentToolsService =
    inject(RecentToolsService);

  readonly recentTools$ =
    this.recentToolsService.recentTools$.pipe(

      map(ids =>
        ids
          .map(id =>
            this.toolService.getToolById(id)
          )
          .filter(
            (tool): tool is Tool =>
              tool !== undefined
          )
      )

    );

  clearRecentTools(): void {
    this.recentToolsService.clear();
  }
}