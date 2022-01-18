import { FormControlLabel, Switch } from "@mui/material";


function FormSwitch(props){
    const errorMessage= props.meta.error;
    const shoudShowError= !!errorMessage && props.meta.touched;

    const value = props.input.value;
    const onChange= ev => props.input.onChange(ev.target.checked);
    return <>
        <FormControlLabel
        control={<Switch
            checked={value}
            onChange={onChange}
            {...props.input}
        />}
        label={props.label}/>
        {shoudShowError && errorMessage}
    </>
}
export default FormSwitch;