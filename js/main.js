/*
 Lets define our templating content here
*/
var content = {
  hero: {
    title: "Hero Text",
    subhead: "SubText",
  }
};


/* ------------------------------- */
// Select our script element
var source   = $("#body-content").html();

// comile our source via handlebars
var template = Handlebars.compile(source);

// append our content to the body
$(document.body).append(template(content));
