import React from "react";
import {StoreType} from "./redux/store";

// Для создание контекста, которые в дальнейшем будем исп для дочерних компонентов, используем следующий синтаксис
const StoreContext = React.createContext({} as StoreType)

export type ProviderType = {
    store: StoreType,
    children: any
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value = {props.store} > {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContext