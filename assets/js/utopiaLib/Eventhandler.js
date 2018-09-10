
class Eventhandler {


    constructor() {

        this.view                       = $(".view")
        this.viewBackButton             = $(".view__backButton")
        this.viewSidePanel              = $(".view__sidePanel")
        this.viewSectorImage            = $(".view__sector__image")
        this.viewSectorTitle            = $(".view__sector__text__title")
        this.viewSectorDescription      = $(".view__sector__text__description")
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
            self.panel.css("transform", "translateX(-55%)")
            self.view.css("transform", "translateX(0)")
            self.viewSidePanel.css("opacity", "1")

            var sectorTitle         = $(this).find(".panel__sector__title").text()
            var sectorDescription   = $(this).find(".panel__sector__description").text()
            var sectorImage         = $(this).css("background-image")

            self.viewSectorImage.css("background-image", sectorImage)            
            self.viewSectorTitle.text(sectorTitle)
            self.viewSectorDescription.text(sectorDescription)
        })

        self.viewSidePanel.click(function() {
            self.panel.css("transform", "translateX(0)")
            self.view.css("transform", "translateX(100%)")
            self.viewSidePanel.css("opacity", "0")
        })

        self.viewBackButton.click(function() {
            self.panel.css("transform", "translateX(0)")
            self.view.css("transform", "translateX(100%)")
            self.viewSidePanel.css("opacity", "0")
        })


        self.viewBackButton.mouseenter(function() {
            self.viewBackButton.css("transform", "scale(1.1)")
        })

        self.viewBackButton.mouseleave(function() {
            self.viewBackButton.css("transform", "scale(1)")
        })

    }


}


module.exports.Eventhandler = Eventhandler