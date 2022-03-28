import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {

    const [values, setValues] = useState({ pay_later: "false", pay_now: "false" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    const handleClick = (e, input) => {
        e.preventDefault()
        if (input === "pay_later") {
            values.pay_later = values.pay_later === "false" ? "true" : "false"
            setValues(values => ({ ...values, pay_later: values.pay_later}));
        }else if(input === "pay_now"){
            values.pay_now = values.pay_now === "false" ? "true" : "false"
            setValues(values => ({ ...values, pay_now: values.pay_now}));
        }
    }

    return {
        handleChange,
        handleSubmit,
        handleClick,
        values,
        errors,
    }
};

export default useForm;