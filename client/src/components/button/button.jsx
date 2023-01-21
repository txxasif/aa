import './button.css';

export function Button({buttonText,onClick}){
    return(
       
            <button onClick={onClick} className='button'>
                        {
                            buttonText
                        }
            </button>
    )
}