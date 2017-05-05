var context = {
  title: "Senselmorph Classifier",
  date: "April 2017 - May 2017",
  sections: [
    {
      isEqualWidth: "",
      columns: [
        {
          width: "eleven wide",
          isImage: false,
          subheader: "Introduction",
          content: "In collaboration with <a href='#'>Kristin Yin</a>, I built a hand a foot \
          classifier using the sensel morph classifier. The project is created \
          for an experimental capture course, and specifically our assignment \
          was to document an event. We wanted to capture the more 'ephermeral' \
          moments in our day to day lives, and we thought capture something as \
          simple as a palm print or a footstep would be an interesting concept."
        },
        {
          width: "five wide",
          isImage: true,
          subheader: "",
          content: "../../../assets/images/project_icons/sensel800x400.png"
        },
      ]
    },
    {
      isEqualWidth: "",
      columns: [
        {
          width: "sixteen wide",
          isImage: false,
          subheader: "Technologies used",
          content: "Throughout the project, our main languages were python and c++.\
          The senselmorph has a decent flagship c++ api library written for use in \
          openframeworks. We used this API in order to save and run our sample images.\
          In order to classify our hand and foot images, we needed to train it on a \
          neural network. For our project, we used a python machine learning library called \
          pytorch."
        },
      ]
    },
    {
      isEqualWidth: "equal width",
      columns: [
        {
          width: "",
          isImage: false,
          subheader: "Senselmorph",
          content: "Senselmorph is a high sensitive pressure module designed to capture \
          very precise pressure points. It's a relatively small tablet around the size of \
          the palm of a hand. The senselmorph has just recently come to the consumer market, \
          and the creators still haven't really pinpointed an exact purpose to use their device.\
          We thought this would be a cool opportunity to showcase the senselmorph's potential."
        },
        {
          width: "",
          isImage: false,
          subheader: "Pytorch",
          content: "Pytorch is an efficient python machine learning libary. It is really \
          simple to set up and use. More importantly, pytorch has several important GPU \
          optimisations which make training and saving the neural networks much easier. For our\
          project, we needed to use a convolutional neural, a type of neural network that can \
          be trained on images efficiently."
        },
        {
          width: "",
          isImage: false,
          subheader: "Openframeworks",
          content: "Open frameworks is a c++ library that enables quick deployment of fast \
          graphical displays. We used an openframeworks addon to read the senselmorph data, \
          and we then designed the logic to save the visual pressure points. The saving, training,\
          and running of our convolutional neural net was all done through this central application."
        },
      ]
    },
    {
      isEqualWidth: "equal width",
      columns: [
        {
          width: "",
          isImage: true,
          subheader: "",
          content: "../projects_images/jason.png"
        },
        {
          width: "",
          isImage: true,
          subheader: "",
          content: "../projects_images/kristin.png"
        },
        {
          width: "",
          isImage: true,
          subheader: "",
          content: "../projects_images/rohan.png"
        },
        {
          width: "",
          isImage: true,
          subheader: "",
          content: "../projects_images/changning.png"
        }
      ]
    },
    {
      isEqualWidth: "equal width",
      columns: [
        {
          width: "",
          isImage: false,
          subheader: "Training the Neural Network",
          content: "Thanks to our volunteers (picture above), we were able to collect \
          rougly 200-300 samples of both hand and foot prints from each person. If we had more\
          time, in hindsight we probably should have collected more samples from each person, \
          and we should have collected more variation per person. In terms of performance, we\
          noticed that some people's hand and foot prints were less recognizable compared to \
          others."
        },
      ]
    },
    {
      isEqualWidth: "equal width",
      columns: [
        {
          width: "",
          isImage: false,
          subheader: "Accuracy",
          content: "Thanks to our volunteers (picture above), we were able to collect \
          rougly 200-300 samples of both hand and foot prints from each person. If we had more\
          time, in hindsight we probably should have collected more samples from each person, \
          and we should have collected more variation per person. In terms of performance, we\
          noticed that some people's hand and foot prints were less recognizable compared to \
          others."
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
