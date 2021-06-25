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
    save,
    filter,
    sort,
};

function filter(emails, filterBy) {
    if (!filterBy || filterBy === '') return emails;
    return emails.filter(email => {
        // return email.toLowerCase().includes(searchStr);
        return new RegExp(filterBy, 'i').test(JSON.stringify(email))
    })
}

function sort(emails, sortBy) {
    let filteredEmails = emails;
    console.log(filteredEmails);
    switch (sortBy) {

        case 'Newest first':
            console.log('new');
            filteredEmails.sort((a, b) => {
                return (b.sentAt - a.sentAt)
            });
            break;
        case 'Oldest first':

            console.log('old');
            filteredEmails.sort((a, b) => {
                return (b.sentAt - a.sentAt)*(-1)
            });
            break;

    }
    // console.log(filteredEmails);
    return filteredEmails;

}

// function filter(filterBy) {
//     return storageService.query(EMAILS_KEY)
//         .then(emails => {
//             if (!filterBy || filterBy === '') return emails;
//             return emails.filter(email => {
//                 // return email.toLowerCase().includes(searchStr);
//                 return new RegExp(filterBy, 'i').test(JSON.stringify(email))

//             })
//         })
// }






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
                emails.push(_createEmail('m101', 'rachel', 'Welcome to Appsus-mail!', m101TEXT));
                emails.push(_createEmail('m102', 'Avi', 'Grevillea juniperina', m102TEXT));
                emails.push(_createEmail('m103', 'Shuki', 'Battle of Iwo Jima', m103TEXT));
                emails.push(_createEmail('m104', 'Puki', 'Audie Murphy', m104TEXT));
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


let m101TEXT = 'Lorem ipsum dolor,sit amet consectetur adipisicing elit.Porro vero nemo ex rem quos earum alias.Nesciunt quia aliquid blanditiis itaque velit, maxime repudiandae necessitatibus ? Optio aperiam iste commodi placeat esse, praesentium dolor nulla accusantium! Expedita voluptates ab perspiciatis provident, eum possimus debitis labore quas magnam, veniam alias sequi minima asperiores quam omnis.Quaerat consequatur vitae odit dicta quasi, error recusandae placeat nihil ? Eos totam voluptatibus unde quia iste in earum voluptatum aliquid atque, voluptatem eveniet id non amet et officia aut magnam sunt aliquam itaque magni fugiat culpa fuga odio.Laudantium minus vero sunt, quia nostrum voluptatem explicabo dolorum';


let m102TEXT = `Grevillea juniperina, commonly known as juniper- or juniper-leaf grevillea or prickly spider-flower, is a plant of the family Proteaceae native to eastern New South Wales and south-eastern Queensland in Australia. Scottish botanist Robert Brown described the species in 1810, and seven subspecies are recognised. One subspecies, G. j. juniperina, is restricted to Western Sydney and environs and is threatened by loss of habitat and housing development.
A small prickly leaved shrub between 0.2 and 3 m (8 in to 10 ft) high, G. juniperina grows generally on clay-based or alluvial soils in eucalypt woodland. The flower heads, known as inflorescences, appear from winter to early summer and are red, orange or yellow. Birds visit and pollinate the flowers. Grevillea juniperina plants are killed by bushfire, regenerating afterwards from seed. Grevillea juniperina adapts readily to cultivation and has been important in horticulture as it is the parent of many popular garden hybrids.`;


let m103TEXT = `The American invasion of Iwo Jima began on February 19, 1945, and continued to March 26, 1945. The battle was a major initiative of the Pacific Campaign of World War II. The Marine invasion, known as "Operation Detachment", was charged with the mission of capturing the airfields on the island for use by P-51 fighters, and rescue of damaged heavy bombers that were not able to reach their main bases at Guam and Saipan; until then Japanese warplanes from there had harried U.S. bombing missions to Tokyo.

The battle was marked by some of the fiercest fighting of the War. The Imperial Japanese Army positions on the island were heavily fortified, with vast bunkers, hidden artillery, and 18 kilometres (11 mi) of tunnels.[31][32] The battle was the first U.S. attack on the Japanese Home Islands and the Imperial soldiers defended their positions tenaciously. Of the 21,000 Japanese soldiers present at the beginning of the battle, over 19,000 were killed and only 1,083 taken prisoner.[33]
                
One of the first objectives after landing on the beachhead was the taking of Mount Suribachi. At the second raising of a flag on the peak, Joe Rosenthal photographed five Marines and one Pharmacist Mate raising the United States flag on the fourth day of the battle (February 23).`;



let m104TEXT = `Audie Leon Murphy (20 June 1925 – 28 May 1971) was an American soldier, actor, songwriter, and rancher. He was one of the most decorated American combat soldiers of World War II. He received every military combat award for valor available from the U.S. Army, as well as French and Belgian awards for heroism. Murphy received the Medal of Honor for valor that he demonstrated at the age of 19 for single-handedly holding off a company of German soldiers for an hour at the Colmar Pocket in France in January 1945, then leading a successful counterattack while wounded and out of ammunition.

Murphy was born into a large family of sharecroppers in Hunt County, Texas. His father abandoned them, and his mother died when he was a teenager. Murphy left school in fifth grade to pick cotton and find other work to help support his family; his skill with a hunting rifle helped feed his family.
                
After the attack on Pearl Harbor in 1941, Murphy's older sister helped him to falsify documentation about his birthdate in order to meet the minimum-age requirement for enlisting in the military. Turned down initially for being underweight by the Army, Navy and the Marine Corps, he eventually was able to enlist in the Army. He first saw action in the 1943 Allied invasion of Sicily; then in 1944 he participated in the Battle of Anzio, the liberation of Rome, and the invasion of southern France. Murphy fought at Montélimar and led his men on a successful assault at L'Omet quarry near Cleurie in north-eastern France in October.
                
After the war, Murphy embarked on a 21-year acting career. He played himself in the 1955 autobiographical film To Hell and Back, based on his 1949 memoirs of the same name, but most of his roles were in westerns. He made guest appearances on celebrity television shows and starred in the series Whispering Smith. Murphy was a fairly accomplished songwriter. He bred quarter horses in California and Arizona, and became a regular participant in horse racing.
                
Suffering from what would today be described as post traumatic stress disorder (PTSD), Murphy slept with a loaded handgun under his pillow. He looked for solace in addictive sleeping pills. In his last few years, he was plagued by money problems but refused offers to appear in alcohol and cigarette commercials because he did not want to set a bad example. Murphy died in a plane crash in Virginia in 1971, which was shortly before his 46th birthday. He was interred with military honors at Arlington National Cemetery, where his grave is one of the most visited.`;
