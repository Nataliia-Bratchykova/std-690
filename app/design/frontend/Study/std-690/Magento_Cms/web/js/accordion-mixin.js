define(['jquery'], function ($) {
    'use strict';

    return function (accordionWidget) {
        return $.widget('mage.accordion', accordionWidget, {
            _create: function () {
                this._super();
                console.log(this)
                this._addIconToHeader();
            },

            _addIconToHeader: function () {
                this.element.find(this.options.header).each(function () {
                    const $header = $(this);
                    if ($header.find('.header-icon').length === 0) {
                        $header.prepend('<span class="header-icon">👉</span>');
                    }
                });

                this.element.on('click', this.options.header, function () {
                    const $icon = $(this).find('.header-icon');
                    console.log($(this).parent().next())
                    const isOpen = $(this).parent().next().is(':visible');
                    $icon.toggleClass("accordion-opened-icon", isOpen);

                });
            }
        });
    };
});
