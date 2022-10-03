const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
    users: [ ],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 2
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
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
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
                return { ...state, currentPage: action.currentPage}
            }

            case SET_TOTAL_USERS_COUNT: {
                return {...state, totalUsersCount: action.count}
            }

        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export default usersReducer