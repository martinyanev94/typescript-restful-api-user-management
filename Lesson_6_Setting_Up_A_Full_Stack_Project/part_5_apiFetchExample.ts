app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API!', status: 'success' });
});
async function fetchApiData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    document.getElementById('app')!.innerText = data.message;
}

fetchApiData();
