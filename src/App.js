import React, { Component } from 'react';
import { Chart, Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
    console.log(this.state.data);
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}></Cards>
        {/* <CountryPicker></CountryPicker>
        <Chart></Chart> */}
      </div>
    );
  }
}

export default App;
