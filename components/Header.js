import react from "react";
import { useQuery, gql } from "@apollo/client";

const OBTENER_USUARIO = gql`
query obtenerUsuario{
    obtenerUsuario{
      id
      nombre
      apellido
    }
}
`;

const Header = ()=>{

    const {data, loading, error} = useQuery(OBTENER_USUARIO);

    if(loading) return null;
    const {nombre} =  data.obtenerUsuario ;
    const {apellido} = data.obtenerUsuario;
    return (
        <div className="flex justify-between">
            <p>Hola {nombre} {apellido}</p>
            <button type="button">
                Cerrar sesión
            </button>
        </div>
    );
}

export default Header;