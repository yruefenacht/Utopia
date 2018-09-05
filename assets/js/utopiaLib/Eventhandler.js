
class Eventhandler {


    constructor() {

        this.view                       = $(".view")
        this.viewSidePanel              = $(".view__sidePanel")
        this.viewSectorTitle            = $(".view__sector__title")
        this.viewSectorDescription      = $(".view__sector__description")
        this.panel                      = $(".panel")
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


        self.panelSector.click(function() {
            self.panel.css("transform", "translateX(-60%)")
            self.view.css("transform", "translateX(0)")
            self.viewSidePanel.css("opacity", "1")

            var sectorTitle         = $(this).find(".panel__sector__title").text()
            var sectorDescription   = $(this).find(".panel__sector__description").text()

            self.viewSectorTitle.text(sectorTitle)
            self.viewSectorDescription.text(sectorDescription)
        })

        self.viewSidePanel.click(function() {
            self.panel.css("transform", "translateX(0)")
            self.view.css("transform", "translateX(100%)")
            self.viewSidePanel.css("opacity", "0")
        })

    }


}


module.exports.Eventhandler = Eventhandler