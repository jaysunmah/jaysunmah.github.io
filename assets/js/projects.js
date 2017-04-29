function menuHandler(item) {
  if (item == "all") {
    console.log('hello');
  } else if (item == "2017") {
    console.log("weija");
  } else if (item == "2016") {
    console.log("coija");
  } else if (item == "2015") {
    console.log("zozin");
  }
}

$(document).ready(function() {
  var imHeight = $('#refIm').height();
  // $('.ui.portfolio.grid .column').css('height', imHeight);
  $('.ui.portfolio.grid .column .ui.fade.reveal').css('height', imHeight);
  // $('.ui.menu')
  //   .on('click', '.item', function() {
  //     var item = (this.id);
  //     menuHandler(item);
  //     if(!$(this).hasClass('dropdown')) {
  //       $(this)
  //         .addClass('active')
  //         .siblings('.item')
  //         .removeClass('active');
  //     }
  //   });
});

$( window ).resize(function() {
  var imHeight = $('#refIm').height();
  $('.ui.portfolio.grid .column .ui.fade.reveal').css('height', imHeight);
});
