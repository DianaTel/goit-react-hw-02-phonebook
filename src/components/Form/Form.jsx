import { Component } from "react";
import { FormStyle } from "./Form.styled";
import { InputStyle, LabelStyle, ButtonStyle } from "components/App.styled";
import PropTypes from 'prop-types'

export class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }


    render() { 
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Number:
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                onChange={this.handleChange}
                required
              />
            </label>

            <button type="submit">Add Contact</button>
          </form>
        );
    }
}