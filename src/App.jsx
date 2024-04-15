import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleClick(clickedBtn) {
        setSelectedTopic(clickedBtn);
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
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>

                    <menu>
                        <TabButton onClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton onClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton onClick={() => handleClick('state')}>State</TabButton>
                    </menu>

                    <p>{selectedTopic}</p>
                </section>
            </main>
        </div>
    );
}

export default App;