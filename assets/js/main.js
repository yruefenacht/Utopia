(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

$(function(){

    var utopiaLibrary = require("./utopiaLib/index")

    var initializer = new utopiaLibrary.Initializer()
    var eventhandler = new utopiaLibrary.Eventhandler()
    
    initializer.init()
    eventhandler.applyEvents()

})
},{"./utopiaLib/index":4}],2:[function(require,module,exports){

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
},{}],3:[function(require,module,exports){

class Initializer {


    constructor() {

        this.messageDuration    = 9000         //9000
        this.messageFade        = 2000         //2000
        this.initialDelay       = 1000         //1000
        this.intro          = $(".intro")
        this.introMessage1  = $(".intro__message--1")
        this.introMessage2  = $(".intro__message--2")
        this.panelSector    = $(".panel__sector")

    }


    init() {

        var self = this

        self.introMessage1
            .delay(self.initialDelay)
            .fadeIn(self.messageFade)
            .delay(self.messageDuration)
            .fadeOut(self.messageFade, function() {

                self.introMessage2
                    .fadeIn(self.messageFade)
                    .delay(self.messageDuration)
                    .fadeOut(self.messageFade, function() {

                        self.intro.fadeOut()
                        self.panelSector.css({"transform":"translate(0px)", "opacity":"1"})
                        
                        setTimeout(function() {
                            self.panelSector.css("transition-delay", "0s")
                            console.log("initialized")
                        }, 1300)
                
                    })
            })

    }


}


module.exports.Initializer = Initializer
},{}],4:[function(require,module,exports){

var Eventhandler    = require("./Eventhandler")
var Initializer     = require("./Initializer")

module.exports.Eventhandler    = Eventhandler.Eventhandler
module.exports.Initializer     = Initializer.Initializer
},{"./Eventhandler":2,"./Initializer":3}]},{},[1]);
