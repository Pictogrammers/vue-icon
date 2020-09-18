# Vue Icon Component

An icon component which makes it easy to render SVG path based icons in any Vue project. Provides several helpful properties to manipulate the icon and supports any icon pack which provides icons as a single SVG path to be displayed on a square viewbox.

# Usage

The following example uses [@mdi/js](https://www.npmjs.com/package/@mdi/js) which provides a wide range of icon paths. It shows how you might use an icon within a single file component.

```
<template>
  <svg-icon :path="path" :size="48" color="red"></svg-icon>
</template>


<script>
import SvgIcon from '[path-to-package]'
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

| Prop        | Type   | Default | Details                                                                                                                                                              |
| ----------- | ------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | String | null    | A11y SVG title tag contents.                                                                                                                                         |
| description | String | null    | A11y SVG description tag contents.                                                                                                                                   |
| path        | String | null    | Required. The SVG path to render.                                                                                                                                    |
| size        | Number | 24      | The size of the icon in px.                                                                                                                                          |
| flip        | string | null    | One of `horizontal`, `vertical`, or `both`. Flips the icon in the specified direction(s).                                                                            |
| rotate      | number | 0       | Rotates the icon by the given number of degrees.                                                                                                                     |
| color       | string | 'black' | Any valid CSS color. Sets the fill color of the icon.                                                                                                                |
| spin        | number | null    | Performs a spin animation on the icon. The number given is the number of rotations the icon should perform in one second. Negative numbers rotate counter-clockwise. |
