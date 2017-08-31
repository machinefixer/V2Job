import DOMParser from 'react-native-html-parser';
// import htmlData from '../../data.html';
import RNFS from 'react-native-fs';

export function testDom() {
    // const html = `<p>Hello world <b>world</b> <i>foo</i> abc</p>`;
    // const parser = new DOMParser.DOMParser();
    // const parsed = parser.parseFromString(html, 'text/html');
    // console.log("parsed:" + parsed);
    parseJobCell();
}

export function parseJobCell(callback) {
    fetch('https://www.v2ex.com/go/jobs').then(response => {
        // console.log(response._bodyBlob);
        // const someString = /<html(.+)/.exec(response.text())[1];
        // const parser = new DOMParser.DOMParser();
        // const parsed = parser.parseFromString(someString, 'text/html');
        // console.log("parsed: " + parsed);

        let reader = new FileReader;
        reader.addEventListener("loadend", function() {
            console.log('result: ' + reader.result);
            const parser = new DOMParser.DOMParser();
            const parsed = parser.parseFromString(reader.result, 'text/html');
            let trArray = parsed.querySelect('#TopicsNode tr');
            console.log(trArray);

            let jobArray = [];

            for (let tr of trArray) {
                let aArray = tr.querySelect('a');

                let avatarImageURL = 'https:' + aArray[0].querySelect('img')[0].getAttribute("src");
                console.log('imgURL: ' + avatarImageURL);

                let jobTitle = aArray[1].textContent;
                console.log('jobTitle:' + jobTitle);

                let authorName = aArray[2].textContent;
                console.log('author: ' + authorName);

                let replyCount = aArray[4] === undefined ? '0' : aArray[4].textContent;
                console.log('replyCount: ' + replyCount);

                console.log(tr.querySelect('a'));
                let spanArray = tr.querySelect('span');
                let publishTime = spanArray[1].textContent.split('•')[1];
                console.log('publishTime: ' + publishTime);
                console.log(tr.querySelect('span'));

                jobArray.push({
                    avatarImageURL: avatarImageURL,
                    jobTitle: jobTitle,
                    authorName: authorName,
                    replyCount: replyCount,
                    publishTime: publishTime,
                });
            }

            callback(jobArray);
        });
        reader.readAsText(response._bodyBlob);
    });
}
