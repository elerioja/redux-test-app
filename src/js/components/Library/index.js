import { connect } from "react-redux";
import Library from "./Library";
import { actions } from "../../redux/libraryState";
import { componentDidMount } from "react-functional-lifecycle";

// mapStateToProps :: State -> Props
const mapStateToProps = (state) => ({
  data: state.library.photos,
});

// mapDispatchToProps :: Dispatch -> Props
const mapDispatchToProps = (dispatch) => ({
  updateLibrary: () => {},
});

// didMount :: Props -> Action
const didMount = ({ updateLibrary }) => updateLibrary();

// lifecycles :: React.Component -> React.Component
const lifecycles = componentDidMount(didMount)(Library);

// SessionManager :: Props -> React.Component
export default connect(mapStateToProps, mapDispatchToProps)(lifecycles);
