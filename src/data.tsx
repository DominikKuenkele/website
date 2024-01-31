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
            date: '2023',
            title: 'Emergence of referring expressions through language games',
            description: 'Master thesis'
        },
        itemPreview: <div>
            <h1>Emergence of referring expressions through language games</h1>
            <p>Dominik Künkele</p>
            <p><strong>Master thesis, in progress on <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis/blob/main/thesis/main.pdf" target="_blank" rel="noreferrer"> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <p>This thesis focuses on the properties of the language that emerges when two neural networks communicate with a set of arbitrary symbols. More specifically, the networks need to learn how to refer to objects present in visual scenes. This research shows that the success of the communication is highly dependent on the networks’ ability to extract and use biases in the visual scenes in their messages.
            </p>
            <h3>Code</h3>
            <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis" target="_blank" rel="noreferrer">
                Experiments <span className="material-symbols-outlined">open_in_new</span>
            </a><br />
            <a href='https://github.com/DominikKuenkele/MLT_Master-Thesis_clevr-dataset-gen' target="_blank" rel="noreferrer">
                Generation of datasets <span className="material-symbols-outlined">open_in_new</span>
            </a>

            <h3>Datasets</h3>
            <a href="https://nextcloud.dominik-kuenkele.de/s/SRt2o3eci5HjyY3" target="_blank" rel="noreferrer">
                CLEVR Dale-2 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/n3D8eXQYex6EXRb" target="_blank" rel="noreferrer">
                CLEVR Dale-5 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/7g4X9fZNA25f55L" target="_blank" rel="noreferrer">
                CLEVR Single <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/MeANAaEtHx9dMRJ" target="_blank" rel="noreferrer">
                CLEVR Color <span className="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
    },
    {
        itemMeta: {
            date: '2023',
            title: 'Referring as a collaborative process: learning to ground language through language games',
            description: 'Short paper'
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
            <a href="https://nextcloud.dominik-kuenkele.de/s/SRt2o3eci5HjyY3" target="_blank" rel="noreferrer">
                CLEVR Dale-2 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/n3D8eXQYex6EXRb" target="_blank" rel="noreferrer">
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
            <p><strong>available on <a href="https://github.com/DominikKuenkele/MLT_Dialogue-Systems_empires" target="_blank" rel="noreferrer"> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
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
            description: 'Server administration, Containerization'
        },
        itemPreview: <div>
            <h1>Private cloud</h1>
            <p>On my private server I have set up several Docker containers that provide services that I use in my daily life. These include a Nextcloud instance, a VPN server, a Git server, a Matrix server and my web presence, which are served through a Traefik reverse proxy.
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
            date: '2021\n- today',
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
            <p>To broaden my understanding of IT security I applied for the 'Ethical Hacking' course. In this course we were tasked in attacking a vulnerable system in many different ways. That includes password cracking, attacking web services, databases and networks, and gaining root access on servers, I use the gained knowledge to run services safely in a production environment accessible over the internet,
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2016\n- 2019',
            title: 'Wirtschaftsinformatik (Business Application Management)',
            description: 'Bachelor of Science | DHBW Stuttgart, Mahle GmbH | Germany'
        },
        itemPreview: <div>
            <h1>Wirtschaftsinformatik (Business Application Management)</h1>
            <p>In this Bachelor's programme I alternated every three months between taking courses at the DHBW university and working at MAHLE. The focus of the lectures lied on computer science, economics and management which we could directly apply in the practical phases at MAHLE. During this time, I took the opportunity to work in a plant in Shanghai for three months. I have completed the Bachelor’s degree with a thesis on the planning of the production process of newly developed products over a longer time horizon. Afterwards, I was offered a position in this department.
            </p>
        </div>
    },
    {
        itemMeta: {
            date: '2008\n- 2016',
            title: 'Gymnasium (high school)',
            description: 'Abitur | Remstalgymnasium Weinstadt | Germany'
        },
        itemPreview: <div>
            <h1>Gymnasium (high school)</h1>
        </div>
    }
]

export const career: Array<Item> = [
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
            date: '2019\n- 2021',
            title: 'SAP PP consultant',
            description: 'Mahle GmbH | Germany'
        },
        itemPreview: <div>
            <h1>SAP PP consultant</h1>
            <p>As the SAP PP consultant, I was responsible for supporting the production planning team in defining their business processes. Furthermore, I was implementing software solutions in the global SAP ERP system based on their requirements. During this time, I was part of a global project to redefine all business processes for MAHLE. In this project, I was additionally assigned the role of development coordinator for production planning. Hereby, I was coordinating the complete software development process for all related developments, from writing the specifications to the implementation in India and testing the final product.
            </p>
        </div>
    }
]
