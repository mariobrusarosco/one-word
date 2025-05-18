# Implementing Participant Exit Notifications

This document explains how we've implemented the toast notifications that appear when a participant exits a game.

## Overview

When a participant leaves a game (either by explicitly leaving or disconnecting), the server sends a `game-participant-exit` event to all remaining participants. The frontend listens for this event and displays a toast notification.

## Implementation Details

### 1. Socket Event Handling

The participant exit events are handled in the `useGameSocket` hook:

```typescript
// src/domains/games/hooks/use-game-socket.ts
const watchForParticipantExits = useCallback(() => {
  tableId && on<IGameParticipantExitPayload>(
    SocketEvents.GAME_PARTICIPANT_EXIT,
    (exitData) => {
      // Show toast notification with custom styling
      toast({
        title: "Participant Left",
        description: exitData.message,
        variant: "destructive",
        duration: 5000,
      });
    }
  );
}, [tableId, on, toast]);
```

### 2. Toast Notification System

We're using the app's toast notification system powered by the `useToast` hook from our UI system. The toast component is already included in the app's root layout.

### 3. Event Structure

The participant exit event payload has the following structure:

```typescript
interface IGameParticipantExitPayload {
  user: {
    userID: string;
    username: string;
  };
  message: string; // e.g., "Username has left the game"
  timestamp: string; // ISO date string
}
```

## Testing

To test the participant exit notifications:

1. Start the API server: `yarn dev` in the api-one-word directory
2. Start the frontend: `yarn dev` in the one-word directory
3. Open two browser windows and log in with different accounts
4. Both users should join the same game
5. Have one user leave the game by either:
   - Clicking a "Leave Game" button
   - Closing their browser tab
6. The remaining user should see a toast notification saying "[Username] has left the game"

## Customization

### Styling the Toast

You can customize the appearance of the toast by modifying the `toast` call:

```typescript
toast({
  title: "Custom Title",
  description: exitData.message,
  variant: "default", // or "destructive" for error-styled toast
  duration: 3000, // duration in milliseconds
});
```

### Adding Sound Effects

If you want to add sound effects when a participant leaves:

```typescript
// Play a sound when a participant exits
const audio = new Audio('/sounds/participant-exit.mp3');
audio.volume = 0.5;
audio.play().catch(() => {
  // Handle errors if sound can't be played
});
```

Make sure to add the sound file to the public directory.

## Future Enhancements

Potential future enhancements could include:

1. Customized toast appearance based on the participant's role or status
2. Different notifications for explicit exits vs. disconnections
3. Persistent history of participant joins/exits in a game session 