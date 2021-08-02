import React, {useState, useEffect} from "react";
import {IErrors} from "../validation/validate";

export interface IForm {
    email: string
    password: string
}

type Submit = () => void;
type Validator = (values: IForm) => IErrors

const useForm = (callback: Submit, validate: Validator) => {
    const [values, setValues] = useState<IForm>({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<IErrors>({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    function handleSubmit(e: React.SyntheticEvent): void {
        e.preventDefault();

        //  Check for errors
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return {
        values,
        handleChange,
        handleSubmit,
        errors
    }
};

export default useForm;