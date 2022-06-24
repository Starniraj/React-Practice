import React, { useState } from 'react';

const counterHoc = (Component, value) => {
    const UpgradeComponent = () => {
        const [counter, setCounter] = useState(0);

        const handleIncrement = () => setCounter(counter+value);

        return <Component counter ={counter}handleIncrement={handleIncrement}></Component>

    }
    return UpgradeComponent;
}

export default counterHoc;