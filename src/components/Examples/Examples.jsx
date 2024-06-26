import { useState } from 'react';
import { EXAMPLES } from '../../data.js';

import Section from '../Section/Section.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import TabButton from '../TabButton/TabButton.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(clickedBtn) {
        setSelectedTopic(clickedBtn);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    const buttons = (
        <>
            <TabButton
                isSelected={selectedTopic === 'components'}
                onClick={() => handleClick('components')}
            >
                Components
            </TabButton>
            <TabButton
                isSelected={selectedTopic === 'jsx'}
                onClick={() => handleClick('jsx')}
            >
                JSX
            </TabButton>
            <TabButton
                isSelected={selectedTopic === 'props'}
                onClick={() => handleClick('props')}
            >
                Props
            </TabButton>
            <TabButton
                isSelected={selectedTopic === 'state'}
                onClick={() => handleClick('state')}
            >
                State
            </TabButton>
        </>
    );

    return (
        <Section id="examples" title="Examples">
            <Tabs
                buttons={buttons}
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}