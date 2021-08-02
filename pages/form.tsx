import React, {FC} from "react";

import useForm from "../hooks/useForm";
import validate from "../validation/validate";

const Form: FC = () => {
    const {handleChange, handleSubmit, values, errors} = useForm(submit, validate);

    function submit() {
        console.log('Form submitted successfully');
    }

    return (
        <div className="p-6">
            <form noValidate onSubmit={handleSubmit}>
                <h1 className="text-2xl mb-2">Validation</h1>
                <label className="text-xl" htmlFor="email">Email</label>
                <input
                    className={`mb-2 ml-2 border-2 ${errors.email ? 'border-red-600': 'border-black'} rounded px-4 py-2`}
                    name="email"
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />

                {
                    errors.email &&
                    <p
                        className="text-base text-red-600 mb-2"
                    >
                        {errors.email}
                    </p>
                }


                <br/>

                <label className="text-xl" htmlFor="password">Password</label>
                <input
                    className={`mb-2 ml-2 border-2 ${errors.password ? 'border-red-600': 'border-black'} rounded px-4 py-2`}
                    name="password"
                    id="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                />

                {
                    errors.password &&
                    <p
                        className="text-base text-red-600 mb-3"
                    >
                        {errors.password}
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

export default Form;