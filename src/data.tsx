import image from './images/dominik.jpg';

export const homePreview = <div>
    <img src={image} alt="" />
    <p>I am Dominik Künkele.<br />
        Software Developer and Computational Linguist.</p>
</div >

export interface ItemMeta {
    date: string,
    title: string,
    description: string
}

export interface Item {
    itemMeta: ItemMeta,
    itemPreview: JSX.Element
}

export const projects: Array<Item> = [
    {
        itemMeta: {
            date: '2025',
            title: 'Learning to Refer: How Scene Complexity Affects Emergent Communication in Neural Agents',
            description: 'Paper at IWCS 2025'
        },
        itemPreview: <div>
            <h1>Learning to Refer: How Scene Complexity Affects Emergent Communication in Neural Agents</h1>
            <p>Dominik Künkele, Simon Dobnik</p>
            <p><strong>Paper, published at <a href="https://iwcs2025.github.io/" target="_blank" rel="noreferrer"> IWCS 2025 <span className="material-symbols-outlined">open_in_new</span></a>, available <a href="https://preview.aclanthology.org/iwcs-25-ingestion/2025.iwcs-1.26/" target="_blank" rel="noreferrer"> here <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <h3>Abstract</h3>
            <p>We explore how neural network-based agents learn to map continuous sensory input to discrete linguistic symbols through interactive language games. One agent describes objects in 3D scenes using invented vocabulary; the other interprets references based on attributes like shape, color, and size. Learning is guided by feedback from successful interactions. We extend the CLEVR dataset with more complex scenes to study how increased referential complexity impacts language acquisition and symbol grounding in artificial agents.</p>
            <h3>Code</h3>
            <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis" target="_blank" rel="noreferrer">
                Experiments <span className="material-symbols-outlined">open_in_new</span>
            </a><br />
            <a href='https://github.com/DominikKuenkele/MLT_Master-Thesis_clevr-dataset-gen' target="_blank" rel="noreferrer">
                Generation of datasets <span className="material-symbols-outlined">open_in_new</span>
            </a>

            <h3>Datasets</h3>
            <a href="https://nextcloud.dominik-kuenkele.de/s/WMSEdMok962L266" target="_blank" rel="noreferrer">
                CLEVR Dale-2 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/Dkc7cL5c9RWe8gc" target="_blank" rel="noreferrer">
                CLEVR Dale-5 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/foqFo5oJ6Tdgm5x" target="_blank" rel="noreferrer">
                CLEVR Color <span className="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
    },
    {
        itemMeta: {
            date: '2024',
            title: 'Emergence of referring expressions through language games',
            description: 'Master thesis at Göteborg universitet'
        },
        itemPreview: <div>
            <h1>Emergence of referring expressions through language games</h1>
            <p>Dominik Künkele</p>
            <p><strong>Master thesis, published at <a href="https://gupea.ub.gu.se/handle/2077/83854" target="_blank" rel="noreferrer"> Göteborgs universitet <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <h3>Abstract</h3>
            <p>There has been a recent focus on how neural agents in language games ground referring expressions in visual 3D-scenes. This thesis explores when referring expressions emerge and if they align with referring expression found in natural languages like English. For this, multiple new artificial datasets based on the CLEVR dataset are generated to control precisely for the bias included in the visual scenes, namely the attributes of the target object and distractors. The datasets and their controlled biases are validated in a series of reference expression generation and comprehension tasks. A sender and a receiver are playing language games in which they need to communicate referring expressions to solve the same tasks. For many tasks, they are able to successfully ground referring expressions in their own emerged language. An analysis of the emerged languages shows that the emerged referring expressions are aligned very few with natural language referring expressions. However, they share certain features like an incremental approach in which some attributes are consistently used more often than others.</p>
            <h3>Code</h3>
            <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis" target="_blank" rel="noreferrer">
                Experiments <span className="material-symbols-outlined">open_in_new</span>
            </a><br />
            <a href='https://github.com/DominikKuenkele/MLT_Master-Thesis_clevr-dataset-gen' target="_blank" rel="noreferrer">
                Generation of datasets <span className="material-symbols-outlined">open_in_new</span>
            </a>

            <h3>Datasets</h3>
            <a href="https://nextcloud.dominik-kuenkele.de/s/WMSEdMok962L266" target="_blank" rel="noreferrer">
                CLEVR Dale-2 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/Dkc7cL5c9RWe8gc" target="_blank" rel="noreferrer">
                CLEVR Dale-5 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/pqLTRMp9qZXp7Zn" target="_blank" rel="noreferrer">
                CLEVR Single <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/foqFo5oJ6Tdgm5x" target="_blank" rel="noreferrer">
                CLEVR Color <span className="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
    },
    {
        itemMeta: {
            date: '2023',
            title: 'Referring as a collaborative process: learning to ground language through language games',
            description: 'Short paper at Semdial 2023'
        },
        itemPreview: <div>
            <h1>Referring as a collaborative process: learning to ground language through language games</h1>
            <p>Dominik Künkele, Simon Dobnik</p>
            <p><strong>Short paper, published in <a href="https://mezzanine.um.si/en/conference/semdial-2023-marilogue/" target="_blank" rel="noreferrer">SemDial 2023 <span className="material-symbols-outlined">open_in_new</span></a>, available <a href="http://semdial.org/anthology/Z23-Kunkele_semdial_0020.pdf" target="_blank" rel="noreferrer"> here <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <h3>Abstract</h3>
            <p>How do artificial agents based on neural networks coordinate on a new language through referential games over 3-d scenes?
                We extend a popular CLEVR dataset to control for different combinations of features of target and distractor objects and examine the success of referential grounding learned by the agents.</p>
            <h3>Code</h3>
            <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis" target="_blank" rel="noreferrer">
                Experiments <span className="material-symbols-outlined">open_in_new</span>
            </a><br />
            <a href='https://github.com/DominikKuenkele/MLT_Master-Thesis_clevr-dataset-gen' target="_blank" rel="noreferrer">
                Generation of datasets <span className="material-symbols-outlined">open_in_new</span>
            </a>

            <h3>Datasets</h3>
            <a href="https://nextcloud.dominik-kuenkele.de/s/WMSEdMok962L266" target="_blank" rel="noreferrer">
                CLEVR Dale-2 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/Dkc7cL5c9RWe8gc" target="_blank" rel="noreferrer">
                CLEVR Dale-5 <span className="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
    },
    {
        itemMeta: {
            date: '2023\n - today',
            title: 'This website',
            description: 'Web development'
        },
        itemPreview: <div>
            <h1>This website</h1>
            <p><strong>available on <a href="https://github.com/DominikKuenkele/website" target="_blank" rel="noreferrer"> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <p>I have set up my web presence based on the React framework. This website is hosted through a Docker container on my server.
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2023',
            title: 'A young boy with a tree made of trees: Domain Adaptation of an LSTM-based Image Caption Generation Model',
            description: 'Student paper'
        },
        itemPreview: <div>
            <h1>A young boy with a tree made of trees: Domain Adaptation of an LSTM-based Image Caption Generation Model</h1>
            <p>Dominik Künkele, Maria Szawerna</p>
            <p><strong>Student paper, available on <a href="https://github.com/Turtilla/aics-project/blob/main/paper/paper.pdf" target="_blank" rel="noreferrer"> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <h3>Abstract</h3>
            <p>Within this project we aim to explore how fine-tuning a CNN and LSTM-based image captioning model on a new dataset influences its performance on both the old and new data, along with what role some of the parameters, such as fine-tuning data size or the prevalence of out-of-vocabulary tokens in captions play in the process. We discover that differences in vocabulary play a major role and that providing too much fine-tuning data can cause the whole system to fail. We conclude that domain adaptation can be difficult to carry out, but perhaps worth attempting in certain cases.</p>
            <h3>Code</h3>
            <a href="https://github.com/Turtilla/aics-project/tree/main" target="_blank" rel="noreferrer">
                Experiments <span className="material-symbols-outlined">open_in_new</span>
            </a><br />
        </div>
    },
    {
        itemMeta: {
            date: '2022',
            title: 'Empires',
            description: 'Dialogue driven game'
        },
        itemPreview: <div>
            <h1>Empires</h1>
            <p><strong>available on <a href="https://github.com/DominikKuenkele/MLT_Dialogue-Systems_empires" target="_blank" rel="noreferrer"> Github <span className="material-symbols-outlined">open_in_new</span></a>, play it <a href="https://empires.dominik-kuenkele.de" target="_blank" rel="noreferrer"> here <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <p>I have developed a strategy game which the player can control through an interactive dialogue with a chatbot. Hereby, the player can use natural language to express their moves while the game can respond, clarify or execute the proper action with variability. The whole game is implemented in React, using the XState framework to control the game flow. Voice is transcribed and generated through Microsoft Azure services and subsequently parsed with the help of Rasa.
            </p>
            <h3>Code</h3>
            <a href="https://github.com/DominikKuenkele/MLT_Dialogue-Systems_empires" target="_blank" rel="noreferrer">
                Game <span className="material-symbols-outlined">open_in_new</span>
            </a><br />
            <a href='https://github.com/DominikKuenkele/MLT_Dialogue-Systems_empires-rasa' target="_blank" rel="noreferrer">
                Rasa server <span className="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
    },
    {
        itemMeta: {
            date: '2022',
            title: 'Non-lexical sounds in dialogue utterances',
            description: 'Student project'
        },
        itemPreview: <div>
            <h1>Non-lexical sounds in dialogue utterances</h1>
            <p><strong>available on <a href="https://github.com/DominikKuenkele/MLT_Machine-Learning-2_non-lexical-sounds" target="_blank" rel="noreferrer"> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <p>Human dialogue is composed of more than only words and grammar rules. Elements like repetitions, change in prosody or non-lexical sounds make it sound natural. To understand how to transfer this naturalness to conversational agents, I analyzed the usage of non-lexical sounds in human dialogues. I have conducted several experiments to find ways to include them in generated utterances.
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2021\n- today',
            title: 'Private cloud',
            description: 'GitOps, CI/CD, Containerization'
        },
        itemPreview: <div>
            <h1>Private cloud</h1>
            <p>
                <ul>
                    <li>Set up of a Kubernetes cluster that provides a Nextcloud instance, a Mail server, a Wireguard server, a GitLab instance and a web presence, which are served through a Traefik reverse proxy</li>
                    <li>Implementation of a GitOps process with GitLab CI and ArgoCD to provide reproducible and automated deployments</li>
                </ul>
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2015\n- 2022',
            title: 'Web presence of handball club SG Weinstadt',
            description: 'Web development'
        },
        itemPreview: <div>
            <h1>Web presence of the handball club SG Weinstadt</h1>
            <p><strong>available <a href="www.sg-weinstadt.de" target="_blank" rel="noreferrer"> here <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <p>After the original website of my local handball club generated few views and was outdated, I modernized it into a new web presence. For this new website I developed among others a tool in PHP that presents the standings of the teams and the results of their matches. Today, the website is visited several hundred times a day.
            </p>
        </div>
    }
]


