import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Faddy',
        description: "I built an multitenent role based feedback management system.",
        tools: ['Next js','Node js','Docker','CI/CD ','Github actions', 'Supabase', 'AWS', 'AWS S3', 'Resend Mailer', 'EC2', 'Nginx','Paddle'],
        role: 'Full-Stack Developer',
        code: '',
        demo: 'faddy.site',
        image: crefin,
    },
    {
        id: 2,
        name: 'Skin Disease Image Prediction Model',
        description: 'I built a skin disease image prediction model using EfficientNet-B3, trained on 10,000 images, for my college major project.',
        tools: ['EfficientNet-B3','HAM10000','Classification','Augmentation','Randomforest-50', 'Kaggle','Google Colab','Tensorflow'],
        role: 'Machine Learning',
        code: 'https://github.com/Swarup012/Skin_disease_image_prediction',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Chef',
        description: 'I built  a AI chef using RAG',
        tools: ['Deepseek-R1','Ollama','RAG','Python','Streamlit'],
        code: 'https://github.com/Swarup012/ai_chef',
        role: 'Machine Learning',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Personal routine and finance planner ai',
        description: "I build a personal finanace and routine planner base on user's job roles ",
        tools: ['Next js', 'Google api','Gemini 1.5 flash model','Localstorage'],
        code: 'https://github.com/Swarup012/personal_routine_planner_ai',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
