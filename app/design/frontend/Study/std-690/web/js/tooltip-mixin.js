define(["jquery"], function($){
    'use strict'


    return function (originalTooltip){
        return $.widget('mage.tooltip', originalTooltip, {
            _create:function(){
                this._super()
                this._showTooltipAnimation();
            },

            _showTooltipAnimation: function (){
                this.element.on("mouseenter", ()=>{
                    let $allTooltips = this.liveRegion.children()
                    let $tooltip = this.liveRegion.children().last()
                    if($allTooltips.length > 1){
                        this.liveRegion.children().not("show-tooltip-animation").remove()
                    }else{
                        $tooltip.addClass("show-tooltip-animation")
                    }

                    $tooltip.show()
                })

                this.element.on("mouseleave", ()=>{
                    let $tooltip = this.liveRegion.children().last()
                    $tooltip.removeClass("show-tooltip-animation")
                    $tooltip.hide()
                })
            }
        })
    }
})
