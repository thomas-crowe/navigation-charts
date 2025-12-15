import React from 'react';
import { TileConfig } from '@/types';

interface TileProps {
  tile: TileConfig;
  onClick: (targetId: string) => void;
}

export default function Tile({ tile, onClick }: TileProps) {
  return (
    <button
      onClick={() => onClick(tile.targetId)}
      className="flex items-center justify-center p-8 bg-card-light dark:bg-card-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-800 w-full aspect-square"
    >
      <span className="text-3xl font-bold text-center text-gray-800 dark:text-white break-words">
        {tile.label}
      </span>
    </button>
  );
}
