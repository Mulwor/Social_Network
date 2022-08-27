import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props: DialogsPropsType) => {
    let dialogElement = props.state.dialogs.map (d =>
        <DialogItem name = {d.name} id = {d.id} key={d.id} /> );
    let messagesElements = props.state.messages.map (m => <Message message={m.message} key={m.id} id={m.id}/>);

    let state = props.store.getState().dialogsPage;

    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>

            <div>{ messagesElements }</div>
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