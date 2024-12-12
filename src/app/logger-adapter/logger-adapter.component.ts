import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { LegacyLogger } from './logger-legacy.service';
import { LoggerAdapter } from './logger-adapter.service';
import { ImprovedLogger } from './logger-improved.service';

@Component({
  selector: 'app-logger-adapter',
  imports: [],
  templateUrl: './logger-adapter.component.html',
  styleUrl: './logger-adapter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ImprovedLogger,
    {
      provide: LegacyLogger,
      useClass: LoggerAdapter,
    },
  ],
})
export class LoggerAdapterComponent implements OnInit {
  logger = inject(LegacyLogger);

  ngOnInit() {
    this.logger.log();
  }
}
