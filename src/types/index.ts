export interface IJournalEntry {
    id: string;
    date: Date;
    reflection: string;
    skillsLearned: string[];
    thoughts: string;
}

export interface IClassProgress {
    className: string;
    completionStatus: boolean;
    skillsAcquired: string[];
}