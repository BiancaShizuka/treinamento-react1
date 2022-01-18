import { TextField } from '@mui/material';
function Textfield(props){
    const errorMessage= props.meta.error;
    const shoudShowError= !!errorMessage && props.meta.touched;

    const value = props.input.value;
    const onChange= ev => props.input.onChange(ev.target.value);
    return <>
        <TextField label={props.label} value={value} onChange={onChange} {...props.input} fullWidth/>
        {shoudShowError && errorMessage}
    </>
}
export default Textfield;