function menuHandler(item) {
  if (item == "all") {
    $('#projectsRow').empty();
    renderProjects('all');
  } else if (item == "2017") {
    $('#projectsRow').empty();
    renderProjects('2017');
  } else if (item == "2016") {
    $('#projectsRow').empty();
    renderProjects('2016');
  } else if (item == "2015") {
    console.log("zozin");
  }
}

function renderProjects(selected) {
  var source   = $("#projectsContainer").html();
  var template = Handlebars.compile(source);
  var projects = [
    {
      title: "Sensel Classifier",
      imSource: "../assets/images/project_icons/sensel800x400.png",
      date: "April 2017 - May 2017",
      description: "Hand and foot classifier based on inputs from a pressure module",
      tag: "2017"
    },
    {
      title: "Weija Messenger Bot",
      imSource: "../assets/images/project_icons/weija800x400.png" ,
      date: "March 2017 - May 2017",
      description: "Facebook messenger bot with multiple features such as bus tracking and dad jokes",
      tag: "2017"
    },
    {
      title: "Raspi Car",
      imSource: "../assets/images/project_icons/raspicar800x400.png",
      date: "March 2017 - April 2017",
      description: "Raspberry Pi controlled car. Future plans to implement self driving",
      tag: "2017"
    },
    {
      title: "Youtube Scraper",
      imSource: "../assets/images/project_icons/youtubescraper800x400.png",
      date: "Feburary 2017 - March 2017",
      description: "Self portait machine to scrape youtube data and visualize it",
      tag: "2017"
    },
    {
      title: "Pittsburgh Bus API",
      imSource: "../assets/images/project_icons/bustrakr800x400.png" ,
      date: "January 2017 - Feburary 2017",
      description: "Robust python addon to the Pittsburgh Port Authority bus API",
      tag: "2017"
    },
    {
      title: "Trapped Unity Game",
      imSource: "../assets/images/project_icons/room800x400.png",
      date: "November 2016 - December 2016",
      description: "Interactive multiplayer unity game where 2 players work together to escape a room",
      tag: "2016"
    },
    {
      title: "Rude Goldberg",
      imSource: "../assets/images/project_icons/rubegoldberg.png",
      date: "October 2016 - November 2016",
      description: "Introductory Unity application with rudimentary unity physics",
      tag: "2016"
    },
    {
      title: "Bing Rewards Bot",
      imSource: "../assets/images/project_icons/bingbots.png",
      date: "August 2016",
      description: "Automated scripts to log in and claim bing rewards",
      tag: "2016"
    },
  ]

  projects = projects.filter(function (project) {
    return selected == "all" || project.tag == selected;
  })

  var context = {
    projects: projects
  };
  var html    = template(context);
  $('#projectsRow').append(html)

  var imHeight = $('#refIm').height();
  var myCols = $('.four.wide.column');
  for (var i = 0; i < myCols.length; i++) {
      myCols[i].style.height = imHeight + "px";
  }
}

$(document).ready(function() {
  renderProjects("all");
  window.setTimeout(function () {
    var imHeight = $('#refIm').height();
    var myCols = $('.four.wide.column');
    for (var i = 0; i < myCols.length; i++) {
        myCols[i].style.height = imHeight + "px";
    }
  }, 5);
  $('.ui.menu')
    .on('click', '.item', function() {
      var item = (this.id);
      menuHandler(item);
      if(!$(this).hasClass('dropdown')) {
        $(this)
          .addClass('active')
          .siblings('.item')
          .removeClass('active');
      }
    });
});

$( window ).resize(function() {
  var imHeight = $('#refIm').height();
  var myCols = $('.four.wide.column');
  for (var i = 0; i < myCols.length; i++) {
      myCols[i].style.height = imHeight + "px";
  }
});
