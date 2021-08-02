import {IForm} from "../hooks/useForm";

export interface IErrors {
    email?: string
    password?: string
}

export default function validate (values: IForm): IErrors {
    const errors: IErrors = {};

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //  Email
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    //  Password
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 5) {
        errors.password = "Password needs to be more than 5 characters";
    }

    return errors;
}
