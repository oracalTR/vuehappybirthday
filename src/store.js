import { createStore } from 'vuex';

export default createStore ({
    state() {
        return {
            male: 'woman',
            counter: 5,
            dataMaleText: [
                'Хочу поздравить с днем рождения<br />И в этот день Вам пожелать<br />Любви, успеха, наслаждения,<br />Чтоб никогда не унывать.<br /><br />Чтобы мечты всегда сбывались,<br />Сияли радостью глаза.<br />Чтобы проблемы разбегались,<br />Судьба дарила чудеса.'
            ],
            dataMalePhoto: [
                'card-w-01.jpg'
            ],
            numText: 0,
            numPhoto: 0,
        }
    },
    created() {
        console.log('Начало работы');
    },
    mutations: {
        changeBody(state) {
            if(state.male === 'woman') {
                document.body.classList.remove('man') ;
                document.body.classList.add('woman');
            } else {
                document.body.classList.remove('woman');
                document.body.classList.add('man');
            }
        },
        DataBase(state, data) {
            console.log(data);
            if(state.male === 'woman') {
                state.dataMaleText = data.text[state.male]
                state.dataMalePhoto = data.photo[state.male]
            } else if (state.male === 'man') {
                state.dataMaleText = data.text[state.male]
                state.dataMalePhoto = data.photo[state.male]
            }
        },
        changeCards(state, payload) {
            console.log(payload);
            if (payload === 'text') {
                let numRandom = Math.round(Math.random() * ((state.dataMaleText.length - 1) - 0)) + 0;
                if (numRandom === state.numText || numRandom > state.dataMaleText.length - 1) {
                    console.log('Попали в text');
                    state.numText = 0
                } else {
                    state.numText = numRandom
                }
                console.log('numRandom: ', numRandom);
            } 
            if (payload === 'image') {
                let numRandom = Math.round(Math.random() * ((state.dataMalePhoto.length - 1) - 0)) + 0;
                if (numRandom === state.numPhoto || numRandom > state.dataMalePhoto.length - 1) {
                    console.log('Попали в image');
                    state.numPhoto = 0
                } else {
                    state.numPhoto = numRandom
                }
                console.log('numRandom: ', numRandom);
                console.log('stateNumPhoto: ', state.numPhoto);
            }
        },
    },
    actions: {
        async getDataBase(context) {
            const dataBase = () => {
                fetch('./db/db.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    context.commit('DataBase', data)
                })
            }
            dataBase()
        }
    },
})
