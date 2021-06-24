// import { utilService } from './util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const EMAILS_KEY = 'emailsDB';
const gEmails = _createEmails();

export const emailService = {
    query,
    // remove,
    // save,
    // getEmptyCar,
    getById,
    remove,
    save
};

function query() {
    return storageService.query(EMAILS_KEY);
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAILS_KEY, email);
    } else {
        return storageService.post(EMAILS_KEY, email);
    }
}

function getById(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
        .then(email => { return email })
    // .then(email=> { return email})
}

// function getEmptyCar() {
//     return {
//         id: '',
//         vendor: '',
//         maxSpeed: 0
//     };
// }

function _createEmails() {
    return storageService.query(EMAILS_KEY)
        .then(mails => {
            let emails = mails;
            if (!emails || !emails.length) {
                emails = [];
                emails.push(_createEmail('m101', 'abraham', 'Welcome to Appsus-mail!','Lorem ipsum dolor,sit amet consectetur adipisicing elit.Porro vero nemo ex rem quos earum alias.Nesciunt quia aliquid blanditiis itaque velit, maxime repudiandae necessitatibus ? Optio aperiam iste commodi placeat esse, praesentium dolor nulla accusantium! Expedita voluptates ab perspiciatis provident, eum possimus debitis labore quas magnam, veniam alias sequi minima asperiores quam omnis.Quaerat consequatur vitae odit dicta quasi, error recusandae placeat nihil ? Eos totam voluptatibus unde quia iste in earum voluptatum aliquid atque, voluptatem eveniet id non amet et officia aut magnam sunt aliquam itaque magni fugiat culpa fuga odio.Laudantium minus vero sunt, quia nostrum voluptatem explicabo dolorum'));
                emails.push(_createEmail('m102', 'shuki', 'Welcome to Appsus-mail!', 'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Porro vero nemo ex rem quos earum alias.Nesciunt quia aliquid blanditiis itaque velit, maxime repudiandae necessitatibus ? Optio aperiam iste commodi placeat esse, praesentium dolor nulla accusantium! Expedita voluptates ab perspiciatis provident, eum possimus debitis labore quas magnam, veniam alias sequi minima asperiores quam omnis.Quaerat consequatur vitae odit dicta quasi, error recusandae placeat nihil ? Eos totam voluptatibus unde quia iste in earum voluptatum aliquid atque, voluptatem eveniet id non amet et officia aut magnam sunt aliquam itaque magni fugiat culpa fuga odio.Laudantium minus vero sunt, quia nostrum voluptatem explicabo dolorum'));
                emails.push(_createEmail('m103', 'rachel', 'Welcome to Appsus-mail!', 'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Porro vero nemo ex rem quos earum alias.Nesciunt quia aliquid blanditiis itaque velit, maxime repudiandae necessitatibus ? Optio aperiam iste commodi placeat esse, praesentium dolor nulla accusantium! Expedita voluptates ab perspiciatis provident, eum possimus debitis labore quas magnam, veniam alias sequi minima asperiores quam omnis.Quaerat consequatur vitae odit dicta quasi, error recusandae placeat nihil ? Eos totam voluptatibus unde quia iste in earum voluptatum aliquid atque, voluptatem eveniet id non amet et officia aut magnam sunt aliquam itaque magni fugiat culpa fuga odio.Laudantium minus vero sunt, quia nostrum voluptatem explicabo dolorum'));
                emails.push(_createEmail('m104', 'aba', 'Welcome to Appsus-mail!', 'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Porro vero nemo ex rem quos earum alias.Nesciunt quia aliquid blanditiis itaque velit, maxime repudiandae necessitatibus ? Optio aperiam iste commodi placeat esse, praesentium dolor nulla accusantium! Expedita voluptates ab perspiciatis provident, eum possimus debitis labore quas magnam, veniam alias sequi minima asperiores quam omnis.Quaerat consequatur vitae odit dicta quasi, error recusandae placeat nihil ? Eos totam voluptatibus unde quia iste in earum voluptatum aliquid atque, voluptatem eveniet id non amet et officia aut magnam sunt aliquam itaque magni fugiat culpa fuga odio.Laudantium minus vero sunt, quia nostrum voluptatem explicabo dolorum'));
                storageService.postMany(EMAILS_KEY, emails);
            }
            return emails;
        });
    // return emails;
}

function _createEmail(id, from, subject, body, isRead, sentAt = Date.now()) {
    const email = {
        // id: storageService.makeId(),
        id,
        from,
        subject,
        body,
        isRead: false,
        sentAt,
    };
    return email;
}



