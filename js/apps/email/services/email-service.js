// import { utilService } from './util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const EMAILS_KEY = 'emailsDB';
const gEmails = _createEmails();

export const emailService = {
    query,
    // remove,
    // save,
    // getEmptyCar,
    // getById
};

function query() {
    return storageService.query(EMAILS_KEY);
}

// function remove(carId) {
//     return storageService.remove(CARS_KEY, carId);
// }

// function save(car) {
//     if (car.id) {
//         return storageService.put(CARS_KEY, car);
//     } else {
//         return storageService.post(CARS_KEY, car);
//     }
// }

// function getById(carId) {
//     return storageService.get(CARS_KEY, carId);
// }

// function getEmptyCar() {
//     return {
//         id: '',
//         vendor: '',
//         maxSpeed: 0
//     };
// }

function _createEmails() {
    return storageService.query(EMAILS_KEY)
            .then(mails=> {
                let emails = mails;
                if (!emails || !emails.length) {
                    emails = [];
                    emails.push(_createEmail('abraham', 'Welcome!' , 'bla bla bla bla bla'));
                    emails.push(_createEmail('shuki', 'Welcome!' , 'bla bla bla bla bla'));
                    emails.push(_createEmail('rachel', 'Welcome!' , 'bla bla bla bla bla'));
                    emails.push(_createEmail('aba', 'Welcome!' , 'bla bla bla bla bla'));
                    storageService.postMany(EMAILS_KEY, emails);
                }
                return emails;
        });   
    // return emails;
}

function _createEmail(from , subject , body , isRead , sentAt = Date.now() ) {
    const email = {
        // id: storageService.makeId(),
        from,
        subject,
        body,
        isRead : false,
        sentAt,
    };
    return email;
}



