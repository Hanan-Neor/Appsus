// import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js'
const NOTES_KEY = 'notesBD'

var gNotes = _creatNotes();

export const keepService = {
    query,
    remove
}

function query() {
    console.log('hi')
    return storageService.query(NOTES_KEY)
        .then(notes => { return notes });
}




function _creatNotes() {
    return storageService.query(NOTES_KEY)
        .then(notesFromStroage => {
            let notes = notesFromStroage



            if (!notes || notes.length === 0) {
                notes = [

                    {
                        id: 'n101',
                        type: "noteTxt",
                        isPinned: true,
                        info: {
                            txt: "Fullstack Me Baby!"
                        }
                    },
                    {
                        id: 'n102',
                        type: "noteTxt",
                        isPinned: true,
                        info: {
                            txt: "Fullstackaaaaaa!"
                        }
                    },
                    {
                        id: 'n103',
                        type: "noteTxt",
                        isPinned: true,
                        info: {
                            txt: "Fullstack hhhh!"
                        }
                    },
                    // {
                    //     type: "noteImg",
                    //     info: {
                    //         url: "http://some-img/me",
                    //         title: "Me playing Mi"
                    //     },
                    //     style: {
                    //         backgroundColor: "#00d"
                    //     }
                    // },
                    // {
                    //     type: "noteTodos",
                    //     info: {
                    //         label: "How was it:",
                    //         todos: [
                    //             { txt: "Do that", doneAt: null },
                    //             { txt: "Do this", doneAt: 187111111 }
                    //         ]
                    //     }
                    // }
                ];
                storageService.postMany(NOTES_KEY, notes);
            }
            return (notes)


        })

}

function remove(noteId) {
    storageService.remove(NOTES_KEY, noteId)

}