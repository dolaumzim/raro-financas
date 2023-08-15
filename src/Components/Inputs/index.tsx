import "./styles.css"

interface inputProps{
    name:string,
    type:string,
    placeholder:string
}


export const Inputs = ({name, type, placeholder} : inputProps) =>{ 

    return (
        <div className="inputModal">
            {name}
            <input className='inputType' required name={name.toLowerCase()} type={type} placeholder={placeholder}/>
        </div>
    )
}