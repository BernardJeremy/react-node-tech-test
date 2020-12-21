import React from 'react';
// import { useQuery } from 'react-query';
import List from './List';

class ListBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/business');

    const result = await response.json();

    if (result) {
      this.setState({
        data: result,
      });
    }
  }

  render() {
    return (
      <List data={this.state.data} />
    );
  };
}

export default ListBusiness;
