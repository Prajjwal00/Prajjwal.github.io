import pro1 from "../assets/pro1.jpg"
import pro2 from "../assets/pro2.jpg"
import pro3 from "../assets/pro3.jpg"
import IntroImg from "../assets/intro_2_bg.jpg"
const ProjectCardData=[
    {
        imgsrc:pro1,
        title: " CNN based COVID-19 detection Model",
        text: " Trained an Ensembled CNN model VRX-NET for covid-19 detection with an improved accuracy of around 98.23 %",
        view:"https://github.com/Prajjwal00/Covid-19-detecttion-CNN"

    },
    {
        imgsrc:pro2,
        title: "Driver Drowsiness detection Using CNN on EEG signals",
        text: " Trained an Ensembled CNN model for drowsiness detection onEEG patterns:accuracy of around 95.11 %",
        view:"https://github.com/Prajjwal00/Robotics_Drowsiness_CNN"

    },
    {
        imgsrc:pro3,
        title: "Amazon Reviews sentiment analysis",
        text: "Trained an LSTM model for sentiment analysis on amazon reviews using webscraping and NLP",
        view:"https://github.com/Prajjwal00/NLP-Amazon-Reviews"

    },
     {  imgsrc:IntroImg,
        title: "Data analyst projects : Web scraping , Visulaisation and Cleaning ",
        text: "Contains sub-projects which show my expertise in data analysis",
        view:"https://github.com/Prajjwal00/AnalystProjects"
     }
    
];
export default ProjectCardData;