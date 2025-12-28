# Alpine.js Wrapper for Stylish Select

## Dependencies

- [Stylish Select](https://cdn.cruzium.info/plugin/stylish-select/)

## Installation

*Include JS file*

```html
<script type="text/javascript" src="https://cdn.cruzium.info/angular-stylishselect/latest/angular-stylishselect.min.js"></script>
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

*To Set Default Options Globally*
```javascript
app.config(function(ngStylishselectConfigProvider) {
	ngStylishselectConfigProvider.setDefaults({
		...
	});
});
```

## Options

Refer to [Options](https://cdn.cruzium.info/doc/stylish-select/latest/readme.md#options) section.

## Limitations

Refer to [Limitiations](https://cdn.cruzium.info/doc/stylish-select/latest/readme.md#limitations) section.

## Support This Project

[!["Buy Me a Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://buymeacoffee.com/cruziumdigital)
