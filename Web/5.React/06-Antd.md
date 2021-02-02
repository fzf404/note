<!-- 
title: 06-React-Antd
sort: 
--> 

> [antd](https://ant.design/)

```js
import React from 'react';
import { Input, Select } from 'antd'
import 'antd/dist/antd.css'
import './App.scss'

const Search = Input.Search;
const Option = Select.Option;

class App extends React.Component {
  state = {
    list: []
  }

  handleSearch = (value) => {
    let { list } = this.state;
    list.push(value);
    this.setState({ list })
  }


  render() {
    const { list } = this.state;
    const options = [];
    const LiItem = list.map((item, index) => {
      options.push(<Option key={index}>{item}</Option>);
      return <li key={index}>{item}</li>
    });

    return <div>

      <h1>React Test</h1>

      <Search
        style={{ width: 350 }}
        onSearch={this.handleSearch}
        enterButton="Add" />
      <br />
      <Select>{options}</Select>
      <br />
      <ul>
        {LiItem}
      </ul>

    </div>
  }
}
```

