import type { Game } from "../types/game";

interface GameCardProps {
    game: Game;
}

export default function GameCard({ game }: GameCardProps) {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{game.name}</h2>
                <p>{game.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                        <span className="font-semibold">Category:</span> <span className="badge badge-primary">{game.category}</span>
                    </div>
                    <div>
                        <span className="font-semibold">Players:</span> {game.min_players}-{game.max_players}
                    </div>
                </div>
                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-amber-300 text-gray-800 w-10 rounded-full">
                                <span className="text-lg">AI</span>
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold">{game.created_by.username}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-sm">View comments</button>
                </div>
            </div>
        </div>
    );
}
