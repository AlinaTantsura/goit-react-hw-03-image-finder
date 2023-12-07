import styled from "styled-components";

const Button = styled.button(() => {
    return {
        display: 'inline-block',
        width: '48px',
        height: '48px',
        border: 0,
        backgroundImage: "url('https://icons8.com/icon/59878/search')",
        backgroundSize: '40%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: '0.6',
        transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        outline: 'none',
        '&: hover': {
            opacity: '1',
        },
        span: {
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            clipPath: 'inset(50%)',
            border: 0,
        }
    }
})
export default Button;