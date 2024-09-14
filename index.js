let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray];

// copiedArray のすべての要素を 10 倍にする
for(let i = 0; i < copiedArray.length; i++) {
    copiedArray[i] = copiedArray[i] * 10;
}
console.log("originalArray:", originalArray);
console.log("copiedArray:", copiedArray);


const fetchAPI = () => {
  return {
    "categories": {
      "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
      "limit": 20,
      "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
      "offset": 0,
      "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
      "total": 4,
      "items": [
        {
          "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFGvOw3O4nLAf",
          "id": "0JQ5DAqbMKFGvOw3O4nLAf",
          "icons": [
            {
              "height": 274,
              "url": "https://t.scdn.co/images/2078afd91e4d431eb19efc5bee5ab131.jpeg",
              "width": 274
            }
          ],
          "name": "K-POP"
        },
        {
          "href": "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw",
          "id": "0JQ5DAqbMKFEC4WFtoNRpw",
          "icons": [
            {
              "height": 274,
              "url": "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
              "width": 274
            }
          ],
          "name": "ポップ"
        }
      ]
    }
  };
};

const getItems = async () => {
const json = fetchAPI();
const result = json.categories.items.map((item) => {
  return {
    href: item.href,
    id: item.id,
    icons: item.icons,
    name: item.name
  }
})
return result;
}

getItems().then((result) => {
  console.log(result);
})