export const education: Array<Item> = [
    {
        itemMeta: {
            date: '2021\n- 2024',
            title: 'Language Technology',
            description: 'Master of Arts | Göteborg Universitet | Sweden'
        },
        itemPreview: <div>
            <h1>Language Technology</h1>
            <p>This Master's programme evolves around Natural Language Processing with a high focus on modern approaches as for instance attention and transformer based models. During the courses, we discussed fundamental and recent publications. Based on this, we were working on both theoretical research-based projects and on implementing practical applications.
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2022',
            title: 'Ethical Hacking',
            description: 'Freestanding course | Kungliga Tekniska högskolan Stockholm | Sweden'
        },
        itemPreview: <div>
            <h1>Ethical Hacking</h1>
            <p>To broaden my understanding of IT security I applied for the 'Ethical Hacking' course. In this course we were tasked in attacking a vulnerable system in many different ways. That includes password cracking, attacking web services, databases and networks, and gaining root access on servers, I use the gained knowledge to run services safely in a production environment accessible over the internet.
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2016\n- 2019',
            title: 'Wirtschaftsinformatik (Business Information Systems - Application Management)',
            description: 'Bachelor of Science | DHBW Stuttgart, Mahle GmbH | Germany'
        },
        itemPreview: <div>
            <h1>Wirtschaftsinformatik (Business Information Systems - Application Management)</h1>
            <p>In this Bachelor's programme I alternated every three months between taking courses at the DHBW university and working at MAHLE. The focus of the lectures lied on computer science, economics and management which we could directly apply in the practical phases at MAHLE. During this time, I took the opportunity to work in a plant in Shanghai for three months. I have completed the Bachelor’s degree with a thesis on the planning of the production process of newly developed products over a longer time horizon. Afterwards, I was offered a position in this department.
            </p>
        </div>
    }
]

