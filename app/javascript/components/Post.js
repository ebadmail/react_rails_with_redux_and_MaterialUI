import React from "react"
import PropTypes from "prop-types"
class Post extends React.Component {
  render () {
    return (
      <React.Fragment>
        Body: {this.props.body}
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  body: PropTypes.string
};
export default Post
