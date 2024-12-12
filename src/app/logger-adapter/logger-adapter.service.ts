import { Injectable } from '@angular/core';
import { ImprovedLogger } from './logger-improved.service';
import { LegacyLogger } from './logger-legacy.service';

@Injectable()
export class LoggerAdapter implements LegacyLogger {
  constructor(private improvedLogger: ImprovedLogger) {}

  log() {
    this.improvedLogger.loggerImproved();
  }
}
