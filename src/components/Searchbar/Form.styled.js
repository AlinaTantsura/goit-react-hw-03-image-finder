import styled from "styled-components";

const Form = styled.form(() => {
    return {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        borderRadius: '3px',
        overflow: 'hidden',
        input: {
            display: 'inline-block',
            width: '100%',
            font: 'inherit',
            fontSize: '20px',
            border: 'none',
            outline: 'none',
            paddingLeft: '4px',
            paddingRight: '4px',
        },
       'input::placeholder':{
            font: 'inherit',
            fontSize: '18px',
        }
    }
});
export default Form;

