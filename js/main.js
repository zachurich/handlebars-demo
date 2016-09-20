/*
 Lets define our templating content here
*/
var content = {
  site: {
    title: "Cool Product",
  },
  hero: {
    color: "rgba(63,97,166, 0.8)",
    subhead: "Just another cool product",
  },
  content: {
    section1: {
      img: "images/icon-01.svg",
      color: "white",
      detail: "Salvia air plant bitters, messenger bag lo-fi umami chicharrones gochujang vaporware flexitarian photo booth mixtape neutra.",
    },
    section2: {
      header: "Header",
      color: "#A2C5F2",
      img: "images/img1.jpg",
      detail: "Salvia air plant bitters, messenger bag lo-fi umami chicharrones gochujang vaporware flexitarian photo booth mixtape neutra. Coloring book cold-pressed thundercats, williamsburg iPhone vegan VHS quinoa celiac tofu. Synth hot chicken meditation lumbersexual, 3 wolf moon kombucha mustache twee artisan pabst cliche meh post-ironic asymmetrical. Tofu flannel hella, VHS put a bird on it gochujang meditation mumblecore.",
    },
    section3: {
      img: "images/icon-02.svg",
      color: "white",
      detail: "Salvia air plant bitters, messenger bag lo-fi umami chicharrones gochujang vaporware flexitarian photo booth mixtape neutra.",
    },
    section4: {
      header: "Header",
      color: "#35528C",
      img: "images/img2.jpg",
      detail: "Salvia air plant bitters, messenger bag lo-fi umami chicharrones gochujang vaporware flexitarian photo booth mixtape neutra. Coloring book cold-pressed thundercats, williamsburg iPhone vegan VHS quinoa celiac tofu. Synth hot chicken meditation lumbersexual, 3 wolf moon kombucha mustache twee artisan pabst cliche meh post-ironic asymmetrical. Tofu flannel hella, VHS put a bird on it gochujang meditation mumblecore.",
    },
    section5: {
      color: "white",
      img: "images/icon-02.svg",
      link: "https://github.com/zachurich/handlebars-demo",
      detail: "Check out the thing here",
    },
  },
  footer: {
    color: "#3F61A6",
    social1: {
      class: "fa fa-twitter",
      url: "http://twitter.com/zach462"
    },
    social2: {
      class: "fa fa-dribbble",
      url: "http://dribbble.com/zachurich"
    },
    social3: {
      class: "fa fa-linkedin",
      url: "http://linkedin.com/zachurich"
    },
  }
}

/* ------------------------------- */
// Select our script element
var source   = $("#body-content").html();

// comile our source via handlebars
var template = Handlebars.compile(source);

// append our content to the body
$(document.body).append(template(content));

/* ------------------------------- */
