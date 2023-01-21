import './formInput.css'
export function FormInput({setFromData,label,...other}) {
    return(
        <div className="group">
            {/* <label className="label">{label}</label> */}
            <input className="form-input" onChange={setFromData}{...other}/>
        </div>
    )
}