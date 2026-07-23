export function formatPhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + '…';
}
