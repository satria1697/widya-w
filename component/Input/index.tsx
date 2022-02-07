import {FormControl, FormLabel, Input} from "@chakra-ui/react";
import {ChangeEventHandler, FunctionComponent, HTMLInputTypeAttribute} from "react";

interface inputProps {
    id: string
    title: string
    value: string
    onChange: ChangeEventHandler
    type?: HTMLInputTypeAttribute
}

const MiInput: FunctionComponent<inputProps> = (props) => {
    let type: HTMLInputTypeAttribute = 'text'
    if (props.type) {
        type = props.type
    }
    return (
        <FormControl>
            <FormLabel htmlFor={props.id}>{props.title}</FormLabel>
            <Input name={props.id} onChange={props.onChange} id={props.id} placeholder={props.title} type={type}/>
        </FormControl>
    )
}

export default MiInput
