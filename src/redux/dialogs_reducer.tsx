import {ActionsTypes, DialogPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogReducer = (state: DialogPageType, action: ActionsTypes) => {

   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
           state.newMessageBody = action.body;
           return state
       case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
           return state
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