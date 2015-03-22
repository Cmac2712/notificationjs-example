/**
 *
 * Notify.js
 * @author Craig Macintyre
 * @todo comment everythind 
 * @todo destroy method add to prototype
 * @todo add stacking support
 *
 */ 

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
	        // AMD. Register as an anonymous module.
		define(factory);
    } else {
	        // Browser globals
		root.Notify = factory();
    }

}(this, function () {
        
	var 
	    appendee = document.getElementsByTagName('body')[0],

	    notificationIndex = 1,

	    defaults = {
		id: '',
		title: '',
		description: '',
		duration: 5000,
		enterClass: "slideDown",
		exitClass: "slideUp"
	    },

	    snippet = '';
	    snippet+= '<div class="notify">';
	    snippet+= '    <div class="notify__img"></div>';
	    snippet+= '	   <h2 class="notify__title"</h2>';
	    snippet+= '    <p class="notify__description"></p>';
	    snippet+= '</div>';

	function _append () {
	    appendee.insertAdjacentHTML('afterbegin', snippet);
	}

        function _extend ( defaults, options  ) {
	// http://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
	        var extended = {};
		    var prop;
		    for (prop in defaults) {
			if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
			                extended[prop] = defaults[prop];
					        
			}
			    
		    }
		    for (prop in options) {
			if (Object.prototype.hasOwnProperty.call(options, prop)) {
			                extended[prop] = options[prop];
					        
			}
			    
		    }
		        return extended;
	}

	function _insertText (title, description) {
	    var notifyNode = appendee.querySelector('.notify'), 
		titleNode  = notifyNode.querySelector('.notify__title'), 
		descNode   = notifyNode.querySelector('.notify__description');	
	    
	    titleNode.appendChild(document.createTextNode(title));
	    descNode.appendChild(document.createTextNode(description));
	}

	function Build (options) {
	   
	   var notifys = document.getElementsByClassName('notify');
	    
	    this.config = _extend(defaults, options);

	    _append();
	    notifys[0].setAttribute('id', 'notify-'+notificationIndex);
	    
	    this.config.id = 'notify-'+notificationIndex;
	    _insertText(this.config.title, this.config.description);
	    
	    notificationIndex++;
	}

	Build.prototype.go = function () {
	    var domNode = document.getElementById(this.config.id),
		that    = this;
	    //domNode.classList.add(this.config.enterClass);

	    this.config.enterClass.split(' ').forEach(function (className) {
		domNode.classList.add(className);
	    });

		setTimeout(function(){
		    that.config.enterClass.split(' ').forEach(function (className) {
			domNode.classList.remove(className);
		    });

		    that.config.exitClass.split(' ').forEach(function (className) {
			domNode.classList.add(className);
		    });

		}, this.config.duration);
	}
	
	Build.prototype.destroy = function () {
	   var elem = document.getElementById(this.config.id);
	   
	   elem.parentNode.removeChild(elem);
	}

	return Build;
	
}));
