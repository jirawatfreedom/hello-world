import  React from  'react';
import NameComponent2 from './NameComponent2.js'
class NameComponent extends React.Component{
  constructor(props) {
    super();

  }

  render() {
    return (
      <>
      <NameComponent2
      fullName={this.props.fullName}
      handleInput={this.props.handleInput}

      />
      </>
    )
  }
}

export default NameComponent;
