import { Submission, CreatorSubmission, BrandSubmission, ExportData } from '../types';

const STORAGE_KEY = 'linkfluence_submissions';

export const saveSubmission = (submission: Omit<Submission, 'id' | 'timestamp'>): void => {
  const submissions = getSubmissions();
  const newSubmission: Submission = {
    ...submission,
    id: generateId(),
    timestamp: new Date().toISOString(),
  };
  
  submissions.push(newSubmission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};

export const getSubmissions = (): Submission[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const clearSubmissions = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const exportToCSV = (): void => {
  const submissions = getSubmissions();
  const exportData: ExportData[] = submissions.map(submission => ({
    clientName: submission.name,
    email: submission.email,
    niche: submission.type === 'creator' 
      ? (submission as CreatorSubmission).niche 
      : (submission as BrandSubmission).category,
    type: submission.type,
    timestamp: new Date(submission.timestamp).toLocaleString()
  }));

  const headers = ['Client Name', 'Email', 'Niche/Category', 'Type', 'Timestamp'];
  const csvContent = [
    headers.join(','),
    ...exportData.map(row => [
      `"${row.clientName}"`,
      `"${row.email}"`,
      `"${row.niche}"`,
      `"${row.type}"`,
      `"${row.timestamp}"`
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `linkfluence_submissions_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};