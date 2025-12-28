# Angular JS Wrapper for Stylish Select

## Dependencies

- [Angular JS v1.x](https://angularjs.org/)
- [Stylish Select](https://github.com/cruzium-lab/stylish-select)

## Installation

*Include JS file*

```html
<script type="text/javascript" src="https://cdn.cruzium.info/angular-stylishselect/latest/angular-stylishselect.min.js"></script>
```

*Inject Dependency to Angular App*

```javascript
window.app = angular.module('app', [ ... , 'ngStylishselect', ... ]);
```

*Configure Default Options Globally (Optional)*
```javascript
app.config(function(ngStylishselectConfigProvider) {
	ngStylishselectConfigProvider.setDefaults({
		...
	});
});
```

## Usage

*Basic HTML Markup*
```html
<select name="foo" id="foo" ng-model="foo" ng-stylishselect>
	<option value="">Please select</option>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
</select>
```

Note: The plugin requires attribute `ng-model` to work.

*With Per-instance Options*
```html
<select name="foo" id="foo" ng-model="foo" ng-stylishselect="{ ... }">
	<option value="">Please select</option>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
</select>
```

## Options

Refer to [Options](https://github.com/cruzium-lab/stylish-select#options) section.

## Limitations

Refer to [Limitiations](https://github.com/cruzium-lab/stylish-select#limitations) section.

## Support This Project

[!["Buy Me a Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://buymeacoffee.com/cruziumdigital)
