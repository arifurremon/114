import type { BrowserOptions, NodeOptions } from "@sentry/nextjs";

const baseOptions = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "",
  tracesSampleRate: 0,
  enabled: false,
} as BrowserOptions | NodeOptions;

export function buildBaseSentryOptions(): BrowserOptions | NodeOptions {
  return baseOptions;
}
