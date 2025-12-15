import React, { Suspense } from 'react';
import TileCanvas from '@/app/components/TileCanvas';
import configData from '@/data/config.json';
import { AppConfig } from '@/types';

// Cast the imported JSON to AppConfig
const config: AppConfig = configData as AppConfig;

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TileCanvas config={config} />
    </Suspense>
  );
}
