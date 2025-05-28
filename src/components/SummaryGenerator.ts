export class SummaryGenerator {
    private journalEntries: any[];

    constructor(journalEntries: any[]) {
        this.journalEntries = journalEntries;
    }

    public compileSkills(): string[] {
        const skills: Set<string> = new Set();
        this.journalEntries.forEach(entry => {
            entry.skillsLearned.forEach(skill => skills.add(skill));
        });
        return Array.from(skills);
    }

    public createNarrativeSummary(): string {
        return this.journalEntries.map(entry => {
            return `On ${entry.date}, I reflected: "${entry.reflection}". I learned about ${entry.skillsLearned.join(', ')}.`;
        }).join('\n');
    }

    public generateMotivationalStatement(): string {
        const totalEntries = this.journalEntries.length;
        return `You've made significant progress with ${totalEntries} entries! Keep pushing forward and embrace the journey of learning.`;
    }

    public generateSummary(): string {
        const skills = this.compileSkills();
        const narrative = this.createNarrativeSummary();
        const motivation = this.generateMotivationalStatement();

        return `
        Skills Learned: ${skills.join(', ')}
        
        Narrative Summary:
        ${narrative}
        
        Motivation:
        ${motivation}
        `;
    }
}