import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class TwitterSearchForm extends React.Component {
  state = {
    searchQuery: ''
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.parentCallback(this.state.searchQuery);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId='formTwitterSearch'>
            <Form.Control
              type='text'
              placeholder='Search Twittewr by...'
              value={this.state.searchQuery}
              onChange={this.handleChange.bind(this)}
            />
            <Form.Text className='text-muted'>
              You may use standard twitter search operators, i.e. from:trump
              to:Alex @trump
            </Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Search Tweets
          </Button>
        </Form>
      </>
    );
  }
}

export default TwitterSearchForm;
