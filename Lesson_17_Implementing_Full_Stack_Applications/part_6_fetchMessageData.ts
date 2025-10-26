import { Message } from '../shared/types';

async function fetchData() {
    const response = await fetch('/api/data');
    const data: Message = await response.json();
    document.getElementById('message')!.innerText = data.message;
}

fetchData();
