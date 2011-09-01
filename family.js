//-------------------------------------------------------
//jQuery Family: Select your elements in some *really* dumb ways
//Author: Chris Barr | twitter.com/ChrisMBarr | chris-barr.com
//-------------------------------------------------------

(function($) {
	//----------------------------
	$.fn.dad = function() {
		return this.parent();
	};
	//Alias selectors
	$.fn.mom = $.fn.dad;
	//----------------------------

	//----------------------------
	$.fn.grandParent = function() {
		return this.parent().parent();
	};
	//Alias selectors
	$.fn.grandpa = $.fn.grandParent;
	$.fn.grandma = $.fn.grandParent;
	//----------------------------

	//----------------------------
	$.fn.uncles = function() {
		return this.parent().siblings();
	};
	//Alias selectors
	$.fn.aunts = $.fn.uncles;
	//----------------------------

	//----------------------------
	$.fn.nephews = function() {
		return this.siblings().children();
	};
	//Alias selectors
	$.fn.nieces = $.fn.nephews;
	//----------------------------

	//----------------------------
	$.fn.cousins = function() {
		return this.parent().siblings().children();
	};
	//----------------------------

	//----------------------------
	$.fn.greatGrandParent = function() {
		return this.parent().parent().parent();
	};
	//Alias selectors
	$.fn.greatGrandpa = $.fn.greatGrandParent;
	$.fn.greatGrandma = $.fn.greatGrandParent;
	//----------------------------

	//----------------------------
	$.fn.greatUncles = function() {
		return this.parent().parent().parent().siblings();
	};
	//Alias selectors
	$.fn.greatAunts = $.fn.greatUncles;
	//----------------------------
})(jQuery);