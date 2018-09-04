
class Eventhandler {


    constructor() {

        this.panelSector                = $(".panel__sector")
        this.panelSectorFrame           = $(".panel__sector--frame")
        this.panelSectorFrameColor      = "rgba(8, 8, 8, 0.8)"
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


        self.panelSector.mouseenter(function() {
            $(this).css("background-size", "105%")
        })

        self.panelSector.mouseleave(function() {
            $(this).css("background-size", "100%")
        })

    }


}


module.exports.Eventhandler = Eventhandler