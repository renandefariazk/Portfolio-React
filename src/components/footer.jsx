import React from 'react';
import '../css/footer.css';

export default function Footer (props){
    return(
        <section className='footerContent'>
            <div></div>
            <div>
                <p>All Rights Reserved: {props.name}</p>
            </div>
        </section>
    )
}