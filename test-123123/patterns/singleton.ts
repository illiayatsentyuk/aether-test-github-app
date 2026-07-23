/**
 * Singleton — one shared instance across the app.
 * Demo: a simple app-wide logger.
 */
export class AppLogger {
  private static instance: AppLogger | null = null;
  private readonly logs: string[] = [];

  private constructor() {}

  static getInstance(): AppLogger {
    if (!AppLogger.instance) {
      AppLogger.instance = new AppLogger();
    }
    return AppLogger.instance;
  }

  /** Test helper — reset between demos if needed. */
  static resetForDemo(): void {
    AppLogger.instance = null;
  }

  info(message: string): void {
    const entry = `[INFO] ${message}`;
    this.logs.push(entry);
    console.log(entry);
  }

  getLogs(): readonly string[] {
    return this.logs;
  }
}
