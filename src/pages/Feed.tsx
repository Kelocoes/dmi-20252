import { useEffect, useState } from "react";

import GameCard from "../components/GameCard";
import gameService from "../services/supabase/gameService";
import type { Game } from "../types/game";
import FloatingActionButton from "../components/FloatingActionButton";
import CreateGame from "../components/CreateGame";

export default function Feed() {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const fetchGames = async () => {
        try {
            const data = await gameService.getAll();
            setGames(data);
        } catch (error) {
            console.error("Error fetching games:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!modalOpen) {
            fetchGames();
        }
    }, [modalOpen]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Games Feed</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
            {modalOpen && (
                <dialog id="my_modal" className="modal modal-open">
                    <div className="modal-box">
                        <CreateGame onClose={() => setModalOpen(false)} />
                    </div>
                </dialog>
            )}
            <FloatingActionButton mainIcon="+" onClick={() => setModalOpen(true)} />
        </div>
    );
}
