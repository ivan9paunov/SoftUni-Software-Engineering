import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.jsx";
import { useEffect, useState } from "react";
import gamesAPI from "../../api/games-api.js";

export default function UnauthorizedGuard() {
    const { userId } = useAuthContext();
    const { gameId } = useParams();
    const [isOwner, setIsOwner] = useState(null);
    
    useEffect(() => {
        const checkOwnership = async () => {
            if (!userId) {
                setIsOwner(false);
                return;
            }
            
            try {
                const game = await gamesAPI.getOne(gameId);
                setIsOwner(game && game._ownerId == userId);
            } catch (error) {
                console.error('Error fetching report:', error);
                setIsOwner(false);
            }
        };
        
        checkOwnership();
    }, [userId, gameId]);
    
    if (isOwner == null) {
        return;
    }
    
    return isOwner
        ? <Outlet />
        : <Navigate to={`/games/${gameId}/details`} />;
}