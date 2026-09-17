let age = 21;
console.log(age);

let religion = "Church of Jesus Christ of Latter-day Saints";
let currProphet = "";

if (age >= 21) {
    console.log("You are old enough to drink.");

    if(religion === "Church of Jesus Christ of Latter-day Saints") {
        console.log("But you are not old enough to drink because you are a member of the Church of Jesus Christ of Latter-day Saints.");
        currProphet = "Dallin H. Oaks";
    }

    console.log("The current prophet of the Church of Jesus Christ of Latter-day Saints is " + currProphet + ".");

    // pull something from the HTML page

    document.querySelector("p").textContent = "The current prophet of the Church of Jesus Christ of Latter-day Saints is " + currProphet + ".";
    document.querySelector("p").style.color = "green";
}
