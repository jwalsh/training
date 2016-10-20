class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

React.render(<HelloMessage name="Sebastian" />, document.querySelectorAll('#example')[0]);
