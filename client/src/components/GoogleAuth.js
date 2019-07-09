import React from 'react';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      //returns promise that our library has been successfully initialized
      window.gapi.client.init({
        clientId: '587330023230-ifvtldlhfu7ajiuq8pqmql42os26bmte.apps.googleusercontent.com',
        scope: 'email'
      })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange)
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();

  };

  renderAuthButton() {
    const { isSignedIn } = this.state;
    if (isSignedIn === null) {
      return null
    } else if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon"/>
          Sign Out
        </button>
      );
    } else if (!isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon"/>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
};

export default GoogleAuth;
