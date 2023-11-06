const teamMembers = [
    {
        name: `Wayne Barnett`,
        role: `Founder & CEO`,
        photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: `Angela Caroll`,
        role: `Chief Editor`,
        photo: "angela-caroll-chief-editor.jpg",
    },
    {
        name: `Walter Gordon`,
        role: `Office Manager`,
        photo: "walter-gordon-office-manager.jpg",
    },
    {
        name: `Angela Lopez`,
        role: `Social Media Manager`,
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: `Scott Estrada`,
        role: `Developer`,
        photo: "scott-estrada-developer.jpg",
    },
    {
        name: `Barbara Ramos`,
        role: `Graphic Designer`,
        photo: "barbara-ramos-graphic-designer.jpg",
    },
];

for (let i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i].name);
    console.log(teamMembers[i].role);
    console.log(teamMembers[i].photo);
}

let text = ``;

for (let i = 0; i < teamMembers.length; i++) {
    text += `
        <div class = "col">
            <div class = "card rounded-4">
                <img class = "rounded-top-4" src = "../img/${teamMembers[i].photo}">
                <div class = "py-3">
                    <h3>${teamMembers[i].name}</h3>
                    <h5>${teamMembers[i].role}</h5> 
                </div>
            </div>
        </div>
    `;
}

document.querySelector(".row").innerHTML = text;
