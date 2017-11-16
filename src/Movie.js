import React, { Component } from 'react';
import './App.css';

class Movie extends Component {
  showMovie(name){
    this.props.onShow(name);

  }
    render () {
      return (
          <div>
            <div className="block">
              <li className="text-bigger text-info text-center margin" >
                <a href="#" onClick={this.showMovie.bind(this,this.props.movie.name)}>{this.props.movie.name}</a>
              </li>
            </div>
          </div>

      )
    }
}

export default Movie ;
