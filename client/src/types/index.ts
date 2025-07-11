export interface CreatorSubmission {
  id: string;
  name: string;
  email: string;
  niche: string;
  timestamp: string;
  type: 'creator';
}

export interface BrandSubmission {
  id: string;
  name: string;
  email: string;
  category: string;
  timestamp: string;
  type: 'brand';
}

export type Submission = CreatorSubmission | BrandSubmission;

export interface ExportData {
  clientName: string;
  email: string;
  niche: string;
  type: string;
  timestamp: string;
}</parameter>