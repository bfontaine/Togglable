# TogglAjax

This jQuery plugin allows you to toggle boolean values (e.g. user settings)
using AJAX calls.

This is currently under developement.

## Usage

Add a `togglajax` class and a `data-togglajax-values` to enable TogglAjax on an
element, then call the `.togglajax` method on its container:

```
$( '#the-container' ).togglajax();
```

You can use multiple togglable elements in one container.

An URL must be given for each element. You can use the same URL for all, using:

```
$( '#the-container' ).togglajax({ url: '/foo' });
```

…Or you can set a `data-togglajax-url` on each element. Possible values should
be specified in a `data-togglajax-values`. They can be comma-separated, or a
valid JSON array of objects. Each object must have a `label` and a `value`
properties, e.g.:

```html
<span class="togglajax" data-togglajax-values="foo,bar"></span>
<span class="togglajax"
      data-togglajax-values="[{label:\\"Foo\\",
                               value:\\"foo\\",
                              },{label:\\"Bar\\",
                                 value:\\"bar\\"}]"></span>
```


### Example

```html
<div id="some-id">
    <p>Yes or no? <span class="togglajax" data-togglajax-values="yes,no"></span></p>
</div>
```

```js
$( '#some-id' ).togglajax({
    url: '/api/1/yes-or-no/toggle'
});
```
