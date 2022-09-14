import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import {StoreType} from "../../redux/store";
import Dialogs, {DialogPageType} from "./Dialogs";

type DialogsPropsType = {
    state: DialogPageType
    store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {
    // debugger
    const stateOrigin = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

   const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs
            updateNewMessageBody = {onNewMessageChange}
            sendMessage = {onSendMessageClick}
            dialogsPage = {stateOrigin}
        />
    )
}

export default DialogsContainer;