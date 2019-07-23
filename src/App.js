import React from 'react'
import Chosen from './components/chosen/Chosen';
import MarkdownEditor from './components/mark-down/Remarkable';
import JQuery from './components/JQuery/JQuery';

export default function App() {
    return (
        <div>
            React with Webpack from scratch!
            <Chosen />
            <MarkdownEditor />
            <JQuery />
        </div>
    )
}
