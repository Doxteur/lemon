import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from './actions';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm(formData));
    };

    return (
        <form onSubmit={handleSubmit} id='contact-form'>
            <div className="grid gap-4 lg:gap-6">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                    Prenom
                </label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
                </div>
                <div>
                <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                    Nom
                </label>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
                </div>
            </div>
            {/* End Grid */}
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                        Telephone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}   
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    ></textarea>
                </div>
            </div>
            {/* End Grid */}
            </div>
            {/* End Grid */}
            <div className="mt-6 grid">
                <button
                    type="submit"
                    className="py-2 px-3 text-sm font-medium rounded-xl border bg-fuchsia-400 text-black hover:bg-fuchsia-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-fuchsia-500"
                    >
                    Envoyer
                </button>
            </div>
            <div className="mt-3 text-center">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
                Nous vous répondrons dans 1 à 2 jours ouvrables.
            </p>
            </div>
        </form>
    )
};

export default Contact;