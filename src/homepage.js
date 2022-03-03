import { navbar } from "./nav";

const homePage = (() => {
    navbar;

    //creating hero section
    const heroDiv = document.createElement('div');
    
    //creating hero h1
    const heroH1 = document.createElement('h1');
    heroH1.textContent = 'cool tagline about the restaurant';

    //creating hero h3
    const heroH3 = document.createElement('h3');
    heroH3.textContent = 'short subtitle!'

    //creating hero button
    const heroBtn = document.createElement('button');
    heroBtn.textContent = 'order btn'

    //creating subdiv for address and hours
    const heroSubDiv = document.createElement('div');

    //creating address
    const heroAddress = document.createElement('p');
    heroAddress.textContent = '123 fourth street, chicago, il 60615';

    //creating hours
    const heroHours = document.createElement('p');
    heroHours.textContent =  'every day from 2 am to 8 am'

    //appending address and hours to subdiv
    heroSubDiv.appendChild(heroHours);
    heroSubDiv.appendChild(heroAddress);

    //APPENDING EVERYTHING TO HERO DIV
    heroDiv.appendChild(heroH1);
    heroDiv.appendChild(heroH3);
    heroDiv.appendChild(heroBtn);
    heroDiv.appendChild(heroSubDiv);

    document.querySelector('body').appendChild(heroDiv);

})()

export { homePage }