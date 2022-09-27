import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: Array<UserType>
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Users)