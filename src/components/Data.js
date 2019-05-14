import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Spinner
} from 'react-bootstrap';

class Data extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <Card bg="light" className="shadow-sm bg-white rounded">
        <Card.Header className="text-center">Dados da Consulta</Card.Header>
        <Card.Body>
          {this.props.isFetching ? (
            <Spinner className="loading" animation="border" />
          ) : (
            <Fragment>
              <ListGroup className="list-group-flush light">
                {this.props.data.address && (
                  <ListGroupItem>{this.props.data.address}</ListGroupItem>
                )}
                {this.props.data.district && (
                  <ListGroupItem>{this.props.data.district}</ListGroupItem>
                )}
                <ListGroupItem>{this.props.data.city}</ListGroupItem>
                <ListGroupItem>{this.props.data.state}</ListGroupItem>
              </ListGroup>
              <Button
                className="button"
                variant="secondary"
                onClick={e => this.handleClick(e)}
              >
                Voltar
              </Button>
            </Fragment>
          )}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  data: state.cep.data,
  isFetching: state.cep.isFetching
});

export default connect(mapStateToProps)(Data);
