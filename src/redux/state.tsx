// 1. Создаем файл и импортируем в index.tsx
/* 2. После импорта исправляем index.tsx на стейт
ReactDOM.render(<App state={state} />, document.getElementById('root'));
И переходим в app.tsx и прокидываем туда state */
/* 3. Вызываем пропсы в функции app.tsx, затем вызываем state, который лежит тут, а затема вызываем диалог.пейдже и профиль пейдж, который лежит здесь */
/* 4. После сделанного переходим в Dialogs и прописываем: props.state.dialogs.map и props.state.messages.map */
// 5. Переходим в профайл тск и пишем <MyPosts postsData={props.state.posts}/>
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}

export default state;