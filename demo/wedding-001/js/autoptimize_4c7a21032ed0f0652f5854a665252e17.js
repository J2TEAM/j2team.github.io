
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);jQuery(document).ready(function(){jQuery.validator.addMethod("customNote",function(value,element){if((jQuery("#additionalRsvp").val()>0)&&(jQuery("#note").val()=="")){return false;}
return true;},"<br />"+rsvp_plugin_vars.askEmail);jQuery("#rsvpForm").validate({rules:{note:"customNote",newAttending1LastName:"required",newAttending1FirstName:"required",newAttending2LastName:"required",newAttending2FirstName:"required",newAttending3LastName:"required",newAttending3FirstName:"required",attendeeFirstName:"required",attendeeLastName:"required"},messages:{note:"<br />"+rsvp_plugin_vars.customNote,newAttending1LastName:"<br />"+rsvp_plugin_vars.newAttending1LastName,newAttending1FirstName:"<br />"+rsvp_plugin_vars.newAttending1FirstName,newAttending2LastName:"<br />"+rsvp_plugin_vars.newAttending2LastName,newAttending2FirstName:"<br />"+rsvp_plugin_vars.newAttending2FirstName,newAttending3LastName:"<br />"+rsvp_plugin_vars.newAttending3LastName,newAttending3FirstName:"<br />"+rsvp_plugin_vars.newAttending3FirstName,attendeeFirstName:"<br />"+rsvp_plugin_vars.attendeeFirstName,attendeeLastName:"<br />"+rsvp_plugin_vars.attendeeLastName}});jQuery("#rsvp").validate({rules:{firstName:"required",lastName:"required",passcode:"required"},messages:{firstName:"<br />"+rsvp_plugin_vars.firstName,lastName:"<br />"+rsvp_plugin_vars.lastName,passcode:"<br />"+rsvp_plugin_vars.passcode}});jQuery("#addRsvp").click(function(){handleAddRsvpClick();});});jQuery(document).ready(function($)
{$(".wcps-items .add_to_cart_button").wrap("<div class='cart-area' ></div>");$(document).on('click','.wcps-zoom-colse',function()
{$(this).parent().fadeOut();})
$(document).on('click','.wcps-zoom',function()
{var slider_id=$(this).attr('slider-id');var product_id=$(this).attr('product-id');jQuery.ajax({type:'POST',context:this,url:wcps_ajax.wcps_ajaxurl,data:{"action":"wcps_get_item_thumb_url","product_id":product_id},success:function(data)
{jQuery('.wcps-zoom-thumb-'+slider_id).fadeIn();jQuery('.wcps-zoom-thumb-'+slider_id+' img').attr('src',data);}});})});
/**
 * Owl Carousel v2.1.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {
	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {
		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;
		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);
		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);
		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};
		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};
		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};
		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;
		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;
		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];
		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;
		/**
		 * Current width of the plugin element.
		 */
		this._width = null;
		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];
		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];
		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];
		/**
		 * Widths of all items.
		 */
		this._widths = [];
		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};
		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];
		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};
		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};
		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));
		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));
		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));
		this.setup();
		this.initialize();
	}
	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 0,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoWidth: false,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: 'swing',
		info: false,
		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',
		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};
	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};
	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};
	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};
	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};
			!grid && this.$stage.children().css(css);
			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];
			cache.items = {
				merge: false,
				width: width
			};
			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
				cache.items.merge = merge > 1 || cache.items.merge;
				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}
			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';
			repeat /= 2;
			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}
			this._clones = clones;
			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];
			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}
			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};
			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();
			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;
			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;
				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}
			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];
	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');
		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();
			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}
		this.$element.addClass(this.options.loadingClass);
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');
		this.$element.append(this.$stage.parent());
		this.replace(this.$element.children().not(this.$stage.parent()));
		if (this.$element.is(':visible')) {
			this.refresh();
		} else {
			this.invalidate('width');
		}
		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
		this.registerEventHandlers();
		this.leave('initializing');
		this.trigger('initialized');
	};
	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;
		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});
			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}
		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};
	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};
	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });
		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}
		this.trigger('prepared', { content: event.data });
		return event.data;
	};
	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};
		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}
		this._invalidated = {};
		!this.is('valid') && this.enter('valid');
	};
	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};
	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');
		this.setup();
		this.optionsLogic();
		this.$element.addClass(this.options.refreshClass);
		this.update();
		this.$element.removeClass(this.options.refreshClass);
		this.leave('refreshing');
		this.trigger('refreshed');
	};
	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};
	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}
		if (this._width === this.$element.width()) {
			return false;
		}
		if (!this.$element.is(':visible')) {
			return false;
		}
		this.enter('resizing');
		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}
		this.invalidate('width');
		this.refresh();
		this.leave('resizing');
		this.trigger('resized');
	};
	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}
		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}
		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};
	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;
		if (event.which === 3) {
			return;
		}
		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}
		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}
		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
		this.speed(0);
		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);
		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));
			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}
			event.preventDefault();
			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};
	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);
		if (!this.is('dragging')) {
			return;
		}
		event.preventDefault();
		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}
		this._drag.stage.current = stage;
		this.animate(stage.x);
	};
	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
		$(document).off('.owl.core');
		this.$element.removeClass(this.options.grabClass);
		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();
			this._drag.direction = direction;
			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}
		if (!this.is('dragging')) {
			return;
		}
		this.leave('dragging');
		this.trigger('dragged');
	};
	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();
		if (!this.settings.freeDrag) {
			$.each(coordinates, $.proxy(function(index, value) {
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}
		if (!this.settings.loop) {
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}
		return position;
	};
	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;
		this.is('animating') && this.onTransitionEnd();
		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}
		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};
	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};
	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}
		if (this._items.length === 0) {
			return undefined;
		}
		position = this.normalize(position);
		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });
			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}
			this._current = position;
			this.invalidate('position');
			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}
		return this._current;
	};
	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};
	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);
		if (position === undefined) {
			return;
		}
		this._speed = 0;
		this._current = position;
		this.suppress([ 'translate', 'translated' ]);
		this.animate(this.coordinates(position));
		this.release([ 'translate', 'translated' ]);
	};
	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;
		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}
		return position;
	};
	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};
	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			boundary = Math.abs(this._coordinates[maximum - 1]) - this._width,
			i = -1, j;
		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			while (maximum - i > 1) {
				Math.abs(this._coordinates[j = maximum + i >> 1]) < boundary
					? i = j : maximum = j;
			}
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}
		if (relative) {
			maximum -= this._clones.length / 2;
		}
		return Math.max(maximum, 0);
	};
	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};
	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}
		position = this.normalize(position, true);
		return this._items[position];
	};
	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}
		position = this.normalize(position, true);
		return this._mergers[position];
	};
	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}
		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};
	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}
		return this._speed;
	};
	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;
		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}
		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}
		coordinate = Math.ceil(coordinate);
		return coordinate;
	};
	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};
	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();
		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}
			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;
			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}
		this.speed(this.duration(current, position, speed));
		this.current(position);
		if (this.$element.is(':visible')) {
			this.update();
		}
	};
	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};
	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};
	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {
		if (event !== undefined) {
			event.stopPropagation();
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}
		this.leave('animating');
		this.trigger('translated');
	};
	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};
	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];
		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}
		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}
		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));
		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
		this.invalidate('items');
	};
	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);
		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);
		this.trigger('add', { content: content, position: position });
		content = this.prepare(content);
		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}
		this._items[current] && this.reset(this._items[current].index());
		this.invalidate('items');
		this.trigger('added', { content: content, position: position });
	};
	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);
		if (position === undefined) {
			return;
		}
		this.trigger('remove', { content: this._items[position], position: position });
		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);
		this.invalidate('items');
		this.trigger('removed', { content: null, position: position });
	};
	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};
	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {
		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');
		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}
		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}
		this.$stage.children('.cloned').remove();
		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};
	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};
	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};
	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};
	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);
		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});
			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);
			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}
		return event;
	};
	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}
			this._states.current[name]++;
		}, this));
	};
	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};
	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}
			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}
			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};
	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};
	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};
	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };
		event = event.originalEvent || event || window.event;
		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;
		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}
		return result;
	};
	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};
	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};
	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');
			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);
				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}
			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};
	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);
/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;
		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
		this._core.$element.on(this._handlers);
	};
	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};
	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}
		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};
	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}
		this._visible = !this._visible;
		this._core.$element.toggleClass('owl-hidden', !this._visible);
		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};
	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;
		window.clearInterval(this._interval);
		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);
/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];
		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}
				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}
				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
		this._core.$element.on(this._handlers);
	};
	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};
	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');
		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}
		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
			this._core.trigger('load', { element: $element, url: url }, 'lazy');
			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));
		this._loaded.push($item.get(0));
	};
	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;
		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);
/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
		this._core.$element.on(this._handlers);
	};
	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};
	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;
		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});
		maxheight = Math.max.apply(null, heights);
		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};
	AutoHeight.prototype.destroy = function() {
		var handler, property;
		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);
/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};
		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;
		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};
		this._core.options = $.extend({}, Video.Defaults, this._core.options);
		this._core.$element.on(this._handlers);
		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};
	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};
	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');
		if (url) {
			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id
					Visual example: http://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/
			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}
		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};
		item.attr('data-video', url);
		this.thumbnail(target, this._videos[url]);
	};
	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';
				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}
		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};
	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};
	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;
		if (this._playing) {
			return;
		}
		this._core.enter('playing');
		this._core.trigger('play', null, 'video');
		item = this._core.items(this._core.relative(item.index()));
		this._core.reset(item.index());
		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}
		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
		this._playing = item.addClass('owl-video-playing');
	};
	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;
		return element && $(element).parent().hasClass('owl-video-frame');
	};
	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;
		this._core.$element.off('click.owl.video');
		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);
/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;
		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};
		this.core.$element.on(this.handlers);
	};
	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};
	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {
		if (this.core.settings.items !== 1) {
			return;
		}
		if (!$.support.animation || !$.support.transition) {
			return;
		}
		this.core.speed(0);
		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;
		if (this.core.current() === this.previous) {
			return;
		}
		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}
		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};
	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};
	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;
		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);
/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;
		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};
		this._core.$element.on(this._handlers);
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};
	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};
	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;
		if (this._core.is('rotating')) {
			return;
		}
		this._core.enter('rotating');
		this._setAutoPlayInterval();
	};
	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};
	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};
	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}
		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};
	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}
		this._paused = true;
	};
	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;
		this.stop();
		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);
/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';
	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;
		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];
		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};
		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];
		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;
		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
		this.$element.on(this._handlers);
	};
	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};
	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}
		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();
			e.preventDefault();
			this.to(index, settings.dotsSpeed);
		}, this));
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};
	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;
		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;
		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}
		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];
			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};
	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;
		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}
		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;
			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}
			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};
	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;
		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};
	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};
	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;
		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}
		return position;
	};
	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};
	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};
	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;
		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);
/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';
	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};
		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
					if (!hash) {
						return;
					}
					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();
					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}
					window.location.hash = hash;
				}
			}, this)
		};
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);
		this.$element.on(this._handlers);
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);
			if (position === undefined || position === this._core.current()) {
				return;
			}
			this._core.to(this._core.relative(position), false, true);
		}, this));
	};
	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};
	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;
		$(window).off('hashchange.owl.navigation');
		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);
/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};
	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);
		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});
		return result;
	}
	function prefixed(property) {
		return test(property, true);
	}
	if (tests.csstransitions()) {
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}
	if (tests.cssanimations()) {
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}
	if (tests.csstransforms()) {
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}
})(window.Zepto || window.jQuery, window, document);
;const NUMBER_OF_LEAVES=30;function init()
{var container=document.getElementById('leafContainer');if(container){for(var i=0;i<NUMBER_OF_LEAVES;i++)
{container.appendChild(createALeaf());}}}
function randomInteger(low,high)
{return low+Math.floor(Math.random()*(high-low));}
function randomFloat(low,high)
{return low+Math.random()*(high-low);}
function pixelValue(value)
{return value+'px';}
function durationValue(value)
{return value+'s';}
function createALeaf()
{var leafDiv=document.createElement('div');var image=document.createElement('img');var folder=document.getElementById('leafContainer').getAttribute('data-image');var homeDir=document.getElementById('leafContainer').getAttribute('data-homedir');image.src=homeDir+'/images/petals/'+folder+'/realLeaf'+randomInteger(1,5)+'.png';leafDiv.style.top="110%";leafDiv.style.left=pixelValue(randomInteger(4000,10));var spinAnimationName=(Math.random()<0.8)?'clockwiseSpin':'counterclockwiseSpinAndFlip';leafDiv.style.webkitAnimationName='fade, drop';image.style.webkitAnimationName=spinAnimationName;var fadeAndDropDuration=durationValue(randomFloat(21,16));var spinDuration=durationValue(randomFloat(11,8));leafDiv.style.webkitAnimationDuration=fadeAndDropDuration+', '+fadeAndDropDuration;var leafDelay=durationValue(randomFloat(0,15));leafDiv.style.webkitAnimationDelay=leafDelay+', '+leafDelay;image.style.webkitAnimationDuration=spinDuration;leafDiv.appendChild(image);return leafDiv;}
window.addEventListener('DOMContentLoaded',init,false);
/*! pace 1.0.0 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        },
        $ = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    for (u = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, C = function() {
            var a;
            return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
        }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
            return setTimeout(a, 50)
        }, t = function(a) {
            return clearTimeout(a)
        }), G = function(a) {
            var b, c;
            return b = C(), (c = function() {
                var d;
                return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                    return E(c)
                })) : setTimeout(c, 33 - d)
            })()
        }, F = function() {
            var a, b, c;
            return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
        }, v = function() {
            var a, b, c, d, e, f, g;
            for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                if (c = d[f])
                    for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
            return b
        }, q = function(a) {
            var b, c, d, e, f;
            for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
            return c / b
        }, x = function(a, b) {
            var c, d, e;
            if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
                if (c = e.getAttribute("data-pace-" + a), !b) return c;
                try {
                    return JSON.parse(c)
                } catch (f) {
                    return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
                }
            }
        }, g = function() {
            function a() {}
            return a.prototype.on = function(a, b, c, d) {
                var e;
                return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                    handler: b,
                    ctx: c,
                    once: d
                })
            }, a.prototype.once = function(a, b, c) {
                return this.on(a, b, c, !0)
            }, a.prototype.off = function(a, b) {
                var c, d, e;
                if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                    if (null == b) return delete this.bindings[a];
                    for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                    return e
                }
            }, a.prototype.trigger = function() {
                var a, b, c, d, e, f, g, h, i;
                if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                    for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                    return i
                }
            }, a
        }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function(a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments)
        }
        return Z(b, a), b
    }(Error), b = function() {
        function a() {
            this.progress = 0
        }
        return a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function() {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, a.prototype.update = function(a) {
            return this.progress = a, this.render()
        }, a.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (a) {
                i = a
            }
            return this.el = void 0
        }, a.prototype.render = function() {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
        }, a.prototype.done = function() {
            return this.progress >= 100
        }, a
    }(), h = function() {
        function a() {
            this.bindings = {}
        }
        return a.prototype.trigger = function(a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g
            }
        }, a.prototype.on = function(a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
        }, a
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype) try {
            e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0)
        } catch (g) {
            c = g
        }
        return f
    }, A = [], j.ignore = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
    }, j.track = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
    }, J = function(a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
        }
        return !1
    }, k = function(a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) {
                var b;
                return b = a.open, a.open = function(d, e) {
                    return J(d) && c.trigger("request", {
                        type: d,
                        url: e,
                        request: a
                    }), b.apply(a, arguments)
                }
            }, window.XMLHttpRequest = function(b) {
                var c;
                return c = new P(b), a(c), c
            };
            try {
                w(window.XMLHttpRequest, P)
            } catch (d) {}
            if (null != O) {
                window.XDomainRequest = function() {
                    var b;
                    return b = new O, a(b), b
                };
                try {
                    w(window.XDomainRequest, O)
                } catch (d) {}
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function(a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d
                };
                try {
                    w(window.WebSocket, N)
                } catch (d) {}
            }
        }
        return Z(b, a), b
    }(h), R = null, y = function() {
        return null == R && (R = new k), R
    }, I = function(a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
            if (b = e[c], "string" == typeof b) {
                if (-1 !== a.indexOf(b)) return !0
            } else if (b.test(a)) return !0;
        return !1
    }, y().on("request", function(b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
            var b, c, g, h, i, k;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);
                        break
                    }
                    k.push(void 0)
                }
                return k
            }
        }, c))
    }), a = function() {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function() {
                return a.watch.apply(a, arguments)
            })
        }
        return a.prototype.watch = function(a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
        }, a
    }(), o = function() {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function(a) {
                        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
                    }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() {
                    return h.progress = 100
                }, !1);
            else f = a.onreadystatechange, a.onreadystatechange = function() {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
            }
        }
        return a
    }(), n = function() {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() {
                return f.progress = 100
            }, !1)
        }
        return a
    }(), d = function() {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
        }
        return a
    }(), e = function() {
        function a(a) {
            this.selector = a, this.progress = 0, this.check()
        }
        return a.prototype.check = function() {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return a.check()
            }, D.elements.checkInterval)
        }, a.prototype.done = function() {
            return this.progress = 100
        }, a
    }(), c = function() {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
            }
        }
        return a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, a
    }(), f = function() {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
            }, 50)
        }
        return a
    }(), m = function() {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
        }
        return a.prototype.tick = function(a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, a
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
        return D.restartOnPushState ? j.restart() : void 0
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
        return z(), T.apply(window.history, arguments)
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
        return z(), W.apply(window.history, arguments)
    }), l = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f
    }, (B = function() {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
        return j.bar = r = new b, H = [], M = new m
    })(), j.stop = function() {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
    }, j.restart = function() {
        return j.trigger("restart"), j.stop(), j.start()
    }, j.go = function() {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
                return r.finish(), j.running = !1, j.trigger("hide")
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
        })
    }, j.start = function(a) {
        v(D, a), j.running = !0;
        try {
            r.render()
        } catch (b) {
            i = b
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
    }, "function" == typeof define && define.amd ? define(function() {
        return j
    }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}).call(this);
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});(function($){'use strict';if(typeof _wpcf7==='undefined'||_wpcf7===null){return;}
_wpcf7=$.extend({cached:0,inputs:[]},_wpcf7);$.fn.wpcf7InitForm=function(){this.ajaxForm({beforeSubmit:function(arr,$form,options){$form.wpcf7ClearResponseOutput();$form.find('[aria-invalid]').attr('aria-invalid','false');$form.find('.ajax-loader').addClass('is-active');return true;},beforeSerialize:function($form,options){$form.find('[placeholder].placeheld').each(function(i,n){$(n).val('');});return true;},data:{'_wpcf7_is_ajax_call':1},dataType:'json',success:$.wpcf7AjaxSuccess,error:function(xhr,status,error,$form){var e=$('<div class="ajax-error"></div>').text(error.message);$form.after(e);}});if(_wpcf7.cached){this.wpcf7OnloadRefill();}
this.wpcf7ToggleSubmit();this.find('.wpcf7-submit').wpcf7AjaxLoader();this.find('.wpcf7-acceptance').click(function(){$(this).closest('form').wpcf7ToggleSubmit();});this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();this.find('[placeholder]').wpcf7Placeholder();if(_wpcf7.jqueryUi&&!_wpcf7.supportHtml5.date){this.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))});});}
if(_wpcf7.jqueryUi&&!_wpcf7.supportHtml5.number){this.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')});});}
this.find('.wpcf7-character-count').wpcf7CharacterCount();this.find('.wpcf7-validates-as-url').change(function(){$(this).wpcf7NormalizeUrl();});this.find('.wpcf7-recaptcha').wpcf7Recaptcha();};$.wpcf7AjaxSuccess=function(data,status,xhr,$form){if(!$.isPlainObject(data)||$.isEmptyObject(data)){return;}
_wpcf7.inputs=$form.serializeArray();var $responseOutput=$form.find('div.wpcf7-response-output');$form.wpcf7ClearResponseOutput();$form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');$form.removeClass('invalid spam sent failed');if(data.captcha){$form.wpcf7RefillCaptcha(data.captcha);}
if(data.quiz){$form.wpcf7RefillQuiz(data.quiz);}
if(data.invalids){$.each(data.invalids,function(i,n){$form.find(n.into).wpcf7NotValidTip(n.message);$form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');$form.find(n.into).find('[aria-invalid]').attr('aria-invalid','true');});$responseOutput.addClass('wpcf7-validation-errors');$form.addClass('invalid');$(data.into).wpcf7TriggerEvent('invalid');}else if(1==data.spam){$form.find('[name="g-recaptcha-response"]').each(function(){if(''==$(this).val()){var $recaptcha=$(this).closest('.wpcf7-form-control-wrap');$recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);}});$responseOutput.addClass('wpcf7-spam-blocked');$form.addClass('spam');$(data.into).wpcf7TriggerEvent('spam');}else if(1==data.mailSent){$responseOutput.addClass('wpcf7-mail-sent-ok');$form.addClass('sent');if(data.onSentOk){$.each(data.onSentOk,function(i,n){eval(n)});}
$(data.into).wpcf7TriggerEvent('mailsent');}else{$responseOutput.addClass('wpcf7-mail-sent-ng');$form.addClass('failed');$(data.into).wpcf7TriggerEvent('mailfailed');}
if(data.onSubmit){$.each(data.onSubmit,function(i,n){eval(n)});}
$(data.into).wpcf7TriggerEvent('submit');if(1==data.mailSent){$form.resetForm();}
$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'));});$responseOutput.append(data.message).slideDown('fast');$responseOutput.attr('role','alert');$.wpcf7UpdateScreenReaderResponse($form,data);};$.fn.wpcf7TriggerEvent=function(name){return this.each(function(){var elmId=this.id;var inputs=_wpcf7.inputs;var event=new CustomEvent('wpcf7'+name,{bubbles:true,detail:{id:elmId,inputs:inputs}});this.dispatchEvent(event);$(this).trigger('wpcf7:'+name);$(this).trigger(name+'.wpcf7');});};$.fn.wpcf7ExclusiveCheckbox=function(){return this.find('input:checkbox').click(function(){var name=$(this).attr('name');$(this).closest('form').find('input:checkbox[name="'+name+'"]').not(this).prop('checked',false);});};$.fn.wpcf7Placeholder=function(){if(_wpcf7.supportHtml5.placeholder){return this;}
return this.each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld')){$(this).val('').removeClass('placeheld');}});$(this).blur(function(){if(''===$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');}});});};$.fn.wpcf7AjaxLoader=function(){return this.each(function(){$(this).after('<span class="ajax-loader"></span>');});};$.fn.wpcf7ToggleSubmit=function(){return this.each(function(){var form=$(this);if(this.tagName.toLowerCase()!='form'){form=$(this).find('form').first();}
if(form.hasClass('wpcf7-acceptance-as-validation')){return;}
var submit=form.find('input:submit');if(!submit.length){return;}
var acceptances=form.find('input:checkbox.wpcf7-acceptance');if(!acceptances.length){return;}
submit.removeAttr('disabled');acceptances.each(function(i,n){n=$(n);if(n.hasClass('wpcf7-invert')&&n.is(':checked')||!n.hasClass('wpcf7-invert')&&!n.is(':checked')){submit.attr('disabled','disabled');}});});};$.fn.wpcf7ToggleCheckboxFreetext=function(){return this.each(function(){var $wrap=$(this).closest('.wpcf7-form-control');if($(this).find(':checkbox, :radio').is(':checked')){$(this).find(':input.wpcf7-free-text').prop('disabled',false);}else{$(this).find(':input.wpcf7-free-text').prop('disabled',true);}
$wrap.find(':checkbox, :radio').change(function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');var $freetext=$(':input.wpcf7-free-text',$wrap);if($cb.is(':checked')){$freetext.prop('disabled',false).focus();}else{$freetext.prop('disabled',true);}});});};$.fn.wpcf7CharacterCount=function(){return this.each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function($target){var length=$target.val().length;var count=down?starting-length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long');}else{$count.removeClass('too-long');}
if(minimum&&length<minimum){$count.addClass('too-short');}else{$count.removeClass('too-short');}};$count.closest('form').find(':input[name="'+name+'"]').each(function(){updateCount($(this));$(this).keyup(function(){updateCount($(this));});});});};$.fn.wpcf7NormalizeUrl=function(){return this.each(function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)){val=val.replace(/^\/+/,'');val='http://'+val;}
$(this).val(val);});};$.fn.wpcf7NotValidTip=function(message){return this.each(function(){var $into=$(this);$into.find('span.wpcf7-not-valid-tip').remove();$into.append('<span role="alert" class="wpcf7-not-valid-tip">'+message+'</span>');if($into.is('.use-floating-validation-tip *')){$('.wpcf7-not-valid-tip',$into).mouseover(function(){$(this).wpcf7FadeOut();});$(':input',$into).focus(function(){$('.wpcf7-not-valid-tip',$into).not(':hidden').wpcf7FadeOut();});}});};$.fn.wpcf7FadeOut=function(){return this.each(function(){$(this).animate({opacity:0},'fast',function(){$(this).css({'z-index':-100});});});};$.fn.wpcf7OnloadRefill=function(){return this.each(function(){var url=$(this).attr('action');if(0<url.indexOf('#')){url=url.substr(0,url.indexOf('#'));}
var id=$(this).find('input[name="_wpcf7"]').val();var unitTag=$(this).find('input[name="_wpcf7_unit_tag"]').val();$.getJSON(url,{_wpcf7_is_ajax_call:1,_wpcf7:id,_wpcf7_request_ver:$.now()},function(data){if(data&&data.captcha){$('#'+unitTag).wpcf7RefillCaptcha(data.captcha);}
if(data&&data.quiz){$('#'+unitTag).wpcf7RefillQuiz(data.quiz);}});});};$.fn.wpcf7RefillCaptcha=function(captcha){return this.each(function(){var form=$(this);$.each(captcha,function(i,n){form.find(':input[name="'+i+'"]').clearFields();form.find('img.wpcf7-captcha-'+i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value',match[1]);});});};$.fn.wpcf7RefillQuiz=function(quiz){return this.each(function(){var form=$(this);$.each(quiz,function(i,n){form.find(':input[name="'+i+'"]').clearFields();form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value',n[1]);});});};$.fn.wpcf7ClearResponseOutput=function(){return this.each(function(){$(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');$(this).find('span.wpcf7-not-valid-tip').remove();$(this).find('.ajax-loader').removeClass('is-active');});};$.fn.wpcf7Recaptcha=function(){return this.each(function(){var events='wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';$(this).closest('div.wpcf7').on(events,function(e){if(recaptchaWidgets&&grecaptcha){$.each(recaptchaWidgets,function(index,value){grecaptcha.reset(value);});}});});};$.wpcf7UpdateScreenReaderResponse=function($form,data){$('.wpcf7 .screen-reader-response').html('').attr('role','');if(data.message){var $response=$form.siblings('.screen-reader-response').first();$response.append(data.message);if(data.invalids){var $invalids=$('<ul></ul>');$.each(data.invalids,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+n.idref).append(n.message));}else{var $li=$('<li></li>').append(n.message);}
$invalids.append($li);});$response.append($invalids);}
$response.attr('role','alert').focus();}};$.wpcf7SupportHtml5=function(){var features={};var input=document.createElement('input');features.placeholder='placeholder'in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text';});return features;};$(function(){_wpcf7.supportHtml5=$.wpcf7SupportHtml5();$('div.wpcf7 > form').wpcf7InitForm();});})(jQuery);(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;})();
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,!(!b.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g))):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});
/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery)}(function(a){function b(a){for(var b,c;a.length&&a[0]!==document;){if(b=a.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.regional.en=a.extend(!0,{},this.regional[""]),this.regional["en-US"]=a.extend(!0,{},this.regional.en),this.dpDiv=d(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function d(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",e)}function e(){a.datepicker._isDisabledDatepicker(g.inline?g.dpDiv.parent()[0]:g.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))}function f(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.11.4"}});var g;return a.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return f(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var e=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:e,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?d(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(c),a.data(b,"datepicker",c),c.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||b.focus(this._showDatepicker),"button"!==d&&"both"!==d||(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(b),c.dpDiv.css("display","block"))},_dialogDatepicker:function(b,c,d,e,g){var h,i,j,k,l,m=this._dialogInst;return m||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),m=this._dialogInst=this._newInst(this._dialogInput,!1),m.settings={},a.data(this._dialogInput[0],"datepicker",m)),f(m.settings,e||{}),c=c&&c.constructor===Date?this._formatDate(m,c):c,this._dialogInput.val(c),this._pos=g?g.length?g:[g.pageX,g.pageY]:null,this._pos||(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[i/2-100+k,j/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),m.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],"datepicker",m),this},_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,"datepicker");d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,"datepicker"),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):"div"!==c&&"span"!==c||d.removeClass(this.markerClassName).empty(),g===e&&(g=null))},_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,"datepicker")}catch(c){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(b,c,d){var e,g,h,i,j=this._getInst(b);return 2===arguments.length&&"string"==typeof c?"defaults"===c?a.extend({},a.datepicker._defaults):j?"all"===c?a.extend({},j.settings):this._get(j,c):null:(e=c||{},"string"==typeof c&&(e={},e[c]=d),void(j&&(this._curInst===j&&this._hideDatepicker(),g=this._getDateDatepicker(b,!0),h=this._getMinMaxDate(j,"min"),i=this._getMinMaxDate(j,"max"),f(j.settings,e),null!==h&&void 0!==e.dateFormat&&void 0===e.minDate&&(j.settings.minDate=this._formatDate(j,h)),null!==i&&void 0!==e.dateFormat&&void 0===e.maxDate&&(j.settings.maxDate=this._formatDate(j,i)),"disabled"in e&&(e.disabled?this._disableDatepicker(b):this._enableDatepicker(b)),this._attachments(a(b),j),this._autoSize(j),this._setDate(j,g),this._updateAlternate(j),this._updateDatepicker(j))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},_showDatepicker:function(c){if(c=c.target||c,"input"!==c.nodeName.toLowerCase()&&(c=a("input",c.parentNode)[0]),!a.datepicker._isDisabledDatepicker(c)&&a.datepicker._lastInput!==c){var d,e,g,h,i,j,k;d=a.datepicker._getInst(c),a.datepicker._curInst&&a.datepicker._curInst!==d&&(a.datepicker._curInst.dpDiv.stop(!0,!0),d&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),e=a.datepicker._get(d,"beforeShow"),g=e?e.apply(c,[c,d]):{},g!==!1&&(f(d.settings,g),d.lastVal=null,a.datepicker._lastInput=c,a.datepicker._setDateFromField(d),a.datepicker._inDialog&&(c.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(c),a.datepicker._pos[1]+=c.offsetHeight),h=!1,a(c).parents().each(function(){return h|="fixed"===a(this).css("position"),!h}),i={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,d.dpDiv.empty(),d.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(d),i=a.datepicker._checkOffset(d,i,h),d.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":h?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),d.inline||(j=a.datepicker._get(d,"showAnim"),k=a.datepicker._get(d,"duration"),d.dpDiv.css("z-index",b(a(c))+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[j]?d.dpDiv.show(j,a.datepicker._get(d,"showOptions"),k):d.dpDiv[j||"show"](j?k:null),a.datepicker._shouldFocusInput(d)&&d.input.focus(),a.datepicker._curInst=d))}},_updateDatepicker:function(b){this.maxRows=4,g=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b);var c,d=this._getNumberOfMonths(b),f=d[1],h=17,i=b.dpDiv.find("."+this._dayOverClass+" a");i.length>0&&e.apply(i.get(0)),b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&b.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",h*f+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var c,d,e,f,g=this._curInst;!g||b&&g!==a.data(b,"datepicker")||this._datepickerShowing&&(c=this._get(g,"showAnim"),d=this._get(g,"duration"),e=function(){a.datepicker._tidyDialog(g)},a.effects&&(a.effects.effect[c]||a.effects[c])?g.dpDiv.hide(c,a.datepicker._get(g,"showOptions"),d,e):g.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(g,"onClose"),f&&f.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e="y"===a?d:1,f=new RegExp("^\\d{"+e+","+d+"}"),g=c.substring(i).match(f);if(!g)throw"Missing number at position "+i;return i+=g[0].length,parseInt(g[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(i,d.length).toLowerCase()===d.toLowerCase())return f=b[0],i+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+i},x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(p===-1?p=(new Date).getFullYear():p<100&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(p<=k?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),r<=f)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)D=(v+k)%7,C+="<th scope='col'"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{
for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new c,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.11.4",a.datepicker});jQuery(document).ready(function(){jQuery("input[display='date']").each(function(){var mindate=jQuery(this).attr("mindate");if(mindate==='zero'){mindate=0;}
var maxdate=jQuery(this).attr("maxdate");if(maxdate==='zero'){maxdate=0;}
jQuery(this).datepicker({dateFormat:jQuery(this).attr("dateformat"),minDate:mindate,maxDate:maxdate,firstDay:jQuery(this).attr("firstday"),changeYear:jQuery(this).attr("changeyear"),yearRange:jQuery(this).attr("yearrange")});});});jQuery(document).ready(function(){jQuery("input[display='week']").each(function(){jQuery(this).datepicker({dateFormat:jQuery(this).attr("dateformat"),minDate:jQuery(this).attr("mindate"),maxDate:jQuery(this).attr("maxdate"),firstDay:jQuery(this).attr("firstday"),changeYear:jQuery(this).attr("changeyear"),yearRange:jQuery(this).attr("yearrange"),showOtherMonths:true,selectOtherMonths:true,changeMonth:true,showWeek:true,beforeShow:function(dateText,inst){jQuery(".ui-datepicker-calendar tbody tr").live("mousemove",function(){jQuery(this).find("td a").addClass("ui-state-hover");jQuery(this).find(".ui-datepicker-week-col").addClass("ui-state-hover");});jQuery(".ui-datepicker-calendar tbody tr").live("mouseleave",function(){jQuery(this).find("td a").removeClass("ui-state-hover");jQuery(this).find(".ui-datepicker-week-col").removeClass("ui-state-hover");});},onClose:function(dateText,inst){var date=jQuery(this).datepicker("getDate");if(date!=null){var dateFormat=inst.settings.dateFormat||jQuery(this).datepicker._defaults.dateFormat;var endDate=new Date(date.getFullYear(),date.getMonth(),date.getDate()-date.getDay()+6);var endDateFormatted=jQuery.datepicker.formatDate(dateFormat,endDate,inst.settings);jQuery(this).val(dateText+" - "+endDateFormatted);}
jQuery(".ui-datepicker-calendar tbody tr").die("mousemove");jQuery(".ui-datepicker-calendar tbody tr").die("mouseleave");}});});});
/**
 * jQuery Timepicker - v1.3.2 - 2014-09-13
 * http://timepicker.co
 *
 * Enhances standard form input fields helping users to select (or type) times.
 *
 * Copyright (c) 2014 Willington Vega; Licensed MIT, GPL
 */
