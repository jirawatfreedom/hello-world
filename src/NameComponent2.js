import  React from  'react';

class NameComponent2 extends React.Component{
  constructor(props) {
    super();

  }

  render() {
    return (
      <>
      <input name="fullName"
      value={this.props.fullName}
      onChange={this.props.handleInput}/>
      </>
    )
  }
}

export default NameComponent2;
