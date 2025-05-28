export class ProgressTracker {
    private progressEntries: { classId: number; completed: boolean; skillsLearned: string[] }[];

    constructor() {
        this.progressEntries = [];
    }

    addEntry(classId: number, completed: boolean, skillsLearned: string[]): void {
        this.progressEntries.push({ classId, completed, skillsLearned });
    }

    calculateProgress(): number {
        const totalClasses = 150;
        const completedClasses = this.progressEntries.filter(entry => entry.completed).length;
        return (completedClasses / totalClasses) * 100;
    }

    generateProgressReport(): string {
        const completedClasses = this.progressEntries.filter(entry => entry.completed);
        const report = completedClasses.map(entry => {
            return `Class ID: ${entry.classId}, Skills Learned: ${entry.skillsLearned.join(', ')}`;
        }).join('\n');

        return `Progress Report:\n${report}\nTotal Progress: ${this.calculateProgress().toFixed(2)}%`;
    }
}