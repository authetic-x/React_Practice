import React, {createContext, lazy, Suspense} from 'react';

const BatteryContext = createContext();

const AboutComponent = lazy(() => import('./about'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AboutComponent />
        </Suspense>
    );
}

export default App;