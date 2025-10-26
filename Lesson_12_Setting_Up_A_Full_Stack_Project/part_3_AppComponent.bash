cd client
npx create-react-app . --template typescript
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000');
            const data = await response.text();
            setMessage(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Full-stack Application</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
