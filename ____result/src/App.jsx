import React from 'react';
import Container from "./Container";
import ErrorBoundary from "./ErrorBoundary";

const App = () => (
    <ErrorBoundary><Container /></ErrorBoundary>
);

export default App;