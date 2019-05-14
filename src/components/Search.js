import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, Form } from 'react-bootstrap';
import { actions } from '../store/actions/search-cep-action';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getDataByCep(this.state.cep);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderError() {
    if(this.props.isError) {
      return <span>{this.props.error}</span>
    }
  }

  render() {
    return (
      <Card bg="light" className="shadow-sm bg-white rounded">
        <Card.Header className="text-center">Busca CEP</Card.Header>
        <Card.Body>
          <Form.Control
            size="lg"
            className="text-center"
            type="text"
            placeholder="Informe o CEP"
            name="cep"
            onChange={e => this.handleOnChange(e)}
            required
          />
          {this.renderError()}
          <Button
            className="button"
            variant="secondary"
            onClick={e => this.handleSubmit(e)}
          >
            Pesquisar
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.cep.isFetching,
  isError: state.cep.isError,
  error: state.cep.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDataByCep: actions.getDataByCep }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
