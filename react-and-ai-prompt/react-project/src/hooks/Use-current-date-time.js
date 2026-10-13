

import { useState, useEffect } from 'react';

export function useCurrentDateTime() {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        setCurrentDateTime(formattedDateTime);
    }, []);

    return currentDateTime;
}