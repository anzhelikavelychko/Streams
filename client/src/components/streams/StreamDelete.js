import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete this stream with title: ${
      this.props.stream.title
    } ?`;
  }
  render() {
    const actions = (
      <>
        <div
          onClick={() => this.props.deleteStream(this.props.stream.id)}
          class="ui button negative"
        >
          Delete
        </div>
        <Link to="/" class="ui button">
          Cancel
        </Link>
      </>
    );
    return (
      <Modal
        title="Delete Streams"
        content={this.renderContent()}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
