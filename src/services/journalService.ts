import { JournalEntry } from '../models/JournalEntry';

const journalEntries: JournalEntry[] = [];

export const saveJournalEntry = (entry: JournalEntry): void => {
    journalEntries.push(entry);
};

export const getJournalEntries = (): JournalEntry[] => {
    return journalEntries;
};

export const deleteJournalEntry = (id: string): void => {
    const index = journalEntries.findIndex(entry => entry.id === id);
    if (index !== -1) {
        journalEntries.splice(index, 1);
    }
};