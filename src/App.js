import React, { Component } from 'react';

// import EnvDebug from './components/EnvDebug';
import TwitterSearchForm from './components/TwitterSearchForm';
import TwitterSearchResults from './components/TwitterSearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bearerToken: {}, searchTerm: '' };
  }

  searchFormcallback = searchFormQuery => {
    this.setState({ searchTerm: searchFormQuery });
  };

  componentDidMount() {
    var twitter_oauth2_data = {
      method: 'post',
      headers: {
        Authorization:
          'Basic ' +
          btoa(
            process.env.REACT_APP_CONSUMER_API_KEY +
              ':' +
              process.env.REACT_APP_CONSUMER_API_SECRET_KEY
          ),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    };

    fetch('/oauth2/token', twitter_oauth2_data)
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            bearerToken: data
          },
          () => console.log(this.state.bearerToken)
        );
      })
      .catch(error => {
        console.log('Looks like there was a problem: \n', error);
      });
  }

  render() {
    return (
      <div class='row'>
        <div class='col-lg-4 col-centered'>
          <h1>Search Twitter Practice</h1>

          {/* <EnvDebug bearerToken={this.state.bearerToken} /> */}
          <TwitterSearchForm parentCallback={this.searchFormcallback} />
          <TwitterSearchResults
            searchTerm={this.state.searchTerm}
            bearerToken={this.state.bearerToken}
          />
        </div>
      </div>
    );
  }
}

export default App;
