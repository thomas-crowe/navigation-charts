'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppConfig, ScreenConfig } from '@/types';
import Tile from './Tile';

interface TileCanvasProps {
  config: AppConfig;
}

export default function TileCanvas({ config }: TileCanvasProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentScreenId = searchParams.get('screen') || config.initialScreenId;
  const currentScreen: ScreenConfig | undefined = config.screens[currentScreenId];

  if (!currentScreen) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Screen not found</h1>
        <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-primary text-white rounded-lg"
        >
            Return Home
        </button>
      </div>
    );
  }

  const handleTileClick = (targetId: string) => {
    // If targetId is not in config, maybe it's an external link or terminal state?
    // For now, assume all targets are screens.
    // We update the URL query parameter.
    const params = new URLSearchParams(searchParams.toString());
    params.set('screen', targetId);
    router.push(`?${params.toString()}`);
  };

  const handleBack = () => {
      router.back();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark p-6">
      <header className="mb-8 flex items-center justify-between">
         <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          {currentScreen.title}
        </h1>
        {currentScreenId !== config.initialScreenId && (
            <button
                onClick={handleBack}
                className="text-lg font-medium text-primary hover:underline"
            >
                Back
            </button>
        )}
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto">
        {currentScreen.tiles.length === 0 ? (
           <div className="text-center mt-20">
             <p className="text-2xl text-gray-600 dark:text-gray-400">No options available here.</p>
           </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentScreen.tiles.map((tile, index) => (
                <Tile
                    key={`${tile.label}-${index}`}
                    tile={tile}
                    onClick={handleTileClick}
                />
            ))}
            </div>
        )}
      </main>
    </div>
  );
}
