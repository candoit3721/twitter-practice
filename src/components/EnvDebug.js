import React from 'react';

class EnvDebug extends React.Component {
  state = {
    bearerToken: {}
  };
  render() {
    let bearerToken =
      !this.param || !this.param.bearerToken ? {} : this.param.bearerToken;

    return (
      <>
        <div>
          REACT_APP_CONSUMER_API_KEY: {process.env.REACT_APP_CONSUMER_API_KEY}
        </div>
        <div>
          REACT_APP_CONSUMER_API_SECRET_KEY:
          {process.env.REACT_APP_CONSUMER_API_SECRET_KEY}
        </div>
        <div>
          Authorization: Basic
          {btoa(
            process.env.REACT_APP_CONSUMER_API_KEY +
              ':' +
              process.env.REACT_APP_CONSUMER_API_SECRET_KEY
          )}
        </div>
        <div>
          Bearer Token:
          {JSON.stringify(bearerToken)}
        </div>
      </>
    );
  }
}

export default EnvDebug;
