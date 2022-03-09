import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";


const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    // Dónde esta apollo server
    link: new HttpLink({
        uri: 'http://localhost:4000/',
    }),
}); 

export default client;