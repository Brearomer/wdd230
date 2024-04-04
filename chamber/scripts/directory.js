const listurl = "data/members.json";
const memberList =document.querySelector("#content");


const listbutton = document.querySelector("#list");


async function getLinkData(){
  const response = await fetch(listurl);
  const data = await response.json();
  displayLinks(data.members);
}
  
function displayLinks  (members) {
 
  members.forEach((member) =>{
    console.log("Hello");
        let card = document.createElement('div');
        let pic = document.createElement('img');
        let location = document.createElement('p');
        let call = document.createElement('p');
        let url = document.createElement('a');

      card.setAttribute('class', 'memberCard')
        pic.setAttribute('src', member.imageFile);
        pic.setAttribute('alt', `Image of ${member.businessType} logo`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('max-width', '200');
        pic.setAttribute('height', 'auto');
        location.textContent = `${member.address}`;
        call.textContent = `${member.phoneNumber}`;
        url.setAttribute('href', `${member.websiteUrl}`);
        url.setAttribute('target', '_blank');
        url.textContent = `${member.businessType}`; 

        card.appendChild(pic);
        card.appendChild(location);
        card.appendChild(call);
        card.appendChild(url);
        memberList.appendChild(card);
  }     
  )
  };


getLinkData();

/*********Grid/List layout toggle */
const gridbutton = document.querySelector('#grid');
const display = document.querySelector('#content');

gridbutton.addEventListener("click",() =>{
  display.classList.toggle("grid");
  display.classList.toggle("list");
}); 
