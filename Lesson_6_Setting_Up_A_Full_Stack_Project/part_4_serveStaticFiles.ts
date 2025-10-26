import path from 'path';

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
npm start
