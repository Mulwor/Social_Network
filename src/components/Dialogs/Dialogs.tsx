import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

type DialogsPropsType = {
    state: {
        dialogs: DialogType[],
        messages: Array<MessageType>
    }
}
const Dialogs = (props: DialogsPropsType) => {
    let dialogElement = props.state.dialogs.map (d =>
        <DialogItem name = {d.name} id = {d.id} key={d.id} /> );
    let messagesElements = props.state.messages.map (m => <Message message={m.message} key={m.id}/>);
    // 4. пункт в state.tsx

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;