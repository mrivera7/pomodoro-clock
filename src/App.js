import React from 'react';

import Layout from './components/Layout';
import PomodoroClock from './components/pomodoro-clock';

function App() {
    return(
        <>
            <Layout>
                <PomodoroClock />
            </Layout>
        </>
    );
}

export default App;