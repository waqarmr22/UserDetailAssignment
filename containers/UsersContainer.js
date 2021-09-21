import {connect} from 'react-redux';
import Users from '../components/Users';
import {
  fetchUsersAction,
  addUsersAction,
  fetchSuccessAction,
  fetchFailedAction,
} from '../actions';

const mapStateToProps = state => {
  return {
      users:state.usersReducers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => {
      dispatch(fetchUsersAction());
    },
  };
};
// const mapDispatchToProps = dispatch => ({
//   designerDetail: (params) => dispatch(designerProfileDetail(params)),
// });
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