export const career: Array<Item> = [
    {
        itemMeta: {
            date: '2024\n- now',
            title: 'Golang Software Developer',
            description: 'Check24 | Germany'
        },
        itemPreview: <div>
            <h1>Golang Software Developer</h1>
            <p>
                <ul>
                    <li>Developing high-performance search functionality in Go, optimizing query response times for large-scale data processing</li>
                    <li>Architecting and implementing a robust mock server for reliable end-to-end testing environments</li>
                </ul>
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2023',
            title: 'Teaching assistant - Master of Language Technology',
            description: 'Göteborg Universitet | Sweden'
        },
        itemPreview: <div>
            <h1>Teaching assistant - Master of Language Technology</h1>
            <p>As the teaching assistant for the 'Machine Learning I' course, I was responsible for explaining and discussing assignments and underlying concepts with students, as well as grading their results. The course is focused mainly on basic machine learning algorithms and preparation of training data.
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2020\n- 2021',
            title: 'Development coordinator',
            description: 'Mahle GmbH | Germany'
        },
        itemPreview: <div>
            <h1>Development coordinator</h1>
            <p>
                <ul>
                    <li>Coordination of development process in a global project with 10 business analysts / 10 developers</li>
                    <li>Definition of unified Git process to coordinate distributed development for 20 team members</li>
                    <li>Providing trainings and support</li>
                </ul>
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2019\n- 2020',
            title: 'SAP PP consultant',
            description: 'Mahle GmbH | Germany'
        },
        itemPreview: <div>
            <h1>SAP PP consultant</h1>
            <p>
                <ul>
                    <li>Development of extensions to the SAP ERP system in SQL to increase transparency in the production planning process</li>
                    <li>Use SQL and ABAP to collect data from millions of data records for production planning applications</li>
                    <li>Define business processes and increase efficiency and robustness in production planning</li>
                </ul>
            </p>
        </div>
    }
]
