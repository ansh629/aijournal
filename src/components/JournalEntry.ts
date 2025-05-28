class JournalEntry {
    id: number;
    date: Date;
    reflection: string;
    skillsLearned: string[];
    thoughts: string;

    constructor(id: number, date: Date, reflection: string, skillsLearned: string[], thoughts: string) {
        this.id = id;
        this.date = date;
        this.reflection = reflection;
        this.skillsLearned = skillsLearned;
        this.thoughts = thoughts;
    }

    updateReflection(newReflection: string): void {
        this.reflection = newReflection;
    }

    updateSkillsLearned(newSkills: string[]): void {
        this.skillsLearned = newSkills;
    }

    updateThoughts(newThoughts: string): void {
        this.thoughts = newThoughts;
    }

    static retrieveEntry(entry: JournalEntry): string {
        return `Entry ID: ${entry.id}\nDate: ${entry.date}\nReflection: ${entry.reflection}\nSkills Learned: ${entry.skillsLearned.join(', ')}\nThoughts: ${entry.thoughts}`;
    }
}

export default JournalEntry;