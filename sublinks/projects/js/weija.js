var context = {
  title: "Weija Messenger Bot",
  date: "March 2017 - June 2017",
  sections: [
    {
      isEqualWidth: "",
      columns: [
        {
          width: "eleven wide",
          isImage: false,
          subheader: "Introduction",
          content: "Made in part of interest and necessity, I developed a Facebook \
          Messenger bot named Weija. Currently, it features pittsburgh bus tracking,\
          dad jokes, and weather reports. The project featured some interesting elements \
          of artifical intelligence, natural language processing, and neural nets"
        },
        {
          width: "five wide",
          isImage: true,
          subheader: "",
          content: "../../../assets/images/project_icons/weija800x400.png"
        },
      ]
    },
    {
      isEqualWidth: "equal width",
      columns: [
        {
          width: "",
          isImage: false,
          subheader: "Messenger",
          content: "The actual messenger component of the project was relatively easy\
          using a <a href='https://github.com/reparadocs/Flask-HelloWorldBot'>flask backend</a> \
          I made a simple heroku server that can handle post requests to the bot. With each message, \
          I used a natural langugage processing api called <a href='https://wit.ai/'>wit.ai</a> to \
          parse the message for intent."
        },
        {
          width: "",
          isImage: false,
          subheader: "Bus Tracking",
          content: "Using my previously developed python api for Pittsburgh bus tracking, \
          it was pretty easy to integrate this feature into weija. Facebook messenger allows \
          users to send a pinned location to the bot. I made a parser to extract the location \
          attachment from the user messages, and from the location coordinates I just simply \
          make an additional api call to my bus tracking server."

        },
        {
          width: "",
          isImage: false,
          subheader: "Artifical Intelligence",
          content: "Ideally, I would like my bot to be conversational. I've experimented \
          with some conversational apis, however I felt like they weren't suited for my purposes. \
          I'm currently still working on this project, and I've recently been experimenting with \
          a type of Machine Learning model called seqence to seqence network, which can theoretically \
          be trained on a sequence of input sentences that can output responses."
        },
      ]
    },
    {
      isEqualWidth: "equal width",
      columns: [
        {
          width: "",
          isImage: false,
          subheader: "Links and Additional Resources ",
          content: "For the code base, please visit my <a href='https://github.com/jaysunmah/weija_messenger_bot'>github repository</a>."
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
});
