const contentArray = [
    {
        planetmoon:"./assets/destination/image-moon.png",
        title:"MOON",
        moontext:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avgdistance:"AVG. DISTANCE",
        avgdistancevalue:"384,400 KM",
        esttraveltime:"EST. TRAVEL TIME",
        esttraveltimevalue:"3 DAYS"
    },
    {
        planetmoon:"./assets/destination/image-mars.png",
        title:"MARS",
        moontext:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        avgdistance:"AVG. DISTANCE",
        avgdistancevalue:"225 MIL. KM",
        esttraveltime:"EST. TRAVEL TIME",
        esttraveltimevalue:"9 MONTHS"
    },
    {
        planetmoon:"./assets/destination/image-europa.png",
        title:"EUROPA",
        moontext:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avgdistance:"AVG. DISTANCE",
        avgdistancevalue:"628 MIL. KM",
        esttraveltime:"EST. TRAVEL TIME",
        esttraveltimevalue:"3 YEARS"
    },
    {
        planetmoon:"./assets/destination/image-titan.png",
        title:"TITAN",
        moontext:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avgdistance:"AVG. DISTANCE",
        avgdistancevalue:"1.6 BIL. KM",
        esttraveltime:"EST. TRAVEL TIME",
        esttraveltimevalue:"7 YEARS"
    }
];
  function showContent(index) {
    currentIndex = index;
    document.getElementById("planetmoon").src = contentArray[index]["planetmoon"];
    document.getElementById("title").innerText = contentArray[index].title;
    document.getElementById("moontext").innerText = contentArray[index].moontext;
    document.getElementById("avgdistance").innerText = contentArray[index]["avgdistance"];
    document.getElementById("avgdistancevalue").innerText = contentArray[index]["avgdistancevalue"];
    document.getElementById("esttraveltime").innerText = contentArray[index]["esttraveltime"];
    document.getElementById("esttraveltimevalue").innerText = contentArray[index]["esttraveltimevalue"];
  }
const crewArray = [
    {
        commander:"COMMANDER",
        Name:"DOUGLAS HURLEY",
        bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        pic:"./assets/crew/image-douglas-hurley.png"
    }
    ,
    {
        commander:"MISSION SPECIALIST",
        Name:"MARK SHUTTLEWORTH",
        bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        pic:"./assets/crew/image-mark-shuttleworth.png"
    },
    {
        commander:"PILOT",
        Name:"VICTOR GLOVER",
        bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        pic:"./assets/crew/image-victor-glover.png"
    },
    {
        commander:"FLIGHT ENGINEER",
        Name:"ANOUSHEH ANSARI",
        bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        pic:"./assets/crew/image-anousheh-ansari.png"
    }
];
function showCrew(index) {
    currentIndex = index;
    document.getElementById("commander").innerText = crewArray[index].commander;
    document.getElementById("Name").innerText = crewArray[index].Name;
    document.getElementById("bio").innerText = crewArray[index].bio;
    document.getElementById("pic").src = crewArray[index].pic;
}
const techArray = [
    {
        name:"LAUNCH VEHICLE",
        description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imgdesktop:"./assets/technology/image-launch-vehicle-portrait.jpg",
        imgtablet:"./assets/technology/image-launch-vehicle-landscape.jpg",
        imgmobile:"./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    {
        name:"SPACEPORT",
        description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imgdesktop:"./assets/technology/image-spaceport-portrait.jpg",
        imgtablet:"./assets/technology/image-spaceport-landscape.jpg",
        imgmobile:"./assets/technology/image-spaceport-landscape.jpg"
    },
    {
        name:"SPACE CAPSULE",
        description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imgdesktop:"./assets/technology/image-space-capsule-portrait.jpg",
        imgtablet:"./assets/technology/image-space-capsule-landscape.jpg",
        imgmobile:"./assets/technology/image-space-capsule-landscape.jpg"
    }
];
function showTech(index) {
    currentIndex = index;
    document.getElementById("name").innerText = techArray[index].name;
    document.getElementById("description").innerText = techArray[index].description;
    document.getElementById("imgdesktop").src = techArray[index].imgdesktop;
    document.getElementById("imgtablet").src = techArray[index].imgtablet;
    document.getElementById("imgmobile").src = techArray[index].imgmobile;
}
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("activate");
}

const items = document.querySelectorAll('.click');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Remove "selected" class from all items
    items.forEach(i => i.classList.remove('active'));

    // Add "selected" class to clicked item
    item.classList.add('active');
  });
});

const buttons = document.querySelectorAll('.dp');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');
  });
});;

const tabs = ['a1', 'a2', 'a3'];

tabs.forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('click', () => {
    tabs.forEach(t => document.getElementById(t).classList.remove('active'));
    el.classList.add('active');
  });
});
  