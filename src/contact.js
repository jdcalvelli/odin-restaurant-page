import { navbar } from "./nav";


const contactPage = (() => {

    const renderContactPage = () => {
        navbar.renderNavBar();

        //creating contact us title
        const contactPageTitle = document.createElement('h1');
        contactPageTitle.textContent = "test contact us";
        document.querySelector('.content').appendChild(contactPageTitle);

        //creating contact us div
        const contactPageDiv = document.createElement('div');
        document.querySelector('.content').appendChild(contactPageDiv);

        //creating contact us address
        const contactAddress = document.createElement('p');
        contactAddress.textContent = '123 fourth street, chicago, il 60615';
        contactPageDiv.appendChild(contactAddress);

        //creating contact us times
        const contactHours = document.createElement('p');
        contactHours.textContent = 'every day from 2 am to 8 am';
        contactPageDiv.appendChild(contactHours);

        //creating contact us button
        const contactBtn = document.createElement('button');
        contactBtn.textContent = 'contact button';
        contactPageDiv.appendChild(contactBtn);
    }

    return { renderContactPage }

})()

export { contactPage }