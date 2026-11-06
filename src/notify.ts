// DO NOT MODIFY THIS FILE.
// It simulates an unreliable third-party notification service.
// Treat it as an external dependency: build your solution around it, not into it.

const NETWORK_FAILURE_RATE = 0.2;
const INVALID_INBOX_PREFIX = "x";

export class NetworkError extends Error {
  name = "NetworkError";
}

export class InvalidInboxError extends Error {
  name = "InvalidInboxError";
}

export async function notify(email: string, message: string): Promise<void> {
  if (Math.random() < NETWORK_FAILURE_RATE) {
    throw new NetworkError("Network error while sending notification");
  }

  if (email.toLowerCase().startsWith(INVALID_INBOX_PREFIX)) {
    throw new InvalidInboxError(`Inbox is invalid: ${email}`);
  }

  console.log(`Notified ${email}: ${message}`);
}
