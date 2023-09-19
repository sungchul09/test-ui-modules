export enum ECardLayout {
  VERTICAL = 'vertical',
  HORIZON = 'horizon',
}

export enum ECardTheme {
  DEFAULT = 'default',
  SIMPLE = 'simple',
  REMOVE = 'remove',
}

export type CardLayout = ECardLayout;
export type CardTheme = ECardTheme;
export type CardRating = 0 | 1 | 2 | 3 | 4 | 5;

export interface CardData {
  title: string;
  label: string;
  description: string;
  highlight: string;
  crossOut: string;
  reviewText: string;
  rating: number;
  author: string;
}
