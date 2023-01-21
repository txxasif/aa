import './button.css';

export function Button({buttonText}){
    return(
       
            <button className='button'>
                        {
                            buttonText
                        }
            </button>
    )
}