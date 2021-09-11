import React from "react";

const ProjectInfo = (props)=>{
    return(
        <div className='projetoContent'>
                <div className='projetoLetter'>
                    <h1 className="tituloProject">{props.name}</h1>
                    <p>{props.info}</p>
                </div>
                <div className='projetoImagem'>
                    <img src="" alt="projeto" />
                </div>
        </div>
    );
}

export default ProjectInfo;