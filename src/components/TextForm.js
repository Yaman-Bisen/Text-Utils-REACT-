import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase has been applied...", 'success')
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase has been applied...", 'success')
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text has been cleared...", 'success')
    }
    const handleCapitalizeClick = () => {
        setText(text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
        props.showAlert("Text capitalized...", 'success')
    }
    const handleReversClick = () => {
        setText(text.split('').reverse().join(''));
        props.showAlert("Your text has been reversed...", 'success')
    }
    const handleTextOnChange = (event) => {
        setText(event.target.value);       /// set the value of text variable on change of the textarea
    }
    /// States....
    /// text is a variable and setText is the function to update the variable, because we can't update the variable like text='Yaman'
    /// in react
    /// Here 'Enter text here' is the defualt value for the text variable
    const [text, setText] = useState('');    
    // text = 'Yaman' /// wrong way to change the state
    // setText('New Text') /// correct way to change the state
    return (
        <>
            <div className={`container mt-3 card shadow bg-success text-${(props.mode === 'light') ? 'dark' : 'light' }`}>
                <div className='mb-2'>
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label">{props.heading}</label>
                        <textarea style={{backgroundColor:(props.mode === 'light') ? 'white' : 'grey', color: (props.mode === 'light') ? 'grey' : 'white'}} onChange={handleTextOnChange} className="form-control" placeholder='Enter text here...' value={text} id="myBox" rows="10"></textarea>
                    </div>
                    <button onClick={handleUpClick} className="btn btn-danger mx-2">Uppercase</button>
                    <button onClick={handleLowClick} className="btn btn-danger mx-2">Lowercase</button>
                    <button onClick={handleCapitalizeClick} className="btn btn-danger mx-2">Captalize</button>
                    <button onClick={handleReversClick} className="btn btn-danger mx-2">Reverse</button>
                    <button onClick={handleClearClick} className="btn btn-danger mx-2">Clear</button>
                </div>
            </div>
            <div className={`container my-3 text-${(props.mode === 'light') ? 'dark' : 'light' }`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length - 1)} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something to preview....'}</p>
            </div>
        </>
    )
}


TextForm.propTypes = {
    heading : PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    heading : 'Enter the text : '
}