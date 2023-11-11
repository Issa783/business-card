import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
function App(){
  return (<div>
    <div>
    <Header />
    
    </div>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
