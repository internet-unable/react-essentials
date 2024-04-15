
import { CORE_CONCEPTS } from './data.js';
import reactImg from './assets/react-core-concepts.png';

const reactDiscriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDiscriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

// Example #1
// function CoreConcept(props) {
//     return (
//         <li>
//             <img src={props.image} alt={props.title} />
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </li>
//     );
// }

// Example #2
function CoreConcept({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

function App() {
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
            </main>
        </div>
    );
}

export default App;
