import React from 'react';
import Abc from './button';


class App extends React.Component {
  
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={{ padding: 200 }}>
        <Abc />
      </div>
    );
  }
}
export default App
