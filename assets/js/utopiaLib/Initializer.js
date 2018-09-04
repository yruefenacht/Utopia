
class Initializer {


    constructor() {

        this.messageDuration    = 1000         //9000
        this.messageFade        = 1000         //2000
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