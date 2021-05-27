import React from 'react';

const Form = ({ handleSubmit, handleChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder="leave a comment" />
            </form>
        </div>
    )

}


export default Form;