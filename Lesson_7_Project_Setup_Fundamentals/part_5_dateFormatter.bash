npm install date-fns
import { format } from 'date-fns';

const currentDate = new Date();
console.log(`Current date: ${format(currentDate, 'yyyy-MM-dd')}`);
