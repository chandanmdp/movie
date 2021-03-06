import React, { Component } from 'react';
import './App.css';

class ShowMovie extends Component {
  constructor(props){
    super(props);
    this.state=
      {
        movie: {
          id: props.movie.id,
          name: props.movie.name,
          year: props.movie.year,
          description: props.movie.description
      }
    }
  }

  updateMovie(event){
    event.preventDefault();
    let id = this.props.movie.id;
    let Name = this.refs.name.value;
    let Year = this.refs.year.value;
    let Description = this.refs.description.value;
    if (Name !== '' && Year !== '' && Description !== ''){
      this.props.onUpdate(id,Name,Year,Description);
      this.refs.name.value= '';
      this.refs.year.value = '';
      this.refs.description.value = '';
    }else{
      alert('Please fill up all fields');
    }
  }

  handleNameChange(event){
    this.setState(
      {
        movie:{
          name:event.target.value,
          year: this.state.movie.year,
          description: this.state.movie.description
        }
      }
    )
  }
  handleYearChange(event){
    this.setState(
      {
        movie:{
          name:this.state.movie.name,
          year: event.target.value,
          description: this.state.movie.description
        }
      }
    )
  }

  handleDescriptionChange(event){
    this.setState(
      {
        movie:{
          name:this.state.movie.name,
          year: this.state.movie.year,
          description: event.target.value
        }
      }
    )
  }

  btnClick(){
    this.props.clickButton();
  }

  render () {
    return (
        <div>
          <div className="block">
            <li className="margin margin-left" >
              <span className="back-link text-primary" onClick={this.btnClick.bind(this)}>Back</span><br/><br/>
              <h2 className="text-info">{this.props.movie.name}</h2>
              <p>{this.props.movie.description}</p>
              <span className= "text-info">Release Year: {this.props.movie.year}</span>
            </li>
            <div className="update-block">
              <h4 className="text-success text-center margin-left"><u>Update movie</u></h4>
              <form onSubmit={this.updateMovie.bind(this)} className="margin-left" >
                <label>Movie name :<input type="text" ref="name" placeholder="Name" className="form-control input-width" value={this.state.movie.name} onChange={this.handleNameChange.bind(this)} required/></label><br/>
                <label>Release year :<input type="text" ref="year" placeholder="Year" className="form-control input-width" value={this.state.movie.year} onChange={this.handleYearChange.bind(this)} required/></label><br />
                <label>Movie description :<textarea ref="description" placeholder="Write movie description" className="form-control" rows="4" cols="50" value={this.state.movie.description} onChange={this.handleDescriptionChange.bind(this)} required/></label><br />
                <button type="submit">Update movie</button>
              </form>
            </div>
          </div>
        </div>
      )
  }
}

export default ShowMovie ;
