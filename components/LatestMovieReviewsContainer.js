const React = require('react')
const MovieReviews = require('./MovieReviews')

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}


module.exports = LatestMovieReviewsContainer
