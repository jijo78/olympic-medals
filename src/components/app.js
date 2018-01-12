import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CountriesList from '../containers/countries_list'

export default class App extends Component {

  render() {
    
    return (
			<main className="container fixed-w">
				  <CountriesList />
			</main>
    );
  }
}
