import image from './images/dominik.jpg';

export const homePreview = <div>
    <img src={image} alt="" width="80%" />
    <p>I am Dominik Künkele.<br />
        Computational Linguist and Developer.</p>
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
            <p><strong>Master thesis, in progress on <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis/blob/main/thesis/main.pdf" target='_blank'> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <h3>Code</h3>
            <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis" target="_blank">
                Experiments <span className="material-symbols-outlined">open_in_new</span>
            </a><br />
            <a href='https://github.com/DominikKuenkele/MLT_Master-Thesis_clevr-dataset-gen' target='_blank'>
                Generation of datasets <span className="material-symbols-outlined">open_in_new</span>
            </a>

            <h3>Datasets</h3>
            <a href="https://nextcloud.dominik-kuenkele.de/s/SRt2o3eci5HjyY3" target='_blank'>
                CLEVR Dale-2 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/n3D8eXQYex6EXRb" target='_blank'>
                CLEVR Dale-5 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/7g4X9fZNA25f55L" target='_blank'>
                CLEVR Single <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/MeANAaEtHx9dMRJ" target='_blank'>
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
            <p><strong>Short paper, published in <a href="https://mezzanine.um.si/en/conference/semdial-2023-marilogue/" target='_blank'>SemDial 2023 <span className="material-symbols-outlined">open_in_new</span></a>, available on <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis/blob/main/paper/paper.pdf" target='_blank'> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <h3>Abstract</h3>
            <p>How do artificial agents based on neural networks coordinate on a new language through referential games over 3-d scenes?
                We extend a popular CLEVR dataset to control for different combinations of features of target and distractor objects and examine the success of referential grounding learned by the agents.</p>
            <h3>Code</h3>
            <a href="https://github.com/DominikKuenkele/MLT_Master-Thesis" target="_blank">
                Experiments <span className="material-symbols-outlined">open_in_new</span>
            </a><br />
            <a href='https://github.com/DominikKuenkele/MLT_Master-Thesis_clevr-dataset-gen' target='_blank'>
                Generation of datasets <span className="material-symbols-outlined">open_in_new</span>
            </a>

            <h3>Datasets</h3>
            <a href="https://nextcloud.dominik-kuenkele.de/s/SRt2o3eci5HjyY3" target='_blank'>
                CLEVR Dale-2 <span className="material-symbols-outlined">open_in_new</span>
            </a> <br />
            <a href="https://nextcloud.dominik-kuenkele.de/s/n3D8eXQYex6EXRb" target='_blank'>
                CLEVR Dale-5 <span className="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
    },
    {
        itemMeta: {
            date: '2023',
            title: 'This website',
            description: 'Web development'
        },
        itemPreview: <div>
            <h1>This website</h1>
            <p><strong>available on <a href="https://github.com/DominikKuenkele/website" target='_blank'> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
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
            <p><strong>Student paper, available on <a href="https://github.com/Turtilla/aics-project/blob/main/paper/paper.pdf" target='_blank'> Github <span className="material-symbols-outlined">open_in_new</span></a></strong></p>
            <h3>Abstract</h3>
            <p>Within this project we aim to explore how fine-tuning a CNN and LSTM-based image captioning model on a new dataset influences its performance on both the old and new data, along with what role some of the parameters, such as fine-tuning data size or the prevalence of out-of-vocabulary tokens in captions play in the process. We discover that differences in vocabulary play a major role and that providing too much fine-tuning data can cause the whole system to fail. We conclude that domain adaptation can be difficult to carry out, but perhaps worth attempting in certain cases.</p>
            <h3>Code</h3>
            <a href="https://github.com/Turtilla/aics-project/tree/main" target="_blank">
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
        itemPreview: <div></div>
    },
    {
        itemMeta: {
            date: '2022',
            title: 'Non-lexical sounds in dialogue utterances',
            description: 'Student project'
        },
        itemPreview: <div></div>
    },
    {
        itemMeta: {
            date: '2015-2022',
            title: 'Website of SG Weinstadt',
            description: 'Web development'
        },
        itemPreview: <div></div>
    }
]


export const education: Array<Item> = [
    {
        itemMeta: {
            date: '2021-today',
            title: 'Language Technology',
            description: 'Master of Arts | Göteborg Universitet | Sweden'
        },
        itemPreview: <div></div>
    },
    {
        itemMeta: {
            date: '2022',
            title: 'Ethical Hacking',
            description: 'Freestanding course | Kungliga Tekniska högskolan Stockholm | Sweden'
        },
        itemPreview: <div></div>
    },
    {
        itemMeta: {
            date: '2016-2019',
            title: 'Wirtschaftsinformatik (Business Application Management)',
            description: 'Bachelor of Science | DHBW Stuttgart, Mahle GmbH | Germany'
        },
        itemPreview: <div></div>
    }
]

export const career: Array<Item> = [
    {
        itemMeta: {
            date: '2023',
            title: 'Teaching assistant - Master of Language Technology',
            description: 'University of Gothenburg | Sweden'
        },
        itemPreview: <div></div>
    },
    {
        itemMeta: {
            date: '2019-2021',
            title: 'SAP PP consultant',
            description: 'Mahle GmbH | Germany'
        },
        itemPreview: <div></div>
    }
]