export type Genre = 'comedy' | 'history' | 'poetry' | 'tragedy' | 'glossary';
export type Work = { title: string; genre: Genre; content: string[] };

export const mobyShakespeare: Record<string, Work> = {};
