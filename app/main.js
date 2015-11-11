import React from 'react';
import Header from './components/header.jsx';

main();

function main() {
        React.render(
        <Header />,
        document.getElementById('app')
    );
}