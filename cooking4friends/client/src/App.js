import './App.css';
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Masonry from './components/Masonry'
import Recipeform from './components/Recipeform'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
        <div className="container">
          <Routes>
            <Route path="/" element={<test />}
            />
            <Route path="/recipeform" element={<Recipeform />} />
          </Routes>
        </div>
      </Router>

      
      {/* <Masonry /> */}
    </ApolloProvider>
  );
}

export default App;
