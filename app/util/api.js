"use strict";

function getTopicList() {

}

function getTopicDetailByID(topicID, callback) {
    let url = "https://www.v2ex.com/api/topics/show.json?id=" + topicID;
    fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
            'Accept': 'application/json'
        }
    }).then(response => response.json()).then((jsonData) => {
      console.log('get topic jsonData: ' + jsonData[0]['content']);
      callback(jsonData[0]['content']);
    });

}

export default { getTopicList, getTopicDetailByID };