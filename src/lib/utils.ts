import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  if (!dateString || dateString === 'Present') return dateString;
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  });
}

export function getYearFromDate(dateString: string): string {
  if (!dateString || dateString === 'Present') return dateString;
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  
  return date.getFullYear().toString();
}
