<template>
  <svg :width="size" :height="size" :viewBox="viewbox" :class="classes" :style="styles">
    <title v-if="title">{{ title }}</title>
    <desc v-if="description">{{ description }}</desc>
    <path :d="path" :fill="color" />
  </svg>
</template>

<script>
export default {
  name: "icon",

  props: {
    title: String,
    description: String,
    path: { type: String, required: true },
    size: { type: Number, default: 24 },
    flip: {
      type: String,
      validator: () =>
        ["horizontal", "vertical", "both", "none"].includes(value),
    },
    rotate: { type: Number, default: 0 },
    color: { type: String, default: "black" },
    spin: [Boolean, Number],
  },

  computed: {
    classes() {
      return {
        icon: true,
        "flip-horizontal": ["horizontal", "both"].includes(this.flip),
        "flip-vertical": ["vertical", "both"].includes(this.flip),
      };
    },

    styles() {
      return {
        "--rotation": this.rotate + "deg",
      };
    },

    viewbox() {
      return `0 0 ${this.size} ${this.size}`;
    },
  },
};
</script>

<style scoped>
.icon {
  transform: translate(var(--scale-x, 1), var(--scale-y, 1))
    rotate(var(--rotation));
}

.flip-horizontal {
  --scale-x: -1;
}

.flip-vertical {
  --scale-y: -1;
}
</style>