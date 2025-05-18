import React from 'react';
import { Avatar, AvatarFallback } from '@/domains/ui-system/components/ui/avatar';
import { Icon } from '@/domains/ui-system/components/ui/icon/icon';

interface ParticipantExitToastProps {
  username: string;
  message: string;
  timestamp: string;
}

/**
 * Component to display a toast notification when a participant exits a game
 */
export const ParticipantExitToast: React.FC<ParticipantExitToastProps> = ({ 
  username, 
  message, 
}) => {
  return (
    <div className="flex items-start space-x-2 bg-destructive/15 p-3 rounded-md border border-destructive/30">
      <Icon name="user" className="h-4 w-4 text-red-500 mt-1" />
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9 border-2 border-red-500/20">
          <AvatarFallback className="bg-red-500/10 text-red-500">
            {username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h5 className="text-sm font-semibold">Participant Left</h5>
          <p className="text-xs text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
}; 