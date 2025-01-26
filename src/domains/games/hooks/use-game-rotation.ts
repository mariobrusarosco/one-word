import { useState, useCallback, useEffect } from 'react'
import { IGamePartipant } from '../typing'
import { IMember } from '@/domains/auth/typing/enums-and-interfaces'

export const useGameRotation = ({ 
    gameParticipants, 
    member 
}: { 
    gameParticipants: IGamePartipant[], 
    member?: IMember 
}) => {
    const [leadPlayerIndex, setLeadPlayerIndex] = useState<number>(0);
    const [leadPlayer, setLeadPlayer] = useState('');
    const [isMemberLeadPlayer, setIsMemberLeadPlayer] = useState(false);


    
    // Initialize lead player when participants change
    useEffect(() => {
        if (gameParticipants.length > 0) {
            const firstPlayer = gameParticipants[0];
            setLeadPlayer(firstPlayer.username);
            setLeadPlayerIndex(0);
            
            // Update isMemberLeadPlayer
            if (member) {
                const memberFullName = `${member.firstName} ${member.lastName}`;
                setIsMemberLeadPlayer(firstPlayer.username === memberFullName);
            }
        } else {
            setLeadPlayer('');
            setLeadPlayerIndex(0);
            setIsMemberLeadPlayer(false);
        }
    }, [gameParticipants, member]);

    const rotateToNextPlayer = useCallback(() => {
        if (gameParticipants.length > 0) {
            const nextIndex = (leadPlayerIndex + 1) % gameParticipants.length;
            const nextPlayer = gameParticipants[nextIndex];
            
            setLeadPlayerIndex(nextIndex);
            setLeadPlayer(nextPlayer.username);
            
            // Update isMemberLeadPlayer after rotation
            if (member) {
                const memberFullName = `${member.firstName} ${member.lastName}`;
                setIsMemberLeadPlayer(nextPlayer.username === memberFullName);
            }
        }
    }, [gameParticipants, leadPlayerIndex, member]);

    console.log('[gameParticipants]', gameParticipants);

    
    return {
        gameParticipants,
        leadPlayer,
        leadPlayerIndex,
        isMemberLeadPlayer,
        rotateToNextPlayer
    };
}; 