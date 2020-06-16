import React from "react";

const callApi = (email) => {
  return fetch("https://app.convertkit.com/forms/1466967/subscriptions", {
    method: "POST",
    body: JSON.stringify({ email_address: email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      showSuccessMessage: false,
      message: "",
      loading: false,
      error: false,
    };

    this.onInput = this.onInput.bind(this);
  }

  async onSubmit(event) {
    if (event) event.preventDefault();

    const { email } = this.state;

    this.setState({ error: false, loading: true });
    const { status } = await callApi(email);

    const error =
      status >= 400 ? "Oops, something went wrong. Please try again" : "";

    this.setState({
      error,
      loading: false,
      showSuccessMessage: !error,
    });
  }

  onInput(event) {
    const email = event.target.value;
    this.setState({ email });
  }

  render() {
    let successMessage = null;
    if (this.state.showSuccessMessage) {
      successMessage = (
        <p className="mt-4">
          Thanks for your interest! I just sent an email to {this.state.email}{" "}
          with a confirmation link. <strong>Please check your inbox!</strong>
        </p>
      );
    }

    return (
      <div className="newsletter-box">
        <style jsx>
          {`
            input {
              width: 13rem;
              line-height: 45px;
              height: 45px;
              border: 1px solid #1c1f2b;
              padding: 0.5rem 0.5rem 0.5rem 1.5rem;
              border-top-left-radius: calc(45px / 2);
              border-bottom-left-radius: calc(45px / 2);
            }

            button {
              border: none;
              font-weight: 700;
              display: inline-block;
              box-sizing: border-box;
              cursor: pointer;
              text-transform: uppercase;
              color: #fff;
              text-decoration: none;
              background-color: #1c1f2b;
              font-size: 13px;
              line-height: 45px;
              height: 45px;
              padding: 0 12px 0 6px;
              border-top-right-radius: calc(45px / 2);
              border-bottom-right-radius: calc(45px / 2);
            }

            button:hover {
              background: #30354a;
            }

            .error {
              padding-top: 4px;
              color: red;
            }

            .newsletter-box {
              padding: 40px 0 20px 0;
            }

            @media only screen and (min-width: 768px) {
              p {
                margin: 1rem auto;
                max-width: 500px;
              }

              input {
                width: 15rem;
              }

              button {
                padding: 0 24px;
              }
            }
          `}
        </style>
        <p>
          <strong>OctoLinker is just the beginning!</strong> I have plenty other
          ideas on how to improve your developer experience. Be the first to
          hear about new developer tools I'm working on.
        </p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="email"
            name="email"
            onInput={this.onInput}
            placeholder="you@domain.com"
            required
            disabled={this.state.loading}
          />
          <button className="btn-submit" disabled={this.state.loading}>
            {this.state.loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>
        {this.state.error && (
          <div className="error" role="alert">
            {this.state.error}
          </div>
        )}
        {successMessage}
      </div>
    );
  }
}
