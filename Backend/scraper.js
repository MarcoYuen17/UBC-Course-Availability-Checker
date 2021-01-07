const rp = require('request-promise');
const $ = require('cheerio');
const WAIT_MS = 500;

// Need to create a short wait in the getNumSeats function to give time for seat info to load
function wait() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('');
        }, WAIT_MS);
    });
}

async function getNumSeats(code, id, section, seatType) {
    const url = `https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-section&dept=${code}&course=${id}&section=${section}`;
    let numSeats = -1;
    rp(url)
        .then((html) => {
            let tagContents = $('td > strong', html).contents();
            switch (seatType) {
                case 'General':
                    numSeats = tagContents[2].data;
                case 'Restricted':
                    numSeats = tagContents[3].data;
                default:
                    numSeats = tagContents[0].data;
            }
        })
        .catch((err) => {
            console.log(`An error occurred while obtaining data for ${seatType.toLowerCase()} seats in ${code}${id} - section ${section}.`);
        });

        await wait();
        return numSeats;
}

module.exports = getNumSeats;