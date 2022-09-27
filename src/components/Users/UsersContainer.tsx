import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Users)