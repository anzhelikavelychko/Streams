import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchStream(id);
	}

	onSubmit = formValues => {
		const { id } = this.props.match.params;


		this.props.editStream(id, formValues);
	}

	render() {
		return (
			<div>
				<h3>Edit a stream</h3>
				<StreamForm
					onSubmit={this.onSubmit}
					initialValues={_.pick(this.props.stream, 'title', 'description')}
				/>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
}
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
