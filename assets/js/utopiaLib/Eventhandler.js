
class Eventhandler {


    constructor() {

        this.panelSectorFrame           = $(".panel__sector--frame")
        this.panelSectorFrameColor      = "rgba(8, 8, 8, 0.5)"
        this.panelSectorFrameColorHover = "rgba(8, 8, 8, 0.3)"

    }


    applyEvents() {

        var self = this
        
        self.panelSectorFrame.mouseenter(function() {
            $(this).css("background", self.panelSectorFrameColorHover)
        })

        self.panelSectorFrame.mouseleave(function() {
            $(this).css("background", self.panelSectorFrameColor)
        })

    }


}


module.exports.Eventhandler = Eventhandler