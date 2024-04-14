import InputField from "./InputField";

export default function InputGroup({names}) {
    return (
        <div className="input-group">
            <InputField name={names.name1}/>
            <InputField name={names.name2}/>
        </div>
    )
}