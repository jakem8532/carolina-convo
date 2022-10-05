import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
