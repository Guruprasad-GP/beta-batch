
import React from 'react';
import Button from './Button';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ padding: 100 }}>
        <Button />
      </div>
    );
  }
}
export default App
