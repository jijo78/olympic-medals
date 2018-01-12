import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchData, sortGold, sortSilver, sortBronze, sortTotal, total } from '../actions/index';
import * as actions from '../actions/constants';

import MedalList from '../components/medalsList'
import Error from '../components/error'
import '../scss/main.scss';
import error from '../components/error';

class CountriesList extends Component {
	constructor(props){
		super(props);
		this.state = {
			countries: [],
			active: 'gold',
			gold: [],
			silver: [],
			bronze: [],
			total: [],
			error:{}

		}
		this.addSelectedClass = this.addSelectedClass.bind(this);
	}

	addSelectedClass = (selected, type) => {
		return selected === type ? 'selected' : ''
	};

	componentWillMount(){
		this.props.fetchData();	 
	}

	updateTie = ( type )=>{
		if(type === 'gold'){
			this.props.sortGold();
		}

		if(type === 'silver'){
			this.props.sortSilver();
		}

		if(type === 'bronze'){
			this.props.sortBronze();
		}

		if(type === 'total'){
			this.props.sortTotal();
		}

		this.setState({
			active: type
		});
	}

	/**
	 * @param {string} type.
	 * renderMedalsit is called every time a new action it is dispatched so can re render
	 * the view with the fr
	 */
	renderMedals(type){
		try{
			if(this.props[type]){
				return(
					this.props[type][type].map((val,i)=>{
						const total = (val.gold + val.silver + val.bronze);
						if(!val.total){
							val['total'] = total;
						}
						
						return(
							<MedalList data={val} total={total} i={i}/>
						)
					})
				)
			}
		}catch(e){
			return(
				<Error msg={e.message}/>
			)
		}
	}

	/**
	 * [renderResults render the countries on page load after this.props.fetchData(),
	 * it is called inside the component lifecycle.
	 * @return {[JSX]}
	 */
	renderResults(){
		try{
			if(this.props.countries.countries){ 
				return(
					this.props.countries.countries
					.map((val,i)=>{
						const total = (val.gold + val.silver + val.bronze);
						val['total'] = total;

						return(
							<MedalList data={val} total={total} i={i}/>
						)
					})
				)
			}
		}catch(e){
			return(
				<Error msg={e.message}/>
			)
		}
	}

	render() {
		const { active } = this.state;
		const { errors } = this.props
		return (
			<section>
				<h1>Medal count</h1>
				<table className="table">
					<tbody>
						<tr>
							<th className="table__header"></th>
							<th className={`table__header ${this.addSelectedClass(active,'gold')}`} onClick={this.updateTie.bind(this,'gold')}>
								<span className="medals medals__gold"></span>
							</th>
							<th className={`table__header ${this.addSelectedClass(active,'silver')}`} onClick={this.updateTie.bind(this,'silver')}>
								<span className="medals medals__silver"></span>
							</th>
							<th className={`table__header ${this.addSelectedClass(active,'bronze')}`} onClick={this.updateTie.bind(this,'bronze')}>
								<span className="medals medals__bronze"></span>
							</th>
							<th className={`table__header ${this.addSelectedClass(active,'total')}`} onClick={this.updateTie.bind(this,'total')}>Total</th>
						</tr>
						{active !== 'gold' ? this.renderMedals(active) : this.renderResults()}
					</tbody>
				</table>

			</section>
		);
	}
}

function mapStateToProps(state){
	return{
		countries: state.countries,
		gold: state.gold,
		silver: state.silver,
		bronze: state.bronze,
		total: state.total,
		errors: state.error
	}
}

function mapDispacthToProps(dispatch){
	return bindActionCreators({  fetchData, sortGold, sortSilver, sortBronze, sortTotal, total  }, dispatch);
}

export default connect( mapStateToProps,mapDispacthToProps )( CountriesList );
