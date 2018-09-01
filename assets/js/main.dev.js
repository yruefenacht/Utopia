
$(function(){

    var utopiaLibrary = require("./utopiaLib/index")

    var initializer = new utopiaLibrary.Initializer()
    var eventhandler = new utopiaLibrary.Eventhandler()
    
    initializer.init()
    eventhandler.applyEvents()

})