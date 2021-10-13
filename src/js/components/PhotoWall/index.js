import { connect } from "react-redux";
import PhotoWall from "./PhotoWall";
import { actions } from "../../redux/apiState";
import { componentDidMount } from "react-functional-lifecycle";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  data: null, //fetch items via api
});

// mapDispatchToProps :: Dispatch -> Props
const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(actions.fetchPhotos()),
});

// didMount :: Props -> Action
const didMount = ({ fetchPhotos }) => fetchPhotos();

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount)(PhotoWall);

// SessionManager :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
