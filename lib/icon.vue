<template>
	<svg width="24" height="24" viewBox="0 0 24 24">
		<title v-if="title">{{ title }}</title>
		<desc v-if="description">{{ description }}</desc>
		<path :d="path" :fill="color" />
	</svg>
</template>

<script>
export default {
	name: 'icon',

	props: {
		path: String,
		color: String,
		title: String,
		description: String,
	},
}
</script>
