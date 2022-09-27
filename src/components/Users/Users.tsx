import React from "react";
import styles from './users.module.css'

let Users = (props: any) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg',
                    followed: false,
                    fullName: "Oleg",
                    status: "I am a junior",
                    location: {
                        city: "Minsk",
                        country: "Belarus"
                    }
                },
                {
                    id: 2,
                    photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg',
                    followed: true,
                    fullName: "Ivan",
                    status: "I am a junior",
                    location: {
                        city: "Minsk",
                        country: "Belarus"
                    }
                },
                {
                    id: 3,
                    photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg',
                    followed: false,
                    fullName: "Dima",
                    status: "I am a junior",
                    location: {
                        city: "Minsk",
                        country: "Belarus"
                    }
                },
            ]
        )
    }


    return <div>
        {props.users.map(u => <div key = {u.id}>
            <span>
                <div>
                    <img
                      src={u.photoUrl}
                      className = {styles.photo}
                      alt = ''
                    />
                </div>

                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>

            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>

                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users