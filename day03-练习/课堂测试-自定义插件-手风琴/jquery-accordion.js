/* $.fn.accordion = function (obj) {
  var lis = this.find('li')

  var avgWidth = this.width() / lis.length
  lis.css({ width: avgWidth })

  lis.each(function (index, element) {
    $(element).css({ backgroundColor: obj.colors[index] })
  })

  obj.minWidth = obj.minWidth || 100

  var maxWidth = this.width() - (lis.length - 1) * obj.minWidth

  lis.on('mouseenter', function () {
    $(this)
      .stop(true)
      .animate({ width: maxWidth })
      .siblings()
      .stop(true)
      .animate({ width: obj.minWidth })
  })

  this.on('mouseleave', function () {
    lis.stop(true).animate({ width: avgWidth })
  })
}
 */
 
    jQuery.prototype.accordion=function(){
            var _this=this;

         arguments[0].colors.forEach(function(item,index){
                console.log(item)
                console.log(  $(_this).find("li")[index])
                $($(_this).find("li")[index]).css({
                    backgroundColor:item
                })
         })
    }
