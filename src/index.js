import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import FetchClient from "./fetch-client";



const RenderApp = () => {
    return (
        <App />
    )
}

ReactDOM.render(<RenderApp />,document.getElementById('root'))
