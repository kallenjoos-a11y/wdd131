let courses = ["WDD131", "WDD130", "CSE110", "CSE210"];

console.log(courses[0]);

courses.forEach((item) => {
    console.log(item);
})

let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    instructor: "My Boy Brudda Warna"
}

courses[4] = course;

console.log(courses[4].credits)

let corpses = [
    {
        name: "awesome",
        credits: -1
    },
    {
        name: "Cool class",
        credits: -2
    }
]

console.log(corpses[1].name)
console.log(corpses[1].credits)

let body = document.querySelector('body');

corpses.forEach((item) => {
    let courseDiv = `
    <div> 
        <h2>${item.name}</h2>
        <p>Credits: ${item.credits}</p>
    </div>
    `;
    body.innerHTML += courseDiv;
})