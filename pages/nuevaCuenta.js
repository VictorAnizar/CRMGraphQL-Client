import react from "react";
import Layout from "../components/Layout";

import {useFormik} from "formik"
import * as Yup from 'yup';

const NuevaCuenta = ()=>{
    // Validacion del form
    const formik = useFormik({
        // Es como el state
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        },
        // Le agrega el evento al formulario como tal
        onSubmit: valores =>{
            console.log("Enviando");
            console.log(valores);
        }
    });
    return (
        <>
            <Layout>
                <h1 className="text-center text-2xl text-white font-light">Crear nueva cuenta</h1>
                <div className="flex justify-center mt-5">
                    <div className="w-full max-width-sm">
                        <form
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 mx-8"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                    Nombre
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre usuario"
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                                    Apellido
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="apellido"
                                    type="text"
                                    placeholder="Apellido usuario"
                                    value={formik.values.apellido}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email usuario"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password usuario"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 rounded"
                                value="Crear cuenta"
                            />
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default NuevaCuenta;
