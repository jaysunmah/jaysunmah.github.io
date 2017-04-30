var context = {
  title: "Weija",
  date: "Coija",
  sections: [
    {
      isEqualWidth: "",
      columns: [
        {
          width: "five wide",
          isImage: true,
          subheader: "",
          content: "../../../assets/images/project_icons/sensel800x400.png"
        },
        {
          width: "eleven wide",
          isImage: false,
          subheader: "Introduction",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum purus nec ligula interdum, eu scelerisque quam pellentesque. Vivamus quis ante lobortis, sodales ipsum non, fermentum purus. Vivamus malesuada tortor id orci dapibus pharetra. Maecenas vel libero sollicitudin, euismod ipsum sed, vulputate leo. Mauris dignissim elementum magna ac tincidunt. Nam eget mi ornare, convallis purus at, egestas libero. Nullam at urna justo. Mauris sem erat, vulputate vitae eros sed, ornare porttitor risus. Phasellus elementum ipsum a mi venenatis, ac consectetur turpis hendrerit. Vestibulum id metus libero. Suspendisse potenti."
        }
      ]
    },
    {
      isEqualWidth: "",
      columns: [
        {
          width: "sixteen wide",
          isImage: false,
          subheader: "Technologies used",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum purus nec ligula interdum, eu scelerisque quam pellentesque. Vivamus quis ante lobortis, sodales ipsum non, fermentum purus. Vivamus malesuada tortor id orci dapibus pharetra. Maecenas vel libero sollicitudin, euismod ipsum sed, vulputate leo. Mauris dignissim elementum magna ac tincidunt. Nam eget mi ornare, convallis purus at, egestas libero. Nullam at urna justo. Mauris sem erat, vulputate vitae eros sed, ornare porttitor risus. Phasellus elementum ipsum a mi venenatis, ac consectetur turpis hendrerit. Vestibulum id metus libero. Suspendisse potenti."
        },
      ]
    },
    {
      isEqualWidth: "equal width",
      columns: [
        {
          width: "",
          isImage: false,
          subheader: "Coija",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum purus nec ligula interdum, eu scelerisque quam pellentesque. Vivamus quis ante lobortis, sodales ipsum non, fermentum purus. Vivamus malesuada tortor id orci dapibus pharetra. Maecenas vel libero sollicitudin, euismod ipsum sed, vulputate leo. Mauris dignissim elementum magna ac tincidunt. Nam eget mi ornare, convallis purus at, egestas libero. Nullam at urna justo. Mauris sem erat, vulputate vitae eros sed, ornare porttitor risus. Phasellus elementum ipsum a mi venenatis, ac consectetur turpis hendrerit. Vestibulum id metus libero. Suspendisse potenti."
        },
        {
          width: "",
          isImage: false,
          subheader: "Zozin",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum purus nec ligula interdum, eu scelerisque quam pellentesque. Vivamus quis ante lobortis, sodales ipsum non, fermentum purus. Vivamus malesuada tortor id orci dapibus pharetra. Maecenas vel libero sollicitudin, euismod ipsum sed, vulputate leo. Mauris dignissim elementum magna ac tincidunt. Nam eget mi ornare, convallis purus at, egestas libero. Nullam at urna justo. Mauris sem erat, vulputate vitae eros sed, ornare porttitor risus. Phasellus elementum ipsum a mi venenatis, ac consectetur turpis hendrerit. Vestibulum id metus libero. Suspendisse potenti."
        },
        {
          width: "",
          isImage: false,
          subheader: "Weija",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum purus nec ligula interdum, eu scelerisque quam pellentesque. Vivamus quis ante lobortis, sodales ipsum non, fermentum purus. Vivamus malesuada tortor id orci dapibus pharetra. Maecenas vel libero sollicitudin, euismod ipsum sed, vulputate leo. Mauris dignissim elementum magna ac tincidunt. Nam eget mi ornare, convallis purus at, egestas libero. Nullam at urna justo. Mauris sem erat, vulputate vitae eros sed, ornare porttitor risus. Phasellus elementum ipsum a mi venenatis, ac consectetur turpis hendrerit. Vestibulum id metus libero. Suspendisse potenti."
        },
      ]
    },
    {
      isEqualWidth: "equal width",
      columns: [
        {
          width: "",
          isImage: false,
          subheader: "Zozin",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum purus nec ligula interdum, eu scelerisque quam pellentesque. Vivamus quis ante lobortis, sodales ipsum non, fermentum purus. Vivamus malesuada tortor id orci dapibus pharetra. Maecenas vel libero sollicitudin, euismod ipsum sed, vulputate leo. Mauris dignissim elementum magna ac tincidunt. Nam eget mi ornare, convallis purus at, egestas libero. Nullam at urna justo. Mauris sem erat, vulputate vitae eros sed, ornare porttitor risus. Phasellus elementum ipsum a mi venenatis, ac consectetur turpis hendrerit. Vestibulum id metus libero. Suspendisse potenti."
        },
        {
          width: "",
          isImage: true,
          subheader: "",
          content: "../../../assets/images/project_icons/sensel800x400.png"
        },
      ]
    },
  ]
};

function renderTemplate() {
  var source = $('#templateContainer').html();
  var template = Handlebars.compile(source);

  var html = template(context);
  $('#templateBody').append(html);
}



$(document).ready(function() {
  renderTemplate();
  console.log('hello');
});
