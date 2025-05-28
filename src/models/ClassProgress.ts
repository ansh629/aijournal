export class ClassProgress {
    className: string;
    completionStatus: boolean;
    skillsAcquired: string[];

    constructor(className: string, completionStatus: boolean, skillsAcquired: string[]) {
        this.className = className;
        this.completionStatus = completionStatus;
        this.skillsAcquired = skillsAcquired;
    }

    updateCompletionStatus(status: boolean): void {
        this.completionStatus = status;
    }

    addSkill(skill: string): void {
        this.skillsAcquired.push(skill);
    }

    getProgressSummary(): string {
        return `Class: ${this.className}, Completed: ${this.completionStatus}, Skills Acquired: ${this.skillsAcquired.join(', ')}`;
    }
}