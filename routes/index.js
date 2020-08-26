const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

let heroSection = null
let appsSection = null;

const heroSectionContent = fetch('https://express-api.victorneves.dev/hero_section/read.php', requestOptions)
  .then((resp) => resp.json())
  .then((res) => {
    return res
  })
  .catch((error) => console.log(JSON.stringify(error)));

  heroSectionContent.then(function (res) {
    heroSection = res.records[0];
  });

const appsSectionContent = fetch('https://express-api.victorneves.dev/apps_section/read.php', requestOptions)
  .then((resp) => resp.json())
  .then((res) => {
    const obj = {
      title: res.records[0].title,
      text: {
        __class: res.records[0].text_css,
        text: res.records[0].text,
      },
    }

    return obj
  })
  .catch((error) => console.log(JSON.stringify(error)));

  appsSectionContent.then(function (res) {
    appsSection = res;
  });

  router.get("/", function (req, res, next) {
    res.render("index", { heroSection, appsSection });
  })

module.exports = router
