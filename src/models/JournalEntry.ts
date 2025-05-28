export class JournalEntry {
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

    updateReflection(newReflection: string) {
        this.reflection = newReflection;
    }

    addSkill(skill: string) {
        this.skillsLearned.push(skill);
    }

    getSummary() {
        return {
            date: this.date,
            reflection: this.reflection,
            skillsLearned: this.skillsLearned,
            thoughts: this.thoughts
        };
    }
}