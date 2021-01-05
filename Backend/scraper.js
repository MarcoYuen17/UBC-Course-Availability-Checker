const rp = require('request-promise');
const $ = require('cheerio');
const NUM_SEAT_TYPES = 4;

function getSeatList(code, id, section) {
    const url = `https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-section&dept=${code}&course=${id}&section=${section}`;
    let seatList = [];
    rp(url)
        .then((html) => {
            let tagContents = $('td > strong', html).contents();
            for (let i = 0; i < NUM_SEAT_TYPES; i++) {
                seatList.push(tagContents[i].data);
            }
            console.log(seatList);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = getSeatList;