function makeAction(type) {
    return ({
        dispatch
    }, ...args) => dispatch(type, ...args);
}

let key = 'notes';
let initNote;
let initData;

if (!window.localStorage.getItem(key)) {
    initNote = {
        id: +new Date(),
        title: '我的笔记',
        content: '笔记内容',
        favorite: false
    };


    initData = {
        show: 'all',
        notes: [initNote],
        activeNote: initNote
    };

} else {
    initNote = JSON.parse(window.localStorage.getItem(key));

    initData = {
        show: 'all',
        notes: initNote.notes,
        activeNote: initNote.notes[0]
    }
}


export const initStore = ({
    dispatch
}) => {
    dispatch('INIT_STORE', initData);
};

export const updateActiveNote = makeAction('SET_ACTIVE_NOTE');
export const newNote = makeAction('NEW_NOTE');
export const deleteNote = makeAction('DELETE_NOTE');
export const toggleFavorite = makeAction('TOGGLE_FAVORITE');
export const editNote = makeAction('EDIT_NOTE');
export const updateShow = makeAction('SET_SHOW_ALL');
