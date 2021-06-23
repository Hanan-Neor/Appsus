import { storageService } from '../../../services/async-storage-service.js'

const NOTES_KEY = 'notesBD'

var gNotes = []

export const keepService = {
    getNotes,



}

function getNotes() {
    return _creatNotes()
        .then(notes => {
            gNotes = notes;
            return Promise.resolve(notes);
        })
        .catch(err => {
            console.log('Error', err)
        });
}


function _creatNotes() {
    const notes = storageService.query(NOTES_KEY)
    if (notes) {
        return Promise.resolve(notes);
    } else {
        const notes = [

            {
                type: "NoteTxt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                type: "NoteImg",
                info: {
                    url: "http://some-img/me",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                type: "NoteTodos",
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
            }
        ];
        storageService._save(NOTES_KEY, notes);
        return Promise.resolve(notes)

    }

}