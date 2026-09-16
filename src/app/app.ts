import {
  Component,
  inject
} from '@angular/core';

import { AppShell } from './shared/components/app-shell/app-shell';

import {
  ToolUsageTrackerService
} from './core/services/tool-usage-tracker.service';

@Component({
  selector: 'app-root',
  imports: [AppShell],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private readonly toolUsageTracker =
    inject(ToolUsageTrackerService);

}