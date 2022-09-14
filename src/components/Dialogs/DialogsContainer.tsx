import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs  from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
               // const stateOrigin = store.getState().dialogsPage;

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

               return <Dialogs updateNewMessageBody = {onNewMessageChange}
                    sendMessage = {onSendMessageClick}
                    dialogsPage = {store.getState().dialogsPage}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;