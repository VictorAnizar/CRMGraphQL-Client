import '../styles/globals.css'
// Va a estar disponible apollo en todos los componentes que pertenezcan a la app
import { ApolloProvider } from '@apollo/client' 
import client from '../config/apollo'
const MyApp=({ Component, pageProps }) => {
  return (
    <ApolloProvider  client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
