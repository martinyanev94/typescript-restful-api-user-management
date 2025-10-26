app.post('/api/user', (req, res) => {
    const user = req.body;

    if (!user.name || !user.email) {
        return res.status(400).send({ message: 'Name and Email are required!' });
    }

    res.status(200).send({ message: 'User data received', user });
});
