const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

let heroSection = null
let appsSection = null
let interfaceTabs = null
let interfaceTabsImages = null
let cards = null
let carouselConfig = null
let carouselImages = null
let featuresSection = null
let twitterSection = null
let tweets = null
let socialNetworks = null
let copyright = null


const heroSectionContent = fetch(
  'https://express-api.victorneves.dev/hero_section/',
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return res
  })
  .catch((error) => console.log(JSON.stringify(error)))

heroSectionContent.then(function (res) {
  heroSection = res.records[0]
})

const featuresSectionContent = fetch(
  'https://express-api.victorneves.dev/features_section/',
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return {
      title: res.records[0].title,
      title_css: res.records[0].title_css,
      text: res.records[0].text,
      text_css: res.records[0].text_css
    }
  })
  .catch((error) => console.log(JSON.stringify(error)))

featuresSectionContent.then(function (res) {
  featuresSection = res
})

const cardsContent = fetch(
  'https://express-api.victorneves.dev/cards/',
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return res
  })
  .catch((error) => console.log(JSON.stringify(error)))

cardsContent.then(function (res) {
  cards = res.records
})

const carouselConfigContent = fetch(
  'https://express-api.victorneves.dev/carousel_config/1',
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return {
      config: {
        mainClass: res.records[0].main_css,
        innerClass: res.records[0].inner_css,
        listClass: res.records[0].list_css,
        itemClass: res.records[0].item_css,
        imgClass: res.records[0].img_css,
        modifierClass: res.records[0].modifier_css,
        nrOfLoops: res.records[0].nr_loops
      }
    }
  })
  .catch((error) => console.log(JSON.stringify(error)))

carouselConfigContent.then(function (res) {
  carouselConfig = res
})

const carouselContent = fetch(
  'https://express-api.victorneves.dev/carousel_images/1',
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return {
      carousel: res.records,
    }
  })
  .catch((error) => console.log(JSON.stringify(error)))

carouselContent.then(function (res) {
  carouselImages = res
})

const appsSectionContent = fetch(
  'https://express-api.victorneves.dev/apps_section/',
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return {
      title: res.records[0].title,
      text: {
        __class: res.records[0].text_css,
        text: res.records[0].text
      }
    }
  })
  .catch((error) => console.log(JSON.stringify(error)))

appsSectionContent.then(function (res) {
  appsSection = res
})

const interfaceTabsContent = fetch(
  "https://express-api.victorneves.dev/interface_tabs/",
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return {
      interfaceTabsOptions: res.records
    }
  })
  .catch((error) => console.log(JSON.stringify(error)))

interfaceTabsContent.then(function (res) {
  interfaceTabs = res
})

const interfaceTabsImagesContent = fetch(
  "https://express-api.victorneves.dev/interface_tabs_images/",
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return {
      interfaceTabsImages: res.records
    }
  })
  .catch((error) => console.log(JSON.stringify(error)))

interfaceTabsImagesContent.then(function (res) {
  interfaceTabsImages = res
})

const twitterContent = fetch(
  "https://express-api.victorneves.dev/twitter_section/",
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) =>  res.records)
  .catch((error) => console.log(JSON.stringify(error)))

twitterContent.then(function (res) {
  twitterSection = res[0]
})

const tweetsContent = fetch(
  "https://express-api.victorneves.dev/tweets/",
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => res.records)
  .catch((error) => console.log(JSON.stringify(error)))

tweetsContent.then(function (res) {
  tweets = res
})

const socialNetworksContent = fetch(
  "https://express-api.victorneves.dev/social_networks/",
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => res.records)
  .catch((error) => console.log(JSON.stringify(error)))

socialNetworksContent.then(function (res) {
  socialNetworks = res
})

const copyrightContent = fetch(
  "https://express-api.victorneves.dev/copyrights/",
  requestOptions
)
  .then((resp) => resp.json())
  .then((res) => {
    return {
      __class: res.records[0].css,
      text: res.records[0].text,
    }
  })
  .catch((error) => console.log(JSON.stringify(error)))

copyrightContent.then(function (res) {
  copyright = res
})

router.get('/', function (req, res, next) {
  res.render("index", {
    heroSection,
    featuresSection,
    cards,
    carouselConfig,
    carouselImages,
    appsSection,
    interfaceTabs,
    interfaceTabsImages,
    tweets,
    twitterSection,
    socialNetworks,
    copyright,
  });
})

module.exports = router
