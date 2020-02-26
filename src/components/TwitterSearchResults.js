import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TwitsList extends React.Component {
  state = {
    twits: [],
    title: ''
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (
      this.props.bearerToken &&
      this.props.searchTerm &&
      this.props.searchTerm !== prevProps.searchTerm
    ) {
      var twitter_search_data = {
        method: 'get',
        headers: {
          Authorization:
            this.props.bearerToken.token_type +
            ' ' +
            this.props.bearerToken.access_token
        }
      };
      var searchUrl =
        '/1.1/search/tweets.json?count=' +
        process.env.REACT_APP_MAX_RESULTS +
        '&q=' +
        encodeURIComponent(this.props.searchTerm);
      fetch(searchUrl, twitter_search_data)
        .then(res => res.json())
        .then(data => {
          this.setState(
            {
              twits: data.statuses
            },
            () => console.log(this.state.twits)
          );
        })
        .catch(error => {
          console.log('Looks like there was a problem: \n', error);
        });
      this.setState({ title: 'Results from twitter' });
    }
  }

  render() {
    return (
      <>
        <h3>{this.state.title}</h3>
        {this.state.twits.map(twit => (
          <Card style={{ width: '22rem' }} key={twit.id}>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src={twit.user.profile_image_url_https}
                    roundedCircle
                  />
                </Col>
                <Col xs={6} md={8}>
                  <Card.Title>{twit.user.screen_name}</Card.Title>
                </Col>
              </Row>
            </Container>

            <Card.Body>
              <Card.Subtitle className='mb-2 text-muted'>
                {twit.user.created_at}
              </Card.Subtitle>
              <Card.Text>{twit.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}

export default TwitsList;
