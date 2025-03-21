export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
} as const;

export const formatDate = (date: string | null): string => {
  if (!date) return 'Unknown';
  
  const dateObj = new Date(date);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  return new Intl.DateTimeFormat('en-US', {
    ...DATE_FORMAT_OPTIONS,
    timeZone: userTimezone,
  }).format(dateObj);
}; 