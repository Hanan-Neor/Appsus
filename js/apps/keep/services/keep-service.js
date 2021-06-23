import { storageService } from '../../../services/async-storage-service.js'

const NOTES_KEY = 'notesBD'

var gNotes = _creatNotes();

export const keepService = {
    query,



}

function query() {
    return storageService.query(NOTES_KEY);
}


// function getNotes() {
//     return _creatNotes()
//         .then(notes => {
//             gNotes = notes;
//             return Promise.resolve(notes);
//         })
//         .catch(err => {
//             console.log('Error', err)
//         });
// }


function _creatNotes() {
    return storageService.query(NOTES_KEY)
        .then(notesFromStroage => {
            let notes = notesFromStroage



            if (!notes || notes.length === 0) {
                notes = [

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
                storageService.postMany(NOTES_KEY, notes);
            }
            return (notes)
        
        
        })

}