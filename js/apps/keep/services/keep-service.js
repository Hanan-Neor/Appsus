import { storageService } from '../../../services/async-storage-service.js'
const NOTES_KEY = 'notesBD'

var gNotes = _creatNotes();

export const keepService = {
    query,
    remove,
    save,
    update
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
                        isPinned: false,
                        label: "Welcome!",
                        info: {
                            txt: " Here you can write and edit anything you want "
                        },
                        style: {
                            backgroundColor: "#ffffe0"
                        }

                    },

                    {
                        id: 'n102',
                        type: "noteImg",
                        isPinned: false,
                        label: "My - Picture",
                        info: {
                            url: "https://dalicanvas.co.il/wp-content/uploads/2020/02/%D7%A9%D7%A7%D7%99%D7%A2%D7%94-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA-1.jpg",
                            title: ""
                        },
                        style: {
                            backgroundColor: "#ffb6c1"
                        }
                    },
                    {
                        id: 'n103',
                        type: "noteVideo",
                        isPinned: false,
                        info: {
                            url: "https://www.youtube.com/watch?v=c-I5S_zTwAc",
                            title: "youtube video"
                        },
                        style: {
                            backgroundColor: "#cbf0f8"
                        }
                    },
                    // {
                    //     id: 'n104',
                    //     type: "noteToDos",
                    //     isPinned: false,
                    //     info: {
                    //         label: "How was it:",
                    //         todos: [
                    //             { txt: "Do that", doneAt: null },
                    //             { txt: "Do this", doneAt: 187111111 }
                    //         ]
                    //     },
                    //     style: {
                    //         backgroundColor: "#C1C1C1"
                    //     }
                    // },

                ];
                storageService.postMany(NOTES_KEY, notes);
            }
            return (notes)
        })

}

function remove(noteId) {
    console.log(noteId)
    return storageService.remove(NOTES_KEY, noteId)

}

function save(note) {
    console.log('new-note:', note)
    if (note.id) {
        return storageService.put(NOTES_KEY, note);
    } else {
        return storageService.post(NOTES_KEY, note);
    }
}

function update(note) {
    console.log(note)
    return storageService.put(NOTES_KEY, note);
}