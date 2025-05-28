import { Router } from 'express';
import { JournalEntry } from '../components/JournalEntry';
import { ProgressTracker } from '../components/ProgressTracker';
import { SummaryGenerator } from '../components/SummaryGenerator';
import { journalService } from '../services/journalService';
import { aiService } from '../services/aiService';

const router = Router();

const journalEntry = new JournalEntry();
const progressTracker = new ProgressTracker();
const summaryGenerator = new SummaryGenerator();

router.post('/journal', (req, res) => {
    const entryData = req.body;
    const newEntry = journalEntry.create(entryData);
    journalService.saveEntry(newEntry);
    res.status(201).json(newEntry);
});

router.get('/journal/:id', (req, res) => {
    const entry = journalService.getEntry(req.params.id);
    res.status(200).json(entry);
});

router.get('/progress', (req, res) => {
    const progressReport = progressTracker.generateReport();
    res.status(200).json(progressReport);
});

router.get('/summary', (req, res) => {
    const summary = summaryGenerator.generate();
    res.status(200).json(summary);
});

export const setRoutes = (app) => {
    app.use('/api', router);
};