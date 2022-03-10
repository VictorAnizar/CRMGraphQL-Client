import react, {useState} from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useFormik } from "formik"
import * as Yup from 'yup';
import { useMutation, gql } from "@apollo/client";

const AUTENTICA_USUARIO = gql`
    mutation autenticarUsuario($input: AutenticarInput){
        autenticarUsuario(input: $input) {
            token
        }
    }
  
`;

const Login = () => {
    // State para el mensaje
    const [mensaje, setMensaje] = useState(null);

    // Mutation para crear usuarios
    const [autenticarUsuario] = useMutation(AUTENTICA_USUARIO);

    const router = useRouter();

    // Validacion del form
    const formik = useFormik({
        // Es como el state
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
            password: Yup.string().required('El password es obligatorio')
        }),
        // Le agrega el evento al formulario como tal
        onSubmit: async valores => {
            console.log("Enviando");
            console.log(valores);
            const { email, password } = valores;
            try {
                const { data } = await autenticarUsuario({
                    variables: {
                        input: {
                            email: email,
                            password: password
                        }
                    }
                });
                // Usuario creado correctamente
                setMensaje('Inicio de sesión exitoso');
                
                // Guardando token en local storage
                const {token} = data.autenticarUsuario;
                localStorage.setItem('token', token);
                console.log(data);
                setTimeout(() => {
                    setMensaje(null)
                    router.push('/');
                }, 3000);
                // Redirigir al usuario para iniciar sesion
            } catch (error) {
                setMensaje(error.message.replace('GrapQL error:', ''))
                console.log(error);
                setTimeout(() => {
                    setMensaje(null)
                }, 3000);
            }
        }
    });
    const mostrarMensaje = () => {
        return (
            <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
                <p>{mensaje}</p>
            </div>
        )
    }
    return (
        <>
            <Layout>
                {mensaje ? mostrarMensaje() : null}

                <h1 className="text-center text-2xl text-white font-light">Login</h1>
                <div className="flex justify-center mt-5">
                    <div className="w-full max-width-sm">
                        <form
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit}
                        >
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
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.email}</p>
                                </div>
                            ) : null}
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
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.password}</p>
                                </div>
                            ) : null}
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900 rounded"
                                value="Iniciar sesión"
                            />
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login;
