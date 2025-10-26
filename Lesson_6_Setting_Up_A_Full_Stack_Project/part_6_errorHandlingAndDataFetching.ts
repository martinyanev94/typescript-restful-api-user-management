app.use((req, res) => {
    res.status(404).send('404 Not Found');
});
async function fetchApiData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('app')!.innerText = data.message;
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('app')!.innerText = 'Failed to fetch data';
    }
}
