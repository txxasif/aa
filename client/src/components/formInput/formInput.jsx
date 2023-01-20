export default function FormInput({setFromData,label,...other}) {
    console.log(other);
    return(
        <div className="group">
            <input className="form-input"  {...other}/>
            {
                label ? (<label className={`${other.value?'shrink':''} form-input-label`}></label>):null
            }
        </div>
    )
}