"undefined"!=typeof jQuery&&function(e){function t(e,t,i){return Array(i+1-e.length).join(t)+e}function i(){if(1===arguments.length){var t=arguments[0];return"string"==typeof t&&(t=e.fn.timepicker.parseTime(t)),new Date(0,0,0,t.getHours(),t.getMinutes(),t.getSeconds())}return 3===arguments.length?new Date(0,0,0,arguments[0],arguments[1],arguments[2]):2===arguments.length?new Date(0,0,0,arguments[0],arguments[1],0):new Date(0,0,0)}e.TimePicker=function(){var t=this;t.container=e(".ui-timepicker-container"),t.ui=t.container.find(".ui-timepicker"),0===t.container.length&&(t.container=e("<div></div>").addClass("ui-timepicker-container").addClass("ui-timepicker-hidden ui-helper-hidden").appendTo("body").hide(),t.ui=e("<div></div>").addClass("ui-timepicker").addClass("ui-widget ui-widget-content ui-menu").addClass("ui-corner-all").appendTo(t.container),t.viewport=e("<ul></ul>").addClass("ui-timepicker-viewport").appendTo(t.ui),e.fn.jquery>="1.4.2"&&t.ui.delegate("a","mouseenter.timepicker",function(){t.activate(!1,e(this).parent())}).delegate("a","mouseleave.timepicker",function(){t.deactivate(!1)}).delegate("a","click.timepicker",function(i){i.preventDefault(),t.select(!1,e(this).parent())}),t.ui.bind("click.timepicker, scroll.timepicker",function(){clearTimeout(t.closing)}))},e.TimePicker.count=0,e.TimePicker.instance=function(){return e.TimePicker._instance||(e.TimePicker._instance=new e.TimePicker),e.TimePicker._instance},e.TimePicker.prototype={keyCode:{ALT:18,BLOQ_MAYUS:20,CTRL:17,DOWN:40,END:35,ENTER:13,HOME:36,LEFT:37,NUMPAD_ENTER:108,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SHIFT:16,TAB:9,UP:38},_items:function(t,n){var r,a,s=this,o=e("<ul></ul>"),u=null;for(-1===t.options.timeFormat.indexOf("m")&&0!==t.options.interval%60&&(t.options.interval=60*Math.max(Math.round(t.options.interval/60),1)),r=n?i(n):t.options.startTime?i(t.options.startTime):i(t.options.startHour,t.options.startMinutes),a=new Date(r.getTime()+864e5);a>r;)s._isValidTime(t,r)&&(u=e("<li>").addClass("ui-menu-item").appendTo(o),e("<a>").addClass("ui-corner-all").text(e.fn.timepicker.formatTime(t.options.timeFormat,r)).appendTo(u),u.data("time-value",r)),r=new Date(r.getTime()+1e3*60*t.options.interval);return o.children()},_isValidTime:function(e,t){var n=null,r=null;return t=i(t),null!==e.options.minTime?n=i(e.options.minTime):(null!==e.options.minHour||null!==e.options.minMinutes)&&(n=i(e.options.minHour,e.options.minMinutes)),null!==e.options.maxTime?r=i(e.options.maxTime):(null!==e.options.maxHour||null!==e.options.maxMinutes)&&(r=i(e.options.maxHour,e.options.maxMinutes)),null!==n&&null!==r?t>=n&&r>=t:null!==n?t>=n:null!==r?r>=t:!0},_hasScroll:function(){var e=this.ui.prop!==undefined?"prop":"attr";return this.ui.height()<this.ui[e]("scrollHeight")},_move:function(e,t,i){var n=this;if(n.closed()&&n.open(e),!n.active)return n.activate(e,n.viewport.children(i)),undefined;var r=n.active[t+"All"](".ui-menu-item").eq(0);r.length?n.activate(e,r):n.activate(e,n.viewport.children(i))},register:function(t,i){var n=this,r={};r.element=e(t),r.element.data("TimePicker")||(r.options=e.metadata?e.extend({},i,r.element.metadata()):e.extend({},i),r.widget=n,e.extend(r,{next:function(){return n.next(r)},previous:function(){return n.previous(r)},first:function(){return n.first(r)},last:function(){return n.last(r)},selected:function(){return n.selected(r)},open:function(){return n.open(r)},close:function(e){return n.close(r,e)},closed:function(){return n.closed(r)},destroy:function(){return n.destroy(r)},parse:function(e){return n.parse(r,e)},format:function(e,t){return n.format(r,e,t)},getTime:function(){return n.getTime(r)},setTime:function(e,t){return n.setTime(r,e,t)},option:function(e,t){return n.option(r,e,t)}}),n._setDefaultTime(r),n._addInputEventsHandlers(r),r.element.data("TimePicker",r))},_setDefaultTime:function(t){"now"===t.options.defaultTime?t.setTime(i(new Date)):t.options.defaultTime&&t.options.defaultTime.getFullYear?t.setTime(i(t.options.defaultTime)):t.options.defaultTime&&t.setTime(e.fn.timepicker.parseTime(t.options.defaultTime))},_addInputEventsHandlers:function(t){var i=this;t.element.bind("keydown.timepicker",function(e){switch(e.which||e.keyCode){case i.keyCode.ENTER:case i.keyCode.NUMPAD_ENTER:e.preventDefault(),i.closed()?t.element.trigger("change.timepicker"):i.select(t,i.active);break;case i.keyCode.UP:t.previous();break;case i.keyCode.DOWN:t.next();break;default:i.closed()||t.close(!0)}}).bind("focus.timepicker",function(){t.open()}).bind("blur.timepicker",function(){t.close()}).bind("change.timepicker",function(){t.closed()&&t.setTime(e.fn.timepicker.parseTime(t.element.val()))})},select:function(t,i){var n=this,r=t===!1?n.instance:t;clearTimeout(n.closing),n.setTime(r,e.fn.timepicker.parseTime(i.children("a").text())),n.close(r,!0)},activate:function(e,t){var i=this,n=e===!1?i.instance:e;if(n===i.instance){if(i.deactivate(),i._hasScroll()){var r=t.offset().top-i.ui.offset().top,a=i.ui.scrollTop(),s=i.ui.height();0>r?i.ui.scrollTop(a+r):r>=s&&i.ui.scrollTop(a+r-s+t.height())}i.active=t.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-item").end()}},deactivate:function(){var e=this;e.active&&(e.active.children("a").removeClass("ui-state-hover").removeAttr("id"),e.active=null)},next:function(e){return(this.closed()||this.instance===e)&&this._move(e,"next",".ui-menu-item:first"),e.element},previous:function(e){return(this.closed()||this.instance===e)&&this._move(e,"prev",".ui-menu-item:last"),e.element},first:function(e){return this.instance===e?this.active&&0===this.active.prevAll(".ui-menu-item").length:!1},last:function(e){return this.instance===e?this.active&&0===this.active.nextAll(".ui-menu-item").length:!1},selected:function(e){return this.instance===e?this.active?this.active:null:null},open:function(t){var i=this,n=t.getTime(),r=t.options.dynamic&&n;if(!t.options.dropdown)return t.element;switch((t.rebuild||!t.items||r)&&(t.items=i._items(t,r?n:null)),(t.rebuild||i.instance!==t||r)&&("1.4.2">e.fn.jquery?(i.viewport.children().remove(),i.viewport.append(t.items),i.viewport.find("a").bind("mouseover.timepicker",function(){i.activate(t,e(this).parent())}).bind("mouseout.timepicker",function(){i.deactivate(t)}).bind("click.timepicker",function(n){n.preventDefault(),i.select(t,e(this).parent())})):(i.viewport.children().detach(),i.viewport.append(t.items))),t.rebuild=!1,i.container.removeClass("ui-helper-hidden ui-timepicker-hidden ui-timepicker-standard ui-timepicker-corners").show(),t.options.theme){case"standard":i.container.addClass("ui-timepicker-standard");break;case"standard-rounded-corners":i.container.addClass("ui-timepicker-standard ui-timepicker-corners");break;default:}i.container.hasClass("ui-timepicker-no-scrollbar")||t.options.scrollbar||(i.container.addClass("ui-timepicker-no-scrollbar"),i.viewport.css({paddingRight:40}));var a=i.container.outerHeight()-i.container.height(),s=t.options.zindex?t.options.zindex:t.element.offsetParent().css("z-index"),o=t.element.offset();i.container.css({top:o.top+t.element.outerHeight(),left:o.left}),i.container.show(),i.container.css({left:t.element.offset().left,height:i.ui.outerHeight()+a,width:t.element.outerWidth(),zIndex:s,cursor:"default"});var u=i.container.width()-(i.ui.outerWidth()-i.ui.width());return i.ui.css({width:u}),i.viewport.css({width:u}),t.items.css({width:u}),i.instance=t,n?t.items.each(function(){var r,a=e(this);return r="1.4.2">e.fn.jquery?e.fn.timepicker.parseTime(a.find("a").text()):a.data("time-value"),r.getTime()===n.getTime()?(i.activate(t,a),!1):!0}):i.deactivate(t),t.element},close:function(e,t){var i=this;return i.closed()||t?(clearTimeout(i.closing),i.instance===e&&(i.container.addClass("ui-helper-hidden ui-timepicker-hidden").hide(),i.ui.scrollTop(0),i.ui.children().removeClass("ui-state-hover"))):i.closing=setTimeout(function(){i.close(e,!0)},150),e.element},closed:function(){return this.ui.is(":hidden")},destroy:function(e){var t=this;return t.close(e,!0),e.element.unbind(".timepicker").data("TimePicker",null)},parse:function(t,i){return e.fn.timepicker.parseTime(i)},format:function(t,i,n){return n=n||t.options.timeFormat,e.fn.timepicker.formatTime(n,i)},getTime:function(t){var i=this,n=e.fn.timepicker.parseTime(t.element.val());return n instanceof Date&&!i._isValidTime(t,n)?null:n instanceof Date&&t.selectedTime?t.format(n)===t.format(t.selectedTime)?t.selectedTime:n:n instanceof Date?n:null},setTime:function(t,n,r){var a=this,s=t.selectedTime;if("string"==typeof n&&(n=t.parse(n)),n&&n.getMinutes&&a._isValidTime(t,n)){if(n=i(n),t.selectedTime=n,t.element.val(t.format(n,t.options.timeFormat)),r)return t}else t.selectedTime=null;return(null!==s||null!==t.selectedTime)&&(t.element.trigger("time-change",[n]),e.isFunction(t.options.change)&&t.options.change.apply(t.element,[n])),t.element},option:function(t,i,n){if(n===undefined)return t.options[i];var r,a,s=t.getTime();"string"==typeof i?(r={},r[i]=n):r=i,a=["minHour","minMinutes","minTime","maxHour","maxMinutes","maxTime","startHour","startMinutes","startTime","timeFormat","interval","dropdown"],e.each(r,function(i){t.options[i]=r[i],t.rebuild=t.rebuild||e.inArray(i,a)>-1}),t.rebuild&&t.setTime(s)}},e.TimePicker.defaults={timeFormat:"hh:mm p",minHour:null,minMinutes:null,minTime:null,maxHour:null,maxMinutes:null,maxTime:null,startHour:null,startMinutes:null,startTime:null,interval:30,dynamic:!0,theme:"standard",zindex:null,dropdown:!0,scrollbar:!1,change:function(){}},e.TimePicker.methods={chainable:["next","previous","open","close","destroy","setTime"]},e.fn.timepicker=function(t){if("string"==typeof t){var i,n,r=Array.prototype.slice.call(arguments,1);return i="option"===t&&arguments.length>2?"each":-1!==e.inArray(t,e.TimePicker.methods.chainable)?"each":"map",n=this[i](function(){var i=e(this),n=i.data("TimePicker");return"object"==typeof n?n[t].apply(n,r):undefined}),"map"===i&&1===this.length?e.makeArray(n).shift():"map"===i?e.makeArray(n):n}if(1===this.length&&this.data("TimePicker"))return this.data("TimePicker");var a=e.extend({},e.TimePicker.defaults,t);return this.each(function(){e.TimePicker.instance().register(this,a)})},e.fn.timepicker.formatTime=function(e,i){var n=i.getHours(),r=n%12,a=i.getMinutes(),s=i.getSeconds(),o={hh:t(""+(0===r?12:r),"0",2),HH:t(""+n,"0",2),mm:t(""+a,"0",2),ss:t(""+s,"0",2),h:0===r?12:r,H:n,m:a,s:s,p:n>11?"PM":"AM"},u=e,c="";for(c in o)o.hasOwnProperty(c)&&(u=u.replace(RegExp(c,"g"),o[c]));return u=u.replace(RegExp("a","g"),n>11?"pm":"am")},e.fn.timepicker.parseTime=function(){var t=[[/^(\d+)$/,"$1"],[/^:(\d)$/,"$10"],[/^:(\d+)/,"$1"],[/^(\d):([7-9])$/,"0$10$2"],[/^(\d):(\d\d)$/,"$1$2"],[/^(\d):(\d{1,})$/,"0$1$20"],[/^(\d\d):([7-9])$/,"$10$2"],[/^(\d\d):(\d)$/,"$1$20"],[/^(\d\d):(\d*)$/,"$1$2"],[/^(\d{3,}):(\d)$/,"$10$2"],[/^(\d{3,}):(\d{2,})/,"$1$2"],[/^(\d):(\d):(\d)$/,"0$10$20$3"],[/^(\d{1,2}):(\d):(\d\d)/,"$10$2$3"]],n=t.length;return function(r){var a=i(new Date),s=!1,o=!1,u=!1,c=!1,l=!1;if(r===undefined||!r.toLowerCase)return null;r=r.toLowerCase(),s=/a/.test(r),o=s?!1:/p/.test(r),r=r.replace(/[^0-9:]/g,"").replace(/:+/g,":");for(var m=0;n>m;m+=1)if(t[m][0].test(r)){r=r.replace(t[m][0],t[m][1]);break}return r=r.replace(/:/g,""),1===r.length?u=r:2===r.length?u=r:3===r.length||5===r.length?(u=r.substr(0,1),c=r.substr(1,2),l=r.substr(3,2)):(4===r.length||r.length>5)&&(u=r.substr(0,2),c=r.substr(2,2),l=r.substr(4,2)),r.length>0&&5>r.length&&(3>r.length&&(c=0),l=0),u===!1||c===!1||l===!1?!1:(u=parseInt(u,10),c=parseInt(c,10),l=parseInt(l,10),s&&12===u?u=0:o&&12>u&&(u+=12),u>24?r.length>=6?e.fn.timepicker.parseTime(r.substr(0,5)):e.fn.timepicker.parseTime(r+"0"+(s?"a":"")+(o?"p":"")):(a.setHours(u,c,l),a))}}()}(jQuery);jQuery(document).ready(function(){jQuery("input[display='time']").each(function(){jQuery(this).timepicker({timeFormat:jQuery(this).attr("timeformat"),interval:jQuery(this).attr("interval"),minTime:jQuery(this).attr("mintime"),maxTime:jQuery(this).attr("maxtime")});});});
/*!
 * WooCommerce Add to Cart JS
 */
jQuery(function(a){return"undefined"!=typeof wc_add_to_cart_params&&(a(document).on("click",".add_to_cart_button",function(){var b=a(this);if(b.is(".ajax_add_to_cart")){if(!b.attr("data-product_id"))return!0;b.removeClass("added"),b.addClass("loading");var c={};return a.each(b.data(),function(a,b){c[a]=b}),a(document.body).trigger("adding_to_cart",[b,c]),a.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),c,function(c){if(c)return c.error&&c.product_url?void(window.location=c.product_url):"yes"===wc_add_to_cart_params.cart_redirect_after_add?void(window.location=wc_add_to_cart_params.cart_url):void a(document.body).trigger("added_to_cart",[c.fragments,c.cart_hash,b])}),!1}return!0}),void a(document.body).on("added_to_cart",function(b,c,d,e){var f=window.location.toString().replace("add-to-cart","added-to-cart");e="undefined"!=typeof e&&e,e&&e.removeClass("loading"),c&&a.each(c,function(b){a(b).addClass("updating")}),a(".shop_table.cart, .updating, .cart_totals").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}}),e&&(e.addClass("added"),wc_add_to_cart_params.is_cart||0!==e.parent().find(".added_to_cart").length||e.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>")),c&&(a.each(c,function(b,c){a(b).replaceWith(c)}),a(document.body).trigger("wc_fragments_loaded")),a(".widget_shopping_cart, .updating").stop(!0).css("opacity","1").unblock(),a(".shop_table.cart").load(f+" .shop_table.cart:eq(0) > *",function(){a(".shop_table.cart").stop(!0).css("opacity","1").unblock(),a(document.body).trigger("cart_page_refreshed")}),a(".cart_totals").load(f+" .cart_totals:eq(0) > *",function(){a(".cart_totals").stop(!0).css("opacity","1").unblock()})}))});
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function a(a){function b(b,d){var f,p,q=b==window,r=d&&void 0!==d.message?d.message:void 0;if(d=a.extend({},a.blockUI.defaults,d||{}),!d.ignoreIfBlocked||!a(b).data("blockUI.isBlocked")){if(d.overlayCSS=a.extend({},a.blockUI.defaults.overlayCSS,d.overlayCSS||{}),f=a.extend({},a.blockUI.defaults.css,d.css||{}),d.onOverlayClick&&(d.overlayCSS.cursor="pointer"),p=a.extend({},a.blockUI.defaults.themedCSS,d.themedCSS||{}),r=void 0===r?d.message:r,q&&n&&c(window,{fadeOut:0}),r&&"string"!=typeof r&&(r.parentNode||r.jquery)){var s=r.jquery?r[0]:r,t={};a(b).data("blockUI.history",t),t.el=s,t.parent=s.parentNode,t.display=s.style.display,t.position=s.style.position,t.parent&&t.parent.removeChild(s)}a(b).data("blockUI.onUnblock",d.onUnblock);var u,v,w,x,y=d.baseZ;u=a(k||d.forceIframe?'<iframe class="blockUI" style="z-index:'+y++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+d.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),v=a(d.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+y++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+y++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),d.theme&&q?(x='<div class="blockUI '+d.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(y+10)+';display:none;position:fixed">',d.title&&(x+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(d.title||"&nbsp;")+"</div>"),x+='<div class="ui-widget-content ui-dialog-content"></div>',x+="</div>"):d.theme?(x='<div class="blockUI '+d.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(y+10)+';display:none;position:absolute">',d.title&&(x+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(d.title||"&nbsp;")+"</div>"),x+='<div class="ui-widget-content ui-dialog-content"></div>',x+="</div>"):x=q?'<div class="blockUI '+d.blockMsgClass+' blockPage" style="z-index:'+(y+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+d.blockMsgClass+' blockElement" style="z-index:'+(y+10)+';display:none;position:absolute"></div>',w=a(x),r&&(d.theme?(w.css(p),w.addClass("ui-widget-content")):w.css(f)),d.theme||v.css(d.overlayCSS),v.css("position",q?"fixed":"absolute"),(k||d.forceIframe)&&u.css("opacity",0);var z=[u,v,w],A=a(q?"body":b);a.each(z,function(){this.appendTo(A)}),d.theme&&d.draggable&&a.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var B=m&&(!a.support.boxModel||a("object,embed",q?null:b).length>0);if(l||B){if(q&&d.allowBodyStretch&&a.support.boxModel&&a("html,body").css("height","100%"),(l||!a.support.boxModel)&&!q)var C=i(b,"borderTopWidth"),D=i(b,"borderLeftWidth"),E=C?"(0 - "+C+")":0,F=D?"(0 - "+D+")":0;a.each(z,function(a,b){var c=b[0].style;if(c.position="absolute",a<2)q?c.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+d.quirksmodeOffsetHack+') + "px"'):c.setExpression("height",'this.parentNode.offsetHeight + "px"'),q?c.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):c.setExpression("width",'this.parentNode.offsetWidth + "px"'),F&&c.setExpression("left",F),E&&c.setExpression("top",E);else if(d.centerY)q&&c.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),c.marginTop=0;else if(!d.centerY&&q){var e=d.css&&d.css.top?parseInt(d.css.top,10):0,f="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+e+') + "px"';c.setExpression("top",f)}})}if(r&&(d.theme?w.find(".ui-widget-content").append(r):w.append(r),(r.jquery||r.nodeType)&&a(r).show()),(k||d.forceIframe)&&d.showOverlay&&u.show(),d.fadeIn){var G=d.onBlock?d.onBlock:j,H=d.showOverlay&&!r?G:j,I=r?G:j;d.showOverlay&&v._fadeIn(d.fadeIn,H),r&&w._fadeIn(d.fadeIn,I)}else d.showOverlay&&v.show(),r&&w.show(),d.onBlock&&d.onBlock.bind(w)();if(e(1,b,d),q?(n=w[0],o=a(d.focusableElements,n),d.focusInput&&setTimeout(g,20)):h(w[0],d.centerX,d.centerY),d.timeout){var J=setTimeout(function(){q?a.unblockUI(d):a(b).unblock(d)},d.timeout);a(b).data("blockUI.timeout",J)}}}function c(b,c){var f,g=b==window,h=a(b),i=h.data("blockUI.history"),j=h.data("blockUI.timeout");j&&(clearTimeout(j),h.removeData("blockUI.timeout")),c=a.extend({},a.blockUI.defaults,c||{}),e(0,b,c),null===c.onUnblock&&(c.onUnblock=h.data("blockUI.onUnblock"),h.removeData("blockUI.onUnblock"));var k;k=g?a(document.body).children().filter(".blockUI").add("body > .blockUI"):h.find(">.blockUI"),c.cursorReset&&(k.length>1&&(k[1].style.cursor=c.cursorReset),k.length>2&&(k[2].style.cursor=c.cursorReset)),g&&(n=o=null),c.fadeOut?(f=k.length,k.stop().fadeOut(c.fadeOut,function(){0===--f&&d(k,i,c,b)})):d(k,i,c,b)}function d(b,c,d,e){var f=a(e);if(!f.data("blockUI.isBlocked")){b.each(function(a,b){this.parentNode&&this.parentNode.removeChild(this)}),c&&c.el&&(c.el.style.display=c.display,c.el.style.position=c.position,c.el.style.cursor="default",c.parent&&c.parent.appendChild(c.el),f.removeData("blockUI.history")),f.data("blockUI.static")&&f.css("position","static"),"function"==typeof d.onUnblock&&d.onUnblock(e,d);var g=a(document.body),h=g.width(),i=g[0].style.width;g.width(h-1).width(h),g[0].style.width=i}}function e(b,c,d){var e=c==window,g=a(c);if((b||(!e||n)&&(e||g.data("blockUI.isBlocked")))&&(g.data("blockUI.isBlocked",b),e&&d.bindEvents&&(!b||d.showOverlay))){var h="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";b?a(document).bind(h,d,f):a(document).unbind(h,f)}}function f(b){if("keydown"===b.type&&b.keyCode&&9==b.keyCode&&n&&b.data.constrainTabKey){var c=o,d=!b.shiftKey&&b.target===c[c.length-1],e=b.shiftKey&&b.target===c[0];if(d||e)return setTimeout(function(){g(e)},10),!1}var f=b.data,h=a(b.target);return h.hasClass("blockOverlay")&&f.onOverlayClick&&f.onOverlayClick(b),h.parents("div."+f.blockMsgClass).length>0||0===h.parents().children().filter("div.blockUI").length}function g(a){if(o){var b=o[a===!0?o.length-1:0];b&&b.focus()}}function h(a,b,c){var d=a.parentNode,e=a.style,f=(d.offsetWidth-a.offsetWidth)/2-i(d,"borderLeftWidth"),g=(d.offsetHeight-a.offsetHeight)/2-i(d,"borderTopWidth");b&&(e.left=f>0?f+"px":"0"),c&&(e.top=g>0?g+"px":"0")}function i(b,c){return parseInt(a.css(b,c),10)||0}a.fn._fadeIn=a.fn.fadeIn;var j=a.noop||function(){},k=/MSIE/.test(navigator.userAgent),l=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),m=(document.documentMode||0,a.isFunction(document.createElement("div").style.setExpression));a.blockUI=function(a){b(window,a)},a.unblockUI=function(a){c(window,a)},a.growlUI=function(b,c,d,e){var f=a('<div class="growlUI"></div>');b&&f.append("<h1>"+b+"</h1>"),c&&f.append("<h2>"+c+"</h2>"),void 0===d&&(d=3e3);var g=function(b){b=b||{},a.blockUI({message:f,fadeIn:"undefined"!=typeof b.fadeIn?b.fadeIn:700,fadeOut:"undefined"!=typeof b.fadeOut?b.fadeOut:1e3,timeout:"undefined"!=typeof b.timeout?b.timeout:d,centerY:!1,showOverlay:!1,onUnblock:e,css:a.blockUI.defaults.growlCSS})};g();f.css("opacity");f.mouseover(function(){g({fadeIn:0,timeout:3e4});var b=a(".blockMsg");b.stop(),b.fadeTo(300,1)}).mouseout(function(){a(".blockMsg").fadeOut(1e3)})},a.fn.block=function(c){if(this[0]===window)return a.blockUI(c),this;var d=a.extend({},a.blockUI.defaults,c||{});return this.each(function(){var b=a(this);d.ignoreIfBlocked&&b.data("blockUI.isBlocked")||b.unblock({fadeOut:0})}),this.each(function(){"static"==a.css(this,"position")&&(this.style.position="relative",a(this).data("blockUI.static",!0)),this.style.zoom=1,b(this,c)})},a.fn.unblock=function(b){return this[0]===window?(a.unblockUI(b),this):this.each(function(){c(this,b)})},a.blockUI.version=2.7,a.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var n=null,o=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a(jQuery)}();
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(a){var b=!1;if("function"==typeof define&&define.amd&&(define(a),b=!0),"object"==typeof exports&&(module.exports=a(),b=!0),!b){var c=window.Cookies,d=window.Cookies=a();d.noConflict=function(){return window.Cookies=c,d}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if("undefined"!=typeof document){if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}f.expires=f.expires?f.expires.toUTCString():"";try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(a){}e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape);var i="";for(var j in f)f[j]&&(i+="; "+j,f[j]!==!0&&(i+="="+f[j]));return document.cookie=b+"="+e+i}b||(g={});for(var k=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,m=0;m<k.length;m++){var n=k[m].split("="),o=n.slice(1).join("=");'"'===o.charAt(0)&&(o=o.slice(1,-1));try{var p=n[0].replace(l,decodeURIComponent);if(o=c.read?c.read(o,p):c(o,p)||o.replace(l,decodeURIComponent),this.json)try{o=JSON.parse(o)}catch(a){}if(b===p){g=o;break}b||(g[p]=o)}catch(a){}}return g}}return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b(function(){})});
jQuery(function(a){a(".woocommerce-ordering").on("change","select.orderby",function(){a(this).closest("form").submit()}),a("input.qty:not(.product-quantity input.qty)").each(function(){var b=parseFloat(a(this).attr("min"));b>=0&&parseFloat(a(this).val())<b&&a(this).val(b)}),jQuery(".woocommerce-store-notice__dismiss-link").click(function(){Cookies.set("store_notice","hidden",{path:"/"}),jQuery(".woocommerce-store-notice").hide()}),"hidden"===Cookies.get("store_notice")?jQuery(".woocommerce-store-notice").hide():jQuery(".woocommerce-store-notice").show()});
jQuery(function(a){function b(){e&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function c(a){e&&(localStorage.setItem(f,a),sessionStorage.setItem(f,a))}function d(){a.ajax(g)}if("undefined"==typeof wc_cart_fragments_params)return!1;var e,f=wc_cart_fragments_params.ajax_url.toString()+"-wc_cart_hash";try{e="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(a){e=!1}var g={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(d){d&&d.fragments&&(a.each(d.fragments,function(b,c){a(b).replaceWith(c)}),e&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(d.fragments)),c(d.cart_hash),d.cart_hash&&b()),a(document.body).trigger("wc_fragments_refreshed"))}};if(e){var h=null,i=864e5;a(document.body).on("wc_fragment_refresh updated_wc_div",function(){d()}),a(document.body).on("added_to_cart",function(a,d,e){var g=sessionStorage.getItem(f);null!==g&&void 0!==g&&""!==g||b(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(d)),c(e)}),a(document.body).on("wc_fragments_refreshed",function(){clearTimeout(h),h=setTimeout(d,i)}),a(window).on("storage onstorage",function(a){f===a.originalEvent.key&&localStorage.getItem(f)!==sessionStorage.getItem(f)&&d()}),a(window).on("pageshow",function(b){b.originalEvent.persisted&&(a(".widget_shopping_cart_content").empty(),a(document.body).trigger("wc_fragment_refresh"))});try{var j=a.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),k=sessionStorage.getItem(f),l=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==k&&void 0!==k&&""!==k||(k=""),null!==l&&void 0!==l&&""!==l||(l=""),k&&(null===m||void 0===m||""===m))throw"No cart_created";if(m){var n=1*m+i,o=(new Date).getTime();if(n<o)throw"Fragment expired";h=setTimeout(d,n-o)}if(!j||!j["div.widget_shopping_cart_content"]||k!==l)throw"No fragment";a.each(j,function(b,c){a(b).replaceWith(c)}),a(document.body).trigger("wc_fragments_loaded")}catch(a){d()}}else d();Cookies.get("woocommerce_items_in_cart")>0?a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),a(document.body).on("adding_to_cart",function(){a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});var ytp=ytp||{};function onYouTubeIframeAPIReady(){if(ytp.YTAPIReady)return;ytp.YTAPIReady=true;jQuery(document).trigger("YTAPIReady");}
var getYTPVideoID=function(url){var videoID,playlistID;if(url.indexOf("youtu.be")>0){videoID=url.substr(url.lastIndexOf("/")+1,url.length);playlistID=videoID.indexOf("?list=")>0?videoID.substr(videoID.lastIndexOf("="),videoID.length):null;videoID=playlistID?videoID.substr(0,videoID.lastIndexOf("?")):videoID;}else if(url.indexOf("http")>-1){videoID=url.match(/[\\?&]v=([^&#]*)/)[1];playlistID=url.indexOf("list=")>0?url.match(/[\\?&]list=([^&#]*)/)[1]:null;}else{videoID=url.length>15?null:url;playlistID=videoID?null:url;}
return{videoID:videoID,playlistID:playlistID};};(function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"3.0.10",build:"6079",author:"Matteo Bicocchi (pupunzi)",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:true,vol:50,addRaster:false,mask:false,opacity:1,quality:"default",mute:false,loop:true,showControls:true,showAnnotations:false,showYTLogo:true,stopMovieOnBlur:true,realfullscreen:true,mobileFallbackImage:null,gaTrack:true,optimizeDisplay:true,align:"center,center",onReady:function(player){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},controlBar:null,loading:null,locationProtocol:"https:",filters:{grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},buildPlayer:function(options){return this.each(function(){var YTPlayer=this;var $YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0;YTPlayer.opt={};YTPlayer.state={};YTPlayer.filters=jQuery.mbYTPlayer.filters;YTPlayer.filtersEnabled=true;YTPlayer.id=YTPlayer.id||"YTP_"+new Date().getTime();$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&typeof $YTPlayer.data("property")=="string"?eval('('+$YTPlayer.data("property")+')'):$YTPlayer.data("property");if(typeof property!="undefined"&&typeof property.vol!="undefined")property.vol=property.vol===0?property.vol=1:property.vol;jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property);if(!YTPlayer.hasChanged){YTPlayer.defaultOpt={};jQuery.extend(YTPlayer.defaultOpt,jQuery.mbYTPlayer.defaults,options);}
if(YTPlayer.opt.loop=="true")
YTPlayer.opt.loop=9999;YTPlayer.isRetina=(window.retina||window.devicePixelRatio>1);var isIframe=function(){var isIfr=false;try{if(self.location.href!=top.location.href)isIfr=true;}catch(e){isIfr=true;}
return isIfr;};YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe());if(!YTPlayer.canGoFullScreen)YTPlayer.opt.realfullscreen=false;if(!$YTPlayer.attr("id"))$YTPlayer.attr("id","ytp_"+new Date().getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=false;YTPlayer.hasFocus=true;YTPlayer.videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:false;YTPlayer.playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:false;YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?'0':'3';var playerVars={'modestbranding':1,'autoplay':0,'controls':0,'showinfo':0,'rel':0,'enablejsapi':1,'version':3,'playerapiid':playerID,'origin':'*','allowfullscreen':true,'wmode':'transparent','iv_load_policy':YTPlayer.opt.showAnnotations};if(document.createElement('video').canPlayType)jQuery.extend(playerVars,{'html5':1});if(jQuery.browser.msie&&jQuery.browser.version<9)this.opt.opacity=1;YTPlayer.isSelf=YTPlayer.opt.containment=="self";YTPlayer.defaultOpt.containment=YTPlayer.opt.containment=YTPlayer.opt.containment=="self"?jQuery(this):jQuery(YTPlayer.opt.containment);YTPlayer.isBackground=YTPlayer.opt.containment.is("body");if(YTPlayer.isBackground&&ytp.backgroundIsInited)
return;var isPlayer=YTPlayer.opt.containment.is(jQuery(this));YTPlayer.canPlayOnMobile=isPlayer&&jQuery(this).children().length===0;YTPlayer.isPlayer=false;if(!isPlayer){$YTPlayer.hide();}else{YTPlayer.isPlayer=true;}
var overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isPlayer){overlay.on("click",function(){$YTPlayer.YTPTogglePlay();})}
var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0});var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox");playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"});wrapper.append(playerBox);YTPlayer.opt.containment.children().not("script, style").each(function(){if(jQuery(this).css("position")=="static")jQuery(this).css("position","relative");});if(YTPlayer.isBackground){jQuery("body").css({boxSizing:"border-box"});wrapper.css({position:"fixed",top:0,left:0,zIndex:0});$YTPlayer.hide();}else if(YTPlayer.opt.containment.css("position")=="static")
YTPlayer.opt.containment.css({position:"relative"});YTPlayer.opt.containment.prepend(wrapper);YTPlayer.wrapper=wrapper;playerBox.css({opacity:1});if(!jQuery.browser.mobile){playerBox.after(overlay);YTPlayer.overlay=overlay;}
if(!YTPlayer.isBackground){overlay.on("mouseenter",function(){if(YTPlayer.controlBar&&YTPlayer.controlBar.length)
YTPlayer.controlBar.addClass("visible");}).on("mouseleave",function(){if(YTPlayer.controlBar&&YTPlayer.controlBar.length)
YTPlayer.controlBar.removeClass("visible");});}
if(!ytp.YTAPIReady){jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({"src":jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,"id":"YTAPI"});jQuery("head").prepend(tag);}else{setTimeout(function(){jQuery(document).trigger("YTAPIReady");},100)}
if(jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile){if(YTPlayer.opt.mobileFallbackImage){wrapper.css({backgroundImage:"url("+YTPlayer.opt.mobileFallbackImage+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat",opacity:1})};$YTPlayer.remove();jQuery(document).trigger("YTPUnavailable");return;}
jQuery(document).on("YTAPIReady",function(){if((YTPlayer.isBackground&&ytp.backgroundIsInited)||YTPlayer.isInit)return;if(YTPlayer.isBackground){ytp.backgroundIsInited=true;}
YTPlayer.opt.autoPlay=typeof YTPlayer.opt.autoPlay=="undefined"?(YTPlayer.isBackground?true:false):YTPlayer.opt.autoPlay;YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100;jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);jQuery(YTPlayer).on("YTPChanged",function(){if(YTPlayer.isInit)
return;YTPlayer.isInit=true;if(jQuery.browser.mobile&&YTPlayer.canPlayOnMobile){if(YTPlayer.opt.containment.outerWidth()>jQuery(window).width()){YTPlayer.opt.containment.css({maxWidth:"100%"});var h=YTPlayer.opt.containment.outerWidth()*.563;YTPlayer.opt.containment.css({maxHeight:h});}
new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),width:'100%',height:h,playerVars:playerVars,events:{'onReady':function(event){YTPlayer.player=event.target;playerBox.css({opacity:1});YTPlayer.wrapper.css({opacity:1});}}});return;}
new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{'onReady':function(event){YTPlayer.player=event.target;if(YTPlayer.isReady)return;YTPlayer.isReady=YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay?false:true;YTPlayer.playerEl=YTPlayer.player.getIframe();jQuery(YTPlayer.playerEl).unselectable();$YTPlayer.optimizeDisplay();jQuery(window).off("resize.YTP_"+YTPlayer.id).on("resize.YTP_"+YTPlayer.id,function(){$YTPlayer.optimizeDisplay();});jQuery.mbYTPlayer.checkForState(YTPlayer);},'onStateChange':function(event){if(typeof event.target.getPlayerState!="function")return;var state=event.target.getPlayerState();if(YTPlayer.preventTrigger){YTPlayer.preventTrigger=false;return}
YTPlayer.state=state;var eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPPlay";if(YTPlayer.controlBar.length)
YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause);if(typeof _gaq!="undefined"&&eval(YTPlayer.opt.gaTrack))_gaq.push(['_trackEvent','YTPlayer','Play',(YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString())]);if(typeof ga!="undefined"&&eval(YTPlayer.opt.gaTrack))ga('send','event','YTPlayer','play',(YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()));break;case 2:eventType="YTPPause";if(YTPlayer.controlBar.length)
YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);eventType="YTPBuffering";if(YTPlayer.controlBar.length)
YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued";break;default:break;}
var YTPEvent=jQuery.Event(eventType);YTPEvent.time=YTPlayer.currentTime;if(YTPlayer.canTrigger)jQuery(YTPlayer).trigger(YTPEvent);},'onPlaybackQualityChange':function(e){var quality=e.target.getPlaybackQuality();var YTPQualityChange=jQuery.Event("YTPQualityChange");YTPQualityChange.quality=quality;jQuery(YTPlayer).trigger(YTPQualityChange);},'onError':function(err){if(err.data==150){console.log("Embedding this video is restricted by Youtube.");if(YTPlayer.isPlayList)jQuery(YTPlayer).playNext();}
if(err.data==2&&YTPlayer.isPlayList)
jQuery(YTPlayer).playNext();if(typeof YTPlayer.opt.onError=="function")
YTPlayer.opt.onError($YTPlayer,err);}}});});});$YTPlayer.off("YTPTime.mask");jQuery.mbYTPlayer.applyMask(YTPlayer);});},getDataFromAPI:function(YTPlayer){YTPlayer.videoData=jQuery.mbStorage.get("YTPlayer_data_"+YTPlayer.videoID);jQuery(YTPlayer).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(YTPlayer.hasData){if(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay){var bgndURL=YTPlayer.videoData.thumb_max||YTPlayer.videoData.thumb_high||YTPlayer.videoData.thumb_medium;YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+bgndURL+") center center",backgroundSize:"cover"});YTPlayer.opt.backgroundUrl=bgndURL;}}});if(YTPlayer.videoData){setTimeout(function(){YTPlayer.opt.ratio=YTPlayer.opt.ratio=="auto"?"16/9":YTPlayer.opt.ratio;YTPlayer.dataReceived=true;jQuery(YTPlayer).trigger("YTPChanged");var YTPData=jQuery.Event("YTPData");YTPData.prop={};for(var x in YTPlayer.videoData)YTPData.prop[x]=YTPlayer.videoData[x];jQuery(YTPlayer).trigger(YTPData);},500);YTPlayer.hasData=true;}else if(jQuery.mbYTPlayer.apiKey){jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+YTPlayer.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(data){YTPlayer.dataReceived=true;jQuery(YTPlayer).trigger("YTPChanged");function parseYTPlayer_data(data){YTPlayer.videoData={};YTPlayer.videoData.id=YTPlayer.videoID;YTPlayer.videoData.channelTitle=data.channelTitle;YTPlayer.videoData.title=data.title;YTPlayer.videoData.description=data.description.length<400?data.description:data.description.substring(0,400)+" ...";YTPlayer.videoData.aspectratio=YTPlayer.opt.ratio=="auto"?"16/9":YTPlayer.opt.ratio;YTPlayer.opt.ratio=YTPlayer.videoData.aspectratio;YTPlayer.videoData.thumb_max=data.thumbnails.maxres?data.thumbnails.maxres.url:null;YTPlayer.videoData.thumb_high=data.thumbnails.high?data.thumbnails.high.url:null;YTPlayer.videoData.thumb_medium=data.thumbnails.medium?data.thumbnails.medium.url:null;jQuery.mbStorage.set("YTPlayer_data_"+YTPlayer.videoID,YTPlayer.videoData);}
parseYTPlayer_data(data.items[0].snippet);YTPlayer.hasData=true;var YTPData=jQuery.Event("YTPData");YTPData.prop={};for(var x in YTPlayer.videoData)YTPData.prop[x]=YTPlayer.videoData[x];jQuery(YTPlayer).trigger(YTPData);});}else{setTimeout(function(){jQuery(YTPlayer).trigger("YTPChanged");},50);if(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay){var bgndURL=jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+YTPlayer.videoID+"/hqdefault.jpg";YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+bgndURL+") center center",backgroundSize:"cover"});YTPlayer.opt.backgroundUrl=bgndURL;}
YTPlayer.videoData=null;YTPlayer.opt.ratio=YTPlayer.opt.ratio=="auto"?"16/9":YTPlayer.opt.ratio;}
if(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay&&!jQuery.browser.mobile){YTPlayer.loading=jQuery("<div/>").addClass("loading").html("Loading").hide();jQuery(YTPlayer).append(YTPlayer.loading);YTPlayer.loading.fadeIn();}},removeStoredData:function(){jQuery.mbStorage.remove();},getVideoData:function(){var YTPlayer=this.get(0);return YTPlayer.videoData;},getVideoID:function(){var YTPlayer=this.get(0);return YTPlayer.videoID||false;},setVideoQuality:function(quality){var YTPlayer=this.get(0);YTPlayer.player.setPlaybackQuality(quality);},playlist:function(videos,shuffle,callback,loopList){var $YTPlayer=this;var YTPlayer=$YTPlayer.get(0);YTPlayer.isPlayList=true;if(shuffle)videos=jQuery.shuffle(videos);if(!YTPlayer.videoID){YTPlayer.videos=videos;YTPlayer.videoCounter=0;YTPlayer.videoLength=videos.length;jQuery(YTPlayer).data("property",videos[0]);jQuery(YTPlayer).mb_YTPlayer();}
if(typeof callback=="function")jQuery(YTPlayer).one("YTPChanged",function(){callback(YTPlayer);});jQuery(YTPlayer).on("YTPEnd",function(){loopList=typeof loopList=="undefined"?true:loopList;jQuery(YTPlayer).playNext(loopList);});return this;},playNext:function(loopList){var YTPlayer=this.get(0);if(YTPlayer.checkForStartAt){clearTimeout(YTPlayer.checkForStartAt);clearInterval(YTPlayer.getState);}
YTPlayer.videoCounter++;if(YTPlayer.videoCounter>=YTPlayer.videoLength&&loopList)
YTPlayer.videoCounter=0;if(YTPlayer.videoCounter<YTPlayer.videoLength)
jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);else
YTPlayer.videoCounter--;return this;},playPrev:function(){var YTPlayer=this.get(0);if(YTPlayer.checkForStartAt){clearInterval(YTPlayer.checkForStartAt);clearInterval(YTPlayer.getState);}
YTPlayer.videoCounter--;if(YTPlayer.videoCounter<0)YTPlayer.videoCounter=YTPlayer.videoLength-1;jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);return this;},playIndex:function(idx){var YTPlayer=this.get(0);idx=idx-1;if(YTPlayer.checkForStartAt){clearInterval(YTPlayer.checkForStartAt);clearInterval(YTPlayer.getState);}
YTPlayer.videoCounter=idx;if(YTPlayer.videoCounter>=YTPlayer.videoLength-1)
YTPlayer.videoCounter=YTPlayer.videoLength-1;jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);return this;},changeMovie:function(opt){var $YTPlayer=this;var YTPlayer=$YTPlayer.get(0);YTPlayer.opt.startAt=0;YTPlayer.opt.stopAt=0;YTPlayer.opt.mask=false;YTPlayer.opt.mute=true;YTPlayer.hasData=false;YTPlayer.hasChanged=true;YTPlayer.player.loopTime=undefined;if(opt)
jQuery.extend(YTPlayer.opt,opt);YTPlayer.videoID=getYTPVideoID(YTPlayer.opt.videoURL).videoID;if(YTPlayer.opt.loop=="true")
YTPlayer.opt.loop=9999;jQuery(YTPlayer.playerEl).CSSAnimate({opacity:0},200,function(){var YTPChangeMovie=jQuery.Event("YTPChangeMovie");YTPChangeMovie.time=YTPlayer.currentTime;YTPChangeMovie.videoId=YTPlayer.videoID;jQuery(YTPlayer).trigger(YTPChangeMovie);jQuery(YTPlayer).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+YTPlayer.videoID),1,YTPlayer.opt.quality);jQuery(YTPlayer).optimizeDisplay();jQuery.mbYTPlayer.checkForState(YTPlayer);jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);});jQuery.mbYTPlayer.applyMask(YTPlayer);},getPlayer:function(){return jQuery(this).get(0).player;},playerDestroy:function(){var YTPlayer=this.get(0);ytp.YTAPIReady=true;ytp.backgroundIsInited=false;YTPlayer.isInit=false;YTPlayer.videoID=null;var playerBox=YTPlayer.wrapper;playerBox.remove();jQuery("#controlBar_"+YTPlayer.id).remove();clearInterval(YTPlayer.checkForStartAt);clearInterval(YTPlayer.getState);return this;},fullscreen:function(real){var YTPlayer=this.get(0);if(typeof real=="undefined")real=YTPlayer.opt.realfullscreen;real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id);var fullScreenBtn=controls.find(".mb_OnlyYT");var videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var isFullScreen=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");if(!isFullScreen){YTPlayer.isAlone=false;fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality);videoWrapper.removeClass("YTPFullscreen");videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500);videoWrapper.css({zIndex:0});if(YTPlayer.isBackground){jQuery("body").after(controls);}else{YTPlayer.wrapper.before(controls);}
jQuery(window).resize();jQuery(YTPlayer).trigger("YTPFullScreenEnd");}else{jQuery(YTPlayer).YTPSetVideoQuality("default");jQuery(YTPlayer).trigger("YTPFullScreenStart");}});}
if(!YTPlayer.isAlone){function hideMouse(){YTPlayer.overlay.css({cursor:"none"});}
jQuery(document).on("mousemove.YTPlayer",function(e){YTPlayer.overlay.css({cursor:"auto"});clearTimeout(YTPlayer.hideCursor);if(!jQuery(e.target).parents().is(".mb_YTPBar"))YTPlayer.hideCursor=setTimeout(hideMouse,3000);});hideMouse();if(real){videoWrapper.css({opacity:0});videoWrapper.addClass("YTPFullscreen");launchFullscreen(videoWrapper.get(0));setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1000);YTPlayer.wrapper.append(controls);jQuery(YTPlayer).optimizeDisplay();YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,true);},500)}else videoWrapper.css({zIndex:10000}).CSSAnimate({opacity:1},1000);fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);YTPlayer.isAlone=true;}else{jQuery(document).off("mousemove.YTPlayer");clearTimeout(YTPlayer.hideCursor);YTPlayer.overlay.css({cursor:"auto"});if(real){cancelFullscreen();}else{videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500);videoWrapper.css({zIndex:0});}
fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);YTPlayer.isAlone=false;}
function RunPrefixMethod(obj,method){var pfx=["webkit","moz","ms","o",""];var p=0,m,t;while(p<pfx.length&&!obj[m]){m=method;if(pfx[p]==""){m=m.substr(0,1).toLowerCase()+m.substr(1);}
m=pfx[p]+m;t=typeof obj[m];if(t!="undefined"){pfx=[pfx[p]];return(t=="function"?obj[m]():obj[m]);}
p++;}}
function launchFullscreen(element){RunPrefixMethod(element,"RequestFullScreen");}
function cancelFullscreen(){if(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen")){RunPrefixMethod(document,"CancelFullScreen");}}
return this;},toggleLoops:function(){var YTPlayer=this.get(0);var data=YTPlayer.opt;if(data.loop==1){data.loop=0;}else{if(data.startAt){YTPlayer.player.seekTo(data.startAt);}else{YTPlayer.player.playVideo();}
data.loop=1;}
return this;},play:function(){var YTPlayer=this.get(0);if(!YTPlayer.isReady)
return this;YTPlayer.player.playVideo();YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},2000);jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},1000);var controls=jQuery("#controlBar_"+YTPlayer.id);var playBtn=controls.find(".mb_YTPPlaypause");playBtn.html(jQuery.mbYTPlayer.controls.pause);YTPlayer.state=1;jQuery(YTPlayer).css("background-image","none");return this;},togglePlay:function(callback){var YTPlayer=this.get(0);if(YTPlayer.state==1)
this.YTPPause();else
this.YTPPlay();if(typeof callback=="function")
callback(YTPlayer.state);return this;},stop:function(){var YTPlayer=this.get(0);var controls=jQuery("#controlBar_"+YTPlayer.id);var playBtn=controls.find(".mb_YTPPlaypause");playBtn.html(jQuery.mbYTPlayer.controls.play);YTPlayer.player.stopVideo();return this;},pause:function(){var YTPlayer=this.get(0);YTPlayer.player.pauseVideo();YTPlayer.state=2;return this;},seekTo:function(val){var YTPlayer=this.get(0);YTPlayer.player.seekTo(val,true);return this;},setVolume:function(val){var YTPlayer=this.get(0);if(!val&&!YTPlayer.opt.vol&&YTPlayer.player.getVolume()==0)jQuery(YTPlayer).YTPUnmute();else if((!val&&YTPlayer.player.getVolume()>0)||(val&&YTPlayer.opt.vol==val)){if(!YTPlayer.isMute)jQuery(YTPlayer).YTPMute();else jQuery(YTPlayer).YTPUnmute();}else{YTPlayer.opt.vol=val;YTPlayer.player.setVolume(YTPlayer.opt.vol);if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length)YTPlayer.volumeBar.updateSliderVal(val)}
return this;},toggleVolume:function(){var YTPlayer=this.get(0);if(!YTPlayer)return;if(YTPlayer.player.isMuted()){jQuery(YTPlayer).YTPUnmute();return true;}else{jQuery(YTPlayer).YTPMute();return false;}},mute:function(){var YTPlayer=this.get(0);if(YTPlayer.isMute)return;YTPlayer.player.mute();YTPlayer.isMute=true;YTPlayer.player.setVolume(0);if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length&&YTPlayer.volumeBar.width()>10){YTPlayer.volumeBar.updateSliderVal(0);}
var controls=jQuery("#controlBar_"+YTPlayer.id);var muteBtn=controls.find(".mb_YTPMuteUnmute");muteBtn.html(jQuery.mbYTPlayer.controls.unmute);jQuery(YTPlayer).addClass("isMuted");if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length)YTPlayer.volumeBar.addClass("muted");var YTPEvent=jQuery.Event("YTPMuted");YTPEvent.time=YTPlayer.currentTime;if(YTPlayer.canTrigger)jQuery(YTPlayer).trigger(YTPEvent);return this;},unmute:function(){var YTPlayer=this.get(0);if(!YTPlayer.isMute)return;YTPlayer.player.unMute();YTPlayer.isMute=false;YTPlayer.player.setVolume(YTPlayer.opt.vol);if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length)YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol>10?YTPlayer.opt.vol:10);var controls=jQuery("#controlBar_"+YTPlayer.id);var muteBtn=controls.find(".mb_YTPMuteUnmute");muteBtn.html(jQuery.mbYTPlayer.controls.mute);jQuery(YTPlayer).removeClass("isMuted");if(YTPlayer.volumeBar&&YTPlayer.volumeBar.length)YTPlayer.volumeBar.removeClass("muted");var YTPEvent=jQuery.Event("YTPUnmuted");YTPEvent.time=YTPlayer.currentTime;if(YTPlayer.canTrigger)jQuery(YTPlayer).trigger(YTPEvent);return this;},applyFilter:function(filter,value){return this.each(function(){var YTPlayer=this;YTPlayer.filters[filter].value=value;if(YTPlayer.filtersEnabled)
jQuery(YTPlayer).YTPEnableFilters();});},applyFilters:function(filters){return this.each(function(){var YTPlayer=this;if(!YTPlayer.isReady){jQuery(YTPlayer).on("YTPReady",function(){jQuery(YTPlayer).YTPApplyFilters(filters);});return;}
for(var key in filters)
jQuery(YTPlayer).YTPApplyFilter(key,filters[key]);jQuery(YTPlayer).trigger("YTPFiltersApplied");});},toggleFilter:function(filter,value){return this.each(function(){var YTPlayer=this;if(!YTPlayer.filters[filter].value)YTPlayer.filters[filter].value=value;else YTPlayer.filters[filter].value=0;if(YTPlayer.filtersEnabled)jQuery(this).YTPEnableFilters();});},toggleFilters:function(callback){return this.each(function(){var YTPlayer=this;if(YTPlayer.filtersEnabled){jQuery(YTPlayer).trigger("YTPDisableFilters");jQuery(YTPlayer).YTPDisableFilters();}else{jQuery(YTPlayer).YTPEnableFilters();jQuery(YTPlayer).trigger("YTPEnableFilters");}
if(typeof callback=="function")
callback(YTPlayer.filtersEnabled);})},disableFilters:function(){return this.each(function(){var YTPlayer=this;var iframe=jQuery(YTPlayer.playerEl);iframe.css("-webkit-filter","");iframe.css("filter","");YTPlayer.filtersEnabled=false;})},enableFilters:function(){return this.each(function(){var YTPlayer=this;var iframe=jQuery(YTPlayer.playerEl);var filterStyle="";for(var key in YTPlayer.filters){if(YTPlayer.filters[key].value)
filterStyle+=key.replace("_","-")+"("+YTPlayer.filters[key].value+YTPlayer.filters[key].unit+") ";}
iframe.css("-webkit-filter",filterStyle);iframe.css("filter",filterStyle);YTPlayer.filtersEnabled=true;});},removeFilter:function(filter,callback){return this.each(function(){var YTPlayer=this;if(typeof filter=="function"){callback=filter;filter=null;}
if(!filter)
for(var key in YTPlayer.filters){jQuery(this).YTPApplyFilter(key,0);if(typeof callback=="function")callback(key);}else{jQuery(this).YTPApplyFilter(filter,0);if(typeof callback=="function")callback(filter);}});},getFilters:function(){var YTPlayer=this.get(0);return YTPlayer.filters;},addMask:function(mask){var YTPlayer=this.get(0);var overlay=YTPlayer.overlay;if(!mask){mask=YTPlayer.actualMask;}
var tempImg=jQuery("<img/>").attr("src",mask).on("load",function(){overlay.CSSAnimate({opacity:0},500,function(){YTPlayer.hasMask=true;tempImg.remove();overlay.css({backgroundImage:"url("+mask+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"});overlay.CSSAnimate({opacity:1},500);});});return this;},removeMask:function(){var YTPlayer=this.get(0);var overlay=YTPlayer.overlay;overlay.CSSAnimate({opacity:0},500,function(){YTPlayer.hasMask=false;overlay.css({backgroundImage:"",backgroundRepeat:"",backgroundPosition:"",backgroundSize:""});overlay.CSSAnimate({opacity:1},500);});return this;},applyMask:function(YTPlayer){var $YTPlayer=jQuery(YTPlayer);$YTPlayer.off("YTPTime.mask");if(YTPlayer.opt.mask){if(typeof YTPlayer.opt.mask=="string"){$YTPlayer.YTPAddMask(YTPlayer.opt.mask);YTPlayer.actualMask=YTPlayer.opt.mask;}else if(typeof YTPlayer.opt.mask=="object"){for(var time in YTPlayer.opt.mask){if(YTPlayer.opt.mask[time])
var img=jQuery("<img/>").attr("src",YTPlayer.opt.mask[time]);}
if(YTPlayer.opt.mask[0])
$YTPlayer.YTPAddMask(YTPlayer.opt.mask[0]);$YTPlayer.on("YTPTime.mask",function(e){for(var time in YTPlayer.opt.mask){if(e.time==time)
if(!YTPlayer.opt.mask[time]){$YTPlayer.YTPRemoveMask();}else{$YTPlayer.YTPAddMask(YTPlayer.opt.mask[time]);YTPlayer.actualMask=YTPlayer.opt.mask[time];}}});}}},toggleMask:function(){var YTPlayer=this.get(0);var $YTPlayer=$(YTPlayer);if(YTPlayer.hasMask)
$YTPlayer.YTPRemoveMask();else
$YTPlayer.YTPAddMask();return this;},manageProgress:function(){var YTPlayer=this.get(0);var controls=jQuery("#controlBar_"+YTPlayer.id);var progressBar=controls.find(".mb_YTPProgress");var loadedBar=controls.find(".mb_YTPLoaded");var timeBar=controls.find(".mb_YTPseekbar");var totW=progressBar.outerWidth();var currentTime=Math.floor(YTPlayer.player.getCurrentTime());var totalTime=Math.floor(YTPlayer.player.getDuration());var timeW=(currentTime*totW)/totalTime;var startLeft=0;var loadedW=YTPlayer.player.getVideoLoadedFraction()*100;loadedBar.css({left:startLeft,width:loadedW+"%"});timeBar.css({left:0,width:timeW});return{totalTime:totalTime,currentTime:currentTime};},buildControls:function(YTPlayer){var data=YTPlayer.opt;data.showYTLogo=data.showYTLogo||data.printUrl;if(jQuery("#controlBar_"+YTPlayer.id).length)
return;YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?10000:1000}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar");var playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){if(YTPlayer.player.getPlayerState()==1)jQuery(YTPlayer).YTPPause();else jQuery(YTPlayer).YTPPlay();});var MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){if(YTPlayer.player.getVolume()==0){jQuery(YTPlayer).YTPUnmute();}else{jQuery(YTPlayer).YTPMute();}});var volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime");var vURL=data.videoURL?data.videoURL:"";if(vURL.indexOf("http")<0)vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL;var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")});var onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);});var progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(e){timeBar.css({width:(e.clientX-timeBar.offset().left)});YTPlayer.timeW=e.clientX-timeBar.offset().left;YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var totalTime=Math.floor(YTPlayer.player.getDuration());YTPlayer.goto=(timeBar.outerWidth()*totalTime)/progressBar.outerWidth();YTPlayer.player.seekTo(parseFloat(YTPlayer.goto),true);YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});});var loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute");var timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar);buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx);if(data.showYTLogo){buttonBar.append(movieUrl);}
if(YTPlayer.isBackground||(eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground))buttonBar.append(onlyVideo);YTPlayer.controlBar.append(buttonBar).append(progressBar);if(!YTPlayer.isBackground){YTPlayer.controlBar.addClass("inlinePlayer");YTPlayer.wrapper.before(YTPlayer.controlBar);}else{jQuery("body").after(YTPlayer.controlBar);}
volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(el){if(el.value==0){jQuery(YTPlayer).YTPMute();}else{jQuery(YTPlayer).YTPUnmute();}
YTPlayer.player.setVolume(el.value);if(!YTPlayer.isMute)YTPlayer.opt.vol=el.value;}});},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:400;clearInterval(YTPlayer.getState);if(!jQuery.contains(document,YTPlayer)){jQuery(YTPlayer).YTPPlayerDestroy();clearInterval(YTPlayer.getState);clearInterval(YTPlayer.checkForStartAt);return;}
jQuery.mbYTPlayer.checkForStart(YTPlayer);YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress();var $YTPlayer=jQuery(YTPlayer);var data=YTPlayer.opt;var startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;var stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0;if(YTPlayer.currentTime!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.currentTime;jQuery(YTPlayer).trigger(YTPEvent);}
YTPlayer.currentTime=prog.currentTime;YTPlayer.totalTime=YTPlayer.player.getDuration();if(YTPlayer.player.getVolume()==0)$YTPlayer.addClass("isMuted");else $YTPlayer.removeClass("isMuted");if(YTPlayer.opt.showControls)
if(prog.totalTime){YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime));}else{YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --");}
if(eval(YTPlayer.opt.stopMovieOnBlur)){if(!document.hasFocus()){if(YTPlayer.state==1){YTPlayer.hasFocus=false;$YTPlayer.YTPPause();}}else if(document.hasFocus()&&!YTPlayer.hasFocus&&!(YTPlayer.state==-1||YTPlayer.state==0)){YTPlayer.hasFocus=true;$YTPlayer.YTPPlay();}}
if(YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact){YTPlayer.controlBar.addClass("compact");YTPlayer.isCompact=true;if(!YTPlayer.isMute&&YTPlayer.volumeBar)YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);}else if(YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact){YTPlayer.controlBar.removeClass("compact");YTPlayer.isCompact=false;if(!YTPlayer.isMute&&YTPlayer.volumeBar)YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);}
if(YTPlayer.player.getPlayerState()==1&&(parseFloat(YTPlayer.player.getDuration()-1.5)<YTPlayer.player.getCurrentTime()||(stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt))){if(YTPlayer.isEnded)return;YTPlayer.isEnded=true;setTimeout(function(){YTPlayer.isEnded=false},1000);if(YTPlayer.isPlayList){if(!data.loop||(data.loop>0&&YTPlayer.player.loopTime===data.loop-1)){YTPlayer.player.loopTime=undefined;clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");YTPEnd.time=YTPlayer.currentTime;jQuery(YTPlayer).trigger(YTPEnd);return;}}else if(!data.loop||(data.loop>0&&YTPlayer.player.loopTime===data.loop-1)){YTPlayer.player.loopTime=undefined;YTPlayer.preventTrigger=true;YTPlayer.state=2;jQuery(YTPlayer).YTPPause();YTPlayer.wrapper.CSSAnimate({opacity:0},500,function(){if(YTPlayer.controlBar.length)
YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);var YTPEnd=jQuery.Event("YTPEnd");YTPEnd.time=YTPlayer.currentTime;jQuery(YTPlayer).trigger(YTPEnd);YTPlayer.player.seekTo(startAt,true);if(!YTPlayer.isBackground){YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"});}});return;}
YTPlayer.player.loopTime=YTPlayer.player.loopTime?++YTPlayer.player.loopTime:1;startAt=startAt||1;YTPlayer.preventTrigger=true;YTPlayer.state=2;jQuery(YTPlayer).YTPPause();YTPlayer.player.seekTo(startAt,true);$YTPlayer.YTPPlay();}},interval);},getTime:function(){var YTPlayer=this.get(0);return jQuery.mbYTPlayer.formatTime(YTPlayer.currentTime);},getTotalTime:function(){var YTPlayer=this.get(0);return jQuery.mbYTPlayer.formatTime(YTPlayer.totalTime);},checkForStart:function(YTPlayer){var $YTPlayer=jQuery(YTPlayer);if(!jQuery.contains(document,YTPlayer)){jQuery(YTPlayer).YTPPlayerDestroy();return}
YTPlayer.preventTrigger=true;YTPlayer.state=2;jQuery(YTPlayer).YTPPause();jQuery(YTPlayer).muteYTPVolume();jQuery("#controlBar_"+YTPlayer.id).remove();YTPlayer.controlBar=false;if(YTPlayer.opt.showControls)
jQuery.mbYTPlayer.buildControls(YTPlayer);if(YTPlayer.opt.addRaster){var classN=YTPlayer.opt.addRaster=="dot"?"raster-dot":"raster";YTPlayer.overlay.addClass(YTPlayer.isRetina?classN+" retina":classN);}else{YTPlayer.overlay.removeClass(function(index,classNames){var current_classes=classNames.split(" "),classes_to_remove=[];jQuery.each(current_classes,function(index,class_name){if(/raster.*/.test(class_name)){classes_to_remove.push(class_name);}});classes_to_remove.push("retina");return classes_to_remove.join(" ");})}
var startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;YTPlayer.player.playVideo();YTPlayer.player.seekTo(startAt,true);YTPlayer.checkForStartAt=setInterval(function(){jQuery(YTPlayer).YTPMute();var canPlayVideo=YTPlayer.player.getVideoLoadedFraction()>=startAt/YTPlayer.player.getDuration();if(YTPlayer.player.getDuration()>0&&YTPlayer.player.getCurrentTime()>=startAt&&canPlayVideo){clearInterval(YTPlayer.checkForStartAt);if(typeof YTPlayer.opt.onReady=="function")
YTPlayer.opt.onReady(YTPlayer);YTPlayer.isReady=true;var YTPready=jQuery.Event("YTPReady");YTPready.time=YTPlayer.currentTime;jQuery(YTPlayer).trigger(YTPready);YTPlayer.preventTrigger=true;YTPlayer.state=2;jQuery(YTPlayer).YTPPause();if(!YTPlayer.opt.mute)jQuery(YTPlayer).YTPUnmute();YTPlayer.canTrigger=true;if(YTPlayer.opt.autoPlay){var YTPStart=jQuery.Event("YTPStart");YTPStart.time=YTPlayer.currentTime;jQuery(YTPlayer).trigger(YTPStart);$YTPlayer.css("background-image","none");jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},1000);$YTPlayer.YTPPlay();YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},1000);if(jQuery.browser.safari){YTPlayer.safariPlay=setInterval(function(){if(YTPlayer.state!=1)
$YTPlayer.YTPPlay();else
clearInterval(YTPlayer.safariPlay)},10)}
$YTPlayer.on("YTPReady",function(){$YTPlayer.YTPPlay();});}else{YTPlayer.player.pauseVideo();if(!YTPlayer.isPlayer){jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},500);YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},500);}
if(YTPlayer.controlBar.length)
YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);}
if(YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay&&(YTPlayer.loading&&YTPlayer.loading.length)){YTPlayer.loading.html("Ready");setTimeout(function(){YTPlayer.loading.fadeOut();},100)}
if(YTPlayer.controlBar&&YTPlayer.controlBar.length)
YTPlayer.controlBar.slideDown(1000);}else if(jQuery.browser.safari){YTPlayer.player.playVideo();if(startAt>=0)YTPlayer.player.seekTo(startAt,true);}},1);},setAlign:function(align){var $YTplayer=this;$YTplayer.optimizeDisplay(align);},getAlign:function(){var YTPlayer=this.get(0);return YTPlayer.opt.align;},formatTime:function(s){var min=Math.floor(s/60);var sec=Math.floor(s-(60*min));return(min<=9?"0"+min:min)+" : "+(sec<=9?"0"+sec:sec);}};jQuery.fn.optimizeDisplay=function(align){var YTPlayer=this.get(0);var playerBox=jQuery(YTPlayer.playerEl);var vid={};YTPlayer.opt.align=align||YTPlayer.opt.align;YTPlayer.opt.align=typeof YTPlayer.opt.align!="undefined "?YTPlayer.opt.align:"center,center";var YTPAlign=YTPlayer.opt.align.split(",");if(YTPlayer.opt.optimizeDisplay){var abundance=YTPlayer.isPlayer?0:80;var win={};var el=YTPlayer.wrapper;win.width=el.outerWidth();win.height=el.outerHeight()+abundance;vid.width=win.width;vid.height=YTPlayer.opt.ratio=="16/9"?Math.ceil(vid.width*(9/16)):Math.ceil(vid.width*(3/4));vid.marginTop=-((vid.height-win.height)/2);vid.marginLeft=0;var lowest=vid.height<win.height;if(lowest){vid.height=win.height;vid.width=YTPlayer.opt.ratio=="16/9"?Math.floor(vid.height*(16/9)):Math.floor(vid.height*(4/3));vid.marginTop=0;vid.marginLeft=-((vid.width-win.width)/2);}
for(var a in YTPAlign){if(YTPAlign.hasOwnProperty(a)){var al=YTPAlign[a].replace(/ /g,"");switch(al){case"top":vid.marginTop=lowest?-((vid.height-win.height)/2):0;break;case"bottom":vid.marginTop=lowest?0:-(vid.height-(win.height));break;case"left":vid.marginLeft=0;break;case"right":vid.marginLeft=lowest?-(vid.width-win.width):0;break;default:if(vid.width>win.width)
vid.marginLeft=-((vid.width-win.width)/2);break;}}}}else{vid.width="100%";vid.height="100%";vid.marginTop=0;vid.marginLeft=0;}
playerBox.css({width:vid.width,height:vid.height,marginTop:vid.marginTop,marginLeft:vid.marginLeft,maxWidth:"initial"});};jQuery.shuffle=function(arr){var newArray=arr.slice();var len=newArray.length;var i=len;while(i--){var p=parseInt(Math.random()*len);var t=newArray[i];newArray[i]=newArray[p];newArray[p]=t;}
return newArray;};jQuery.fn.unselectable=function(){return this.each(function(){jQuery(this).css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).attr("unselectable","on");});};jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer;jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer;jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID;jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie;jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy;jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play;jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay;jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop;jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause;jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo;jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist;jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext;jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev;jQuery.fn.YTPPlayIndex=jQuery.mbYTPlayer.playIndex;jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute;jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute;jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume;jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume;jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData;jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen;jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops;jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality;jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress;jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter;jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters;jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter;jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters;jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter;jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters;jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters;jQuery.fn.YTPGetFilters=jQuery.mbYTPlayer.getFilters;jQuery.fn.YTPGetTime=jQuery.mbYTPlayer.getTime;jQuery.fn.YTPGetTotalTime=jQuery.mbYTPlayer.getTotalTime;jQuery.fn.YTPAddMask=jQuery.mbYTPlayer.addMask;jQuery.fn.YTPRemoveMask=jQuery.mbYTPlayer.removeMask;jQuery.fn.YTPToggleMask=jQuery.mbYTPlayer.toggleMask;jQuery.fn.YTPSetAlign=jQuery.mbYTPlayer.setAlign;jQuery.fn.YTPGetAlign=jQuery.mbYTPlayer.getAlign;jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer;jQuery.fn.playNext=jQuery.mbYTPlayer.playNext;jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev;jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie;jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID;jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer;jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy;jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen;jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls;jQuery.fn.playYTP=jQuery.mbYTPlayer.play;jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops;jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop;jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause;jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo;jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute;jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute;jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume;jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality;jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress;jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData;})(jQuery,ytp);;function uncamel(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function setUnit(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+jQuery/)?""+e+t:e}function setFilter(e,t,r){var i=uncamel(t),n=jQuery.browser.mozilla?"":jQuery.CSS.sfx;e[n+"filter"]=e[n+"filter"]||"",r=setUnit(r>jQuery.CSS.filters[t].max?jQuery.CSS.filters[t].max:r,jQuery.CSS.filters[t].unit),e[n+"filter"]+=i+"("+r+") ",delete e[t]}jQuery.support.CSStransition=function(){var e=document.body||document.documentElement,t=e.style;return void 0!==t.transition||void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.MsTransition||void 0!==t.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(e){var t=jQuery.extend(!0,{},e);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");for(var r in t){"transform"===r&&(t[jQuery.CSS.sfx+"transform"]=t[r],delete t[r]),"transform-origin"===r&&(t[jQuery.CSS.sfx+"transform-origin"]=e[r],delete t[r]),"filter"!==r||jQuery.browser.mozilla||(t[jQuery.CSS.sfx+"filter"]=e[r],delete t[r]),"blur"===r&&setFilter(t,"blur",e[r]),"brightness"===r&&setFilter(t,"brightness",e[r]),"contrast"===r&&setFilter(t,"contrast",e[r]),"grayscale"===r&&setFilter(t,"grayscale",e[r]),"hueRotate"===r&&setFilter(t,"hueRotate",e[r]),"invert"===r&&setFilter(t,"invert",e[r]),"saturate"===r&&setFilter(t,"saturate",e[r]),"sepia"===r&&setFilter(t,"sepia",e[r]);var i="";"x"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" translateX("+setUnit(e[r],"px")+")",delete t[r]),"y"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" translateY("+setUnit(e[r],"px")+")",delete t[r]),"z"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" translateZ("+setUnit(e[r],"px")+")",delete t[r]),"rotate"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" rotate("+setUnit(e[r],"deg")+")",delete t[r]),"rotateX"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" rotateX("+setUnit(e[r],"deg")+")",delete t[r]),"rotateY"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" rotateY("+setUnit(e[r],"deg")+")",delete t[r]),"rotateZ"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" rotateZ("+setUnit(e[r],"deg")+")",delete t[r]),"scale"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" scale("+setUnit(e[r],"")+")",delete t[r]),"scaleX"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" scaleX("+setUnit(e[r],"")+")",delete t[r]),"scaleY"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" scaleY("+setUnit(e[r],"")+")",delete t[r]),"scaleZ"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" scaleZ("+setUnit(e[r],"")+")",delete t[r]),"skew"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" skew("+setUnit(e[r],"deg")+")",delete t[r]),"skewX"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" skewX("+setUnit(e[r],"deg")+")",delete t[r]),"skewY"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" skewY("+setUnit(e[r],"deg")+")",delete t[r]),"perspective"===r&&(i=jQuery.CSS.sfx+"transform",t[i]=t[i]||"",t[i]+=" perspective("+setUnit(e[r],"px")+")",delete t[r])}return t},getProp:function(e){var t=[];for(var r in e)t.indexOf(r)<0&&t.push(uncamel(r));return t.join(",")},animate:function(e,t,r,i,n){return this.each(function(){function s(){u.called=!0,u.CSSAIsRunning=!1,a.off(jQuery.CSS.transitionEnd+"."+u.id),clearTimeout(u.timeout),a.css(jQuery.CSS.sfx+"transition",""),"function"==typeof n&&n.apply(u),"function"==typeof u.CSSqueue&&(u.CSSqueue(),u.CSSqueue=null)}var u=this,a=jQuery(this);u.id=u.id||"CSSA_"+(new Date).getTime();var o=o||{type:"noEvent"};if(u.CSSAIsRunning&&u.eventType==o.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(u.CSSqueue=function(){a.CSSAnimate(e,t,r,i,n)});if(u.CSSqueue=null,u.eventType=o.type,0!==a.length&&e){if(e=jQuery.normalizeCss(e),u.CSSAIsRunning=!0,"function"==typeof t&&(n=t,t=jQuery.fx.speeds._default),"function"==typeof r&&(i=r,r=0),"string"==typeof r&&(n=r,r=0),"function"==typeof i&&(n=i,i="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof t)for(var f in jQuery.fx.speeds){if(t==f){t=jQuery.fx.speeds[f];break}t=jQuery.fx.speeds._default}if(t||(t=jQuery.fx.speeds._default),"string"==typeof n&&(i=n,n=null),!jQuery.support.CSStransition){for(var c in e){if("transform"===c&&delete e[c],"filter"===c&&delete e[c],"transform-origin"===c&&delete e[c],"auto"===e[c]&&delete e[c],"x"===c){var S=e[c],l="left";e[l]=S,delete e[c]}if("y"===c){var S=e[c],l="top";e[l]=S,delete e[c]}("-ms-transform"===c||"-ms-filter"===c)&&delete e[c]}return void a.delay(r).animate(e,t,n)}var y={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};y[i]&&(i=y[i]),a.off(jQuery.CSS.transitionEnd+"."+u.id);var m=jQuery.CSS.getProp(e),d={};jQuery.extend(d,e),d[jQuery.CSS.sfx+"transition-property"]=m,d[jQuery.CSS.sfx+"transition-duration"]=t+"ms",d[jQuery.CSS.sfx+"transition-delay"]=r+"ms",d[jQuery.CSS.sfx+"transition-timing-function"]=i,setTimeout(function(){a.one(jQuery.CSS.transitionEnd+"."+u.id,s),a.css(d)},1),u.timeout=setTimeout(function(){return u.called||!n?(u.called=!1,void(u.CSSAIsRunning=!1)):(a.css(jQuery.CSS.sfx+"transition",""),n.apply(u),u.CSSAIsRunning=!1,void("function"==typeof u.CSSqueue&&(u.CSSqueue(),u.CSSqueue=null)))},t+r+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(e){return this.each(function(){var t=jQuery(this),r=jQuery.normalizeCss(e);t.css(r)})};;var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")||-1!=nAgt.indexOf("Edge")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):nAgt.indexOf("mozilla/5.0")>-1&&nAgt.indexOf("android ")>-1&&nAgt.indexOf("applewebkit")>-1&&!(nAgt.indexOf("chrome")>-1)?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);;var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")||-1!=nAgt.indexOf("Edge")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):nAgt.indexOf("mozilla/5.0")>-1&&nAgt.indexOf("android ")>-1&&nAgt.indexOf("applewebkit")>-1&&!(nAgt.indexOf("chrome")>-1)?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);(function(b){b.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:b.browser.mobile?"touchstart":"mousedown",end:b.browser.mobile?"touchend":"mouseup",move:b.browser.mobile?"touchmove":"mousemove"},init:function(c){return this.each(function(){var a=this,d=b(a);d.addClass("simpleSlider");a.opt={};b.extend(a.opt,b.simpleSlider.defaults,c);b.extend(a.opt,d.data());var e="h"==a.opt.orientation?"horizontal":"vertical",e=b("<div/>").addClass("level").addClass(e);d.prepend(e);a.level=e;d.css({cursor:"default"});"auto"==a.opt.scale&&(a.opt.scale=b(a).outerWidth());d.updateSliderVal();a.opt.readonly||(d.on(b.simpleSlider.events.start,function(c){b.browser.mobile&&(c=c.changedTouches[0]);a.canSlide=!0;d.updateSliderVal(c);"h"==a.opt.orientation?d.css({cursor:"col-resize"}):d.css({cursor:"row-resize"});c.preventDefault();c.stopPropagation()}),b(document).on(b.simpleSlider.events.move,function(c){b.browser.mobile&&(c=c.changedTouches[0]);a.canSlide&&(b(document).css({cursor:"default"}),d.updateSliderVal(c),c.preventDefault(),c.stopPropagation())}).on(b.simpleSlider.events.end,function(){b(document).css({cursor:"auto"});a.canSlide=!1;d.css({cursor:"auto"})}))})},updateSliderVal:function(c){var a=this.get(0);if(a.opt){a.opt.initialval="number"==typeof a.opt.initialval?a.opt.initialval:a.opt.initialval(a);var d=b(a).outerWidth(),e=b(a).outerHeight();a.x="object"==typeof c?c.clientX+document.body.scrollLeft-this.offset().left:"number"==typeof c?c*d/a.opt.scale:a.opt.initialval*d/a.opt.scale;a.y="object"==typeof c?c.clientY+document.body.scrollTop-this.offset().top:"number"==typeof c?(a.opt.scale-a.opt.initialval-c)*e/a.opt.scale:a.opt.initialval*e/a.opt.scale;a.y=this.outerHeight()-a.y;a.scaleX=a.x*a.opt.scale/d;a.scaleY=a.y*a.opt.scale/e;a.outOfRangeX=a.scaleX>a.opt.scale?a.scaleX-a.opt.scale:0>a.scaleX?a.scaleX:0;a.outOfRangeY=a.scaleY>a.opt.scale?a.scaleY-a.opt.scale:0>a.scaleY?a.scaleY:0;a.outOfRange="h"==a.opt.orientation?a.outOfRangeX:a.outOfRangeY;a.value="undefined"!=typeof c?"h"==a.opt.orientation?a.x>=this.outerWidth()?a.opt.scale:0>=a.x?0:a.scaleX:a.y>=this.outerHeight()?a.opt.scale:0>=a.y?0:a.scaleY:"h"==a.opt.orientation?a.scaleX:a.scaleY;"h"==a.opt.orientation?a.level.width(Math.floor(100*a.x/d)+"%"):a.level.height(Math.floor(100*a.y/e));"function"==typeof a.opt.callback&&a.opt.callback(a)}}};b.fn.simpleSlider=b.simpleSlider.init;b.fn.updateSliderVal=b.simpleSlider.updateSliderVal})(jQuery);;!function(a){a.mbCookie={set:function(a,b,c,d){b=JSON.stringify(b),c||(c=7),d=d?"; domain="+d:"";var f,e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),f="; expires="+e.toGMTString(),document.cookie=a+"="+b+f+"; path=/"+d},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return JSON.parse(e.substring(b.length,e.length))}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){b=JSON.stringify(b),localStorage.setItem(a,b)},get:function(a){return localStorage[a]?JSON.parse(localStorage[a]):null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(c).undelegate(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).mouseup(function(){b=!1}),a.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),b=!1,!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return this._blurActiveElement(b),!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=this.document[0];if(this.handleElement.is(b.target))try{c.activeElement&&"body"!==c.activeElement.nodeName.toLowerCase()&&a(c.activeElement).blur()}catch(d){}},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._normalizeRightBottom(),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.focus(),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});
/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b){b.support.touch="ontouchend"in document;if(!b.support.touch){return}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f)}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown")};c._touchMove=function(f){if(!a){return}this._touchMoved=true;d(f,"mousemove")};c._touchEnd=function(f){if(!a){return}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click")}a=false};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f)}})(jQuery);if(typeof tb_pathToImage!='string'){var tb_pathToImage=thickboxL10n.loadingAnimation;}
/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/
jQuery(document).ready(function(){tb_init('a.thickbox, area.thickbox, input.thickbox');imgLoader=new Image();imgLoader.src=tb_pathToImage;});function tb_init(domChunk){jQuery('body').on('click',domChunk,tb_click).on('thickbox:iframe:loaded',function(){jQuery('#TB_window').removeClass('thickbox-loading');});}
function tb_click(){var t=this.title||this.name||null;var a=this.href||this.alt;var g=this.rel||false;tb_show(t,a,g);this.blur();return false;}
function tb_show(caption,url,imageGroup){var $closeBtn;try{if(typeof document.body.style.maxHeight==="undefined"){jQuery("body","html").css({height:"100%",width:"100%"});jQuery("html").css("overflow","hidden");if(document.getElementById("TB_HideSelect")===null){jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window' class='thickbox-loading'></div>");jQuery("#TB_overlay").click(tb_remove);}}else{if(document.getElementById("TB_overlay")===null){jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window' class='thickbox-loading'></div>");jQuery("#TB_overlay").click(tb_remove);jQuery('body').addClass('modal-open');}}
if(tb_detectMacXFF()){jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");}else{jQuery("#TB_overlay").addClass("TB_overlayBG");}
if(caption===null){caption="";}
jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='208' /></div>");jQuery('#TB_load').show();var baseURL;if(url.indexOf("?")!==-1){baseURL=url.substr(0,url.indexOf("?"));}else{baseURL=url;}
var urlString=/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;var urlType=baseURL.toLowerCase().match(urlString);if(urlType=='.jpg'||urlType=='.jpeg'||urlType=='.png'||urlType=='.gif'||urlType=='.bmp'){TB_PrevCaption="";TB_PrevURL="";TB_PrevHTML="";TB_NextCaption="";TB_NextURL="";TB_NextHTML="";TB_imageCount="";TB_FoundURL=false;if(imageGroup){TB_TempArray=jQuery("a[rel="+imageGroup+"]").get();for(TB_Counter=0;((TB_Counter<TB_TempArray.length)&&(TB_NextHTML===""));TB_Counter++){var urlTypeTemp=TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);if(!(TB_TempArray[TB_Counter].href==url)){if(TB_FoundURL){TB_NextCaption=TB_TempArray[TB_Counter].title;TB_NextURL=TB_TempArray[TB_Counter].href;TB_NextHTML="<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";}else{TB_PrevCaption=TB_TempArray[TB_Counter].title;TB_PrevURL=TB_TempArray[TB_Counter].href;TB_PrevHTML="<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";}}else{TB_FoundURL=true;TB_imageCount=thickboxL10n.image+' '+(TB_Counter+1)+' '+thickboxL10n.of+' '+(TB_TempArray.length);}}}
imgPreloader=new Image();imgPreloader.onload=function(){imgPreloader.onload=null;var pagesize=tb_getPageSize();var x=pagesize[0]-150;var y=pagesize[1]-150;var imageWidth=imgPreloader.width;var imageHeight=imgPreloader.height;if(imageWidth>x){imageHeight=imageHeight*(x/imageWidth);imageWidth=x;if(imageHeight>y){imageWidth=imageWidth*(y/imageHeight);imageHeight=y;}}else if(imageHeight>y){imageWidth=imageWidth*(y/imageHeight);imageHeight=y;if(imageWidth>x){imageHeight=imageHeight*(x/imageWidth);imageWidth=x;}}
TB_WIDTH=imageWidth+30;TB_HEIGHT=imageHeight+60;jQuery("#TB_window").append("<a href='' id='TB_ImageOff'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>"+"<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>"+TB_imageCount+TB_PrevHTML+TB_NextHTML+"</div></div><div id='TB_closeWindow'><button type='button' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><span class='tb-close-icon'></span></button></div>");jQuery("#TB_closeWindowButton").click(tb_remove);if(!(TB_PrevHTML==="")){function goPrev(){if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window'></div>");tb_show(TB_PrevCaption,TB_PrevURL,imageGroup);return false;}
jQuery("#TB_prev").click(goPrev);}
if(!(TB_NextHTML==="")){function goNext(){jQuery("#TB_window").remove();jQuery("body").append("<div id='TB_window'></div>");tb_show(TB_NextCaption,TB_NextURL,imageGroup);return false;}
jQuery("#TB_next").click(goNext);}
jQuery(document).bind('keydown.thickbox',function(e){if(e.which==27){tb_remove();}else if(e.which==190){if(!(TB_NextHTML=="")){jQuery(document).unbind('thickbox');goNext();}}else if(e.which==188){if(!(TB_PrevHTML=="")){jQuery(document).unbind('thickbox');goPrev();}}
return false;});tb_position();jQuery("#TB_load").remove();jQuery("#TB_ImageOff").click(tb_remove);jQuery("#TB_window").css({'visibility':'visible'});};imgPreloader.src=url;}else{var queryString=url.replace(/^[^\?]+\??/,'');var params=tb_parseQuery(queryString);TB_WIDTH=(params['width']*1)+30||630;TB_HEIGHT=(params['height']*1)+40||440;ajaxContentW=TB_WIDTH-30;ajaxContentH=TB_HEIGHT-45;if(url.indexOf('TB_iframe')!=-1){urlNoQuery=url.split('TB_');jQuery("#TB_iframeContent").remove();if(params['modal']!="true"){jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><button type='button' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><span class='tb-close-icon'></span></button></div></div><iframe frameborder='0' hspace='0' allowtransparency='true' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW+29)+"px;height:"+(ajaxContentH+17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");}else{jQuery("#TB_overlay").unbind();jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' allowtransparency='true' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW+29)+"px;height:"+(ajaxContentH+17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");}}else{if(jQuery("#TB_window").css("visibility")!="visible"){if(params['modal']!="true"){jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><button type='button' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><span class='tb-close-icon'></span></button></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");}else{jQuery("#TB_overlay").unbind();jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");}}else{jQuery("#TB_ajaxContent")[0].style.width=ajaxContentW+"px";jQuery("#TB_ajaxContent")[0].style.height=ajaxContentH+"px";jQuery("#TB_ajaxContent")[0].scrollTop=0;jQuery("#TB_ajaxWindowTitle").html(caption);}}
jQuery("#TB_closeWindowButton").click(tb_remove);if(url.indexOf('TB_inline')!=-1){jQuery("#TB_ajaxContent").append(jQuery('#'+params['inlineId']).children());jQuery("#TB_window").bind('tb_unload',function(){jQuery('#'+params['inlineId']).append(jQuery("#TB_ajaxContent").children());});tb_position();jQuery("#TB_load").remove();jQuery("#TB_window").css({'visibility':'visible'});}else if(url.indexOf('TB_iframe')!=-1){tb_position();jQuery("#TB_load").remove();jQuery("#TB_window").css({'visibility':'visible'});}else{var load_url=url;load_url+=-1===url.indexOf('?')?'?':'&';jQuery("#TB_ajaxContent").load(load_url+="random="+(new Date().getTime()),function(){tb_position();jQuery("#TB_load").remove();tb_init("#TB_ajaxContent a.thickbox");jQuery("#TB_window").css({'visibility':'visible'});});}}
if(!params['modal']){jQuery(document).bind('keydown.thickbox',function(e){if(e.which==27){tb_remove();return false;}});}
$closeBtn=jQuery('#TB_closeWindowButton');if($closeBtn.find('.tb-close-icon').is(':visible')){$closeBtn.focus();}}catch(e){}}
function tb_showIframe(){jQuery("#TB_load").remove();jQuery("#TB_window").css({'visibility':'visible'}).trigger('thickbox:iframe:loaded');}
function tb_remove(){jQuery("#TB_imageOff").unbind("click");jQuery("#TB_closeWindowButton").unbind("click");jQuery('#TB_window').fadeOut('fast',function(){jQuery('#TB_window, #TB_overlay, #TB_HideSelect').trigger('tb_unload').unbind().remove();jQuery('body').trigger('thickbox:removed');});jQuery('body').removeClass('modal-open');jQuery("#TB_load").remove();if(typeof document.body.style.maxHeight=="undefined"){jQuery("body","html").css({height:"auto",width:"auto"});jQuery("html").css("overflow","");}
jQuery(document).unbind('.thickbox');return false;}
function tb_position(){var isIE6=typeof document.body.style.maxHeight==="undefined";jQuery("#TB_window").css({marginLeft:'-'+parseInt((TB_WIDTH/2),10)+'px',width:TB_WIDTH+'px'});if(!isIE6){jQuery("#TB_window").css({marginTop:'-'+parseInt((TB_HEIGHT/2),10)+'px'});}}
function tb_parseQuery(query){var Params={};if(!query){return Params;}
var Pairs=query.split(/[;&]/);for(var i=0;i<Pairs.length;i++){var KeyVal=Pairs[i].split('=');if(!KeyVal||KeyVal.length!=2){continue;}
var key=unescape(KeyVal[0]);var val=unescape(KeyVal[1]);val=val.replace(/\+/g,' ');Params[key]=val;}
return Params;}
function tb_getPageSize(){var de=document.documentElement;var w=window.innerWidth||self.innerWidth||(de&&de.clientWidth)||document.body.clientWidth;var h=window.innerHeight||self.innerHeight||(de&&de.clientHeight)||document.body.clientHeight;arrayPageSize=[w,h];return arrayPageSize;}
function tb_detectMacXFF(){var userAgent=navigator.userAgent.toLowerCase();if(userAgent.indexOf('mac')!=-1&&userAgent.indexOf('firefox')!=-1){return true;}};
jQuery.noConflict(),function(a){a.fn.arfaly=function(e){function i(e,i){a("#arfaly-info-box-"+e).find(".arfaly-info-internal-content").html(i)}function t(e){p.config.debug&&(a(p.config.targetOutput).is(":visible")?a(".output-list-"+r.attr("id")).append("<li>"+e+"</li>"):(a(p.config.targetOutput).html('<br><ol class="output-list-'+r.attr("id")+'"><li>'+e+"</li></ol>"),a(p.config.targetOutput).delay(300).slideDown()))}function s(a){a.stopPropagation(),a.preventDefault(),r.find("#arfaly-filedrag").removeClass("hover").addClass("");var e=a.target.files||a.originalEvent.dataTransfer.files;l(e)}function l(e){var s=e;for(j=0;j<s.length;j++){if(d>=p.config.limitNumberofFiles)return t("You have exceed upload limit ("+d+") !"),!1;if(0!=s[j].length){var l=new FormData;l.append("SelectedFile",s[j]),l.append("action",p.config.action),l.append("closify-id",r.attr("closify-id")),l.append("closify-idx",r.attr("closify-idx")),l.append("fileIndx",d),l.append("nonce",p.config.nonce),j==s.length-1&&l.append("patch-finished","true"),0==j&&l.append("patch-started","true"),p.addFileItem(s[j].name,d);var o=p.beforeSubmit(s[j],d);if(null==n?a("#uploadItem-"+r.attr("id")+"-"+d).find("#mimePicture").addClass("closify-icon-file"):a("#uploadItem-"+r.attr("id")+"-"+d).find("#mimePicture").addClass(n),1==o.status){var f=new XMLHttpRequest;c[d]=f,c[d].index=d,c[d].cachedData=l,c[d].onreadystatechange=function(){if(4==this.readyState){a("#uploadItem-"+r.attr("id")+"-"+this.index).find(".arfaly-loading").css("display","block"),a("#uploadItem-"+r.attr("id")+"-"+this.index).find(".arfaly-ready").hide();try{var e=JSON.parse(this.response);"true"==e.status?(e.attid&&r.find("#file-"+this.index+"-"+r.attr("id")).val(e.attid),p.tagItemSuccess(this.index,!0,e.data),null!=e.newFileName&&a("#"+this.index+"-fileName").text(e.newFileName),null!=e.fullPath&&a("#preview-"+r.attr("id")+"-"+this.index).attr("link",e.fullPath),1==p.config.disablePostProgressAnimation&&(1==p.config.disablePostProgressAnimation&&r.find("#progress-style-"+this.index).addClass("arfaly-nostripes"),r.find("#progress-style-"+this.index).addClass("arfaly-nostripes")),p.config.successfulUpload(e)):(p.tagItemSuccess(this.index,!1,e.error),p.config.failedUpload(e),i(this.index,e.error))}catch(t){e={status:"error",msg:"Response string format is not a valid JSON: ["+this.responseText+"]"},p.tagItemSuccess(this.index,!1,e.msg)}}},c[d].upload.index=d,c[d].upload.addEventListener("progress",function(e){var i=e.loaded/e.total*100,t=this.index;a("#massUploadProgress-"+r.attr("id")+"-"+this.index).css("width",i+"%"),i>=100&&!p.config.disableRemovingItems&&setTimeout(function(){p.deleteItem(t)},p.config.delay)},!1),p.config.enforceInfo||(c[d].open(p.config.type,p.config.url),c[d].send(l)),d++}else p.tagItemSuccess(d,!1,o.responseText),d++}}return 0}function o(a,e,i){c[a].cachedData.append("title",e),c[a].cachedData.append("desc",i),c[a].open(p.config.type,p.config.url),c[a].send(c[a].cachedData),c[a]="invalid"}var n,r=this,d=0,c=[],f=new Asas({dataBits:8,codeBits:6,keyString:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",pad:"="}),p={init:function(){p.config=a.extend({allowedFileSize:10485760,delay:5e3,multi:!0,url:"processMultipleUploads.php",dataType:"json",limitNumberofFiles:10,isGuest:!0,enforceInfo:!1,enterTitleLbl:"Enter Upload Title",enterDescLbl:"Enter Upload Description",enterEmailLbl:"Enter your email",disablePreview:!1,enterName:"Enter your name",label:"Allowed file types are gif, jpg, and png.",debug:!1,dragDrop:!0,targetOutput:".output",type:"post",nonce:"",theme:"default",disablePostProgressAnimation:!0,disableRemovingItems:!0,backgroundColor:"",logoColor:"rgb(150, 155, 255)",textColor:"#DADADA",borderColor:"#DADADA",labelColor:"rgb(90, 90, 90)",progressBarColor:"orange",action:"itech_arfaly_submission",beforeSubmit:p.beforeSubmit,successfulUpload:p.successfulUpload,failedUpload:p.failedUpload,fileDeleted:p.fileDeleted},e),p.Setup(),a(p.config.targetOutput).hide()},Setup:function(){var a="",e="";p.config.multi&&(a="multiple"),"false"!=p.config.dragDrop&&(e="display:none");var i='<input type="hidden" name="action" value="itech_mass_upload_submission" />',t='<p class="arfaly-label" style="color:'+p.config.labelColor+'">'+p.config.label+"</p>",s='<div><div id="arfaly-filedrag" style="color: '+p.config.textColor+";border: 9px dashed "+p.config.borderColor+';"><span class="arfaly-showcase closify-icon-cloud-storage" style="color:'+p.config.logoColor+'"></span><br/>Drop files here</div><br/>'+t+"</div>",l='<input type="file" style="'+e+'" name="files[]" id="'+r.attr("id")+'-arfaly-files" '+a+"><br/>",o="<br/>",n='<div id="'+r.attr("id")+'-ListItem" class="arfaly-multi-images"></div>';r.addClass("arfaly-multiple-upload"),"false"!=p.config.dragDrop?r.html(i+s+l+n):r.html(i+l+o+t+n)},bytesToSize:function(a){var e=["Bytes","KB","MB","GB","TB"];if(0==a)return"0 Bytes";var i=parseInt(Math.floor(Math.log(a)/Math.log(1024)));return Math.round(a/Math.pow(1024,i),2)+" "+e[i]},successfulUpload:function(a){},failedUpload:function(a){},fileDeleted:function(e){e.fileIdx;a.ajax({url:p.config.url,type:"POST",data:e,success:function(a){t(a)}})},beforeSubmit:function(a,e){var i=[],t=navigator.userAgent.indexOf("Chrome")>-1,s=navigator.userAgent.indexOf("Safari")>-1;if(t&&s&&(s=!1),window.File&&window.FileReader&&window.FileList&&window.Blob){var l=a.size,o=a.type;switch(o){case"application/octet-stream":case"application/postscript":case"image/png":case"image/gif":case"image/jpeg":case"image/pjpeg":case"image/x-png":case"image/jpg":case"image/x-windows-bmp":case"image/bmp":case"image/tiff":case"image/x-tiff":case"image/svg+xml":n="closify-icon-photo";break;case"audio/aac":case"audio/mp4":case"audio/mp3":case"audio/ogg":case"audio/wav":case"audio/webm":n="closify-icon-music";break;case"video/mp4":case"video/ogg":case"video/webm":case"video/avi":case"video/mkv":case"video/x-matroska":n="closify-icon-video2";break;case"application/x-zip-compressed":case"application/zip":case"application/x-rar-compressed":n="closify-icon-wallet";break;default:n="closify-icon-file"}return l>p.config.allowedFileSize?(i.status=!1,i.responseText=p.bytesToSize(l)+": The file size has exceeded the limit ("+p.config.allowedFileSize/1024/1024+"MB) !",i):(i.status=!0,i)}return i.status=!1,i.responseText="Please upgrade your browser, because your current browser lacks some new features we need!",i},deleteItem:function(e){var i={"arfaly-id":r.attr("id"),command:"delete",arfalyfn:f.encode(r.find("#"+e+"-fileName").text()),fileIndx:e,action:p.config.action,nonce:p.config.nonce,raqmkh:f.encode(r.find("#file-"+e+"-"+r.attr("id")).val())};p.config.fileDeleted(i),a("#uploadItem-"+r.attr("id")+"-"+e).addClass("animated bounceOutRight"),setTimeout(function(i){a("#uploadItem-"+r.attr("id")+"-"+e).remove()},600)},addFileItem:function(e,i){var t="",s="";p.config.disablePreview||(t='<a rel="external" link="" id="preview-'+r.attr("id")+"-"+i+'" index="'+i+'" class="arfaly-preview"><span class="closify-icon-earth" title="Preview file"></span></a>',s='<a class="arfaly-button arfaly-preview noselect" index="'+i+'" >Preview</a>');var l='<input type="hidden" id="file-'+i+"-"+r.attr("id")+'" name="image-id[]" value="" />',n='<div id="arfaly-info-box-'+i+'" class="info-box noselect"><div class="arfaly-info-p"><a class="arfaly-close" index="'+i+'"><span class="arfaly-info-close closify-icon-delete"></span></a><div class="arfaly-info-internal-content">Everything going well so far!</div></div><div class="arfaly-pointer"></div></div>',d='<div class="clearfix" style="margin-bottom:10px"><input class="arfaly-input" type="text" name="arfaly-title" placeholder="'+p.config.enterTitleLbl+'" required/><br><textarea rows="2" class="arfaly-input" type="textarea" name="arfaly-desc" placeholder="'+p.config.enterDescLbl+'" required/><a class="arfaly-button arfaly-upload noselect" index="'+i+'">Upload</a><a class="arfaly-button arfaly-delete noselect" id="'+i+'">Delete</a>'+s+"</div>";p.config.enforceInfo||(d="");var f='<a class="info-icon" index="'+i+'"><span class="arfaly-info-icon closify-icon-info" ></span></a>',u='<a class="info-icon" index="'+i+'" title="Information Button"><span class="closify-icon-info-large"></span></a>',y='<div id="uploadItem-'+r.attr("id")+"-"+i+'" class="arfaly-default-theme"><div class="arfaly-oval"><span class="arfaly-ready closify-icon-plus" style="margin-top:34px;"></span><span class="arfaly-loading closify-icon-spinner"></span><div id="mass-item-success-'+r.attr("id")+"-"+i+'" class="notification-oval"><ul class="arfaly-oval-list-info" id="mass-item-oval-info-'+r.attr("id")+"-"+i+'"><li class="arfaly-tick-text" id="mass-item-success-text-'+r.attr("id")+"-"+i+'" style=";color:white;font-family:cursive;font-size:10px;color:white"></li></li></ul></div></div><div class="arfaly-list-div noselect" style="background-color:'+p.config.backgroundColor+'" >'+l+'<div><div class="arfaly-list-icon arfaly-left"><span id="mimePicture" class="icon" style="font-size:40px"></span></div><div class="progress-container arfaly-right"><div id="progress-style-'+i+'" class="arfaly-meter '+p.config.progressBarColor+' arfaly-right"><span id="massUploadProgress-'+r.attr("id")+"-"+i+'" style="width: 0%;" class="arfaly-span-progress"></span></div><div id="'+i+'-fileName" class="arfaly-filename">'+e+'</div><div class="arfaly-list-menu arfaly-right"><ul><li><a class="arfaly-delete" id="'+i+'"><span class="closify-icon-remove" title="Delete this file"></span></a>&nbsp;'+t+"</li></ul></div></div>"+f+"</div></div>"+d+"</div>",m='<div id="uploadItem-'+r.attr("id")+"-"+i+'" class="theme-1"><div class="arfaly-list-div noselect" style="background-color:'+p.config.backgroundColor+'">'+l+'<div><div class="progress-container arfaly-left"><div id="progress-style-'+i+'" class="arfaly-meter '+p.config.progressBarColor+' arfaly-left"><span id="massUploadProgress-'+r.attr("id")+"-"+i+'" style="width: 0%;" class="arfaly-span-progress"></span></div><div id="'+i+'-fileName" class="arfaly-filename">'+e+'</div></div><div class="arfaly-list-menu arfaly-right"><ul><li><a class="arfaly-delete" id="'+i+'"><span class="closify-icon-remove" title="Delete this file"></span></a>&nbsp;'+t+"&nbsp;"+u+'<div class="arfaly-oval"><span class="arfaly-ready closify-icon-plus"></span><span class="arfaly-loading closify-icon-spinner" style="display: none;"></span><div id="mass-item-success-'+r.attr("id")+"-"+i+'" class="notification-oval" style="margin-top: 1px"><ul class="arfaly-oval-list-info" id="mass-item-oval-info-'+r.attr("id")+"-"+i+'"></ul></div></div></li></ul></div><div class="arfaly-list-icon arfaly-right"><span id="mimePicture" class="icon" style="font-size:40px"></span></div></div></div>'+d+"</div>",g='<div id="uploadItem-'+r.attr("id")+"-"+i+'" class="theme-2"><div class="arfaly-list-div noselect" style="background-color:'+p.config.backgroundColor+'">'+l+'<div><div class="progress-container arfaly-left"><div id="progress-style-'+i+'" class="arfaly-meter '+p.config.progressBarColor+' arfaly-right"><span id="massUploadProgress-'+r.attr("id")+"-"+i+'" style="width: 0%;" class="arfaly-span-progress"></span></div><div id="'+i+'-fileName" class="arfaly-filename">'+e+'</div></div><div class="arfaly-list-menu arfaly-right"><ul><li><a class="arfaly-delete" id="'+i+'"><span class="closify-icon-remove" title="Delete this file"></span></a>&nbsp;'+t+'<a class="info-icon" index="'+i+'" title="Information Button"><span class="closify-icon-info-large"></span></a><div class="arfaly-oval"><span class="arfaly-ready closify-icon-plus"></span><span class="arfaly-loading closify-icon-spinner" style="display: none;"></span><div id="mass-item-success-'+r.attr("id")+"-"+i+'" class="notification-oval"><ul class="arfaly-oval-list-info" id="mass-item-oval-info-'+r.attr("id")+"-"+i+'"></ul></div></div></li></ul></div></div></div>'+d+"</div>",v=m;switch(p.config.theme){case"default":v=y;break;case"simplex":v=m;break;case"super-simplex":v=g;break;default:v=m}a("#"+r.attr("id")+"-ListItem").prepend(v),jQuery("body").prepend(n),p.config.enforceInfo||(a("#uploadItem-"+r.attr("id")+"-"+i).find(".arfaly-loading").css("display","block"),a("#uploadItem-"+r.attr("id")+"-"+i).find(".arfaly-ready").hide());var h=a("#uploadItem-"+r.attr("id")+"-"+i).find(".arfaly-oval").height()-a("#mass-item-success-"+r.attr("id")+"-"+i).height();a("#mass-item-success-"+r.attr("id")+"-"+i).css("margin-top",h/2+"px"),a("#uploadItem-"+r.attr("id")+"-"+i).find("a.arfaly-delete").click(function(){var e=confirm("Are you sure you want to delete the file?");if(e){var i=a(this).attr("id");p.deleteItem(i)}});var b,x;"default"==p.config.theme?(x=-35,b=25):(x=25,b=-100),a("#uploadItem-"+r.attr("id")+"-"+i).find("a.info-icon").click(function(e){a("#arfaly-info-box-"+i).css("top",e.pageY+x),a("#arfaly-info-box-"+i).css("left",e.pageX+b),a("#arfaly-info-box-"+i).slideDown()}),a("#arfaly-info-box-"+i).find("a.arfaly-close").click(function(e){var i=a(this).attr("index");a("#arfaly-info-box-"+i).slideUp()}),a(document).mouseup(function(e){var i=a(".info-box");i.is(e.target)||0!==i.has(e.target).length||i.hide()}),a("#uploadItem-"+r.attr("id")+"-"+i).find("a.arfaly-preview").click(function(){var e=a(this).attr("index");""!=a("#preview-"+r.attr("id")+"-"+e).attr("link")&&window.open(a("#preview-"+r.attr("id")+"-"+e).attr("link"),"_blank")}),p.config.enforceInfo&&a("#uploadItem-"+r.attr("id")+"-"+i).find("a.arfaly-upload").click(function(){var e=a(this).attr("index"),i=a("#uploadItem-"+r.attr("id")+"-"+e).find('input[name="arfaly-title"]'),t=a("#uploadItem-"+r.attr("id")+"-"+e).find('textarea[name="arfaly-desc"]'),s=i.val(),l=t.val();return"undefined"==typeof s||""==s?(a(i).focus(),!1):"undefined"==typeof l||""==l?(a(t).focus(),!1):void(null!=c[e]&&o(e,s,l))}),a("div.arfaly-list-div").click(function(a){a.preventDefault()})},tagItemSuccess:function(e,s,l){a("#uploadItem-"+r.attr("id")+"-"+e).find(".arfaly-loading").hide(),a("#uploadItem-"+r.attr("id")+"-"+e).find(".notification-oval").css("display","inline-block");var o;s?(a("#uploadItem-"+r.attr("id")+"-"+e).find(".arfaly-preview")&&a("#uploadItem-"+r.attr("id")+"-"+e).find(".arfaly-preview").fadeIn(),a("#uploadItem-"+r.attr("id")+"-"+e).find(".arfaly-delete").fadeIn(),o='<li class="closify-icon-tick center-icon" style="font-size:13px;color:white"></li>'):(o='<li class="closify-icon-times center-icon" style="font-size:13px;color:white"></li>',i(e,l)),"true"!=a("#mass-item-success-"+r.attr("id")+"-"+e).attr("updated")&&(a("#mass-item-oval-info-"+r.attr("id")+"-"+e).prepend(o),a("#mass-item-success-"+r.attr("id")+"-"+e).attr("title",l),a("#uploadItem-"+r.attr("id")+"-"+e).attr("title",l),a("#mass-item-success-"+r.attr("id")+"-"+e).addClass("animated "+(s?"flipNotificationSuccess":"flipNotificationError")),a("#mass-item-success-text-"+r.attr("id")+"-"+e).html(s?"Succeed":"Failed"),a("#mass-item-success-"+r.attr("id")+"-"+e).attr("updated","true"),t(l))},fileDragHover:function(a){a.stopPropagation(),a.preventDefault(),r.find("#arfaly-filedrag").removeClass("hover").addClass("dragover"==a.type?"hover":"")}};p.init();var u=r.find("#arfaly-filedrag");u.on("dragover",p.fileDragHover),u.on("dragleave",p.fileDragHover),u.on("drop",s),u.css("display","block"),u.click(function(){a("input[id="+r.attr("id")+"-arfaly-files]").click()}),this.find("input[type=file]").change(function(){l(this.files)})}}(jQuery);
(function(){"use strict";function i(){}function t(i,t){for(var e=i.length;e--;)if(i[e].listener===t)return e;return-1}var e=i.prototype;e.getListeners=function(i){var t,e,o=this._getEvents();if("object"==typeof i){t={};for(e in o)o.hasOwnProperty(e)&&i.test(e)&&(t[e]=o[e])}else t=o[i]||(o[i]=[]);return t},e.flattenListeners=function(i){var t,e=[];for(t=0;i.length>t;t+=1)e.push(i[t].listener);return e},e.getListenersAsObject=function(i){var t,e=this.getListeners(i);return e instanceof Array&&(t={},t[i]=e),t||e},e.addListener=function(i,e){var o,n=this.getListenersAsObject(i),s="object"==typeof e;for(o in n)n.hasOwnProperty(o)&&-1===t(n[o],e)&&n[o].push(s?e:{listener:e,once:!1});return this},e.on=e.addListener,e.addOnceListener=function(i,t){return this.addListener(i,{listener:t,once:!0})},e.once=e.addOnceListener,e.defineEvent=function(i){return this.getListeners(i),this},e.defineEvents=function(i){for(var t=0;i.length>t;t+=1)this.defineEvent(i[t]);return this},e.removeListener=function(i,e){var o,n,s=this.getListenersAsObject(i);for(n in s)s.hasOwnProperty(n)&&(o=t(s[n],e),-1!==o&&s[n].splice(o,1));return this},e.off=e.removeListener,e.addListeners=function(i,t){return this.manipulateListeners(!1,i,t)},e.removeListeners=function(i,t){return this.manipulateListeners(!0,i,t)},e.manipulateListeners=function(i,t,e){var o,n,s=i?this.removeListener:this.addListener,r=i?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(o=e.length;o--;)s.call(this,t,e[o]);else for(o in t)t.hasOwnProperty(o)&&(n=t[o])&&("function"==typeof n?s.call(this,o,n):r.call(this,o,n));return this},e.removeEvent=function(i){var t,e=typeof i,o=this._getEvents();if("string"===e)delete o[i];else if("object"===e)for(t in o)o.hasOwnProperty(t)&&i.test(t)&&delete o[t];else delete this._events;return this},e.emitEvent=function(i,t){var e,o,n,s,r=this.getListenersAsObject(i);for(n in r)if(r.hasOwnProperty(n))for(o=r[n].length;o--;)e=r[n][o],s=e.listener.apply(this,t||[]),(s===this._getOnceReturnValue()||e.once===!0)&&this.removeListener(i,r[n][o].listener);return this},e.trigger=e.emitEvent,e.emit=function(i){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(i,t)},e.setOnceReturnValue=function(i){return this._onceReturnValue=i,this},e._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},e._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:this.EventEmitter=i}).call(this),function(i){"use strict";var t=document.documentElement,e=function(){};t.addEventListener?e=function(i,t,e){i.addEventListener(t,e,!1)}:t.attachEvent&&(e=function(t,e,o){t[e+o]=o.handleEvent?function(){var t=i.event;t.target=t.target||t.srcElement,o.handleEvent.call(o,t)}:function(){var e=i.event;e.target=e.target||e.srcElement,o.call(t,e)},t.attachEvent("on"+e,t[e+o])});var o=function(){};t.removeEventListener?o=function(i,t,e){i.removeEventListener(t,e,!1)}:t.detachEvent&&(o=function(i,t,e){i.detachEvent("on"+t,i[t+e]);try{delete i[t+e]}catch(o){i[t+e]=void 0}});var n={bind:e,unbind:o};"function"==typeof define&&define.amd?define(n):i.eventie=n}(this),function(i){"use strict";function t(i,t){for(var e in t)i[e]=t[e];return i}function e(i){return"[object Array]"===c.call(i)}function o(i){var t=[];if(e(i))t=i;else if("number"==typeof i.length)for(var o=0,n=i.length;n>o;o++)t.push(i[o]);else t.push(i);return t}function n(i,e){function n(i,e,r){if(!(this instanceof n))return new n(i,e);"string"==typeof i&&(i=document.querySelectorAll(i)),this.elements=o(i),this.options=t({},this.options),"function"==typeof e?r=e:t(this.options,e),r&&this.on("always",r),this.getImages(),s&&(this.jqDeferred=new s.Deferred);var a=this;setTimeout(function(){a.check()})}function c(i){this.img=i}n.prototype=new i,n.prototype.options={},n.prototype.getImages=function(){this.images=[];for(var i=0,t=this.elements.length;t>i;i++){var e=this.elements[i];"IMG"===e.nodeName&&this.addImage(e);for(var o=e.querySelectorAll("img"),n=0,s=o.length;s>n;n++){var r=o[n];this.addImage(r)}}},n.prototype.addImage=function(i){var t=new c(i);this.images.push(t)},n.prototype.check=function(){function i(i,n){return t.options.debug&&a&&r.log("confirm",i,n),t.progress(i),e++,e===o&&t.complete(),!0}var t=this,e=0,o=this.images.length;if(this.hasAnyBroken=!1,!o)return void this.complete();for(var n=0;o>n;n++){var s=this.images[n];s.on("confirm",i),s.check()}},n.prototype.progress=function(i){this.hasAnyBroken=this.hasAnyBroken||!i.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,i),t.jqDeferred&&t.jqDeferred.notify(t,i)})},n.prototype.complete=function(){var i=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(i,t),t.emit("always",t),t.jqDeferred){var e=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[e](t)}})},s&&(s.fn.imagesLoaded=function(i,t){var e=new n(this,i,t);return e.jqDeferred.promise(s(this))});var f={};return c.prototype=new i,c.prototype.check=function(){var i=f[this.img.src];if(i)return void this.useCached(i);if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var t=this.proxyImage=new Image;e.bind(t,"load",this),e.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(i){if(i.isConfirmed)this.confirm(i.isLoaded,"cached was confirmed");else{var t=this;i.on("confirm",function(i){return t.confirm(i.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(i,t){this.isConfirmed=!0,this.isLoaded=i,this.emit("confirm",this,t)},c.prototype.handleEvent=function(i){var t="on"+i.type;this[t]&&this[t](i)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){e.unbind(this.proxyImage,"load",this),e.unbind(this.proxyImage,"error",this)},n}var s=i.jQuery,r=i.console,a=void 0!==r,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],n):i.imagesLoaded=n(i.EventEmitter,i.eventie)}(window);var Asas=function(i){var t,e,o,n,s,r,a,c,f,d,l,h,g;t=function(){var t,l,h;for(e=i.pad||"",o=i.dataBits,n=i.codeBits,s=i.keyString,r=i.arrayData,l=Math.max(o,n),h=0,a=[],t=0;l>t;t+=1)a.push(h),h+=h+1;f=h,c=o/d(o,n)},d=function(i,t){for(var e;0!==t;)e=t,t=i%t,i=e;return i},l=function(i,t,o,n){var d,l,h,g,u,p,m,y;for(y=function(i){n?r?m.push(i):m.push(String.fromCharCode(i)):m.push(s.charAt(i))},u=0,p=0,m=[],l=i.length,d=0;l>d;d+=1){if(p+=t,n){if(h=i.charAt(d),g=s.indexOf(h),h===e)break;if(0>g)throw'the character "'+h+'" is not a member of '+s}else if(g=r?i[d]:i.charCodeAt(d),(g|f)!==f)throw g+" is outside the range 0-"+f;for(u=u<<t|g;p>=o;)p-=o,y(u>>p),u&=a[p]}if(!n&&p>0)for(y(u<<o-p);m.length%c>0;)m.push(e);return r&&n?m:m.join("")},h=function(i){return l(i,o,n,!1)},g=function(i){return l(i,n,o,!0)},this.encode=h,this.decode=g,t()};window.document.onload=function(i){},jQuery.noConflict(),function(i){i.fn.closify=function(t){function e(i){if(0==i.length)return!1;var t=new FormData;t.append(n.attr("id")+"ImageFile",i.files[0]),t.append("w",c.config.data.w),t.append("h",c.config.data.h),t.append("quality",c.config.quality),t.append("dynamicStorage",c.config.dynamicStorage),t.append("id",c.config.data.id),t.append("closify-id",n.attr("closify-id")),t.append("action",c.config.action),t.append("nonce",c.config.nonce),t.append("ImageName",n.attr("id")+"ImageFile");var e=c.beforeSubmit(i.files[0]);if(!e)return!1;var o=new XMLHttpRequest;return request=o,request.onreadystatechange=function(){if(4==this.readyState){var i=JSON.parse(this.response);c.closifySuccess(i)}},request.upload.addEventListener("progress",c.uploadProgress,!1),request.open(c.config.type,c.config.url),request.send(t),!0}var o,n=this,s=!1,r=20,a=new Asas({dataBits:8,codeBits:6,keyString:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",pad:"="}),c={init:function(e,o,a,f){c.config=i.extend({allowedFileSize:1048576,url:"processupload.php",loadingImageUrl:"images/ajax-loader.gif",backgroundImageUrl:"images/arrow-upload-icon.png",imgBaseUrl:"uploads",dataType:"json",hardTrim:!0,quality:1,attid:null,id:""+i(e).attr("id"),startWithThisImg:"",dynamicStorage:!1,targetOutput:"#output-"+i(e).attr("id"),type:"post",circularCanvas:!1,enforceInfo:!1,enterTitleLbl:"Enter Upload Title",enterDescLbl:"Enter Upload Description",progress:!1,position:{top:"0",left:"0"},topLeftCorner:!0,topRightCorner:!0,bottomLeftCorner:!0,bottomRightCorner:!0,responsive:!1,disableMenu:!1,nonce:"",data:{w:o,h:a,id:i(e).attr("id")},menuBackgroundColor:"#595858",action:"itech_closify_submission",menuTextColor:"white",shadowBackgroundColor:"black",progressBarColor:"green",element:e,error:c.closifyError,success:c.closifySuccess,uploadProgress:c.uploadProgress,beforeSubmit:c.beforeSubmit,finishUploading:c.finishUploading,finishCropping:c.finishCropping},t),c.config.data.quality=c.config.quality,n.width(c.config.data.w),n.height(c.config.data.h);var d=parseInt(o);s=c.config.targetOutput!="#output-"+i(e).attr("id")?!0:!1,c.setup(),c.config.responsive?(n.find("div.closify-container").css("width","100%"),n.find("div.closify-container").css("height","100%"),n.find("div.closify-container").css("max-width",o+"px"),n.find("div.closify-container").css("max-height",a+"px")):(n.find("div.closify-container").css("width",o+"px"),n.find("div.closify-container").css("height",a+"px"),n.css("width",d+"px"),n.css("height",parseInt(a)+r+"px"),n.find("div.closify-widget").css("width",d+"px")),n.find("ul.closify-side-bar").hide(),i("#progress-"+n.attr("id")).hide()},bytesToSize:function(i){var t=["Bytes","KB","MB","GB","TB"];if(0==i)return"0 Bytes";var e=parseInt(Math.floor(Math.log(i)/Math.log(1024)));return Math.round(i/Math.pow(1024,e),2)+" "+t[e]},finishUploading:function(i){},finishCropping:function(i){},setup:function(){var i="",t="",e="";c.config.disableMenu&&(t='style="display:none"'),(c.config.data.w<=300||c.config.data.h<=250)&&(e="font-size:26px !important"),c.config.circularCanvas&&(c.config.topLeftCorner&&c.config.topRightCorner&&c.config.bottomLeftCorner&&c.config.bottomRigthCorner&&(i+="border-radius: 50%;",i+="-webkit-border-radius: 50%;",i+="-moz-border-radius: 50%;",c.config.topLeftCorner=c.config.topRightCorner=c.config.bottomLeftCorner=c.config.bottomRigthCorner=!1),c.config.topLeftCorner&&(i+="-webkit-border-top-left-radius: 50%;",i+="-moz-border-radius-topleft: 50%;",i+="border-top-left-radius: 50%;"),c.config.topRightCorner&&(i+="-webkit-border-top-right-radius: 50%;",i+="-moz-border-radius-topright: 50%;",i+="border-top-right-radius: 50%;"),c.config.bottomLeftCorner&&(i+="-webkit-border-bottom-left-radius: 50%;",i+="-moz-border-radius-bottomleft: 50%;",i+="border-bottom-left-radius: 50%;"),c.config.bottomRightCorner&&(i+="-webkit-border-bottom-right-radius: 50%;",i+="-moz-border-radius-bottomright: 50%;",i+="border-bottom-right-radius: 50%;"));var o='<input type="hidden" name="action" value="itech_closify_submission" />',s='<div class="closify-widget" style="height:100%">',r='<ul class="noselect closify-shadow-side-bar" style="color:'+c.config.menuTextColor+'"><li><a class="save" href="" onclick="return false;"><span title="Save changes" class="closify-icon-checkmark" style="opacity: 0.8;background-color:'+c.config.menuBackgroundColor+";color:"+c.config.menuTextColor+'"></span></a></li></ul>',a='<ul class="noselect closify-shadow-side-bar" style="color:'+c.config.menuTextColor+'"><li><a class="initialMenu" href="" onclick="return false;"><span title="Change image" class="noselect closify-icon-th-menu" style="background-color:'+c.config.menuBackgroundColor+";color:"+c.config.menuTextColor+'"></span></a></li></ul>',f='<div id="closify-view2" class="noselect closify-view" style="display:none">',d='<div id="closify-view1" class="noselect closify-view" '+t+">",l='<div class="closify-loading closify-spinner" style="display:none;"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>',h="",g="";c.config.enforceInfo&&(h='<div id="'+n.attr("id")+'-form-box" class="closify-info-form" style="display:none;"><b class="closify-heading">Please describe your upload:</b><input class="arfaly-input" type="text" name="closify-title" placeholder="'+c.config.enterTitleLbl+'" required/><br><textarea rows="2" class="arfaly-input" type="textarea" name="closify-desc" placeholder="'+c.config.enterDescLbl+'" required/><a class="arfaly-button closify-complete" href="">Complete</a>',g='<li><a class="thickbox closify-add-info" href="#TB_inline?width=280&height=250&inlineId='+n.attr("id")+'-form-box"><span title="Add info" class="closify-icon-info" style="opacity: 0.8;margin-bottom: 10px;background-color:'+c.config.menuBackgroundColor+";color:"+c.config.menuTextColor+";"+e+'"></span></a></li>');var u='<ul class="noselect closify-shadow-side-bar" style="color:'+c.config.menuTextColor+'"><li><a class="closify-minimize" href="" onclick="return false;"><span title="Minimize menu" class="closify-icon-minus" style="opacity: 0.8;margin-bottom: 10px;background-color:'+c.config.menuBackgroundColor+";color:"+c.config.menuTextColor+";"+e+'"></span></a></li><li><a class="closify-upload" href="" onclick="return false;"><span title="Upload an image" class="closify-icon-pictures" style="opacity: 0.8;margin-bottom: 10px;background-color:'+c.config.menuBackgroundColor+";color:"+c.config.menuTextColor+";"+e+'"></span></a></li><li><a class="closify-delete" href="" onclick="return false;"><span title="Delete" class="closify-icon-trashcan" style="opacity: 0.8;margin-bottom: 10px;background-color:'+c.config.menuBackgroundColor+";color:"+c.config.menuTextColor+";"+e+'"></span></a></li>'+g+"</ul>",p=f+r+"</div>"+d+a+'</div><div id="closify-shadow-box" style="display:none;opacity:0.7;background-color:'+c.config.shadowBackgroundColor+' !important" class="noselect closify-outer-box"><div class="closify-middle-box"><div class="closify-inner-box noselect" style="display:none"><div>'+u+'<div class="closify-shadow-notify noselect" id="output-'+n.attr("id")+'">Upload Your Image</div></div></div></div></div>',m='<div class="noselect closify-container" style="'+i+'">'+p,y='<input type="file" accept="image/*" style="display:none" id="'+n.attr("id")+'ImageFile" name="'+n.attr("id")+'ImageFile"/>',v='<input type="hidden" id="image-id-'+n.attr("id")+'" name="image-id" value="" />',w="</div>",b='<div id="progress-'+n.attr("id")+'" style="height: 10px;width:'+c.config.data.w+'px" class="closify-meter  closify-'+c.config.progressBarColor+'"><span style="width: 0%" id="span-progress-'+n.attr("id")+'"></span></div>',x="</div>"+h;if(c.config.circularCanvas?(n.html(o+s+m+l+y+v+w+x),n.find("ul.closify-side-bar li").css("display","block")):(n.html(o+s+m+l+y+v+w+x),n.find("ul.closify-side-bar").css("position","absolute")),c.config.progress&&n.after(b),""!=c.config.startWithThisImg?(n.find("#image-id-"+n.attr("id")).val(c.config.attid),c.config.element.find("div.closify-container").append("<img class='closify-image' src='"+c.config.startWithThisImg+"' style='width:100%;position:absolute;top:"+c.config.position.top+";left:"+c.config.position.left+"'>").hide().fadeIn(500)):(c.showShadowBox(),c.hideInitialView()),c.config.dynamicStorage){var C=c.config.element.find("div.closify-container");C.append("<img class='closify-image' src='"+c.config.imgBaseUrl+"/"+n.attr("id")+".jpg' style='position:absolute;top:"+c.config.position.top+";left:"+c.config.position.left+";'>").hide().fadeIn(500);var k=imagesLoaded(C);k.on("fail",function(i){C.find(".closify-image").remove(),console.log("Failed to load image!")})}},uploadProgress:function(t){var e=t.loaded/t.total*100;c.config.progress&&(i("#progress-"+n.attr("id")).show(),i("#span-progress-"+n.attr("id")).css("width",e+"%"),e>=100&&setTimeout(function(t){i("#progress-"+n.attr("id")).hide()},2e3))},hasPicture:function(){c.config.responsive&&(width=c.config.data.w,height=c.config.data.h,o=width/height,boxSize=51.2,cssWidth=boxSize+"vw",cssMaxwidth=o*boxSize+"vh",cssHeight=boxSize+"vh",cssMaxHeight=boxSize/o+"vw",n.css("width",cssWidth),n.css("max-width",cssMaxwidth),n.css("height",cssHeight),n.css("max-height",cssMaxHeight))},hideSaveView:function(){n.find("#closify-view2 ul").fadeOut(),n.find("#closify-view2").slideUp()},showSaveView:function(){n.find("#closify-view2").slideDown(),n.find("#closify-view2 ul").fadeIn()},hideInitialView:function(){n.find("#closify-view1 ul").fadeOut(),n.find("#closify-view1").slideUp()},showInitialView:function(){n.find("#closify-view1").slideDown(),n.find("#closify-view1 ul").fadeIn()},hideShadowBox:function(){n.find(".closify-inner-box").hide(),n.find("#closify-shadow-box").slideUp()},showShadowBox:function(){n.find("#closify-shadow-box").slideDown(function(){n.find(".closify-inner-box").fadeIn(500)})},closifyError:function(t){n.find("img.closify-loading").is(":visible")&&n.find("img.closify-loading").toggle(),c.hideSaveView(),c.showShadowBox(),i("#progress-"+n.attr("id")).hide(),c.printOutput(t.responseText,6e3)},printOutput:function(t,e){e||(e=2e3),s?i(c.config.targetOutput).delay(e).slideDown():n.find("div.closify-shadow-notify").slideDown(),i(c.config.targetOutput).html(t),s?i(c.config.targetOutput).delay(e).slideUp():n.find("div.closify-shadow-notify").delay(e).slideUp()},closifySuccess:function(i){var t=new Date;return"false"==i.msg?(c.printOutput("Error:"+i.error),n.find("img.closify-loading").toggle(),void n.find("img.closify-image").remove()):(c.config.finishUploading(i),c.printOutput("Image submitted!"),n.find("img.closify-loading").toggle(),n.find("img.closify-image").remove(),n.find("div.closify-container").append("<img class='closify-image' src='"+i.imgSrc+"?"+t.getTime()+"' style='position:absolute;top:0;left:0;max-width:"+i.width+"px;max-height:"+i.height+"px;'>").hide().fadeIn(500),void n.find("img.closify-image").dragncrop({drag:function(i,t){c.config.position=t.offset},centered:!0,overlay:!0,overflow:!0,instruction:!0}))},beforeSubmit:function(){var t=navigator.userAgent.indexOf("Chrome")>-1,e=navigator.userAgent.indexOf("Safari")>-1;if(t&&e&&(e=!1),c.config.progress&&(i("#progress-"+n.attr("id")).show(),i("#span-progress-"+n.attr("id")).css("width","0")),!(window.File&&window.FileReader&&window.FileList&&window.Blob))return e?!0:(c.closifyError("Please upgrade your browser, because your current browser lacks some new features we need!"),!1);if(!i("#"+n.attr("id")+"ImageFile").val())return c.closifyError("There is no image input"),!1;var o=i("#"+n.attr("id")+"ImageFile")[0].files[0].size,s=i("#"+n.attr("id")+"ImageFile")[0].files[0].type;switch(s){case"image/png":case"image/gif":case"image/jpeg":case"image/pjpeg":break;default:return c.closifyError("<b>"+s+"</b> Unsupported file type!"),!1}if(o>c.config.allowedFileSize){var r=[];return r.responseText="<b>"+c.bytesToSize(o)+"</b> The image size is too big! <br />Please try to reduce the size of your photo using an image editor.",c.closifyError(r),!1}return i(c.config.targetOutput).html(""),!0}};return c.init(this,this.attr("width"),this.attr("height")),n.find("a.closify-upload").click(function(){i("input[id="+n.attr("id")+"ImageFile]").click()}),c.config.enforceInfo&&n.find("a.closify-complete").click(function(){return self.parent.tb_remove(),!1}),n.find("a.initialMenu").click(function(){c.showShadowBox(),c.hideInitialView()}),n.find("a.closify-minimize").click(function(){c.hideShadowBox(),c.showInitialView()}),n.find("a.closify-delete").click(function(){var t=confirm("Are you sure you want to delete the file?");t&&i.ajax({url:c.config.url,type:"POST",data:{id:c.config.id,command:"delete",action:"itech_closify_submission",nonce:c.config.nonce,raqmkh:a.encode(c.config.attid+""),"closify-idx":n.attr("closify-idx")},success:function(i){n.width(n.attr("width")),n.height(n.attr("height")),n.css("max-width","none"),n.css("max-height","none"),c.printOutput("Image has been deleted!"),n.find("img.closify-image").hasClass("ui-draggable")&&n.find("img.closify-image").dragncrop("destroy"),n.find("img.closify-image").remove(),n.find("div.closify-container").attr("class","closify-container closify-cursor")}})}),n.find("a.position").click(function(){n.find("img.closify-image").dragncrop({drag:function(i,t){c.config.position=t.offset},overlay:!0,overflow:!0,instruction:!0})}),n.find("a.save").click(function(){var t=null,e=null;if(c.config.enforceInfo){var o=n.find('input[name="closify-title"]'),s=n.find('textarea[name="closify-desc"]');if(t=o.val(),e=s.val(),"undefined"==typeof t||""==t)return tb_show("Input","#TB_inline?width=280&height=250&inlineId="+n.attr("id")+"-form-box",null),i(o).focus(),!1;if("undefined"==typeof e||""==e)return tb_show("Input","#TB_inline?width=280&height=250&inlineId="+n.attr("id")+"-form-box",null),i(s).focus(),!1}var r={top:n.find("img.closify-image").css("top"),left:n.find("img.closify-image").css("left"),action:"itech_closify_submission","closify-id":n.attr("closify-id"),"closify-idx":n.attr("closify-idx"),nonce:c.config.nonce};c.config.enforceInfo&&(r.title=t,r.desc=e),c.config.hardTrim&&(r.quality=c.config.quality,r.hardTrim=c.config.hardTrim,r.width=c.config.data.w,r.height=c.config.data.h,r.src=n.find("img.closify-image").attr("src"),r.dynamicStorage=c.config.dynamicStorage),i.ajax({url:c.config.url,type:"POST",dataType:"json",data:r,success:function(i){i.attid&&(n.find("#image-id-"+n.attr("id")).val(i.attid),c.config.attid=i.attid),"true"==i.msg?(c.printOutput("Image saved!"),c.hideSaveView(),c.showInitialView(),c.config.finishCropping(i),n.find("img.closify-image").dragncrop("destroy"),n.find("div.closify-container").removeClass("closify-cursor"),c.config.hardTrim&&(n.find("img.closify-image").attr("src",""),n.find("img.closify-image").attr("src",i.imgSrc),n.find("img.closify-image").hide(),n.find("img.closify-image").css("top",0),n.find("img.closify-image").css("left",0),n.find("img.closify-image").css("width","100%"),n.find("img.closify-image").css("height","100%"),n.find("img.closify-image").delay(400).fadeIn())):(c.printOutput("Error:"+i.error),n.find("img.closify-image").dragncrop("destroy"),n.find("div.closify-container").removeClass("closify-cursor"))}})}),i("#"+n.attr("id")+"ImageFile").change(function(){n.find("img.closify-image").remove(),n.find("img.closify-loading").is(":visible")||(n.find("img.closify-loading").toggle(),n.find(".closify-container").css("background-image","none")),c.showSaveView(),c.hideShadowBox();var i=document.getElementById(n.attr("id")+"ImageFile");e(i)}),this}}(jQuery),function(i,t,e,o){i.widget("lukaszfiszer.dragncrop",{classes:{container:"dragncrop",containerActive:"dragncrop-dragging",containment:"dragncrop-containment",horizontal:"dragncrop-horizontal",vertical:"dragncrop-vertical",overflow:"dragncrop-overflow",overlay:"dragncrop-overlay",instruction:"dragncrop-instruction",instructionHide:"dragncrop-instruction-autohide",instructionText:"dragncrop-instruction-text"},options:{position:{},centered:!1,overflow:!1,overlay:!1,instruction:!1,instructionText:"Drag to crop",instructionHideOnHover:!0},move:function(i){var t,e;if(!i)throw new Error("position object must be provided");if(i.offset===o&&i.dimension===o)throw new Error('position object must contain "left" or "top" props');"x"===this.axis&&i.offset?(t=-i.offset[0]*this.offsetX,this.element.css("left",t),this.element.css("top",0)):"x"===this.axis&&i.dimension?(t=-i.dimension[0]*this.width,this.element.css("left",t),this.element.css("top",0)):"y"===this.axis&&i.offset?(e=-i.offset[1]*this.offsetY,this.element.css("left",0),this.element.css("top",e)):"y"===this.axis&&i.dimension&&(e=-i.dimension[1]*this.height,this.element.css("left",0),this.element.css("top",e)),this._setPosition({left:t,top:e})},_create:function(){this.container=i(this.element.parent()),this.container.addClass(this.classes.container),(this.options.overflow||this.options.overlay)&&i(this.container).addClass(this.classes.overflow);var t=this.element.imagesLoaded(),e=this;t.done(function(){e._setAxis.call(e)&&(e._getDimensions.call(e),e._makeDraggable.call(e),e.options.loaded&&e.options.loaded())})},_destroy:function(){this.draggable&&this.draggable.draggable("destroy"),this.container.find("."+this.classes.containment+",."+this.classes.overlay+",."+this.classes.instruction).remove(),this.element.removeClass(this.classes.horizontal).removeClass(this.classes.vertical)},getPosition:function(){return{offset:[-this.position.left/this.offsetX||0,-this.position.top/this.offsetY||0],dimension:[-this.position.left/this.width||0,-this.position.top/this.height||0]}},_getDimensions:function(){this.width=this.element.width(),this.height=this.element.height(),this.containerWidth=this.container.width(),this.containerHeight=this.container.height(),this.offsetX=this.width-this.containerWidth,this.offsetY=this.height-this.containerHeight},_setAxis:function(){return this.photoRatio=this.element.width()/this.element.height(),this.containerRatio=this.container.width()/this.container.height(),this.photoRatio>this.containerRatio?(this.axis="x",i(this.element).addClass(this.classes.horizontal),!0):this.photoRatio<this.containerRatio?(this.axis="y",i(this.element).addClass(this.classes.vertical),!0):!1},_setPosition:function(i){this.position=i},_makeDraggable:function(){var i=this.axis,t=this.options.position,e=this._insertContainment();this.draggable=this.element.draggable({axis:i,containment:e});this._on({dragstart:function(i,t){this._dragStart(i,t),this.container.addClass(this.classes.containerActive)},drag:function(i,t){this._dragging(i,t),this.options.overlay&&this._adaptOverlay(t)},dragstop:function(i,t){this._dragStop(i,t),this.container.removeClass(this.classes.containerActive)}}),this.options.overlay&&this._insertOverlay(),this.options.instruction&&this._insertInstruction(),this.options.centered&&(t={offset:[.5,.5]}),t&&(t.offset||t.coordinates)?this.move(t):this._setPosition({left:0,top:0})},_dragStart:function(i,t){this._setPosition(t.position),this._trigger("start",i,this.getPosition())},_dragging:function(i,t){this._setPosition(t.position),this._trigger("drag",i,this.getPosition())},_dragStop:function(i,t){this._setPosition(t.position),this._trigger("stop",i,this.getPosition())},_insertOverlay:function(){var t=i("<div>").addClass(this.classes.overlay);return this.overlay=t.insertBefore(this.element),this.overlay},_adaptOverlay:function(i){"x"===this.axis?this.overlay.css("left",i.position.left).css("border-left-width",-i.position.left).css("right",-i.position.left-this.offsetX).css("border-right-width",i.position.left+this.offsetX):"y"===this.axis&&this.overlay.css("top",i.position.top).css("border-top-width",-i.position.top).css("bottom",-i.position.top-this.offsetY).css("border-bottom-width",i.position.top+this.offsetY)},_insertContainment:function(){var t=-this.offsetY,e=-this.offsetY,o=-this.offsetX,n=-this.offsetX,s=i("<div/>").addClass(this.classes.containment).css("top",t).css("bottom",e).css("left",o).css("right",n).css("position","absolute");return this.containment=s.insertBefore(this.element),this.containment},_insertInstruction:function(){return this.instruction=i("<div>").addClass(this.classes.instruction),this.options.instructionHideOnHover&&this.instruction.addClass(this.classes.instructionHide),this.instruction.append(i("<span></span>").text(this.options.instructionText).addClass(this.classes.instructionText)),this.instruction.insertAfter(this.element),this.instruction}})}(jQuery,window,document);
!function(t,i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof exports?module.exports=i(require("jquery")):t.lightbox=i(t.jQuery)}(this,function(t){function i(i){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=t.extend({},this.constructor.defaults),this.option(i)}return i.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:500,fitImagesInViewport:!0,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1},i.prototype.option=function(i){t.extend(this.options,i)},i.prototype.imageCountLabel=function(t,i){return this.options.albumLabel.replace(/%1/g,t).replace(/%2/g,i)},i.prototype.init=function(){this.enable(),this.build()},i.prototype.enable=function(){var i=this;t("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(e){return i.start(t(e.currentTarget)),!1})},i.prototype.build=function(){var i=this;t('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(t("body")),this.$lightbox=t("#lightbox"),this.$overlay=t("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.containerTopPadding=parseInt(this.$container.css("padding-top"),10),this.containerRightPadding=parseInt(this.$container.css("padding-right"),10),this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10),this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10),this.$overlay.hide().on("click",function(){return i.end(),!1}),this.$lightbox.hide().on("click",function(e){return"lightbox"===t(e.target).attr("id")&&i.end(),!1}),this.$outerContainer.on("click",function(e){return"lightbox"===t(e.target).attr("id")&&i.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===i.currentImageIndex?i.changeImage(i.album.length-1):i.changeImage(i.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return i.currentImageIndex===i.album.length-1?i.changeImage(0):i.changeImage(i.currentImageIndex+1),!1}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return i.end(),!1})},i.prototype.start=function(i){function e(t){n.album.push({link:t.attr("href"),title:t.attr("data-title")||t.attr("title")})}var n=this,a=t(window);a.on("resize",t.proxy(this.sizeOverlay,this)),t("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var o,s=0,h=i.attr("data-lightbox");if(h){o=t(i.prop("tagName")+'[data-lightbox="'+h+'"]');for(var r=0;r<o.length;r=++r)e(t(o[r])),o[r]===i[0]&&(s=r)}else if("lightbox"===i.attr("rel"))e(i);else{o=t(i.prop("tagName")+'[rel="'+i.attr("rel")+'"]');for(var l=0;l<o.length;l=++l)e(t(o[l])),o[l]===i[0]&&(s=l)}var d=a.scrollTop()+this.options.positionFromTop,g=a.scrollLeft();this.$lightbox.css({top:d+"px",left:g+"px"}).fadeIn(this.options.fadeDuration),this.changeImage(s)},i.prototype.changeImage=function(i){var e=this;this.disableKeyboardNav();var n=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),t(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var a=new Image;a.onload=function(){var o,s,h,r,l,d,g;n.attr("src",e.album[i].link),o=t(a),n.width(a.width),n.height(a.height),e.options.fitImagesInViewport&&(g=t(window).width(),d=t(window).height(),l=g-e.containerLeftPadding-e.containerRightPadding-20,r=d-e.containerTopPadding-e.containerBottomPadding-120,e.options.maxWidth&&e.options.maxWidth<l&&(l=e.options.maxWidth),e.options.maxHeight&&e.options.maxHeight<l&&(r=e.options.maxHeight),(a.width>l||a.height>r)&&(a.width/l>a.height/r?(h=l,s=parseInt(a.height/(a.width/h),10),n.width(h),n.height(s)):(s=r,h=parseInt(a.width/(a.height/s),10),n.width(h),n.height(s)))),e.sizeContainer(n.width(),n.height())},a.src=this.album[i].link,this.currentImageIndex=i},i.prototype.sizeOverlay=function(){this.$overlay.width(t(window).width()).height(t(document).height())},i.prototype.sizeContainer=function(t,i){function e(){n.$lightbox.find(".lb-dataContainer").width(s),n.$lightbox.find(".lb-prevLink").height(h),n.$lightbox.find(".lb-nextLink").height(h),n.showImage()}var n=this,a=this.$outerContainer.outerWidth(),o=this.$outerContainer.outerHeight(),s=t+this.containerLeftPadding+this.containerRightPadding,h=i+this.containerTopPadding+this.containerBottomPadding;a!==s||o!==h?this.$outerContainer.animate({width:s,height:h},this.options.resizeDuration,"swing",function(){e()}):e()},i.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},i.prototype.updateNav=function(){var t=!1;try{document.createEvent("TouchEvent"),t=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(i){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(t&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),t&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),t&&this.$lightbox.find(".lb-next").css("opacity","1"))))},i.prototype.updateDetails=function(){var i=this;if("undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(i){void 0!==t(this).attr("target")?window.open(t(this).attr("href"),t(this).attr("target")):location.href=t(this).attr("href")}),this.album.length>1&&this.options.showImageNumberLabel){var e=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(e).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return i.sizeOverlay()})},i.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var t=new Image;t.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var i=new Image;i.src=this.album[this.currentImageIndex-1].link}},i.prototype.enableKeyboardNav=function(){t(document).on("keyup.keyboard",t.proxy(this.keyboardAction,this))},i.prototype.disableKeyboardNav=function(){t(document).off(".keyboard")},i.prototype.keyboardAction=function(t){var i=27,e=37,n=39,a=t.keyCode,o=String.fromCharCode(a).toLowerCase();a===i||o.match(/x|o|c/)?this.end():"p"===o||a===e?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===o||a===n)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},i.prototype.end=function(){this.disableKeyboardNav(),t(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),t("select, object, embed").css({visibility:"visible"})},new i});
!function(t){t.fn.collagePlus=function(e){function i(e,i,n,o){for(var d=n.padding*(e.length-1)+e.length*e[0][3],s=n.albumWidth-d,l=s/(i-d),r=d,c=i<n.albumWidth?!0:!1,h=0;h<e.length;h++){var u=t(e[h][0]),f=Math.floor(e[h][1]*l),g=Math.floor(e[h][2]*l),p=!!(h<e.length-1);n.allowPartialLastRow===!0&&c===!0&&(f=e[h][1],g=e[h][2]),r+=f,!p&&r<n.albumWidth&&(n.allowPartialLastRow===!0&&c===!0?f=f:f+=n.albumWidth-r),f--;var m=u.is("img")?u:u.find("img");m.width(f),u.is("img")||u.width(f+e[h][3]),m.height(g),u.is("img")||u.height(g+e[h][4]),a(u,p,n),m.one("load",function(t){return function(){if("default"==n.effect)t.animate({opacity:"1"},{duration:n.fadeSpeed});else{if("vertical"==n.direction)var e=10>=o?o:10;else var e=9>=h?h+1:10;t.removeClass(function(t,e){return(e.match(/\beffect-\S+/g)||[]).join(" ")}),t.addClass(n.effect),t.addClass("effect-duration-"+e)}}}(u)).each(function(){this.complete&&t(this).trigger("load")})}}function a(t,e,i){var a={"margin-bottom":i.padding+"px","margin-right":e?i.padding+"px":"0px",display:i.display,"vertical-align":"bottom",overflow:"hidden"};return t.css(a)}function n(e){$img=t(e);var i=new Array;return i.w=parseFloat($img.css("border-left-width"))+parseFloat($img.css("border-right-width")),i.h=parseFloat($img.css("border-top-width"))+parseFloat($img.css("border-bottom-width")),i}return this.each(function(){var a=0,o=[],d=1,s=t(this);t.fn.collagePlus.defaults.albumWidth=s.width(),t.fn.collagePlus.defaults.padding=parseFloat(s.css("padding-left")),t.fn.collagePlus.defaults.images=s.children();var l=t.extend({},t.fn.collagePlus.defaults,e);l.images.each(function(e){var s=t(this),r=s.is("img")?s:t(this).find("img"),c="undefined"!=typeof r.data("width")?r.data("width"):r.width(),h="undefined"!=typeof r.data("height")?r.data("height"):r.height(),u=n(r);r.data("width",c),r.data("height",h);var f=Math.ceil(c/h*l.targetHeight),g=Math.ceil(l.targetHeight);o.push([this,f,g,u.w,u.h]),a+=f+u.w+l.padding,a>l.albumWidth&&0!=o.length&&(i(o,a-l.padding,l,d),delete a,delete o,a=0,o=[],d+=1),l.images.length-1==e&&0!=o.length&&(i(o,a,l,d),delete a,delete o,a=0,o=[],d+=1)})})},t.fn.collagePlus.defaults={targetHeight:400,fadeSpeed:"fast",display:"inline-block",effect:"default",direction:"vertical",allowPartialLastRow:!1}}(jQuery),function(t){t.fn.removeWhitespace=function(){return this.contents().filter(function(){return 3==this.nodeType&&!/\S/.test(this.nodeValue)}).remove(),this}}(jQuery),function(t){t.fn.collageCaption=function(e){var i={images:t(this).children(),background:"black",opacity:"0.5",speed:100,cssClass:"Caption"},a=t.extend({},i,e);return this.each(function(){return a.images.each(function(e){var i=t(this);if("undefined"!=typeof i.data("caption")){var n='<div class="'+a.cssClass+'" style="position:relative;"><div class="Caption_Background" style="background-color:'+a.background+";opacity:"+a.opacity+';position:relative;top:0;"></div><div class="Caption_Content" style="position:relative;">'+i.data("caption")+"</div></div>";i.append(n);var o=i.find("."+a.cssClass),d=i.find(".Caption_Background"),s=i.find(".Caption_Content"),l=o.height();d.height(l),s.css("top","-"+l+"px"),i.bind({mouseenter:function(t){o.animate({top:-1*l},{duration:a.speed,queue:!1})},mouseleave:function(t){o.animate({top:0},{duration:a.speed,queue:!1})}})}}),this})}}(jQuery);;window.Modernizr=function(a,b,c){function D(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return C(d,b)}function C(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function B(a,b){return!!~(""+a).indexOf(b)}function A(a,b){return typeof a===b}function z(a,b){return y(n.join(a+";")+(b||""))}function y(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={},q={},r={},s=[],t=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},u=function(b){if(a.matchMedia)return matchMedia(b).matches;var c;t("@media "+b+" { #"+i+" { position: absolute; } }",function(b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"});return c},v,w={}.hasOwnProperty,x;!A(w,c)&&!A(w.call,c)?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],c)},p.rgba=function(){y("background-color:rgba(150,255,150,.5)");return B(k.backgroundColor,"rgba")},p.boxshadow=function(){return D("boxShadow")},p.csstransitions=function(){return D("transitionProperty")};for(var E in p)x(p,E)&&(v=E.toLowerCase(),e[v]=p[E](),s.push((e[v]?"":"no-")+v));e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},y(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=n,e._domPrefixes=o,e.mq=u,e.testProp=function(a){return C([a])},e.testAllProps=D,e.testStyles=t,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+s.join(" "):"");return e}(this,this.document),function(a,b){function u(){r(!0)}a.respond={},respond.update=function(){},respond.mediaQueriesSupported=b;if(!b){var c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=j.getElementsByTagName("link"),l=[],m=function(){var b=k,c=b.length,d=0,e,f,g,i;for(;d<c;d++)e=b[d],f=e.href,g=e.media,i=e.rel&&e.rel.toLowerCase()==="stylesheet",!!f&&i&&!h[f]&&(!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f)||f.replace(RegExp.$1,"").split("/")[0]===a.location.host?l.push({href:f,media:g}):h[f]=!0);n()},n=function(){if(l.length){var a=l.shift();s(a.href,function(b){o(b,a.href,a.media),h[a.href]=!0,n()})}},o=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),g=d&&d.length||0,b=b.substring(0,b.lastIndexOf("/")),h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c,j=0,k,l,m,n,o;b.length&&(b+="/"),i&&(g=1);for(;j<g;j++){k=0,i?(l=c,f.push(h(a))):(l=d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),n=l.split(","),o=n.length;for(;k<o;k++)m=n[k],e.push({media:m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:f.length-1,minw:m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)})}r()},p,q,r=function(a){var b="clientWidth",h=d[b],l=c.compatMode==="CSS1Compat"&&h||c.body[b]||h,m={},n=c.createDocumentFragment(),o=k[k.length-1],s=(new Date).getTime();if(a&&p&&s-p<i)clearTimeout(q),q=setTimeout(r,i);else{p=s;for(var t in e){var u=e[t];if(!u.minw&&!u.maxw||(!u.minw||u.minw&&l>=u.minw)&&(!u.maxw||u.maxw&&l<=u.maxw))m[u.media]||(m[u.media]=[]),m[u.media].push(f[u.rules])}for(var t in g)g[t]&&g[t].parentNode===j&&j.removeChild(g[t]);for(var t in m){var v=c.createElement("style"),w=m[t].join("\n");v.type="text/css",v.media=t,v.styleSheet?v.styleSheet.cssText=w:v.appendChild(c.createTextNode(w)),n.appendChild(v),g.push(v)}j.insertBefore(n,o.nextSibling)}},s=function(a,b){var c=t();if(!!c){c.open("GET",a,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status==200||c.status==304)&&b(c.responseText)};if(c.readyState==4)return;c.send()}},t=function(){var a=!1,b=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],c=b.length;while(c--){try{a=b[c]()}catch(d){continue}break}return function(){return a}}();m(),respond.update=m,a.addEventListener?a.addEventListener("resize",u,!1):a.attachEvent&&a.attachEvent("onresize",u)}}(this,Modernizr.mq("only all")),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length-++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};!function(t,i,n,s){var e=function(s,e){this.elem=s,this.$elem=t(s),this.options=e,this.metadata=this.$elem.data("plugin-options"),this.$win=t(i),this.sections={},this.didScroll=!1,this.$doc=t(n),this.docHeight=this.$doc.height()};e.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){return this.config=t.extend({},this.defaults,this.options,this.metadata),this.$nav=this.$elem.find(this.config.navItems),""!==this.config.filter&&(this.$nav=this.$nav.filter(this.config.filter)),this.$nav.on("click.onePageNav",t.proxy(this.handleClick,this)),this.getPositions(),this.bindInterval(),this.$win.on("resize.onePageNav",t.proxy(this.getPositions,this)),this},adjustNav:function(t,i){t.$elem.find("."+t.config.currentClass).removeClass(t.config.currentClass),i.addClass(t.config.currentClass)},bindInterval:function(){var t,i=this;i.$win.on("scroll.onePageNav",function(){i.didScroll=!0}),i.t=setInterval(function(){t=i.$doc.height(),i.didScroll&&(i.didScroll=!1,i.scrollChange()),t!==i.docHeight&&(i.docHeight=t,i.getPositions())},250)},getHash:function(t){return t.attr("href").split("#")[1]},getPositions:function(){var i,n,s,e=this;e.$nav.each(function(){i=e.getHash(t(this)),s=t("#"+i),s.length&&(n=s.offset().top,e.sections[i]=Math.round(n))})},getSection:function(t){var i=null,n=Math.round(this.$win.height()*this.config.scrollThreshold);for(var s in this.sections)this.sections[s]-n<t&&(i=s);return i},handleClick:function(n){var s=this,e=t(n.currentTarget),o=e.parent(),a="#"+s.getHash(e);o.hasClass(s.config.currentClass)||(s.config.begin&&s.config.begin(),s.adjustNav(s,o),s.unbindInterval(),s.scrollTo(a,function(){s.config.changeHash&&(i.location.hash=a),s.bindInterval(),s.config.end&&s.config.end()})),n.preventDefault()},scrollChange:function(){var t,i=this.$win.scrollTop(),n=this.getSection(i);null!==n&&(t=this.$elem.find('a[href$="#'+n+'"]').parent(),t.hasClass(this.config.currentClass)||(this.adjustNav(this,t),this.config.scrollChange&&this.config.scrollChange(t)))},scrollTo:function(i,n){var s=t(i).offset().top;t("html, body").animate({scrollTop:s-this.config.scrollOffset},this.config.scrollSpeed,this.config.easing,n)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},e.defaults=e.prototype.defaults,t.fn.onePageNav=function(t){return this.each(function(){new e(this,t).init()})}}(jQuery,window,document);"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,o){var i={init:function(e,o){var i=this;i.$elem=t(o),i.options=t.extend({},t.fn.owlCarousel.options,i.$elem.data(),e),i.userOptions=e,i.loadContent()},loadContent:function(){function e(t){var e,o="";if("function"==typeof i.options.jsonSuccess)i.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(o+=t.owl[e].item);i.$elem.html(o)}i.logIn()}var o,i=this;"function"==typeof i.options.beforeInit&&i.options.beforeInit.apply(this,[i.$elem]),"string"==typeof i.options.jsonPath?(o=i.options.jsonPath,t.getJSON(o,e)):i.logIn()},logIn:function(){var t=this;t.$elem.data({"owl-originalStyles":t.$elem.attr("style"),"owl-originalClasses":t.$elem.attr("class")}),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible=null,t.setVars()},setVars:function(){var t=this;return 0===t.$elem.children().length?!1:(t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),void t.onStartup())},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),t.options.transitionStyle!==!1&&t.transitionTypes(t.options.transitionStyle),t.options.autoPlay===!0&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;t.options.lazyLoad===!0&&t.lazyLoad(),t.options.autoHeight===!0&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(){var t=this;e.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;return t.$elem.is(":visible")!==!1?!1:(t.$elem.css({opacity:0}),e.clearInterval(t.autoPlayInterval),e.clearInterval(t.checkVisible),void(t.checkVisible=e.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),e.clearInterval(t.checkVisible))},500)))},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),o=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),o||t.$elem.addClass(t.options.theme)},updateItems:function(){var e,o,i=this;if(i.options.responsive===!1)return!1;if(i.options.singleItem===!0)return i.options.items=i.orignalItems=1,i.options.itemsCustom=!1,i.options.itemsDesktop=!1,i.options.itemsDesktopSmall=!1,i.options.itemsTablet=!1,i.options.itemsTabletSmall=!1,i.options.itemsMobile=!1,!1;if(e=t(i.options.responsiveBaseWidth).width(),e>(i.options.itemsDesktop[0]||i.orignalItems)&&(i.options.items=i.orignalItems),i.options.itemsCustom!==!1)for(i.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),o=0;o<i.options.itemsCustom.length;o+=1)i.options.itemsCustom[o][0]<=e&&(i.options.items=i.options.itemsCustom[o][1]);else e<=i.options.itemsDesktop[0]&&i.options.itemsDesktop!==!1&&(i.options.items=i.options.itemsDesktop[1]),e<=i.options.itemsDesktopSmall[0]&&i.options.itemsDesktopSmall!==!1&&(i.options.items=i.options.itemsDesktopSmall[1]),e<=i.options.itemsTablet[0]&&i.options.itemsTablet!==!1&&(i.options.items=i.options.itemsTablet[1]),e<=i.options.itemsTabletSmall[0]&&i.options.itemsTabletSmall!==!1&&(i.options.items=i.options.itemsTabletSmall[1]),e<=i.options.itemsMobile[0]&&i.options.itemsMobile!==!1&&(i.options.items=i.options.itemsMobile[1]);i.options.items>i.itemsAmount&&i.options.itemsScaleUp===!0&&(i.options.items=i.itemsAmount)},response:function(){var o,i,n=this;return n.options.responsive!==!0?!1:(i=t(e).width(),n.resizer=function(){t(e).width()!==i&&(n.options.autoPlay!==!1&&e.clearInterval(n.autoPlayInterval),e.clearTimeout(o),o=e.setTimeout(function(){i=t(e).width(),n.updateVars()},n.options.responsiveRefreshRate))},void t(e).resize(n.resizer))},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),t.options.autoPlay!==!1&&t.checkAp()},appendItemsSizes:function(){var e=this,o=0,i=e.itemsAmount-e.options.items;e.$owlItems.each(function(n){var s=t(this);s.css({width:e.itemWidth}).data("owl-item",Number(n)),(n%e.options.items===0||n===i)&&(n>i||(o+=1)),s.data("owl-roundPages",o)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(t.maximumItem=0,e=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var e,o,i,n=this,s=0,a=0;for(n.positionsInArray=[0],n.pagesInArray=[],e=0;e<n.itemsAmount;e+=1)a+=n.itemWidth,n.positionsInArray.push(-a),n.options.scrollPerPage===!0&&(o=t(n.$owlItems[e]),i=o.data("owl-roundPages"),i!==s&&(n.pagesInArray[s]=n.positionsInArray[e],s=i))},buildControls:function(){var e=this;(e.options.navigation===!0||e.options.pagination===!0)&&(e.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)),e.options.pagination===!0&&e.buildPagination(),e.options.navigation===!0&&e.buildButtons()},buildButtons:function(){var e=this,o=t('<div class="owl-buttons"/>');e.owlControls.append(o),e.buttonPrev=t("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),o.append(e.buttonPrev).append(e.buttonNext),o.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),o.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(o){o.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(o){o.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)})},updatePagination:function(){var e,o,i,n,s,a,r=this;if(r.options.pagination===!1)return!1;for(r.paginationWrapper.html(""),e=0,o=r.itemsAmount-r.itemsAmount%r.options.items,n=0;n<r.itemsAmount;n+=1)n%r.options.items===0&&(e+=1,o===n&&(i=r.itemsAmount-r.options.items),s=t("<div/>",{"class":"owl-page"}),a=t("<span></span>",{text:r.options.paginationNumbers===!0?e:"","class":r.options.paginationNumbers===!0?"owl-numbers":""}),s.append(a),s.data("owl-page",o===n?i:n),s.data("owl-roundPages",e),r.paginationWrapper.append(s));r.checkPagination()},checkPagination:function(){var e=this;return e.options.pagination===!1?!1:void e.paginationWrapper.find(".owl-page").each(function(){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))})},checkNavigation:function(){var t=this;return t.options.navigation===!1?!1:void(t.options.rewindNav===!1&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled"))))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){var t=this;t.owlControls&&t.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem>e.maximumItem+(e.options.scrollPerPage===!0?e.options.items-1:0)){if(e.options.rewindNav!==!0)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(e.options.scrollPerPage===!0&&e.currentItem>0&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem<0){if(e.options.rewindNav!==!0)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,o,i){var n,s=this;return s.isTransition?!1:("function"==typeof s.options.beforeMove&&s.options.beforeMove.apply(this,[s.$elem]),t>=s.maximumItem?t=s.maximumItem:0>=t&&(t=0),s.currentItem=s.owl.currentItem=t,s.options.transitionStyle!==!1&&"drag"!==i&&1===s.options.items&&s.browser.support3d===!0?(s.swapSpeed(0),s.browser.support3d===!0?s.transition3d(s.positionsInArray[t]):s.css2slide(s.positionsInArray[t],1),s.afterGo(),s.singleItemTransition(),!1):(n=s.positionsInArray[t],s.browser.support3d===!0?(s.isCss3Finish=!1,o===!0?(s.swapSpeed("paginationSpeed"),e.setTimeout(function(){s.isCss3Finish=!0},s.options.paginationSpeed)):"rewind"===o?(s.swapSpeed(s.options.rewindSpeed),e.setTimeout(function(){s.isCss3Finish=!0},s.options.rewindSpeed)):(s.swapSpeed("slideSpeed"),e.setTimeout(function(){s.isCss3Finish=!0},s.options.slideSpeed)),s.transition3d(n)):o===!0?s.css2slide(n,s.options.paginationSpeed):"rewind"===o?s.css2slide(n,s.options.rewindSpeed):s.css2slide(n,s.options.slideSpeed),void s.afterGo()))},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:0>=t&&(t=0),e.swapSpeed(0),e.browser.support3d===!0?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),t.options.autoPlay!==!1&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){var t=this;t.apStatus="stop",e.clearInterval(t.autoPlayInterval)},checkAp:function(){var t=this;"stop"!==t.apStatus&&t.play()},play:function(){var t=this;return t.apStatus="play",t.options.autoPlay===!1?!1:(e.clearInterval(t.autoPlayInterval),void(t.autoPlayInterval=e.setInterval(function(){t.next(!0)},t.options.autoPlay)))},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){var e=this;e.$owlWrapper.css(e.doTranslate(t))},css2move:function(t){var e=this;e.$owlWrapper.css({left:t})},css2slide:function(t,e){var o=this;o.isCssFinish=!1,o.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||o.options.slideSpeed,complete:function(){o.isCssFinish=!0}})},checkBrowser:function(){var t,i,n,s,a=this,r="translate3d(0px, 0px, 0px)",l=o.createElement("div");l.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r,t=/translate3d\(0px, 0px, 0px\)/g,i=l.style.cssText.match(t),n=null!==i&&i.length>=1,s="ontouchstart"in e||e.navigator.msMaxTouchPoints,a.browser={support3d:n,isTouch:s}},moveEvents:function(){var t=this;(t.options.mouseDrag!==!1||t.options.touchDrag!==!1)&&(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},t.options.mouseDrag===!0&&t.options.touchDrag===!0?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:t.options.mouseDrag===!1&&t.options.touchDrag===!0?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:t.options.mouseDrag===!0&&t.options.touchDrag===!1&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){var e=this;e.$elem.on("dragstart.owl",function(t){t.preventDefault()}),e.$elem.on("mousedown.disableTextSelect",function(e){return t(e.target).is("input, textarea, select, option")})},gestures:function(){function i(t){if(void 0!==t.touches)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(void 0===t.touches){if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY};if(void 0===t.pageX)return{x:t.clientX,y:t.clientY}}}function n(e){"on"===e?(t(o).on(l.ev_types.move,a),t(o).on(l.ev_types.end,r)):"off"===e&&(t(o).off(l.ev_types.move),t(o).off(l.ev_types.end))}function s(o){var s,a=o.originalEvent||o||e.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(l.isCssFinish===!1&&!l.options.dragBeforeAnimFinish)return!1;if(l.isCss3Finish===!1&&!l.options.dragBeforeAnimFinish)return!1;l.options.autoPlay!==!1&&e.clearInterval(l.autoPlayInterval),l.browser.isTouch===!0||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,t(this).css(l.removeTransition()),s=t(this).position(),p.relativePos=s.left,p.offsetX=i(a).x-s.left,p.offsetY=i(a).y-s.top,n("on"),p.sliding=!1,p.targetElement=a.target||a.srcElement}}function a(n){var s,a,r=n.originalEvent||n||e.event;l.newPosX=i(r).x-p.offsetX,l.newPosY=i(r).y-p.offsetY,l.newRelativeX=l.newPosX-p.relativePos,"function"==typeof l.options.startDragging&&p.dragging!==!0&&0!==l.newRelativeX&&(p.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&l.browser.isTouch===!0&&(void 0!==r.preventDefault?r.preventDefault():r.returnValue=!1,p.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&p.sliding===!1&&t(o).off("touchmove.owl"),s=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,s()),a()),l.browser.support3d===!0?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function r(o){var i,s,a,r=o.originalEvent||o||e.event;r.target=r.target||r.srcElement,p.dragging=!1,l.browser.isTouch!==!0&&l.$owlWrapper.removeClass("grabbing"),l.dragDirection=l.owl.dragDirection=l.newRelativeX<0?"left":"right",0!==l.newRelativeX&&(i=l.getNewPosition(),l.goTo(i,!1,"drag"),p.targetElement===r.target&&l.browser.isTouch!==!0&&(t(r.target).on("click.disable",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(e.target).off("click.disable")}),s=t._data(r.target,"events").click,a=s.pop(),s.splice(0,0,a))),n("off")}var l=this,p={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",s)},getNewPosition:function(){var t=this,e=t.closestItem();return e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var e=this,o=e.options.scrollPerPage===!0?e.pagesInArray:e.positionsInArray,i=e.newPosX,n=null;return t.each(o,function(s,a){i-e.itemWidth/20>o[s+1]&&i-e.itemWidth/20<a&&"left"===e.moveDirection()?(n=a,e.currentItem=e.options.scrollPerPage===!0?t.inArray(n,e.positionsInArray):s):i+e.itemWidth/20<a&&i+e.itemWidth/20>(o[s+1]||o[s]-e.itemWidth)&&"right"===e.moveDirection()&&(e.options.scrollPerPage===!0?(n=o[s+1]||o[o.length-1],e.currentItem=t.inArray(n,e.positionsInArray)):(n=o[s+1],e.currentItem=s+1))}),e.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",function(){t.next()}),t.$elem.on("owl.prev",function(){t.prev()}),t.$elem.on("owl.play",function(e,o){t.options.autoPlay=o,t.play(),t.hoverStatus="play"}),t.$elem.on("owl.stop",function(){t.stop(),t.hoverStatus="stop"}),t.$elem.on("owl.goTo",function(e,o){t.goTo(o)}),t.$elem.on("owl.jumpTo",function(e,o){t.jumpTo(o)})},stopOnHover:function(){var t=this;t.options.stopOnHover===!0&&t.browser.isTouch!==!0&&t.options.autoPlay!==!1&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var e,o,i,n,s,a=this;if(a.options.lazyLoad===!1)return!1;for(e=0;e<a.itemsAmount;e+=1)o=t(a.$owlItems[e]),"loaded"!==o.data("owl-loaded")&&(i=o.data("owl-item"),n=o.find(".lazyOwl"),"string"==typeof n.data("src")?(void 0===o.data("owl-loaded")&&(n.hide(),o.addClass("loading").data("owl-loaded","checked")),s=a.options.lazyFollow===!0?i>=a.currentItem:!0,s&&i<a.currentItem+a.options.items&&n.length&&n.each(function(){a.lazyPreload(o,t(this))})):o.data("owl-loaded","loaded"))},lazyPreload:function(t,o){function i(){t.data("owl-loaded","loaded").removeClass("loading"),o.removeAttr("data-src"),"fade"===a.options.lazyEffect?o.fadeIn(400):o.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function n(){r+=1,a.completeImg(o.get(0))||s===!0?i():100>=r?e.setTimeout(n,100):i()}var s,a=this,r=0;"DIV"===o.prop("tagName")?(o.css("background-image","url("+o.data("src")+")"),s=!0):o[0].src=o.data("src"),n()},autoHeight:function(){function o(){var o=t(s.$owlItems[s.currentItem]).height();s.wrapperOuter.css("height",o+"px"),s.wrapperOuter.hasClass("autoHeight")||e.setTimeout(function(){s.wrapperOuter.addClass("autoHeight")},0)}function i(){n+=1,s.completeImg(a.get(0))?o():100>=n?e.setTimeout(i,100):s.wrapperOuter.css("height","")}var n,s=this,a=t(s.$owlItems[s.currentItem]).find("img");void 0!==a.get(0)?(n=0,i()):o()},completeImg:function(t){var e;return t.complete?(e=typeof t.naturalWidth,"undefined"!==e&&0===t.naturalWidth?!1:!0):!1},onVisibleItems:function(){var e,o=this;for(o.options.addClassActive===!0&&o.$owlItems.removeClass("active"),o.visibleItems=[],e=o.currentItem;e<o.currentItem+o.options.items;e+=1)o.visibleItems.push(e),o.options.addClassActive===!0&&t(o.$owlItems[e]).addClass("active");o.owl.visibleItems=o.visibleItems},transitionTypes:function(t){var e=this;e.outClass="owl-"+t+"-out",e.inClass="owl-"+t+"-in"},singleItemTransition:function(){function t(t){return{position:"relative",left:t+"px"}}var e=this,o=e.outClass,i=e.inClass,n=e.$owlItems.eq(e.currentItem),s=e.$owlItems.eq(e.prevItem),a=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],r=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":r+"px","-moz-perspective-origin":r+"px","perspective-origin":r+"px"}),s.css(t(a,10)).addClass(o).on(l,function(){e.endPrev=!0,s.off(l),e.clearTransStyle(s,o)}),n.addClass(i).on(l,function(){e.endCurrent=!0,n.off(l),e.clearTransStyle(n,i)})},clearTransStyle:function(t,e){var o=this;t.css({position:"",left:""}).removeClass(e),o.endPrev&&o.endCurrent&&(o.$owlWrapper.removeClass("owl-origin"),o.endPrev=!1,o.endCurrent=!1,o.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){var i=this;i.$elem.off(".owl owl mousedown.disableTextSelect"),t(o).off(".owl owl"),t(e).off("resize",i.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr({style:t.$elem.data("owl-originalStyles")||"","class":t.$elem.data("owl-originalClasses")})},destroy:function(){var t=this;t.stop(),e.clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(e){var o=this,i=t.extend({},o.userOptions,e);o.unWrap(),o.init(i,o.$elem)},addItem:function(t,e){var o,i=this;return t?0===i.$elem.children().length?(i.$elem.append(t),i.setVars(),!1):(i.unWrap(),o=void 0===e||-1===e?-1:e,o>=i.$userItems.length||-1===o?i.$userItems.eq(-1).after(t):i.$userItems.eq(o).before(t),void i.setVars()):!1},removeItem:function(t){var e,o=this;return 0===o.$elem.children().length?!1:(e=void 0===t||-1===t?-1:t,o.unWrap(),o.$userItems.eq(e).remove(),void o.setVars())}};t.fn.owlCarousel=function(e){return this.each(function(){if(t(this).data("owl-init")===!0)return!1;t(this).data("owl-init",!0);var o=Object.create(i);o.init(e,this),t.data(this,"owlCarousel",o)})},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);
/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function(a,b,c,d){function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="stellar",g={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},h={scroll:{getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)},getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)}},position:{getLeft:function(a){return-1*parseInt(a.css("left"),10)},getTop:function(a){return-1*parseInt(a.css("top"),10)}},margin:{getLeft:function(a){return-1*parseInt(a.css("margin-left"),10)},getTop:function(a){return-1*parseInt(a.css("margin-top"),10)}},transform:{getLeft:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[5],10):0}}},i={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[k]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},j=function(){var b,c=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,d=a("script")[0].style,e="";for(b in d)if(c.test(b)){e=b.match(c)[0];break}return"WebkitOpacity"in d&&(e="Webkit"),"KhtmlOpacity"in d&&(e="Khtml"),function(a){return e+(e.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),k=j("transform"),l=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,m=l?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},n=l?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},o=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)};e.prototype={init:function(){this.options.name=f+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this,b=h[a.options.scrollProperty];this._getScrollLeft=function(){return b.getLeft(a.$scrollElement)},this._getScrollTop=function(){return b.getTop(a.$scrollElement)}},_defineSetters:function(){var b=this,c=h[b.options.scrollProperty],d=i[b.options.positionProperty],e=c.setLeft,f=c.setTop;this._setScrollLeft="function"==typeof e?function(a){e(b.$scrollElement,a)}:a.noop,this._setScrollTop="function"==typeof f?function(a){f(b.$scrollElement,a)}:a.noop,this._setPosition=d.setPosition||function(a,c,e,f,g){b.options.horizontalScrolling&&d.setLeft(a,c,e),b.options.verticalScrolling&&d.setTop(a,f,g)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},refresh:function(c){var d=this,e=d._getScrollLeft(),f=d._getScrollTop();c&&c.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).load(function(){var a=d._getScrollLeft(),b=d._getScrollTop();d._setScrollLeft(a+1),d._setScrollTop(b+1),d._setScrollLeft(a),d._setScrollTop(b)}),this._setScrollLeft(e),this._setScrollTop(f)},_detectViewport:function(){var a=this.$viewportElement.offset(),b=null!==a&&a!==d;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=b?a.top:0,this.viewportOffsetLeft=b?a.left:0},_findParticles:function(){{var b=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var c,e,f,g,h,i,j,k,l,m=a(this),n=0,o=0,p=0,q=0;if(m.data("stellar-elementIsActive")){if(m.data("stellar-elementIsActive")!==this)return}else m.data("stellar-elementIsActive",this);b.options.showElement(m),m.data("stellar-startingLeft")?(m.css("left",m.data("stellar-startingLeft")),m.css("top",m.data("stellar-startingTop"))):(m.data("stellar-startingLeft",m.css("left")),m.data("stellar-startingTop",m.css("top"))),f=m.position().left,g=m.position().top,h="auto"===m.css("margin-left")?0:parseInt(m.css("margin-left"),10),i="auto"===m.css("margin-top")?0:parseInt(m.css("margin-top"),10),k=m.offset().left-h,l=m.offset().top-i,m.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(n=p,o=q,j=b,!1):(p+=b.position().left,void(q+=b.position().top))}),c=m.data("stellar-horizontal-offset")!==d?m.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,e=m.data("stellar-vertical-offset")!==d?m.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:m,$offsetParent:j,isFixed:"fixed"===m.css("position"),horizontalOffset:c,verticalOffset:e,startingPositionLeft:f,startingPositionTop:g,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:n,parentOffsetTop:o,stellarRatio:m.data("stellar-ratio")!==d?m.data("stellar-ratio"):1,width:m.outerWidth(!0),height:m.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},_handleScrollEvent:function(){var a=this,b=!1,c=function(){a._repositionElements(),b=!1},d=function(){b||(o(c),b=!0)};this.$scrollElement.bind("scroll."+this.name,d),d()},_startAnimationLoop:function(){var a=this;this._animationLoop=function(){o(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[f]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+f,null)}):void 0},a[f]=function(){var c=a(b);return c.stellar.apply(c,Array.prototype.slice.call(arguments,0))},a[f].scrollProperty=h,a[f].positionProperty=i,b.Stellar=e}(jQuery,this,document);(function(){function t(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(!window.addEventListener)return;var e=window.StyleFix={link:function(t){try{if(t.rel!=="stylesheet"||t.hasAttribute("data-noprefix"))return}catch(n){return}var r=t.href||t.getAttribute("data-href"),i=r.replace(/[^\/]+$/,""),s=(/^[a-z]{3,10}:/.exec(i)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],u=/^([^?]*)\??/.exec(r)[1],a=t.parentNode,f=new XMLHttpRequest,l;f.onreadystatechange=function(){f.readyState===4&&l()};l=function(){var n=f.responseText;if(n&&t.parentNode&&(!f.status||f.status<400||f.status>600)){n=e.fix(n,!0,t);if(i){n=n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,n){return/^([a-z]{3,10}:|#)/i.test(n)?e:/^\/\//.test(n)?'url("'+s+n+'")':/^\//.test(n)?'url("'+o+n+'")':/^\?/.test(n)?'url("'+u+n+'")':'url("'+i+n+'")'});var r=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");n=n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+r,"gi"),"$1")}var l=document.createElement("style");l.textContent=n;l.media=t.media;l.disabled=t.disabled;l.setAttribute("data-href",t.getAttribute("href"));a.insertBefore(l,t);a.removeChild(t);l.media=t.media}};try{f.open("GET",r);f.send(null)}catch(n){if(typeof XDomainRequest!="undefined"){f=new XDomainRequest;f.onerror=f.onprogress=function(){};f.onload=l;f.open("GET",r);f.send(null)}}t.setAttribute("data-inprogress","")},styleElement:function(t){if(t.hasAttribute("data-noprefix"))return;var n=t.disabled;t.textContent=e.fix(t.textContent,!0,t);t.disabled=n},styleAttribute:function(t){var n=t.getAttribute("style");n=e.fix(n,!1,t);t.setAttribute("style",n)},process:function(){t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);t("style").forEach(StyleFix.styleElement);t("[style]").forEach(StyleFix.styleAttribute)},register:function(t,n){(e.fixers=e.fixers||[]).splice(n===undefined?e.fixers.length:n,0,t)},fix:function(t,n,r){for(var i=0;i<e.fixers.length;i++)t=e.fixers[i](t,n,r)||t;return t},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};(function(){setTimeout(function(){t('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()})();(function(e){function t(e,t,r,i,s){e=n[e];if(e.length){var o=RegExp(t+"("+e.join("|")+")"+r,"gi");s=s.replace(o,i)}return s}if(!window.StyleFix||!window.getComputedStyle)return;var n=window.PrefixFree={prefixCSS:function(e,r,i){var s=n.prefix;n.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(e,t,n,r){return t+(n||"")+"linear-gradient("+(90-r)+"deg"}));e=t("functions","(\\s|:|,)","\\s*\\(","$1"+s+"$2(",e);e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+s+"$2$3",e);e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+s+"$2:",e);if(n.properties.length){var o=RegExp("\\b("+n.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(o,s+"$1")},e)}if(r){e=t("selectors","","\\b",n.prefixSelector,e);e=t("atrules","@","\\b","@"+s+"$1",e)}e=e.replace(RegExp("-"+s,"g"),"-");e=e.replace(/-\*-(?=[a-z]+)/gi,n.prefix);return e},property:function(e){return(n.properties.indexOf(e)>=0?n.prefix:"")+e},value:function(e,r){e=t("functions","(^|\\s|,)","\\s*\\(","$1"+n.prefix+"$2(",e);e=t("keywords","(^|\\s)","(\\s|$)","$1"+n.prefix+"$2$3",e);n.valueProperties.indexOf(r)>=0&&(e=t("properties","(^|\\s|,)","($|\\s|,)","$1"+n.prefix+"$2$3",e));return e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+n.prefix})},prefixProperty:function(e,t){var r=n.prefix+e;return t?StyleFix.camelCase(r):r}};(function(){var e={},t=[],r={},i=getComputedStyle(document.documentElement,null),s=document.createElement("div").style,o=function(n){if(n.charAt(0)==="-"){t.push(n);var r=n.split("-"),i=r[1];e[i]=++e[i]||1;while(r.length>3){r.pop();var s=r.join("-");u(s)&&t.indexOf(s)===-1&&t.push(s)}}},u=function(e){return StyleFix.camelCase(e)in s};if(i.length>0)for(var a=0;a<i.length;a++)o(i[a]);else for(var f in i)o(StyleFix.deCamelCase(f));var l={uses:0};for(var c in e){var h=e[c];l.uses<h&&(l={prefix:c,uses:h})}n.prefix="-"+l.prefix+"-";n.Prefix=StyleFix.camelCase(n.prefix);n.properties=[];for(var a=0;a<t.length;a++){var f=t[a];if(f.indexOf(n.prefix)===0){var p=f.slice(n.prefix.length);u(p)||n.properties.push(p)}}n.Prefix=="Ms"&&!("transform"in s)&&!("MsTransform"in s)&&"msTransform"in s&&n.properties.push("transform","transform-origin");n.properties.sort()})();(function(){function i(e,t){r[t]="";r[t]=e;return!!r[t]}var e={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};e["repeating-linear-gradient"]=e["repeating-radial-gradient"]=e["radial-gradient"]=e["linear-gradient"];var t={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"};n.functions=[];n.keywords=[];var r=document.createElement("div").style;for(var s in e){var o=e[s],u=o.property,a=s+"("+o.params+")";!i(a,u)&&i(n.prefix+a,u)&&n.functions.push(s)}for(var f in t){var u=t[f];!i(f,u)&&i(n.prefix+f,u)&&n.keywords.push(f)}})();(function(){function s(e){i.textContent=e+"{}";return!!i.sheet.cssRules.length}var t={":read-only":null,":read-write":null,":any-link":null,"::selection":null},r={keyframes:"name",viewport:null,document:'regexp(".")'};n.selectors=[];n.atrules=[];var i=e.appendChild(document.createElement("style"));for(var o in t){var u=o+(t[o]?"("+t[o]+")":"");!s(u)&&s(n.prefixSelector(u))&&n.selectors.push(o)}for(var a in r){var u=a+" "+(r[a]||"");!s("@"+u)&&s("@"+n.prefix+u)&&n.atrules.push(a)}e.removeChild(i)})();n.valueProperties=["transition","transition-property"];e.className+=" "+n.prefix;StyleFix.register(n.prefixCSS)})(document.documentElement);
/*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),b.currTemplate[d]=f?a(f):!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});
/*! skrollr 0.6.29 (2014-11-17) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,Y(),lt=this,r=r||{},mt=r.constants||{},r.easing)for(var n in r.easing)X[n]=r.easing[n];Tt=r.edgeStrategy||"set",ft={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ut=r.forceHeight!==!1,ut&&(zt=r.scale||1),pt=r.mobileDeceleration||x,gt=r.smoothScrolling!==!1,vt=r.smoothScrollingDuration||A,ht={targetTop:lt.getScrollTop()},Kt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Kt?(ct=t.getElementById(r.skrollrBody||E),ct&&it(),j(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),lt.refresh(),kt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Bt||e!==$t)&&(Bt=t,$t=e,_t=!0)});var i=R();return function l(){J(),St=i(l)}(),lt}var o,a,i={get:function(){return lt},init:function(e){return lt||new n(e)},VERSION:"0.6.29"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E="skrollr-body",A=200,F="start",C="end",H="center",D="bottom",I="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,N=/^\s+|\s+$/g,O=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,V=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,z=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,L=function(e,t){return t.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,$=/\{\?\}/g,B=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,G="",K="",Y=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(G=n.match(e)||+n==n&&t[n].match(e))break;if(!G)return G=K="",r;G=G[0],"-"===G.slice(0,1)?(K=G,G={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[G]):K="-"+G.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[G.toLowerCase()+"RequestAnimationFrame"],r=Nt();return(Kt||!t)&&(t=function(t){var n=Nt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Nt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[G.toLowerCase()+"CancelAnimationFrame"];return(Kt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},X={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,st=[],Gt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=Tt,u=!1;if(a&&I in i&&delete i[I],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(O);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(q,L)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==F&&b!==C?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===C?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*zt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&I in i?(x=i[I],k=st[x].styleAttr,w=st[x].classAttr):(x=i[I]=Gt++,k=i.style.cssText,w=Ht(i)),st[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(At(),n=0,o=e.length;o>n;n++){var E=st[e[n][I]];E!==r&&(Q(E),tt(E))}return lt},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===H&&(i-=n/2),r===D?i+=l:r===H&&(i+=l/2),i+=lt.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Nt(),o=lt.getScrollTop();return dt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:X[t.easing||k],done:t.done},dt.topDiff||(dt.done&&dt.done.call(lt,!1),dt=r),lt},n.prototype.stopAnimateTo=function(){dt&&dt.done&&dt.done.call(lt,!0),dt=r},n.prototype.isAnimatingTo=function(){return!!dt},n.prototype.isMobile=function(){return Kt},n.prototype.setScrollTop=function(t,r){return yt=r===!0,Kt?Yt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),lt},n.prototype.getScrollTop=function(){return Kt?Yt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ft[e]=t,lt},n.prototype.off=function(e){return delete ft[e],lt},n.prototype.destroy=function(){var e=U();e(St),xt(),Dt(o,[T],[y,b,S]);for(var t=0,n=st.length;n>t;t++)at(st[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",ct&&i.setStyle(ct,"transform","none"),lt=r,ct=r,ft=r,ut=r,Vt=0,zt=1,mt=r,pt=r,qt="down",Lt=-1,$t=0,Bt=0,_t=!1,dt=r,gt=r,vt=r,ht=r,yt=r,Gt=0,Tt=r,Kt=!1,Yt=0,bt=r};var j=function(){var n,i,l,c,d,g,v,h,y,T,b,S;kt(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,P.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),lt.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:P.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,lt.setScrollTop(Yt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!P.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/pt),F=E*A+.5*pt*A*A,C=lt.getScrollTop()-F,H=0;C>Vt?(H=(Vt-C)/F,C=Vt):0>C&&(H=-C/F,C=0),A*=1-H,lt.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},W=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=Ft();for(c=0,f=st.length;f>c;c++)for(e=st[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(at(t),l.frame=lt.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,at(t,!0)),l.frame+=m,ut&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame);for(Vt=s.max(Vt,Ct()),c=0,f=st.length;f>c;c++){for(e=st[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Vt-l.offset+m);e.keyFrames.sort(Ot)}},Z=function(e,t){for(var r=0,n=st.length;n>r;r++){var o,a,s=st[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(Et(c,p.eventType,qt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(Et(c,y.eventType,qt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":at(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=ot(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=nt(A.props[o].value,F.props[o].value,C),a=ot(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===qt?Et(c,A.eventType,qt):Et(c,F.eventType,qt),s.lastFrameIndex=E);break}}},J=function(){_t&&(_t=!1,At());var e,t,n=lt.getScrollTop(),o=Nt();if(dt)o>=dt.endTime?(n=dt.targetTop,e=dt.done,dt=r):(t=dt.easing((o-dt.startTime)/dt.duration),n=0|dt.startTop+t*dt.topDiff),lt.setScrollTop(n,!0);else if(!yt){var a=ht.targetTop-n;a&&(ht={startTop:Lt,topDiff:n-Lt,targetTop:n,startTime:Mt,endTime:Mt+vt}),ht.endTime>=o&&(t=X.sqrt((o-ht.startTime)/vt),n=0|ht.startTop+t*ht.topDiff)}if(Kt&&ct&&i.setStyle(ct,"transform","translate(0, "+-Yt+"px) "+bt),yt||Lt!==n){qt=n>Lt?"down":Lt>n?"up":qt,yt=!1;var l={curTop:n,lastTop:Lt,maxTop:Vt,direction:qt},s=ft.beforerender&&ft.beforerender.call(lt,l);s!==!1&&(Z(n,lt.getScrollTop()),Lt=n,ft.render&&ft.render.call(lt,l)),e&&e.call(lt,!1)}Mt=o},Q=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=V.exec(l.props));)a=i[1],o=i[2],n=a.match(z),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?et(o):[o.slice(1)],s[a]={value:o,easing:X[n]};l.props=s}},et=function(e){var t=[];return B.lastIndex=0,e=e.replace(B,function(e){return e.replace(M,function(e){return 100*(e/255)+"%"})}),K&&(_.lastIndex=0,e=e.replace(_,function(e){return K+e})),e=e.replace(M,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},tt=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)rt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)rt(e.keyFrames[t],n)},rt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},nt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},ot=function(e){var t=1;return $.lastIndex=0,e[0].replace($,function(){return e[t++]})},at=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=st[n[I]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ht(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},it=function(){bt="translateZ(0)",i.setStyle(ct,"transform",bt);var e=c(ct),t=e.getPropertyValue("transform"),r=e.getPropertyValue(K+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(bt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,L).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{G&&(n[G+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St,kt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Rt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},xt=function(){for(var e,t=0,r=Rt.length;r>t;t++)e=Rt[t],wt(e.element,e.name,e.listener);Rt=[]},Et=function(e,t,r){ft.keyframe&&ft.keyframe.call(lt,e,t,r)},At=function(){var e=lt.getScrollTop();Vt=0,ut&&!Kt&&(a.style.height=""),W(),ut&&!Kt&&(a.style.height=Vt+o.clientHeight+"px"),Kt?lt.setScrollTop(s.min(lt.getScrollTop(),Vt)):lt.setScrollTop(e,!0),yt=!0},Ft=function(){var e,t,r=o.clientHeight,n={};for(e in mt)t=mt[e],"function"==typeof t?t=t.call(lt):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ct=function(){var e,t=0;return ct&&(t=s.max(ct.offsetHeight,ct.scrollHeight)),e=s.max(t,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight),e-o.clientHeight},Ht=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Pt(i).replace(Pt(o[l])," ");i=It(i);for(var c=0,f=n.length;f>c;c++)-1===Pt(i).indexOf(Pt(n[c]))&&(i+=" "+n[c]);t[a]=It(i)},It=function(e){return e.replace(N,"")},Pt=function(e){return" "+e+" "},Nt=Date.now||function(){return+new Date},Ot=function(e,t){return e.frame-t.frame},Vt=0,zt=1,qt="down",Lt=-1,Mt=Nt(),$t=0,Bt=0,_t=!1,Gt=0,Kt=!1,Yt=0,Rt=[];"function"==typeof define&&define.amd?define([],function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);(function(e){e.fn.appear=function(t,n){var r=e.extend({data:undefined,one:true,accX:0,accY:0},n);return this.each(function(){var n=e(this);n.appeared=false;if(!t){n.trigger("appear",r.data);return}var i=e(window);var s=function(){if(!n.is(":visible")){n.appeared=false;return}var e=i.scrollLeft();var t=i.scrollTop();var s=n.offset();var o=s.left;var u=s.top;var a=r.accX;var f=r.accY;var l=n.height();var c=i.height();var h=n.width();var p=i.width();if(u+l+f>=t&&u<=t+c+f&&o+h+a>=e&&o<=e+p+a){if(!n.appeared)n.trigger("appear",r.data)}else{n.appeared=false}};var o=function(){n.appeared=true;if(r.one){i.unbind("scroll",s);var o=e.inArray(s,e.fn.appear.checks);if(o>=0)e.fn.appear.checks.splice(o,1)}t.apply(this,arguments)};if(r.one)n.one("appear",r.data,o);else n.bind("appear",r.data,o);i.scroll(s);e.fn.appear.checks.push(s);s()})};e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=e.fn.appear.checks.length;if(t>0)while(t--)e.fn.appear.checks[t]()},run:function(){if(e.fn.appear.timeout)clearTimeout(e.fn.appear.timeout);e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}});e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,n){var r=e.fn[n];if(r){e.fn[n]=function(){var t=r.apply(this,arguments);e.fn.appear.run();return t}}})})(jQuery);(function(e){e.fn.countTo=function(t){t=e.extend({},e.fn.countTo.defaults,t||{});var n=Math.ceil(t.speed/t.refreshInterval),r=(t.to-t.from)/n;return e(this).each(function(){function a(){o+=r;s++;e(i).html(o.toFixed(t.decimals));if(typeof t.onUpdate=="function"){t.onUpdate.call(i,o)}if(s>=n){clearInterval(u);o=t.to;if(typeof t.onComplete=="function"){t.onComplete.call(i,o)}}}var i=this,s=0,o=t.from,u=setInterval(a,t.refreshInterval)})};e.fn.countTo.defaults={from:0,to:100,speed:1e3,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null}})(jQuery)
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(jQuery);}}(function($){var CountTo=function(element,options){this.$element=$(element);this.options=$.extend({},CountTo.DEFAULTS,this.dataOptions(),options);this.init();};CountTo.DEFAULTS={from:0,to:0,speed:1000,refreshInterval:100,decimals:0,formatter:formatter,onUpdate:null,onComplete:null};CountTo.prototype.init=function(){this.value=this.options.from;this.loops=Math.ceil(this.options.speed/this.options.refreshInterval);this.loopCount=0;this.increment=(this.options.to-this.options.from)/this.loops;};CountTo.prototype.dataOptions=function(){var options={from:this.$element.data('from'),to:this.$element.data('to'),speed:this.$element.data('speed'),refreshInterval:this.$element.data('refresh-interval'),decimals:this.$element.data('decimals')};var keys=Object.keys(options);for(var i in keys){var key=keys[i];if(typeof(options[key])==='undefined'){delete options[key];}}
return options;};CountTo.prototype.update=function(){this.value+=this.increment;this.loopCount++;this.render();if(typeof(this.options.onUpdate)=='function'){this.options.onUpdate.call(this.$element,this.value);}
if(this.loopCount>=this.loops){clearInterval(this.interval);this.value=this.options.to;if(typeof(this.options.onComplete)=='function'){this.options.onComplete.call(this.$element,this.value);}}};CountTo.prototype.render=function(){var formattedValue=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(formattedValue);};CountTo.prototype.restart=function(){this.stop();this.init();this.start();};CountTo.prototype.start=function(){this.stop();this.render();this.interval=setInterval(this.update.bind(this),this.options.refreshInterval);};CountTo.prototype.stop=function(){if(this.interval){clearInterval(this.interval);}};CountTo.prototype.toggle=function(){if(this.interval){this.stop();}else{this.start();}};function formatter(value,options){return value.toFixed(options.decimals);}
$.fn.countTo=function(option){return this.each(function(){var $this=$(this);var data=$this.data('countTo');var init=!data||typeof(option)==='object';var options=typeof(option)==='object'?option:{};var method=typeof(option)==='string'?option:'start';if(init){if(data)data.stop();$this.data('countTo',data=new CountTo(this,options));}
data[method].call(data);});};}));
/*! 
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){function injector(t,splitter,klass,after){var a=t.text().split(splitter),inject='';if(a.length){$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after;});t.empty().append(inject);}}
var methods={init:function(){return this.each(function(){injector($(this),'','char','');});},words:function(){return this.each(function(){injector($(this),' ','word',' ');});},lines:function(){return this.each(function(){var r="eefec303079ad17405c889e092e105b0";injector($(this).children("br").replaceWith(r).end(),r,'line','');});}};$.fn.lettering=function(method){if(method&&methods[method]){return methods[method].apply(this,[].slice.call(arguments,1));}else if(method==='letters'||!method){return methods.init.apply(this,[].slice.call(arguments,0));}
$.error('Method '+method+' does not exist on jQuery.lettering');return this;};})(jQuery);(function($){"use strict";function isInEffect(effect){return/In/.test(effect)||$.inArray(effect,$.fn.textillate.defaults.inEffects)>=0;};function isOutEffect(effect){return/Out/.test(effect)||$.inArray(effect,$.fn.textillate.defaults.outEffects)>=0;};function stringToBoolean(str){if(str!=="true"&&str!=="false")return str;return(str==="true");};function getData(node){var attrs=node.attributes||[],data={};if(!attrs.length)return data;$.each(attrs,function(i,attr){var nodeName=attr.nodeName.replace(/delayscale/,'delayScale');if(/^data-in-*/.test(nodeName)){data.in=data.in||{};data.in[nodeName.replace(/data-in-/,'')]=stringToBoolean(attr.nodeValue);}else if(/^data-out-*/.test(nodeName)){data.out=data.out||{};data.out[nodeName.replace(/data-out-/,'')]=stringToBoolean(attr.nodeValue);}else if(/^data-*/.test(nodeName)){data[nodeName.replace(/data-/,'')]=stringToBoolean(attr.nodeValue);}})
return data;}
function shuffle(o){for(var j,x,i=o.length;i;j=parseInt(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);return o;}
function animate($t,effect,cb){$t.addClass('animated '+effect).css('visibility','visible').show();$t.one('animationend webkitAnimationEnd oAnimationEnd',function(){$t.removeClass('animated '+effect);cb&&cb();});}
function animateTokens($tokens,options,cb){var that=this,count=$tokens.length;if(!count){cb&&cb();return;}
if(options.shuffle)$tokens=shuffle($tokens);if(options.reverse)$tokens=$tokens.toArray().reverse();$.each($tokens,function(i,t){var $token=$(t);function complete(){if(isInEffect(options.effect)){$token.css('visibility','visible');}else if(isOutEffect(options.effect)){$token.css('visibility','hidden');}
count-=1;if(!count&&cb)cb();}
var delay=options.sync?options.delay:options.delay*i*options.delayScale;$token.text()?setTimeout(function(){animate($token,options.effect,complete)},delay):complete();});};var Textillate=function(element,options){var base=this,$element=$(element);base.init=function(){base.$texts=$element.find(options.selector);if(!base.$texts.length){base.$texts=$('<ul class="texts"><li>'+$element.html()+'</li></ul>');$element.html(base.$texts);}
base.$texts.hide();base.$current=$('<span>').html(base.$texts.find(':first-child').html()).prependTo($element);if(isInEffect(options.in.effect)){base.$current.css('visibility','hidden');}else if(isOutEffect(options.out.effect)){base.$current.css('visibility','visible');}
base.setOptions(options);base.timeoutRun=null;setTimeout(function(){base.options.autoStart&&base.start();},base.options.initialDelay)};base.setOptions=function(options){base.options=options;};base.triggerEvent=function(name){var e=$.Event(name+'.tlt');$element.trigger(e,base);return e;};base.in=function(index,cb){index=index||0;var $elem=base.$texts.find(':nth-child('+((index||0)+1)+')'),options=$.extend(true,{},base.options,$elem.length?getData($elem[0]):{}),$tokens;$elem.addClass('current');base.triggerEvent('inAnimationBegin');base.$current.html($elem.html()).lettering('words');if(base.options.type=="char"){base.$current.find('[class^="word"]').css({'display':'inline-block','-webkit-transform':'translate3d(0,0,0)','-moz-transform':'translate3d(0,0,0)','-o-transform':'translate3d(0,0,0)','transform':'translate3d(0,0,0)'}).each(function(){$(this).lettering()});}
$tokens=base.$current.find('[class^="'+base.options.type+'"]').css('display','inline-block');if(isInEffect(options.in.effect)){$tokens.css('visibility','hidden');}else if(isOutEffect(options.in.effect)){$tokens.css('visibility','visible');}
base.currentIndex=index;animateTokens($tokens,options.in,function(){base.triggerEvent('inAnimationEnd');if(options.in.callback)options.in.callback();if(cb)cb(base);});};base.out=function(cb){var $elem=base.$texts.find(':nth-child('+((base.currentIndex||0)+1)+')'),$tokens=base.$current.find('[class^="'+base.options.type+'"]'),options=$.extend(true,{},base.options,$elem.length?getData($elem[0]):{})
base.triggerEvent('outAnimationBegin');animateTokens($tokens,options.out,function(){$elem.removeClass('current');base.triggerEvent('outAnimationEnd');if(options.out.callback)options.out.callback();if(cb)cb(base);});};base.start=function(index){setTimeout(function(){base.triggerEvent('start');(function run(index){base.in(index,function(){var length=base.$texts.children().length;index+=1;if(!base.options.loop&&index>=length){if(base.options.callback)base.options.callback();base.triggerEvent('end');}else{index=index%length;base.timeoutRun=setTimeout(function(){base.out(function(){run(index)});},base.options.minDisplayTime);}});}(index||0));},base.options.initialDelay);};base.stop=function(){if(base.timeoutRun){clearInterval(base.timeoutRun);base.timeoutRun=null;}};base.init();}
$.fn.textillate=function(settings,args){return this.each(function(){var $this=$(this),data=$this.data('textillate'),options=$.extend(true,{},$.fn.textillate.defaults,getData(this),typeof settings=='object'&&settings);if(!data){$this.data('textillate',(data=new Textillate(this,options)));}else if(typeof settings=='string'){data[settings].apply(data,[].concat(args));}else{data.setOptions.call(data,options);}})};$.fn.textillate.defaults={selector:'.texts',loop:false,minDisplayTime:2000,initialDelay:0,in:{effect:'fadeInLeftBig',delayScale:1.5,delay:50,sync:false,reverse:false,shuffle:false,callback:function(){}},out:{effect:'hinge',delayScale:1.5,delay:50,sync:false,reverse:false,shuffle:false,callback:function(){}},autoStart:true,inEffects:[],outEffects:['hinge'],callback:function(){},type:'char'};}(jQuery));(function($){var defaults={total:10,ofTop:0,ofLeft:0,on:'document.body',twinkle:0.2,minPixel:1,maxPixel:2,color:'#fff',namespace:'jqueryFireFly',_paused:false,};$.firefly=function(settings){$.firefly.settings=$.extend({},defaults,settings);$.firefly.eleHeight=$($.firefly.settings.on).height();$.firefly.eleWidth=$($.firefly.settings.on).width();if($.firefly.settings.on!=='document.body'){var off=$($.firefly.settings.on).offset();$.firefly.offsetTop=off.top;$.firefly.offsetLeft=off.left;$.firefly.eleHeight=$($.firefly.settings.on).height();$.firefly.eleWidth=$($.firefly.settings.on).width();}else{$.firefly.offsetTop=0;$.firefly.offsetLeft=0;$.firefly.eleHeight=$(document.body).height();$.firefly.eleWidth=$(document.body).width();}
for(i=0;i<$.firefly.settings.total;i++){var randomPixel=$.firefly.randomPixel($.firefly.settings.minPixel,$.firefly.settings.maxPixel);var sp=$.firefly.create(randomPixel);$.firefly.fly(sp);}
$.firefly.sparks=$($.firefly.settings.on).children('.'+$.firefly.settings.namespace);this.pause=function(bool){$.firefly.settings._paused=true;if(bool){$.each($.firefly.sparks,function(iter,sp){$(sp).stop(true);});}};this.resume=function(){$.firefly.settings._paused=false;$.each($.firefly.sparks,function(iter,sp){$.firefly.fly(sp);});};return this;};$.firefly.create=function(pixelSize){spark=$('<div>').hide();spark.addClass($.firefly.settings.namespace);$.firefly.settings._onSparkID++;if($.firefly.settings.on==='document.body'){$(document.body).append(spark);}else{$($.firefly.settings.on).append(spark);}
return spark.css({'position':'absolute','width':pixelSize,'height':pixelSize,'background-color':$.firefly.settings.color,'z-index':$.firefly.random(20),top:$.firefly.offsetTop+$.firefly.random(($.firefly.eleHeight-50)),left:$.firefly.offsetLeft+$.firefly.random(($.firefly.eleWidth-50))}).show();};$.firefly.fly=function(sp){$(sp).animate({top:$.firefly.offsetTop+$.firefly.random(($.firefly.eleHeight-50)),left:$.firefly.offsetLeft+$.firefly.random(($.firefly.eleWidth-50)),opacity:$.firefly.opacity($.firefly.settings.twinkle)},{duration:(($.firefly.random(10)+5)*2000),done:function(){if(!$.firefly.settings._paused){$.firefly.fly(sp);}}});};$.firefly.randomPixel=function(min,max){return Math.floor(Math.random()*(max-min+1)+min);};$.firefly.random=function(max){return Math.ceil(Math.random()*max)-1;};$.firefly.opacity=function(min){op=Math.random();if(op<min){return 0;}else{return 1;}};})(jQuery);(function($){"use strict";var previousDevice,_addClass,_doc_element,_find,_handleOrientation,_hasClass,_orientation_event,_removeClass,_supports_orientation,_user_agent;previousDevice=window.device;window.device={};_doc_element=window.document.documentElement;_user_agent=window.navigator.userAgent.toLowerCase();device.ios=function(){return device.iphone()||device.ipod()||device.ipad();};device.iphone=function(){return _find('iphone');};device.ipod=function(){return _find('ipod');};device.ipad=function(){return _find('ipad');};device.android=function(){return _find('android');};device.androidPhone=function(){return device.android()&&_find('mobile');};device.androidTablet=function(){return device.android()&&!_find('mobile');};device.blackberry=function(){return _find('blackberry')||_find('bb10')||_find('rim');};device.blackberryPhone=function(){return device.blackberry()&&!_find('tablet');};device.blackberryTablet=function(){return device.blackberry()&&_find('tablet');};device.windows=function(){return _find('windows');};device.windowsPhone=function(){return device.windows()&&_find('phone');};device.windowsTablet=function(){return device.windows()&&_find('touch');};device.fxos=function(){return(_find('(mobile;')||_find('(tablet;'))&&_find('; rv:');};device.fxosPhone=function(){return device.fxos()&&_find('mobile');};device.fxosTablet=function(){return device.fxos()&&_find('tablet');};device.meego=function(){return _find('meego');};device.cordova=function(){return window.cordova&&location.protocol==='file:';};device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego();};device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet();};device.desktop=function(){return!device.tablet()&&!device.mobile();};device.portrait=function(){return(window.innerHeight/window.innerWidth)>1;};device.landscape=function(){return(window.innerHeight/window.innerWidth)<1;};device.noConflict=function(){window.device=previousDevice;return this;};_find=function(needle){return _user_agent.indexOf(needle)!==-1;};_hasClass=function(class_name){var regex;regex=new RegExp(class_name,'i');return _doc_element.className.match(regex);};_addClass=function(class_name){if(!_hasClass(class_name)){return _doc_element.className+=" "+class_name;}};_removeClass=function(class_name){if(_hasClass(class_name)){return _doc_element.className=_doc_element.className.replace(class_name,"");}};if(device.ios()){if(device.ipad()){_addClass("ios ipad tablet");}else if(device.iphone()){_addClass("ios iphone mobile");}else if(device.ipod()){_addClass("ios ipod mobile");}}else if(device.android()){if(device.androidTablet()){_addClass("android tablet");}else{_addClass("android mobile");}}else if(device.blackberry()){if(device.blackberryTablet()){_addClass("blackberry tablet");}else{_addClass("blackberry mobile");}}else if(device.windows()){if(device.windowsTablet()){_addClass("windows tablet");}else if(device.windowsPhone()){_addClass("windows mobile");}else{_addClass("desktop");}}else if(device.fxos()){if(device.fxosTablet()){_addClass("fxos tablet");}else{_addClass("fxos mobile");}}else if(device.meego()){_addClass("meego mobile");}else{_addClass("desktop");}
if(device.cordova()){_addClass("cordova");}
_handleOrientation=function(){if(device.landscape()){_removeClass("portrait");return _addClass("landscape");}else{_removeClass("landscape");return _addClass("portrait");}};_supports_orientation="onorientationchange"in window;_orientation_event=_supports_orientation?"orientationchange":"resize";if(window.addEventListener){window.addEventListener(_orientation_event,_handleOrientation,false);}else if(window.attachEvent){window.attachEvent(_orientation_event,_handleOrientation);}else{window[_orientation_event]=_handleOrientation;}
_handleOrientation();}).call(this);
/*! jQuery UI - v1.12.0-rc.1 - 2016-03-21
* http://jqueryui.com
* Includes: keycode.js, widgets/datepicker.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,n)}function n(){t.datepicker._isDisabledDatepicker(o.inline?o.dpDiv.parent()[0]:o.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.ui=t.ui||{},t.ui.version="1.12.0-rc.1",t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.extend(t.ui,{datepicker:{version:"1.12.0-rc.1"}});var o;t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=t("<span class='"+this._appendClass+"'>"+o+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),o=this._get(t,"dateFormat");o.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,u,c,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),o===n&&(o=null))},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),o=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),o=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),o=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),o=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),o=e.ctrlKey||e.metaKey;break;default:o=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):o=!1;o&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(i=t("input",i.parentNode)[0]),!t.datepicker._isDisabledDatepicker(i)&&t.datepicker._lastInput!==i){var s,n,o,r,h,l,u;s=t.datepicker._getInst(i),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(i,[i,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=i,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(i.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(i),t.datepicker._pos[1]+=i.offsetHeight),r=!1,t(i).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),u=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",e(t(i))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),u):s.dpDiv[l||"show"](l?u:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,o=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),a=s[1],r=17,h=e.dpDiv.find("."+this._dayOverClass+" a");h.length>0&&n.apply(h.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),a>1&&e.dpDiv.addClass("ui-datepicker-multi-"+a).css("width",r*a+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),o=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-o:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,o=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),c=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,_=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},x=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(e,s,n){var a=-1,o=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=e[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?k():b=!1;else switch(e.charAt(n)){case"d":v=x("d");break;case"D":w("D",c,d);break;case"o":_=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":y("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),_>-1)for(g=1,v=_;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},u=function(t,e,i,s){return h(t)?s[e]:i[e]},c="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?c+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":c+=l("d",e.getDate(),2);break;case"D":c+=u("D",e.getDay(),n,a);break;case"o":c+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":c+=l("m",e.getMonth()+1,2);break;case"M":c+=u("M",e.getMonth(),o,r);break;case"y":c+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":c+=e.getTime();break;case"!":c+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?c+="'":d=!0;break;default:c+=t.charAt(s)}return c},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,o=this._getFormatConfig(t);try{a=this.parseDate(i,s,o)||n}catch(r){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,o=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=o.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=o.getMonth(),t.drawYear=t.selectedYear=t.currentYear=o.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,o,r,h,l,u,c,d,p,f,m,g,v,_,b,y,x,w,k,D,T,C,S,M,N,P,I,A,H,z,E,F,W,O,L,R=new Date,j=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),J=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),q=this._getNumberOfMonths(t),U=this._get(t,"showCurrentAtPos"),V=this._get(t,"stepMonths"),G=1!==q[0]||1!==q[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-U,te=t.drawYear;if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-q[0]*q[1]+1,Q.getDate())),e=$&&$>e?$:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-V,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+V,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?X:j,o=K?this.formatDate(o,r,this._getFormatConfig(t)):o,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(t,"firstDay"),10),u=isNaN(u)?0:u,c=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",w=0;q[0]>w;w++){for(k="",this.maxRows=4,D=0;q[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),C=" ui-corner-all",S="",G){if(S+="<div class='ui-datepicker-group",q[1]>1)switch(D){case 0:S+=" ui-datepicker-group-first",C=" ui-corner-"+(Y?"right":"left");break;case q[1]-1:S+=" ui-datepicker-group-last",C=" ui-corner-"+(Y?"left":"right");break;default:S+=" ui-datepicker-group-middle",C=""}S+="'>"}for(S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===w?Y?a:s:"")+(/all|right/.test(C)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(t,Z,te,$,Q,w>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=c?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,M+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[N]+"'>"+p[N]+"</span></th>";for(S+=M+"</tr></thead><tbody>",P=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,P)),I=(this._getFirstDayOfMonth(te,Z)-u+7)%7,A=Math.ceil((I+P)/7),H=G?this.maxRows>A?this.maxRows:A:A,this.maxRows=H,z=this._daylightSavingAdjust(new Date(te,Z,1-I)),E=0;H>E;E++){for(S+="<tr>",F=c?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)W=g?g.apply(t.input?t.input[0]:null,[z]):[!0,""],O=z.getMonth()!==Z,L=O&&!_||!W[0]||$&&$>z||Q&&z>Q,F+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(O?" ui-datepicker-other-month":"")+(z.getTime()===T.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===z.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(O&&!v?"":" "+W[1]+(z.getTime()===X.getTime()?" "+this._currentClass:"")+(z.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(O&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(O&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===j.getTime()?" ui-state-highlight":"")+(z.getTime()===X.getTime()?" ui-state-active":"")+(O?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);S+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),S+="</tbody></table>"+(G?"</div>"+(q[0]>0&&D===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=S}y+=k}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,o,r){var h,l,u,c,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+o[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(y+="<option value='"+u+"'"+(u===e?" selected='selected'":"")+">"+r[u]+"</option>");y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(c=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(c[0]),m=Math.max(f,p(c[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),o=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),o=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!o||e.getFullYear()>=o)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.0-rc.1",t.datepicker});
/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){if(this.length){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=h&&g.check(e)))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),d in c||!b.objectLength(a(this).rules())?!1:(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e=a(c).attr("type"),f="Step attribute on input type "+e+" is not supported.",g=["text","number","range"],h=new RegExp("\\b"+e+"\\b"),i=e&&!h.test(g.join());if(i)throw new Error(f);return this.optional(c)||b%d===0},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});(function(C,p){"function"===typeof define&&define.amd?define([],p):"object"===typeof exports?module.exports=p():p()})(this,function(){function C(a){if(null===r){for(var g=a.length,c=0,k=document.getElementById(D),f="<ul>";c<g;)f+="<li>"+a[c]+"</li>",c++;k.innerHTML=f+"</ul>"}else r(a)}function p(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,c){return c}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function E(a){a=a.getElementsByTagName("a");for(var g=a.length-1;0<=g;g--)a[g].setAttribute("target","_blank")}function l(a,g){for(var c=[],k=new RegExp("(^| )"+g+"( |$)"),f=a.getElementsByTagName("*"),h=0,b=f.length;h<b;h++)k.test(f[h].className)&&c.push(f[h]);return c}function F(a){if(void 0!==a&&0<=a.innerHTML.indexOf("data-srcset"))return a=a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(a).split('"')[1]}var D="",g=20,G=!0,v=[],x=!1,y=!0,w=!0,z=null,A=!0,B=!0,r=null,H=!0,I=!1,t=!0,J=!0,K=!1,m=null,L={fetch:function(a){void 0===a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);void 0===a.dataOnly&&(a.dataOnly=!1);if(x)v.push(a);else{x=!0;D=a.domId;g=a.maxTweets;G=a.enableLinks;w=a.showUser;y=a.showTime;B=a.showRetweet;z=a.dateFunction;r=a.customCallback;H=a.showInteraction;I=a.showImages;t=a.linksInNewWindow;J=a.showPermalinks;K=a.dataOnly;var l=document.getElementsByTagName("head")[0];null!==m&&l.removeChild(m);m=document.createElement("script");m.type="text/javascript";m.src="https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+
Math.random();l.appendChild(m)}},callback:function(a){function m(a){var b=a.getElementsByTagName("img")[0];b.src=b.getAttribute("data-src-2x");return a}var c=document.createElement("div");c.innerHTML=a.body;"undefined"===typeof c.getElementsByClassName&&(A=!1);a=[];var k=[],f=[],h=[],b=[],q=[],n=[],e=0;if(A)for(c=c.getElementsByClassName("timeline-Tweet");e<c.length;){0<c[e].getElementsByClassName("timeline-Tweet-retweetCredit").length?b.push(!0):b.push(!1);if(!b[e]||b[e]&&B)a.push(c[e].getElementsByClassName("timeline-Tweet-text")[0]),q.push(c[e].getAttribute("data-tweet-id")),k.push(m(c[e].getElementsByClassName("timeline-Tweet-author")[0])),f.push(c[e].getElementsByClassName("dt-updated")[0]),n.push(c[e].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==c[e].getElementsByClassName("timeline-Tweet-media")[0]?h.push(c[e].getElementsByClassName("timeline-Tweet-media")[0]):h.push(void 0);e++}else for(c=l(c,"timeline-Tweet");e<c.length;){0<l(c[e],"timeline-Tweet-retweetCredit").length?b.push(!0):b.push(!1);if(!b[e]||b[e]&&B)a.push(l(c[e],"timeline-Tweet-text")[0]),q.push(c[e].getAttribute("data-tweet-id")),k.push(m(l(c[e],"timeline-Tweet-author")[0])),f.push(l(c[e],"dt-updated")[0]),n.push(l(c[e],"timeline-Tweet-timestamp")[0]),void 0!==l(c[e],"timeline-Tweet-media")[0]?h.push(l(c[e],"timeline-Tweet-media")[0]):h.push(void 0);e++}a.length>g&&(a.splice(g,a.length-g),k.splice(g,k.length-g),f.splice(g,f.length-g),b.splice(g,b.length-g),h.splice(g,h.length-g),n.splice(g,n.length-g));var c=[],e=a.length,d=0;if(K)for(;d<e;)c.push({tweet:a[d].innerHTML,author:k[d].innerHTML,time:f[d].textContent,image:F(h[d]),rt:b[d],tid:q[d],permalinkURL:void 0===n[d]?"":n[d].href}),d++;else for(;d<e;){if("string"!==typeof z){var b=f[d].getAttribute("datetime"),u=new Date(f[d].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=z(u,b);f[d].setAttribute("aria-label",b);if(a[d].textContent)if(A)f[d].textContent=b;else{var u=document.createElement("p"),r=document.createTextNode(b);u.appendChild(r);u.setAttribute("aria-label",b);f[d]=u}else f[d].textContent=b}b="";G?(t&&(E(a[d]),w&&E(k[d])),w&&(b+='<div class="user">'+p(k[d].innerHTML)+"</div>"),b+='<p class="tweet">'+p(a[d].innerHTML)+"</p>",y&&(b=J?b+('<p class="timePosted"><a href="'+n[d]+'">'+f[d].getAttribute("aria-label")+"</a></p>"):b+('<p class="timePosted">'+f[d].getAttribute("aria-label")+"</p>"))):(w&&(b+='<p class="user">'+k[d].textContent+"</p>"),b+='<p class="tweet">'+a[d].textContent+"</p>",y&&(b+='<p class="timePosted">'+f[d].textContent+"</p>"));H&&(b+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+q[d]+'" class="twitter_reply_icon"'+(t?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+q[d]+'" class="twitter_retweet_icon"'+(t?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+q[d]+'" class="twitter_fav_icon"'+(t?' target="_blank">':">")+"Favorite</a></p>");I&&void 0!==h[d]&&(b+='<div class="media"><img src="'+F(h[d])+'" alt="Image from tweet" /></div>');c.push(b);d++}C(c);x=!1;0<v.length&&(L.fetch(v[0]),v.splice(0,1))}};return window.twitterFetcher=L});(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);
/*!
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.1.0
 * @description Creates a canvas based particle system background
 *
 * Inspired by http://requestlab.fr/ and http://disruptivebydesign.com/
 */
!function(a,b){"use strict";function c(a){a=a||{};for(var b=1;b<arguments.length;b++){var c=arguments[b];if(c)for(var d in c)c.hasOwnProperty(d)&&("object"==typeof c[d]?deepExtend(a[d],c[d]):a[d]=c[d])}return a}function d(d,g){function h(){if(y){r=b.createElement("canvas"),r.className="pg-canvas",r.style.display="block",d.insertBefore(r,d.firstChild),s=r.getContext("2d"),i();for(var c=Math.round(r.width*r.height/g.density),e=0;c>e;e++){var f=new n;f.setStackPos(e),z.push(f)}a.addEventListener("resize",function(){k()},!1),b.addEventListener("mousemove",function(a){A=a.pageX,B=a.pageY},!1),D&&!C&&a.addEventListener("deviceorientation",function(){F=Math.min(Math.max(-event.beta,-30),30),E=Math.min(Math.max(-event.gamma,-30),30)},!0),j(),q("onInit")}}function i(){r.width=d.offsetWidth,r.height=d.offsetHeight,s.fillStyle=g.dotColor,s.strokeStyle=g.lineColor,s.lineWidth=g.lineWidth}function j(){if(y){u=a.innerWidth,v=a.innerHeight,s.clearRect(0,0,r.width,r.height);for(var b=0;b<z.length;b++)z[b].updatePosition();for(var b=0;b<z.length;b++)z[b].draw();G||(t=requestAnimationFrame(j))}}function k(){i();for(var a=d.offsetWidth,b=d.offsetHeight,c=z.length-1;c>=0;c--)(z[c].position.x>a||z[c].position.y>b)&&z.splice(c,1);var e=Math.round(r.width*r.height/g.density);if(e>z.length)for(;e>z.length;){var f=new n;z.push(f)}else e<z.length&&z.splice(e);for(c=z.length-1;c>=0;c--)z[c].setStackPos(c)}function l(){G=!0}function m(){G=!1,j()}function n(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*r.width),y:Math.ceil(Math.random()*r.height)},this.speed={},g.directionX){case"left":this.speed.x=+(-g.maxSpeedX+Math.random()*g.maxSpeedX-g.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*g.maxSpeedX+g.minSpeedX).toFixed(2);break;default:this.speed.x=+(-g.maxSpeedX/2+Math.random()*g.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?g.minSpeedX:-g.minSpeedX}switch(g.directionY){case"up":this.speed.y=+(-g.maxSpeedY+Math.random()*g.maxSpeedY-g.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*g.maxSpeedY+g.minSpeedY).toFixed(2);break;default:this.speed.y=+(-g.maxSpeedY/2+Math.random()*g.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?g.minSpeedY:-g.minSpeedY}}function o(a,b){return b?void(g[a]=b):g[a]}function p(){console.log("destroy"),r.parentNode.removeChild(r),q("onDestroy"),f&&f(d).removeData("plugin_"+e)}function q(a){void 0!==g[a]&&g[a].call(d)}var r,s,t,u,v,w,x,y=!!b.createElement("canvas").getContext,z=[],A=0,B=0,C=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),D=!!a.DeviceOrientationEvent,E=0,F=0,G=!1;return g=c({},a[e].defaults,g),n.prototype.draw=function(){s.beginPath(),s.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,g.particleRadius/2,0,2*Math.PI,!0),s.closePath(),s.fill(),s.beginPath();for(var a=z.length-1;a>this.stackPos;a--){var b=z[a],c=this.position.x-b.position.x,d=this.position.y-b.position.y,e=Math.sqrt(c*c+d*d).toFixed(2);e<g.proximity&&(s.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),g.curvedLines?s.quadraticCurveTo(Math.max(b.position.x,b.position.x),Math.min(b.position.y,b.position.y),b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY):s.lineTo(b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY))}s.stroke(),s.closePath()},n.prototype.updatePosition=function(){if(g.parallax){if(D&&!C){var a=(u-0)/60;w=(E- -30)*a+0;var b=(v-0)/60;x=(F- -30)*b+0}else w=A,x=B;this.parallaxTargX=(w-u/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(x-v/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var c=d.offsetWidth,e=d.offsetHeight;switch(g.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=c-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>c&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>c||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(g.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=e-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>e&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>e||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},n.prototype.setStackPos=function(a){this.stackPos=a},h(),{option:o,destroy:p,start:m,pause:l}}var e="particleground",f=a.jQuery;a[e]=function(a,b){return new d(a,b)},a[e].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},f&&(f.fn[e]=function(a){if("string"==typeof arguments[0]){var b,c=arguments[0],g=Array.prototype.slice.call(arguments,1);return this.each(function(){f.data(this,"plugin_"+e)&&"function"==typeof f.data(this,"plugin_"+e)[c]&&(b=f.data(this,"plugin_"+e)[c].apply(this,g))}),void 0!==b?b:this}return"object"!=typeof a&&a?void 0:this.each(function(){f.data(this,"plugin_"+e)||f.data(this,"plugin_"+e,new d(this,a))})})}(window,document),function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();
/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */
(function($){"use strict";var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:w,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,padZeroes:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false}},_getters:['getTimes'],_rtlClass:w+'-rtl',_sectionClass:w+'-section',_amountClass:w+'-amount',_periodClass:w+'-period',_rowClass:w+'-row',_holdingClass:w+'-holding',_showClass:w+'-show',_descrClass:w+'-descr',_timerElems:[],_init:function(){var c=this;this._super();this._serverSyncs=[];var d=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var e=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(e?(performance.now()+performance.timing.navigationStart):d()):a||d());if(b-g>=1000){c._updateElems();g=b}f(timerCallBack)}var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var g=0;if(!f||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){c._updateElems()},980)}else{g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d();f(timerCallBack)}},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},resync:function(){var d=this;$('.'+this._getMarker()).each(function(){var a=$.data(this,d.name);if(a.options.serverSync){var b=null;for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][0]==a.options.serverSync){b=d._serverSyncs[i];break}}if(b[2]==null){var c=($.isFunction(a.options.serverSync)?a.options.serverSync.apply(this,[]):null);b[2]=(c?new Date().getTime()-c.getTime():0)-b[1]}if(a._since){a._since.setMilliseconds(a._since.getMilliseconds()+b[2])}a._until.setMilliseconds(a._until.getMilliseconds()+b[2])}});for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][2]!=null){d._serverSyncs[i][1]+=d._serverSyncs[i][2];delete d._serverSyncs[i][2]}}},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){if(!this._hasElem(a)){this._timerElems.push(a)}},_hasElem:function(a){return($.inArray(a,this._timerElems)>-1)},_removeElem:function(b){this._timerElems=$.map(this._timerElems,function(a){return(a==b?null:a)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(a,b,c){if(c.layout){c.layout=c.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(b.options,c);var d=(b.options.timezone!=c.timezone);$.extend(b.options,c);this._adjustSettings(a,b,c.until!=null||c.since!=null||d);var e=new Date();if((b._since&&b._since<e)||(b._until&&b._until>e)){this._addElem(a[0])}this._updateCountdown(a,b)},_updateCountdown:function(a,b){a=a.jquery?a:$(a);b=b||this._getInst(a);if(!b){return}a.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var c=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(c)%b.options.tickInterval==0){b.options.onTick.apply(a[0],[c])}}var d=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(d&&!b._expiring){b._expiring=true;if(this._hasElem(a[0])||b.options.alwaysExpire){this._removeElem(a[0]);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a[0],[])}if(b.options.expiryText){var e=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a[0],b);b.options.layout=e}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeElem(a[0])}},_resetExtraLabels:function(a,b){for(var n in b){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=b[n]}}for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)&&typeof b[n]==='undefined'){a[n]=null}}},_adjustSettings:function(a,b,c){var d=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){d=this._serverSyncs[i][1];break}}if(d!=null){var e=(b.options.serverSync?d:0);var f=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a[0],[]):null);var f=new Date();var e=(g?f.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-f.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,f));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_preDestroy:function(a,b){this._removeElem(a[0]);a.empty()},pause:function(a){this._hold(a,'pause')},lap:function(a){this._hold(a,'lap')},resume:function(a){this._hold(a,null)},toggle:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'pause':'resume'](a)},toggleLap:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'lap':'resume'](a)},_hold:function(a,b){var c=$.data(a,this.name);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addElem(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.name,c);this._updateCountdown(a,c)}},getTimes:function(a){var b=$.data(a,this.name);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=this;var n=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var o=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var p=(k==null?l:(typeof k=='string'?o(k):(typeof k=='number'?n(k):k)));if(p)p.setMilliseconds(0);return p},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=(c.options.padZeroes?2:1);var o=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+d._sectionClass+'">'+'<span class="'+d._amountClass+'">'+d._minDigits(c,c._periods[a],n)+'</span>'+'<span class="'+d._periodClass+'">'+(b?b[a]:k[a])+'</span></span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+o(Y)+o(O)+o(W)+o(D)+o(H)+o(M)+o(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=this._getDaysInMonth(f.getFullYear(),f.getMonth());var j=this._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=this._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}})})(jQuery);
;var fwForm={initAjaxSubmit:function(opts){var opts=jQuery.extend({selector:'form[data-fw-form-id]',ajaxUrl:(typeof ajaxurl!='undefined')?ajaxurl:((typeof fwAjaxUrl!='undefined')?fwAjaxUrl:'/wp-admin/admin-ajax.php'),loading:function(elements,show){elements.$form.css('position','relative');elements.$form.find('> .fw-form-loading').remove();if(show){elements.$form.append('<div'+' class="fw-form-loading"'+' style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.1);"'+'></div>');}},afterSubmitDelay:function(elements){},onErrors:function(elements,data){if(isAdmin){fwForm.backend.showFlashMessages(fwForm.backend.renderFlashMessages({error:data.errors}));}else{jQuery.each(data.errors,function(inputName,message){message='<p class="form-error" style="color: #9b2922;">{message}</p>'.replace('{message}',message);var $input=elements.$form.find('[name="'+inputName+'"]').last();if(!$input.length){$input=elements.$form.find('[name^="'+inputName+'["]').last();}
if($input.length){$input.parent().after(message);}else{elements.$form.prepend(message);}});}},hideErrors:function(elements){elements.$form.find('.form-error').remove();},onAjaxError:function(elements,data){console.error(data.jqXHR,data.textStatus,data.errorThrown);alert('Ajax error (more details in console)');},onSuccess:function(elements,ajaxData){if(isAdmin){fwForm.backend.showFlashMessages(fwForm.backend.renderFlashMessages(ajaxData.flash_messages));}else{var html=fwForm.frontend.renderFlashMessages(ajaxData.flash_messages);if(!html.length){html='<p>Success</p>';}
elements.$form.fadeOut(function(){elements.$form.html(html).fadeIn();});elements.$form.on('submit',function(e){e.preventDefault();e.stopPropagation();});}}},opts||{}),isAdmin=(typeof adminpage!='undefined'&&jQuery(document.body).hasClass('wp-admin')),isBusy=false;jQuery(document.body).on('submit',opts.selector,function(e){e.preventDefault();if(isBusy){console.warn('Working... Try again later.');return;}
var $form=jQuery(this);if(!$form.is('form[data-fw-form-id]')){console.error('This is not a FW_Form','Selector:'.opts.selector,'Form:',$form);return;}
{var $submitButton=$form.find(':submit:focus');if(!$submitButton.length){$submitButton=$form.find('[clicked]:submit');}
$form.find('[clicked]:submit').removeAttr('clicked');}
var elements={$form:$form,$submitButton:$submitButton};opts.hideErrors(elements);var delaySubmit=parseInt(opts.loading(elements,!$form.hasClass('fw-silent-submit')));delaySubmit=(isNaN(delaySubmit)||delaySubmit<0)?0:delaySubmit;$form.removeClass('fw-silent-submit');isBusy=true;setTimeout(function(){if(delaySubmit){opts.afterSubmitDelay(elements);}
jQuery.ajax({type:"POST",url:opts.ajaxUrl,data:$form.serialize()+($submitButton.length?'&'+$submitButton.attr('name')+'='+$submitButton.attr('value'):''),dataType:'json'}).done(function(r){isBusy=false;opts.loading(elements,false);if(r.success){opts.onSuccess(elements,r.data);}else{opts.onErrors(elements,r.data);}}).fail(function(jqXHR,textStatus,errorThrown){isBusy=false;opts.loading(elements,false);opts.onAjaxError(elements,{jqXHR:jqXHR,textStatus:textStatus,errorThrown:errorThrown});});},delaySubmit);});},backend:{showFlashMessages:function(messagesHtml){var $pageTitle=jQuery('.wrap h2:first');while($pageTitle.next().is('.fw-flash-messages, .fw-flash-message, .updated, .update-nag, .error')){$pageTitle.next().remove();}
$pageTitle.after('<div class="fw-flash-messages">'+messagesHtml+'</div>');jQuery(document.body).animate({scrollTop:0},300);},renderFlashMessages:function(flashMessages){var html=[],typeHtml=[],messageClass='';jQuery.each(flashMessages,function(type,messages){typeHtml=[];switch(type){case'error':messageClass='error';break;case'warning':messageClass='update-nag';break;default:messageClass='updated';}
jQuery.each(messages,function(messageId,message){typeHtml.push('<div class="'+messageClass+' fw-flash-message"><p>'+message+'</p></div>');});if(typeHtml.length){html.push('<div class="fw-flash-type-'+type+'">'+typeHtml.join('</div><div class="fw-flash-type-'+type+'">')+'</div>');}});return html.join('');}},frontend:{renderFlashMessages:function(flashMessages){var html=[],typeHtml=[],messageClass='';jQuery.each(flashMessages,function(type,messages){typeHtml=[];jQuery.each(messages,function(messageId,message){typeHtml.push('<li class="fw-flash-message">'+message+'</li>');});if(typeHtml.length){html.push('<ul class="fw-flash-type-'+type+'">'+typeHtml.join('</ul><ul class="fw-flash-type-'+type+'">')+'</ul>');}});return html.join('');}}};if(false){jQuery(function($){fwForm.initAjaxSubmit({selector:'form[data-fw-form-id][data-fw-ext-forms-type="contact-forms"]',ajaxUrl:ajaxurl});});};(function($){"use strict";var logo_rotate=$("header .wed_logo_animation").attr('data-rotate');if(logo_rotate!=''){$("header .wed_logo_animation").addClass('wed_logo_rotate_'+logo_rotate);}
$("header .wed_logo_animation").lettering();$("header .wed_logo_animation span").each(function(){var min=0;var max=50;var randomNumber=Math.floor(Math.random()*(max-min+1)+min);$(this).css('transition-delay','0.'+randomNumber+'s');});if($('.wed_particles').length>0){$('.wed_particles').particleground({dotColor:'#fff',lineColor:'#fff',particleRadius:'3',lineWidth:'0.5'});};if($('.jqueryFireFly').length>0){$('.jqueryFireFly').each(function(){var total=$(this).attr('data-total');var minPixel=$(this).attr('data-minPixel');var maxPixel=$(this).attr('data-maxPixel');$.firefly({minPixel:minPixel,maxPixel:maxPixel,color:'none',total:total,twinkle:0.9,on:'.wed_firefly'});});};$('.wed_timer').appear(function(){var e=$(this);e.countTo({from:0,to:e.html(),speed:1300,refreshInterval:60})})
$('.date_picker').datepicker();if($("form[data-fw-form-id]").length){fwForm.initAjaxSubmit({selector:'form[data-fw-form-id][data-fw-ext-forms-type="contact-forms"]',});}
$('.lightbox').magnificPopup({type:'image',gallery:{enabled:true}});$('.video').magnificPopup({type:'iframe',iframe:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'</div>',patterns:{youtube:{index:'youtube.com/',id:'v=',src:'http://www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'http://player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}},srcAction:'iframe_src',}});$(".wed_slider_carousel").owlCarousel({navigation:true,responsive:true,responsiveRefreshRate:200,responsiveBaseElement:window,slideSpeed:200,addClassActive:true,paginationSpeed:200,rewindSpeed:200,items:1,autoPlay:false,touchDrag:false,singleItem:true,transitionStyle:'fade',navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']});$(".wed_team_slider").owlCarousel({navigation:true,responsive:true,responsiveRefreshRate:600,responsiveBaseElement:window,slideSpeed:1500,addClassActive:true,paginationSpeed:700,rewindSpeed:3000,items:3,itemsTablet:[1000,2],itemsMobile:[569,1],itemsDesktop:3,autoPlay:true,touchDrag:false,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']});$(".wed_services_slider").owlCarousel({navigation:true,responsive:true,responsiveRefreshRate:400,responsiveBaseElement:window,slideSpeed:400,addClassActive:true,paginationSpeed:900,rewindSpeed:400,transitionStyle:"goDown",items:1,autoPlay:true,singleItem:true,autoHeight:true,touchDrag:false,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']});$(".wed_team_slider_single").owlCarousel({navigation:true,responsive:true,responsiveRefreshRate:200,responsiveBaseElement:window,slideSpeed:200,addClassActive:true,paginationSpeed:200,rewindSpeed:200,items:1,autoPlay:true,singleItem:true,autoHeight:true,touchDrag:false,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']});$(".wed_shop_item_slider").owlCarousel({navigation:true,responsive:true,responsiveRefreshRate:200,responsiveBaseElement:window,slideSpeed:200,addClassActive:true,paginationSpeed:200,rewindSpeed:200,singleItem:true,autoPlay:false,touchDrag:false,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']});$(".wed_slide_gallery").owlCarousel({navigation:true,responsive:true,responsiveRefreshRate:600,responsiveBaseElement:window,slideSpeed:1500,addClassActive:true,paginationSpeed:700,rewindSpeed:3000,items:3,itemsTablet:[1000,2],itemsMobile:[569,1],itemsDesktop:3,autoPlay:true,touchDrag:false,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']});$('.tweets-feed').each(function(index){jQuery(this).attr('id','tweets-'+index);}).each(function(index){var TweetConfig={"id":jQuery('#tweets-'+index).attr('data-widget-id'),"domId":'',"maxTweets":1,"enableLinks":true,"showUser":true,"showTime":true,"dateFunction":'',"showRetweet":false,"customCallback":handleTweets};function handleTweets(tweets){var x=tweets.length;var n=0;var element=document.getElementById('tweets-'+index);var html='<ul class="slides">';while(n<x){html+='<li>'+tweets[n]+'</li>';n++;}
html+='</ul>';element.innerHTML=html;return html;}
twitterFetcher.fetch(TweetConfig);});$('.wed_image_bck').each(function(){var image=$(this).attr('data-image');var gradient=$(this).attr('data-gradient');var color=$(this).attr('data-color');var border=$(this).attr('data-border');var blend=$(this).attr('data-blend');var opacity=$(this).attr('data-opacity');var position=$(this).attr('data-position');var height=$(this).attr('data-height');if(image){$(this).css('background-image','url('+image+')');}
if(gradient){$(this).css('background-image',gradient);}
if(color){$(this).css('background-color',color);}
if(border){$(this).css('border-color',border);}
if(blend){$(this).css('background-blend-mode',blend);}
if(position){$(this).css('background-position',position);}
if(opacity){$(this).css('opacity',opacity);}
if(height){$(this).css('height',height);}});$('.wed_over, .wed_head_bck').each(function(){var color=$(this).attr('data-color');var image=$(this).attr('data-image');var opacity=$(this).attr('data-opacity');var blend=$(this).attr('data-blend');if(color){$(this).css('background-color',color);}
if(image){$(this).css('background-image','url('+image+')');}
if(opacity){$(this).css('opacity',opacity);}
if(blend){$(this).css('mix-blend-mode',blend);}});$('.wed_map_over').on("click",function(e){$(this).parents('.wed_map_wrapper').toggleClass('active_map');});$('.wed_top_menu_cont .page_item_has_children > a, .wed_top_menu_cont .menu-item-has-children > a').on("click",function(e){$(this).next('ul.children, ul.sub-menu').slideToggle(300);e.preventDefault();});$('.wed_top_menu_mobile_link').on("click",function(e){$(this).next('.wed_top_menu_cont').fadeToggle();$(this).parents('.wed_light_nav').toggleClass('active');});$('.wed_music_content').on('click',function(e){e.preventDefault();$(this).next('.wed_iframe').toggleClass('active');});$('.wed_go').on("click",function(e){var anchor=$(this);$('html, body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top},2300);e.preventDefault();});$('.wed_top_menu_cont a[href*=\\#]:not([href=\\#])').on("click",function(){$('.wed_top_menu_cont a[href*=\\#]:not([href=\\#])').removeClass('active');$(this).addClass('active');$(".lec_main_menu").trigger('click');if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')||location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},1000);return false;}}});$('div[data-animation=animation_blocks]').each(function(){var i=0;$(this).find('.wed_icon_box, .skill-bar-content, .wed_anim_box, .wed_bd, .wed_story_txt, .wed_portfolio_item_cont').each(function(){$(this).css('transition-delay','0.'+i+'s');i++;})})
$('.increase-qty').on("click",function(e){var qtya=$(this).parents('.add-to-cart').find('.qty').val();var qtyb=qtya*1+1;$(this).parents('.add-to-cart').find('.qty').val(qtyb);e.preventDefault();});$('.decrease-qty').on("click",function(e){var qtya=$(this).parents('.add-to-cart').find('.qty').val();var qtyb=qtya*1-1;if(qtyb<1){qtyb=1;}
$(this).parents('.add-to-cart').find('.qty').val(qtyb);e.preventDefault();});var top_offset=$('header').height()-1;$('#nav-sidebar, .wed_top_menu_cont').onePageNav({currentClass:'current',changeHash:false,scrollSpeed:700,scrollOffset:top_offset,scrollThreshold:0.5,filter:'',easing:'swing',});$('[data-toggle="tooltip"]').tooltip();$('[data-toggle="popover"]').popover();$(window).scroll(function(){if($(window).scrollTop()>100){$(".wed_logo").addClass('active');$('body').addClass('wed_first_step');}
else{$('body').removeClass('wed_first_step');$(".wed_logo").removeClass('active');}
if($(window).scrollTop()>500){$('body').addClass('wed_second_step');}
else{$('body').removeClass('wed_second_step');}
if($(window).scrollTop()>800){$('body').addClass('wed_third_step');}
else{$('body').removeClass('wed_third_step');}});$(".wed_fixed").css("background-attachment","fixed");if(!device.tablet()&&!device.mobile()){$('.wed_auto_height').each(function(){setEqualHeight($(this).find('div[class^="col"], div[class^="fw-col"]'));});}
if(device.tablet()&&device.landscape()){$('.wed_auto_height').each(function(){setEqualHeight($(this).find('div[class^="col"], div[class^="fw-col"]'));});}
$(window).resize(function(){if(!device.tablet()&&!device.mobile()){$('.wed_auto_height').each(function(){setEqualHeight($(this).find('div[class^="col"], div[class^="fw-col"]'));});}
if(device.tablet()&&device.landscape()){$('.wed_auto_height').each(function(){setEqualHeight($(this).find('div[class^="col"], div[class^="fw-col"]'));});}});function setEqualHeight(columns)
{var tallestcolumn=0;columns.each(function()
{$(this).css('height','auto');var currentHeight=$(this).height();if(currentHeight>tallestcolumn)
{tallestcolumn=currentHeight;}});columns.height(tallestcolumn);}
$(window).load(function(){$("body").imagesLoaded(function(){$(".wed_page_loader div").fadeOut();$(".wed_page_loader").delay(200).fadeOut("slow");});if(!device.tablet()&&!device.mobile()){var s=skrollr.init({forceHeight:false,});$(window).stellar({horizontalScrolling:false,responsive:true,});}
$('.wed_countdown').each(function(){var year=$(this).attr('data-year');var month=$(this).attr('data-month');var day=$(this).attr('data-day');$(this).countdown({until:new Date(year,month-1,day)});});var $grid=$('.grid').isotope({itemSelector:'.grid-item',percentPosition:true,masonry:{columnWidth:'.grid-item'}});$grid.imagesLoaded().progress(function(){$grid.isotope('layout');});$(window).resize(function(){$grid.isotope('layout');});$('.masonry').masonry({itemSelector:'.masonry-item',});$('.filter-button-group').on('click','a',function(){$(this).parents('.filter-button-group').find('a').removeClass('active');$(this).addClass('active');var filterValue=$(this).attr('data-filter');$grid.isotope({filter:filterValue});});});})(jQuery);
!function(e,a){"use strict";function t(a){var t=e.extend({},O,a);m=e("body"),b=w(),P=b!==!1,P||(b="transitionend.wallpaper");for(var o=e(this),i=0,n=o.length;n>i;i++)r.apply(o.eq(i),[e.extend({},t)]);return m.hasClass("wallpaper-inititalized")||(m.addClass("wallpaper-inititalized"),T.on("resize.wallpaper",t,u)),o}function r(a){var t=e(this);if(!t.hasClass("wallpaper")){e.extend(a,t.data("wallpaper-options")),t.addClass("wallpaper").append('<div class="wallpaper-container"></div>'),a.guid="wallpaper-"+x++,a.youTubeGuid=0,a.$target=t,a.$container=a.$target.find(".wallpaper-container"),a.$target.data("wallpaper",a).on("resize.wallpaper",a,d);var r=a.source;a.source=null,o(r,a,!0),a.onReady.call()}}function o(e,t,r){if(e!==t.source){if(t.source=e,t.isYouTube=!1,"object"==typeof e&&"string"==typeof e.video){var o=e.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);o&&o.length>=1&&(t.isYouTube=!0,t.videoId=o[1])}if(t.isYouTube)t.playing=!1,t.playerReady=!1,t.posterLoaded=!1,l(e,t,r);else if("object"!=typeof e||e.hasOwnProperty("fallback")){if(t.responsiveSource)for(var p in t.responsiveSource)t.responsiveSource.hasOwnProperty(p)&&t.responsiveSource[p].mq.removeListener(c);if(t.responsive=!1,t.responsiveSource=null,"object"==typeof e){var s,d=[];for(var u in e)if(e.hasOwnProperty(u)){var f="fallback"===u?"(min-width: 0px)":u;if(f){var h=a.matchMedia(f.replace(1/0,"100000px"));h.addListener(c),d.push({mq:h,source:e[u]}),h.matches&&(s=e[u])}}t.responsive=!0,t.responsiveSource=d,e=s}i(e,t,!1,r)}else n(e,t,r)}else t.$target.trigger("wallpaper.loaded"),t.onLoad.call(t.$target)}function i(a,t,r,o){var i=e('<div class="wallpaper-media wallpaper-image'+(o!==!0?" animated":"")+'"><img /></div>'),n=i.find("img"),l=a;n.one("load.wallpaper",function(){S&&i.addClass("native").css({backgroundImage:"url('"+l+"')"}),i.on(b,function(a){y(a),e(a.target).is(i)&&(i.off(b),r||p(t))}),setTimeout(function(){i.css({opacity:1}),t.responsive&&o&&p(t)},0),d({data:t}),(!r||o)&&(t.$target.trigger("wallpaper.loaded"),t.onLoad.call(t.$target)),C=e(".wallpaper-responsive")}).attr("src",l),t.responsive&&i.addClass("wallpaper-responsive"),t.$container.append(i),(n[0].complete||4===n[0].readyState)&&n.trigger("load.wallpaper")}function n(a,t,r){if(t.source.poster&&(i(t.source.poster,t,!0,!0),r=!1),!R){var o='<div class="wallpaper-media wallpaper-video'+(r!==!0?" animated":"")+'">';o+="<video",t.loop&&(o+=" loop"),t.mute&&(o+=" muted"),o+=">",t.source.webm&&(o+='<source src="'+t.source.webm+'" type="video/webm" />'),t.source.mp4&&(o+='<source src="'+t.source.mp4+'" type="video/mp4" />'),t.source.ogg&&(o+='<source src="'+t.source.ogg+'" type="video/ogg" />'),o+="</video>",o+="</div>";var n=e(o),l=n.find("video");l.one("loadedmetadata.wallpaper",function(){n.on(b,function(a){y(a),e(a.target).is(n)&&(n.off(b),p(t))}),setTimeout(function(){n.css({opacity:1})},0),d({data:t}),t.$target.trigger("wallpaper.loaded"),t.onLoad.call(t.$target),t.hoverPlay?t.$target.on("mouseover.boxer",k.play).on("mouseout.boxer",k.pause):t.autoPlay&&this.play()}),t.$container.append(n)}}function l(t,r,o){if(!r.videoId){var n=t.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);r.videoId=n[1]}if(r.posterLoaded||(r.source.poster||(r.source.poster="http://img.youtube.com/vi/"+r.videoId+"/0.jpg"),r.posterLoaded=!0,i(r.source.poster,r,!0,o),o=!1),!R)if(e("script[src*='youtube.com/iframe_api']").length||e("head").append('<script src="//www.youtube.com/iframe_api"></script>'),L){var l=r.guid+"_"+r.youTubeGuid++,s="";s+='<div class="wallpaper-media wallpaper-embed'+(o!==!0?" animated":"")+'">',s+='<div id="'+l+'"></div>',s+="</div>";var u=e(s);r.$container.append(u),r.player&&(r.oldPlayer=r.player,r.player=null),r.player=new a.YT.Player(l,{videoId:r.videoId,playerVars:{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:l,loop:r.loop?1:0,autoplay:1,origin:a.location.protocol+"//"+a.location.host},events:{onReady:function(){r.playerReady=!0,r.mute&&r.player.mute(),r.hoverPlay?r.$target.on("mouseover.boxer",k.play).on("mouseout.boxer",k.pause):r.autoPlay&&r.player.playVideo()},onStateChange:function(t){r.playing||t.data!==a.YT.PlayerState.PLAYING?r.loop&&r.playing&&t.data===a.YT.PlayerState.ENDED&&r.player.playVideo():(r.playing=!0,(r.hoverPlay||!r.autoPlay)&&r.player.pauseVideo(),r.$target.trigger("wallpaper.loaded"),r.onLoad.call(r.$target),u.on(b,function(a){y(a),e(a.target).is(u)&&(u.off(b),p(r))}),u.css({opacity:1})),r.$target.find(".wallpaper-embed").addClass("ready")},onPlaybackQualityChange:function(){},onPlaybackRateChange:function(){},onError:function(){},onApiChange:function(){}}}),d({data:r})}else Y.push({source:t,data:r})}function p(a){var t=a.$container.find(".wallpaper-media");t.length>=1&&(t.not(":last").remove(),a.oldPlayer=null),C=e(".wallpaper-responsive")}function s(a){var t=a.$container.find(".wallpaper-media");t.length>=1&&t.on(b,function(r){y(r),e(r.target).is(t)&&(e(this).remove(),delete a.source)}).css({opacity:0})}function d(e){y(e);for(var a=e.data,t=a.$container.find(".wallpaper-media"),r=0,o=t.length;o>r;r++){var i=t.eq(r),n=a.isYouTube?"iframe":i.find("video").length?"video":"img",l=i.find(n);if(l.length&&("img"!==n||!a.nativeSupport)){var p=a.$target.outerWidth(),s=a.$target.outerHeight(),d=g(a,l);a.width=d.naturalWidth,a.height=d.naturalHeight,a.left=0,a.top=0;var u=a.isYouTube?a.embedRatio:a.width/a.height;a.height=s,a.width=a.height*u,a.width<p&&(a.width=p,a.height=a.width/u),a.left=-(a.width-p)/2,a.top=-(a.height-s)/2,i.css({height:a.height,width:a.width,left:a.left,top:a.top})}}}function u(){e(".wallpaper").each(function(){var a=e(this).data("wallpaper");d({data:a})})}function c(){$=h($,5,f)}function f(){v($),C.each(function(){for(var a=e(this),t=(a.find("img"),a.parents(".wallpaper").data("wallpaper")),r=t.responsiveSource,o=0,n=0,l=r.length;l>n;n++)if(r.hasOwnProperty(n)){var p=r[n].mq;p&&p.matches&&(o=n)}i(r[o].source,t,!1,!0),a.trigger("change.wallpaper")})}function h(e,a,t,r){return v(e,r),setTimeout(t,a)}function v(e){null!==e&&(clearInterval(e),e=null)}function g(e,a){if(e.isYouTube)return{naturalHeight:500,naturalWidth:500/e.embedRatio};if(a.is("img")){var t=a[0];if("undefined"!=typeof t.naturalHeight)return{naturalHeight:t.naturalHeight,naturalWidth:t.naturalWidth};var r=new Image;return r.src=t.src,{naturalHeight:r.height,naturalWidth:r.width}}return{naturalHeight:a[0].videoHeight,naturalWidth:a[0].videoWidth}}function y(e){e.preventDefault&&(e.stopPropagation(),e.preventDefault())}function w(){var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},a=document.createElement("div");for(var t in e)if(e.hasOwnProperty(t)&&t in a.style)return e[t]+".wallpaper";return!1}var m,b,P,$,T=e(a),C=null,S="backgroundSize"in document.documentElement.style,x=0,L=!1,Y=[],I=a.navigator.userAgent||a.navigator.vendor||a.opera,R=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(I),O=(I.toLowerCase().indexOf("safari")>=0&&I.toLowerCase().indexOf("chrome")<0,{autoPlay:!0,embedRatio:1.777777,hoverPlay:!1,loop:!0,mute:!0,onLoad:e.noop,onReady:e.noop,source:null}),k={defaults:function(a){return O=e.extend(O,a||{}),e(this)},destroy:function(){var a=e(this).each(function(){var a=e(this).data("wallpaper");a&&(a.$container.remove(),a.$target.removeClass("wallpaper").off(".boxer").data("wallpaper",null))});return"undefined"!=typeof m&&"undefined"!=typeof T&&e(".wallpaper").length<1&&(m.removeClass("wallpaper-inititalized"),T.off(".wallpaper")),a},load:function(a){return e(this).each(function(){var t=e(this).data("wallpaper");t&&o(a,t)})},pause:function(){return e(this).each(function(){var a=e(this).data("wallpaper");if(a)if(a.isYouTube&&a.playerReady)a.player.pauseVideo();else{var t=a.$container.find("video");t.length&&t[0].pause()}})},play:function(){return e(this).each(function(){var a=e(this).data("wallpaper");if(a)if(a.isYouTube&&a.playerReady)a.player.playVideo();else{var t=a.$container.find("video");t.length&&t[0].play()}})},stop:function(){k.pause.apply(this)},unload:function(){return e(this).each(function(){var a=e(this).data("wallpaper");a&&s(a)})}};a.onYouTubeIframeAPIReady=function(){L=!0;for(var e in Y)Y.hasOwnProperty(e)&&l(Y[e].source,Y[e].data);Y=[]},e.fn.wallpaper=function(e){return k[e]?k[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?this:t.apply(this,arguments)},e.wallpaper=function(e){"defaults"===e&&k.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery,window);
;jQuery(document).ready(function($){$('.background-video').wallpaper();});
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++)if(d=i[c],!d.getAttribute("data-secret")){if(f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f),g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}else;}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);