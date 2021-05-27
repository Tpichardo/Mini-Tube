import React from 'react';

const Form = ({ handleSubmit, handleChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder="leave a comment" />
                <button>Submit</button>
            </form>
        </div>
    )

}


export default Form;