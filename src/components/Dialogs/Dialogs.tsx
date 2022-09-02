import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import {DialogsPropsType} from "../../redux/store";

const Dialogs = (props: DialogsPropsType) => {
    // debugger

    const dialogElement = props.state.dialogs.map (d =>
        <DialogItem name = {d.name}
                    id = {d.id}
                    key={d.id}
        /> );

    const messagesElements = props.state.messages.map (m =>
        <Message message={m.message}
                 key={m.id}
                 id={m.id}
        /> );


    const stateOrigin = props.store.getState().dialogsPage;
    const newMessageBody = stateOrigin.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

   const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>

            <div> {messagesElements} </div>

            <div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'>
                    </textarea>
                </div>

                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;