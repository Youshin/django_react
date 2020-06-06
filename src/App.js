import React, { Component } from 'react';
import './App.css'
class App extends Component {
    state = {
      vibdatas: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const vibdatas = await res.json();
            this.setState({
              vibdatas
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.vibdatas.map(item => (
                    <table>
                      <thead>
                        <tr>
                          <th>{item.created_at}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{item.data}</td>
                        </tr>
                      </tbody>
                    </table> 
                ))}
            </div>
        );
    }
}

export default App;