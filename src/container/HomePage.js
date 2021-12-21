import { connect } from "react-redux";
import  Home  from "../components/Home/Home";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(TodoActions, dispatch)
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
