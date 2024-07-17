import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Footer from './Components/Footer'

// Import components

const App = () =>{

    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
} 

ReactDOM.createRoot(document.getElementById('root')).render(<App />)