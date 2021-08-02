import React, {FC} from "react";

import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
    email: string
    password: string
    username: string
}

const schema = yup.object().shape({
    username: yup.string().required("Please enter a username"),
    email: yup.string().email("Please input a valid email").required("Please input an email"),
    password: yup.string().required().min(5)
});

const HookForm: FC = () => {
    const {register, handleSubmit, formState: {errors}, control} = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormInputs> = data => {
        console.log(data);
    }

    return (
        <div className="p-6">
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl mb-2">Validation</h1>

                <Controller
                    control={control}
                    name="username"
                    render={({field: { onChange }}) => (
                        <>
                            <label className="text-xl" htmlFor="username">Username</label>
                            <input
                                className={`mb-2 ml-2 border-2 ${errors.username?.message ? 'border-red-600' : 'border-black'} rounded px-4 py-2`}
                                id="username"
                                type="text"
                                onChange={e => {
                                    console.log(e.target.value)
                                    onChange(e.target.value)
                                }}
                            />
                        </>
                    )}
                />

                {
                    errors.username &&
                    <p
                        className="text-base text-red-600 mb-2"
                    >
                        {errors.username.message}
                    </p>
                }

                <br/>

                <label className="text-xl" htmlFor="email">Email</label>
                <input
                    className={`mb-2 ml-2 border-2 ${errors.email?.message ? 'border-red-600' : 'border-black'} rounded px-4 py-2`}
                    {...register("email")}
                    id="email"
                    type="email"
                />

                {
                    errors.email &&
                    <p
                        className="text-base text-red-600 mb-2"
                    >
                        {errors.email.message}
                    </p>
                }


                <br/>

                <label className="text-xl" htmlFor="password">Password</label>
                <input
                    className={`mb-2 ml-2 border-2 ${errors.password?.message ? 'border-red-600' : 'border-black'} rounded px-4 py-2`}
                    {...register("password")}
                    id="password"
                    type="password"
                />

                {
                    errors.password &&
                    <p
                        className="text-base text-red-600 mb-3"
                    >
                        {errors.password.message}
                    </p>
                }

                <button
                    type="submit"
                    className="block text-white bg-indigo-500 rounded focus:ring-2 px-6 py-1 text-xl"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HookForm;