import {ActionsTypes} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

type DialogType = {
    id: number,
    name: string,
}

type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessagesType>,
    newMessageBody: ""
}

export type InitialStateType = typeof initialState

const dialogReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
           return {
               ...state,
               newMessageBody: action.body
           };

       case SEND_MESSAGE:
           let body = state.newMessageBody;
           return {
               ...state,
               newMessageBody: '',
               messages: [...state.messages, {id: 6, message: body}]
           };

       default:
           return state
   }
}

export type sendMessageCreatorType = {
    type: "SEND-MESSAGE"
}
export type updateNewMessageBodyCreatorType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body } as const
)


export default dialogReducer