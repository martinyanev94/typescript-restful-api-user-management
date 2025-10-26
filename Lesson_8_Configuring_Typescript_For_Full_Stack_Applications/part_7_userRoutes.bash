mkdir src/routes
import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    const user = req.body;

    if (!user.name || !user.email) {
        return res.status(400).send({ message: 'Name and Email are required!' });
    }

    res.status(200).send({ message: 'User data received', user });
});

export default router;
import userRoutes from './routes/userRoutes';

app.use('/api/user', userRoutes);
