import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs, {DialogPageType} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/store";

type mapStateToPropsType = {
    dialogsPage: DialogPageType
}

type mapDispathchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispathchToProps = (dispatch: Dispatch):mapDispathchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}


// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const DialogsContainer = connect(mapStateToProps,mapDispathchToProps)(Dialogs)

export default DialogsContainer;