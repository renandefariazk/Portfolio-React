import React from 'react';
import '../css/main.css';
import ProjectInfo from "./projectInfo";

function Main (props){
    const projectArray = [{name:"projeto 1",info:"descricao 1"},{name:"projeto 2",info:"descricao 2"},
    {name:"projeto 3",info:"descricao 3"},{name:"projeto 4",info:"descricao 4"},
    {name:"projeto 5",info:"descricao 5"}];
    return(
        <>
        <section className="mainFirst">
            {/* colocar fotos aqui e frases sobre min*/}
            <section className="infoContainer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis unde 
                    laudantium inventore aperiam dolorem eveniet nulla est cupiditate
                    tenetur dicta suscipit quasi odit, eos pariatur 
                    sunt atque ducimus dignissimos aliquam!</p>
            </section>
            {/* foto com nome dos projetos e links para o gitHub deles*/}
            {projectArray.map((element)=>{
                return <ProjectInfo key={element.name} name={element.name} info={element.info}/>
            })}
        </section>
        <section className="mainSecond">
            <div className="tecContent">
                <div className=" textContant">
                    <h1 className='tecText'>Tecnologias</h1>
                </div>
                <div className="tecFirstContent">
                    <div className="htmlLogo imgFormat" alt="html"></div>
                    <div className="cssLogo imgFormat" alt="css"></div>
                    <div className="jsLogo imgFormat" alt="js"></div>
                    <div className="nodeLogo imgFormat" alt="node"></div>
                </div>
                <div className="tecSecondContent">
                    <div className="reactLogo imgFormat" alt="react"></div>
                    <div className="phpLogo imgFormat" alt="php"></div>
                    <div className="gitLogo imgFormat" alt="git"></div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Main;