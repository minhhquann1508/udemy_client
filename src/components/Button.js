import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({ content, borderColor, backgroundColor, textColor, url, padding, size }) {
    const navigate = useNavigate();
    return (
        <button
            style={{ fontSize: size ? size : '14px', borderColor: borderColor, backgroundColor: backgroundColor, color: textColor, padding: padding ? padding : '8px 12px' }}
            onClick={() => navigate(`/${url}`)}
            className=
            {
                `font-bold 
            hover:scale-105 duration-200
            border`
            }
        >
            {content}
        </button>
    )
}

export default Button