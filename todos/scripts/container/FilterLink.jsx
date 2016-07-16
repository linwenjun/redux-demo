import Link from '../components/Link.jsx';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibleFilter
  }
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: ()=> {
      dispatch(setVisibilityFilter(ownProps.filter));
      console.log(ownProps.filter);
    }
  }
};



const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);


export default FilterLink;