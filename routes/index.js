const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

let heroSection = null
let appsSection = null
let cards = null
let carouselConfig = null
let carouselImages = null
let featuresSection = null

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
    const obj = {
      title: res.records[0].title,
      title_css: res.records[0].title_css,
      text: res.records[0].text,
      text_css: res.records[0].text_css
    }

    return obj
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
    const obj = {
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

    return obj
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
    const obj = {
      carousel: res.records,
    }

    return obj
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
    const obj = {
      title: res.records[0].title,
      text: {
        __class: res.records[0].text_css,
        text: res.records[0].text
      }
    }

    return obj
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
    const obj = {
      interfaceTabsOptions: res.records
    }

    return obj
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
    const obj = {
      interfaceTabsImages: res.records
    }

    return obj
  })
  .catch((error) => console.log(JSON.stringify(error)))

interfaceTabsImagesContent.then(function (res) {
  interfaceTabsImages = res
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
    interfaceTabsImages
  })
})

module.exports = router
