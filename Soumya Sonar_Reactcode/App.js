import React from 'react';
import ButtonClick from './ButtonClick';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ padding: 150,backgroundColor: "lightblue"}} >
        <ButtonClick />
      </div>
    );
  }
}
export default App