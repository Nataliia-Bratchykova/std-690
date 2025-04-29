define([
    'jquery'
], function ($) {
    'use strict';

    return function (configurableWidget) {
        $.widget('mage.configurable', configurableWidget, {
            options:{
                sizeSpan: $("#size"),
                colorSpan: $("#color"),
                mainText: $(".std-690-text"),
                getProductName:$("span[itemprop='name']").text(),
                productNameSpan:$("#productname")
            },

            _create:function (){
                this._super();
                this.options.mainText.hide()
                this.options.productNameSpan.text(this.options.getProductName)
                this.options.settings.map((index, select) =>{
                    this._onChangeOption(index, select)
                })
            },

            _onChangeOption:function(index, select){
                $(select).on("change", (e)=>{
                    let label = $(e.target).find("option")
                        .filter((index, item) => e.target.value === item.value)[0].innerText
                    switch (index) {
                        case 0:
                            this.options.sizeSpan.text(label);
                            break;
                        case 1:
                            this.options.colorSpan.text(label);
                            this.options.mainText.css({color: label})
                            break;
                    }
                    if(this.options.sizeSpan.text().length > 0 && this.options.colorSpan.text().length > 0 && this.options.productNameSpan.text().length> 0){
                        this.options.mainText.show()
                    }
                })
            }
        });
        return $.mage.configurable;
    };
});
