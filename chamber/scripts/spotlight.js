const spotlighturl = 'data/members.json'
const membersList = [];

async function getLinkData(){
    const response = await fetch(spotlighturl);
    const data = await response.json();
    buildArray(data.members);
} 

const buildArray = (members) =>{
    members.forEach((memeber) =>{
        if(members.level =="Gold" || members.level =="Silver"){
            membersList.push(memeber);
        }
    });
} 
getLinkData(); 

const card = document.querySelector('#cards');

function buildRandomList(){
    for(i=0;i<3;i++);
    {
        let indexNumber = Math.floor(Math.random() * membersList);
        
        let currentMember = memberList[indexNumber];
        membersList.splice(indexNumber,1);

        let newCard = document.createElement('article');
        newCard.setAttribute('class','member');
        newCard.innerHTML =`<img src="${currentMember.pic}" alt="${currentMember.alt}"><p>"${currentMember.pic}" alt=${currentMemeber.alt}"><p>"${currentMember.slug}"<br><a href="${currentMember.web}" target="_blank">${currentMember.name}</a></p>`;
        card.appendChild(newCard);
    }
   
}