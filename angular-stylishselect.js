/**
 * AngularJS wrapper for Stylish Select
 * @version 1.0.0
 * @author Tony Leung <tony.leung@cruzium.com>
 * @copyright Copyright (c) 2025 Cruzium Digital
 * @license https://opensource.org/license/gpl-3-0/ GPL-3.0-only
 */

'use strict';
angular.module('ngStylishselect', []).directive('ngStylishselect', function($timeout, $parse) {
	return({
		require: 'ngModel',
		link: function($scope, $element, $attrs, ngModel) {
			return($timeout(function() {
				var instance = new StylishSelect($element[0]);
				$scope.$watch($attrs['ngModel'], function(value) {
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
