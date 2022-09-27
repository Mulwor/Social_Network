import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs  from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispathchToProps = (dispatch: any) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}


// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const DialogsContainer = connect(mapStateToProps,mapDispathchToProps)(Dialogs)

export default DialogsContainer;