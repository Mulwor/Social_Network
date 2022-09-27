const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action: any) => {

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

export const followAC = (userId: any) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})
export default usersReducer