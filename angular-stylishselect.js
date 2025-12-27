/**
 * AngularJS wrapper for Stylish Select
 * @version 1.1.0
 * @author Tony Leung <tony.leung@cruzium.com>
 * @copyright Copyright (c) 2025 Cruzium Digital
 * @license https://opensource.org/license/gpl-3-0/ GPL-3.0-only
 */

'use strict';
(function() {
	var module = angular.module('ngStylishselect', []);

	module.provider('ngStylishselectConfig', function () {
		var defaults = {};
		this.setDefaults = function(options) {
			angular.extend(defaults, options);
		};
		this.$get = function() {
			return {
				get: function() {
					return(angular.copy(defaults));
				}
			};
		};
	});

	module.directive('ngStylishselect', function($parse, $timeout, ngStylishselectConfig) {
		return({
			require: 'ngModel',
			restrict: 'A',
			link: function($scope, $element, $attrs, ngModel) {
				return($timeout(function() {
					var opts = ngStylishselectConfig.get();
					if ($attrs.ngStylishselect) {
						angular.extend(opts, $parse($attrs.ngStylishselect)());
					}
					var instance = new StylishSelect($element[0], opts);
					$scope.$watch($attrs['ngModel'], function(newValue, oldValue) {
						instance.refresh();
					});
					$element.on('change', function(e) {
						ngModel.$setViewValue($attrs['value'] !== undefined ? $attrs['value'] : $element.val());
						$scope.$apply();
					});
				}));
			}
		});
	});
})();
