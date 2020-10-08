Consider using the [webcomponent version](https://github.com/JamesCoyle/svg-icon) of this component for an icon component that can be used in any modern browser with any framework.

# Vue Icon Component

[![](https://chips.james-coyle.now.sh/npm/version/@jamescoyle/vue-icon)](https://www.npmjs.com/package/@jamescoyle/vue-icon)
[![](https://chips.james-coyle.now.sh/npm/downloads/@jamescoyle/vue-icon)](https://www.npmjs.com/package/@jamescoyle/vue-icon)

An icon component which makes it easy to render SVG path based icons in any Vue project. Provides several helpful properties to manipulate the icon and supports any icon pack which provides icons as a single SVG path to be displayed on a square viewbox.

# Usage

1. Install from NPM
   ```
   npm install @jamescoyle/vue-icon
   ```

2. Import into your project
   ``` 
   import SvgIcon from '@jamescoyle/vue-icon'
   ```

## SFC Example
The following example uses [@mdi/js](https://www.npmjs.com/package/@mdi/js) which provides a wide range of icon paths. It shows how you might use an icon within a single file component.

```
<template>
  <svg-icon type="mdi" :path="path" :size="48"></svg-icon>
</template>


<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

export default {
	name: "my-cool-component",

	components: {
		SvgIcon
	},

  	data() {
		return {
			path: mdiAccount,
	  	}
  	}
}
</script>
```

# Props

| Name    | Default     | Description                                                                                                                          |
| ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| type    | null        | This sets the size and viewbox to match the recommended size for the icon pack specified.                                            |
| path    | null        | Required. An SVG path to render as an icon                                                                                           |
| size    | 24          | The width and height of the SVG element                                                                                              |
| viewbox | "0 0 24 24" | The `viewBox` of the SVG element                                                                                                     |
| flip    | null        | One of "horizontal", "vertical", or "both". Flips the icon in the specified direction(s).                                            |
| rotate  | 0deg        | Rotates the icon by the specified value. Can be any valid [CSS angle](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) value. |

# Styling

By default the icon will inherit the current font color of the container it is placed within. You can easily provide a specific color using an inline style on the element (`style="color: red"`) or can target the tag as normal with CSS rules.

# Accessibility

You should make use of aria attributes to improve accessibility for users that use screen reading technology. You can use `aria-labelledby` to create a link between an icon and its label. A descriptive `aria-label` can be used to allow screen readers to announce an icon if there is no visual label to accompany it.
