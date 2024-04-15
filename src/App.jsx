import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
    function handleClick() {
        console.log('Hello world! - different');
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
                        <TabButton onClick={handleClick}>Components</TabButton>
                        <TabButton onClick={handleClick}>JSX</TabButton>
                        <TabButton onClick={handleClick}>Props</TabButton>
                        <TabButton onClick={handleClick}>State</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;