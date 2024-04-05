const listurl = "data/members.json";
const memberList =document.querySelector("#content");

const membersList = data/members.json.filter(member => member.membershipLevel === 'silver' || member.membershipLevel ==='gold');

const numSoptlightAds = Math.min(3, qualifiedMembers.length);
const selectedMembers = [];

while(selectedMembers.length < numSoptlightAds){
    const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
    const randomMember = qualifiedMembers[randomIndex];
    if(!selectedMembers.includes(randomMember)){
        selectedMembers.push(randomMember);
    }
} 

selectedMembers.forEach(member => {
    const spotlightAdContainer = docment.getElementById('spotlight-ads');
    const adElement = document.createElement('div');
    adElement.innerHTML =`
    <div class="ad">
    <img src="${member.image}" alt="${member.name}">
    <h3>${member.name}</h3>
    <p>${member.description}</p>
  </div> `;

  spotlightAdContainer.appendChild(adElement);
});