import React from 'react';
import MyButton from './MyButton';
class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ padding: 100 }}>
        <MyButton />
      </div>
    );
  }
}
export default App

