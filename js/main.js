/*
 Lets define our templating content here
*/
var content = {
  hero: {
    title: "Hero Text",
    subhead: "SubText",
  },
  content: {
    section1: {
      detail: "Salvia air plant bitters, messenger bag lo-fi umami chicharrones gochujang vaporware flexitarian photo booth mixtape neutra. Coloring book cold-pressed thundercats, williamsburg iPhone vegan VHS quinoa celiac tofu. Synth hot chicken meditation lumbersexual, 3 wolf moon kombucha mustache twee artisan pabst cliche meh post-ironic asymmetrical. Tofu flannel hella, VHS put a bird on it gochujang meditation mumblecore.",
    },
    section2: {
      detail: "test",
    },
  },
  footer: {
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
    social4: {
      class: "fa fa-github",
      url: "http://github.com/zachurich"
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
