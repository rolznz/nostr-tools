import { verifiedSymbol, type Event, type Nostr, VerifiedEvent } from './core.ts'

export async function yieldThread() {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, 0)
  })
}

export const alwaysTrue: Nostr['verifyEvent'] = (t: Event): t is VerifiedEvent => {
  t[verifiedSymbol] = true
  return true
}
