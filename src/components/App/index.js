import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../Home'
import Header from '../Header'
import Footer from '../Footer'

const App = () => (
  <div>
    {/*<header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>*/}

    <Header />

    <main>
      <Route exact path="/" component={Home} />
    </main>

    <Footer />

  </div>
)

export default App;
