

const loadData =()=>{

fetch('https://jsonplaceholder.typicode.com/todos/1')
// promise of response
.then((response) =>response.json())
//promise of json data
.then((data) => console.log(data));

};


// const loadpost =()=>{
//     const url="https://jsonplaceholder.typicode.com/posts";

//     fetch(url)
//     .then((res) => res.json())
//     .then((json) =>{
//         console.log(json);
//         displayPost(json);
//     });
// };

//  const displayPost =(posts)=>{
//     posts.forEach((posts)=>{
//         console.log(posts);
//     });
//  };


// console.log("Explore Api");

// const person={
//     name:"selim",
//     fruit:"dalim",
//     dish:"halim",
//     friends:["alim","kolim","lamim"],
//     isRich:false,
//     money:34000,
// };
// console.log(person, typeof person);

//JSON(java script object Notation)-->js object with notation
// JSON.stringify-->kono object e string e convert kore JSON kore 
//JSON.parse--> r eta dara kono JSON file data ke abar object e convert kore

// const personJSON=JSON.stringify(person); //ekhane JSON.stringify(person) er dara object ke srring convert korse mane JSON korse 

// console.log(personJSON,typeof personJSON);

//abar string ke object format e convert
 
// const parseJSON= JSON.parse(personJSON);
// console.log(parseJSON,typeof parseJSON);