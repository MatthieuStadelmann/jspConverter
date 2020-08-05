const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let $;

//H4: Titre du project
//first p sous titre
//second p adresse et site web
// q description
//last div background image

request('http://www.art.fondation.nestle.ch/soutiens/projets/artsvisuels.jsp?year=2018', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        const dom = new JSDOM(body);
        console.log(dom.window.document.querySelectorAll('.rsContent').forEach(project => console.log(project.textContent)));

    }
});
