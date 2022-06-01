import React from 'react'; 
import './App.css';
import Top_bar from './Components/top_bar/Top_bar';
import Navbar from './Components/navbar/Navbar';
import Header from './Components/Header/Header';
import Latest_courses from './Components/latest_courses/Latest_courses';

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {  
        return (
            <div className='App'>
                <Top_bar></Top_bar>
                <Navbar></Navbar>
                <Header></Header>
                <Latest_courses></Latest_courses>
            </div>
        )
    }
}

export default App;