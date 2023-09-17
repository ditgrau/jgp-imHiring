import React from "react";
import './Button.css'
import { useNavigate } from 'react-router-dom';

export function Button({ text, path }) {
    
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(({ path }))
    }

    return (
        <>
            <div className='main-button'>
                <span className='button-text' onClick={handleClick}>{text}</span>
            </div>
        </>
    )
}