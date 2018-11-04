import React from "react";
import { Form, Message } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      newPokemon: {
        name: "",
        hp: "",
        frontUrl: "",
        backUrl: ""
      },
      error: false
    };
  }

  handleChange = e =>
    this.setState({
      newPokemon: { ...this.state.newPokemon, [e.target.name]: e.target.value }
    });

  handleSubmit = e => {
    // e.preventDefault();
    const { name, hp, frontUrl, backUrl } = this.state.newPokemon;

    if (
      this.isValidate(name) &&
      this.isValidate(hp) &&
      this.isValidate(frontUrl) &&
      this.isValidate(backUrl)
    ) {
      this.props.submitForm(this.state.newPokemon);
      this.resetForm();
    } else {
      this.setState({ error: true });
    }
  };

  isValidate = name => (name.length < 1 ? false : true);

  resetForm = () => {
    this.setState = {
      newPokemon: { name: "", hp: "", frontUrl: "", backUrl: "" },
      error: false
    };
  };

  render() {
    const {
      error,
      newPokemon: { name, hp, frontUrl, backUrl }
    } = this.state;

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        {error ? (
          <Message
            error
            header="Required fields"
            content="You can only add new Pokemon when filling in name, hp, and images."
          />
        ) : null}

        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={hp}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={frontUrl}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={backUrl}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
