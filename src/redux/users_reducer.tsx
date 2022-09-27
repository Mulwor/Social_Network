const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

export type UserLocation = {
    city: string,
    country: string
}

type PhotoTypes = {
    small: null,
    large: null
}


export type UserType = {
    id: number
    photos: PhotoTypes
    followed: boolean
    name: string
    status: string
    location: UserLocation
}

let initialState: InitialStateType = {
    users: [],
}

export type InitialStateType = {
    users: Array<UserType>
}

const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            // Берем старый стейт, взять пользователей, который там были и перезатиреть теми пользователями, который пришли в экшн. Мы склеиваем два оператора те, которые пришли из стейта и те которые пришли в экшн
            return { ...state, users: [...state.users, ...action.users]}
        }


        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export default usersReducer