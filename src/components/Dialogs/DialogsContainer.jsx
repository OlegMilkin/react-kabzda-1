import { addMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addAnswer: (text) => {
      dispatch(addMessageText(text))
    },
  }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(Dialogs)
