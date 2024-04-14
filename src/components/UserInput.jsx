import InputGroup from "./InputGroup";

export default function UserInput() {
    return (
        <div id="user-input">
            <InputGroup names={{name1:'initial investment',name2:'annual investment'}}/>
            <InputGroup names={{name1:'expected return',name2:'duration'}}/>
        </div>
    )
}