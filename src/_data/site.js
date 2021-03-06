/**
  Your global data folder is controlled by the dir.data configuration option. 
  All *.json and module.exports values from *.js files in this directory will 
  be added into a global data object available to all templates.

  This file can be accessed using: {{ site.title }}
*/

module.exports = {
  title: "Terminal - roon.ninja",
  url: "https://log.chriscollins.me", // Don't end with a slash /
  description: "My ArchLinux daily terminal log",
  copyright: {
    from: "2019",
    name: "Roni Ardiyanto"
  },
  social_meta: {
    twitter: "@roniardiyanto_",
    instagram: "membias",
    featured_image: "/assets/images/featured_image.jpg"
  },
  ENV: process.env.ELEVENTY_ENV
};
