export interface TileConfig {
  label: string;
  targetId: string;
}

export interface ScreenConfig {
  id: string;
  title: string;
  tiles: TileConfig[];
}

export interface AppConfig {
  initialScreenId: string;
  screens: Record<string, ScreenConfig>;
}
