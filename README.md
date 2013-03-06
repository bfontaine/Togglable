# Togglable

This jQuery plugin allows you to toggle boolean values (e.g. user settings)
using AJAX calls.

This is currently under developement.

## Usage

Add a `togglable` class and a `data-togglable-values` to enable Togglable on an
element, then call the `.togglable` method on its container:

```
$( '#the-container' ).togglable();
```

You can use multiple togglable elements in one container.

An URL must be given for each element. You can use the same URL for all, using:

```
$( '#the-container' ).togglable({ url: '/foo' });
```

…Or you can set a `data-togglable-url` on each element. Possible values should
be specified in a `data-togglable-values`. They can be comma-separated, or a
valid JSON array of objects. Each object must have a `label` and a `value`
properties, e.g.:

```html
<span class="togglable" data-togglable-values="foo,bar"></span>
<span class="togglable"
      data-togglable-values='[{label:"Foo",value:"foo"},
                              {label:"Bar",value:"bar"}]'></span>
```


### Example

```html
<div id="some-id">
    <p>Yes or no? <span class="togglable" data-togglable-values="yes,no"></span></p>
</div>
```

```js
$( '#some-id' ).togglable({
    url: '/api/1/yes-or-no/toggle'
});
```
