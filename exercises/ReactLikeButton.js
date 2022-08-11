import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
  constructor() {
    super();

    this.state = {
      likeCount: 100,
      userLiked: false
    }
  }

  handleLikeClick = () => {
    const {
      userLiked,
      likeCount
    } = this.state;

    this.setState({
      likeCount: userLiked ? likeCount - 1 : likeCount + 1,
      userLiked: !userLiked
    });
  }

  render() {
    const buttonClasses = cx({
      'like-button': true,
      'liked': this.state.userLiked
    });
    const likeCounter = cx('likes-counter');

    return (
      <>
        <div>
          <h2>Like Button</h2>
          <button
            className={buttonClasses}
            onClick={this.handleLikeClick}
          >
            Like | <span className={likeCounter} >{this.state.likeCount}</span>
          </button>
        </div>
        <style>
          {`
            .like-button {
              font-size: 1rem;
              padding: 5px 10px;
              color:  #585858;
            }
            .liked {
              font-weight: bold;
              color: #1565c0;
            }
        `}
        </style>
      </>
    );
  }
}