import * as React from 'react';
// import Hello1 from './components/Hello1';
// import Hello2 from './components/Hello2';
import Hello from './containers/Hello';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <main>
                    {/* <Hello1 name="TypeScript" enthusiasmLevel={10} /> */}
                    {/* <Hello2 name="TypeScript" enthusiasmLevel={10} /> */}
                    <Hello />
                </main>
            </div>
        );
    }
}

export default App;
