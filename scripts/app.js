// function animateDiv(){
//     var newq = makeNewPosition();
//     $('#circle').animate({ top: newq[0], left: newq[1] }, function(){
//       animateDiv();
//     });
//
//     function makeNewPosition(){
//
//         // Get viewport dimensions (remove the dimension of the div)
//         var h = $(window).height() - 75;
//         var w = $(window).width() - 75;
//
//         var nh = Math.floor(Math.random() * h);
//         var nw = Math.floor(Math.random() * w);
//         return [nh,nw];
//
//     };
// };

function drop_and_physics() {
  var init_width = $(window).width()/2 - document.getElementById('circle').style.width;
  $('#circle').animate({left: init_width}, function(){

  });

  var current_position = init_width;

  function bounce_physics(current_position_param) {
    var new_current_position = current_position_param + 1;
    $('#circle').animate({top: new_current_position}, function(){
      bounce_physics(new_current_position);
    })
  };
};

function start_button_hit() {

  document.getElementById('start-button').style.visibility = "hidden";
  drop_and_physics();

}

// function bar_move_enable() {
//     var selected = null;
//     var x_pos = 0, x_elem = 0;
//
//     // Will be called when user starts dragging an element
//     function _drag_init(elem) {
//     // Store the object of the element which needs to be moved
//     selected = elem;
//     x_elem = x_pos - selected.offsetLeft;
//     }
//
//   // Will be called when user dragging an element
//   function _move_elem(e) {
//     x_pos = document.all ? window.event.clientX : e.pageX;
//     if (selected !== null) {
//         selected.style.left = (x_pos - x_elem) + 'px';
//     }
//   }
//
//   // Destroy the object when we are done
//   function _destroy() {
//     selected = null;
//   }
//
//   // Bind the functions...
//   document.getElementById('bar').onmousedown = function () {
//     _drag_init(this);
//     return false;
//   };
//
//   document.onmousemove = _move_elem;
//   document.onmouseup = _destroy;
// }

function caught() {
  alert("Nice! You caught me !!");
}
