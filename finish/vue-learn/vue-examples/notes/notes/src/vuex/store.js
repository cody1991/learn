import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let key = 'notes';

const state = {
    notes: [],
    activeNote: {},
    show: ''
}

const mutations = {
    INIT_STORE(state, data) {
        state.notes = data.notes;
        state.show = data.show;
        state.activeNote = data.activeNote;

        console.log(JSON.stringify(state.notes));
        console.log(state.show);
        console.log(JSON.stringify(state.activeNote));

        window.localStorage.setItem(key, JSON.stringify(state));

    },

    NEW_NOTE(state) {
        var newNote = {
            id: +new Date(),
            title: '新的笔记',
            content: '新的笔记内容',
            favorite: false
        };

        state.notes.push(newNote);
        state.activeNote = newNote;

        window.localStorage.setItem(key, JSON.stringify(state));

    },

    EDIT_NOTE(state, note) {
        state.activeNote = note;
        for (var i = 0; i < state.notes.length; i++) {
            if (state.notes[i].id === note.id) {
                state.notes[i] = note;
                break;
            }
        }

        window.localStorage.setItem(key, JSON.stringify(state));

    },

    DELETE_NOTE(state) {
        state.notes.$remove(state.activeNote);
        state.activeNote = state.notes[0] || {};

        window.localStorage.setItem(key, JSON.stringify(state));

    },

    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite;

        window.localStorage.setItem(key, JSON.stringify(state));
    },

    SET_SHOW_ALL(state, show) {
        state.show = show;
        if (show === 'favorite') {
            state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
        } else {
            state.activeNote = state.notes[0] || {};
        }

        window.localStorage.setItem(key, JSON.stringify(state));

    },

    SET_ACTIVE_NOTE(state, note) {
        state.activeNote = note;
        window.localStorage.setItem(key, JSON.stringify(state));
    }
};

export default new Vuex.Store({
    state,
    mutations
});
