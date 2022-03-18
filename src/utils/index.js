import { format } from 'date-fns';

export function formatDate(date) {
  try {
    return format(new Date(date), 'eee d MMM');
  } catch (err) {
    return '';
  } // this date formatting exemple : Fri 18 Mar
}
