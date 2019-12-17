import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {upVote} from "../redux/actions";

function mapStateToProps(state) {
      return {
            posts: state
      };
}

function mapDispatchToProps(dispatch) {
      return bindActionCreators({upVote}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
