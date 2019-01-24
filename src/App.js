import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { SearchBox } from 'react-instantsearch-dom';
import { Hits } from 'react-instantsearch-dom';
import { Highlight } from 'react-instantsearch-dom';

/*eslint-disable*/

const Hit = ({hit}) =>
  <div className="hit">
    <div className="hitImage">
      <img src={hit.image}/>
    </div>
      <div className = "hitName">
        <Highlight attribute = "name" hit = {hit}/>
      </div>
  </div>

const Content = () =>
  <div className = "content">
    <Hits hitComponent = {Hit}/>
  </div>


class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="latency"
        apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
        indexName="bestbuy"
      >
      <header>
          <SearchBox translations = {{placeholder:'Search Box'}}/>
      </header>

      <main>
        <Content/>
      </main>
      </InstantSearch>
    );
  }
}

export default App;
