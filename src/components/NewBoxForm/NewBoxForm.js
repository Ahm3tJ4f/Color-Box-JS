import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      height: '',
      width: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { color, height, width } = this.state;

    height = parseInt(height);
    width = parseInt(width);

    this.props.addBox(color, height, width);
  }

  render() {
    return (
      <section className="newBoxForm">
        <header className="header">
          <div className="header__logo"></div>
          <h2 className="header__title">
            color
            <br />
            box
          </h2>
        </header>

        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__group form__group_primary">
            <label htmlFor="color" className="form__label">
              Color
            </label>
            <label htmlFor="color" className="form__label form__label_desc">
              rgb
            </label>

            <input
              style={{ outline: `3px solid rgb(${this.state.color})` }}
              type="text"
              className="form__input form__input_text"
              id="color"
              name="color"
              autoComplete="off"
              placeholder="255,255,255"
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="form__group form__group_secondary">
            <label htmlFor="width" className="form__label">
              Width
            </label>
            <input
              type="number"
              min="1"
              max="100"
              className="form__input form__input_number"
              id="width"
              name="width"
              autoComplete="off"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form__group form__group_secondary ">
            <label htmlFor="height" className="form__label">
              Height
            </label>
            <input
              type="number"
              min="1"
              max="100"
              className="form__input form__input_number"
              id="height"
              name="height"
              autoComplete="off"
              onChange={this.handleChange}
              required
            />
          </div>
          <input type="submit" className="form__button" value="ADD BOX" />
        </form>
      </section>
    );
  }
}

export default NewBoxForm;
