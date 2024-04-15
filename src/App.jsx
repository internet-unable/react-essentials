import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
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

    return (
        <div>
            <Header />

            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>

                    <ul>
                        {/* Example #1 */}
                        {/* <CoreConcept
                            image={CORE_CONCEPTS[0].image}
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                        />
                        <CoreConcept
                            image={CORE_CONCEPTS[1].image}
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                        />
                        <CoreConcept
                            image={CORE_CONCEPTS[2].image}
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                        />
                        <CoreConcept
                            image={CORE_CONCEPTS[3].image}
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                        /> */}

                        {/* Example #2 */}
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>

                    <menu>
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
                    </menu>
                    
                    {/* Example #1 */}
                    {/* {!selectedTopic ? <p>Please select a topic.</p> : (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )} */}

                    {/* Example #2 */}
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;