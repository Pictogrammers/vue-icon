import { describe, beforeEach, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import VueIcon from './../lib/svg-icon.vue'

const path = 'M 10 10 H 90 V 90 H 10 L 10 10'

describe('Vue icon', () => {
	let component

	beforeEach(() => {
		component = mount(VueIcon, {
			propsData: {
				path,
			},
		})
	})

	it("accepts a 'type' property", async () => {
		await component.setProps({ path, type: 'mdi' })

		expect(component.attributes().height).toBe('24')
		expect(component.attributes().width).toBe('24')
		expect(component.attributes().viewBox).toBe('0 0 24 24')
	})

	it('renders an svg with path element', () => {
		expect(component.html()).toContain('svg')
		expect(component.find('path').attributes('d')).toBe(path)
	})

	it("accepts a 'size' property", async () => {
		await component.setProps({ path, size: 2 })

		expect(component.attributes().height).toBe('2')
		expect(component.attributes().width).toBe('2')
	})

	it("accepts a 'viewbox' property", async () => {
		await component.setProps({ path, viewbox: '0 0 30 30' })

		expect(component.attributes().viewBox).toBe('0 0 30 30')
	})

	it("accepts a 'flip' property", async () => {
		await component.setProps({ path, flip: 'none' })

		expect(getComputedStyle(component.element).getPropertyValue('--sx')).toBe('1')
		expect(getComputedStyle(component.element).getPropertyValue('--sy')).toBe('1')

		await component.setProps({ path, flip: 'both' })

		expect(getComputedStyle(component.element).getPropertyValue('--sx')).toBe('-1')
		expect(getComputedStyle(component.element).getPropertyValue('--sy')).toBe('-1')

		await component.setProps({ path, flip: 'horizontal' })

		expect(getComputedStyle(component.element).getPropertyValue('--sx')).toBe('-1')
		expect(getComputedStyle(component.element).getPropertyValue('--sy')).toBe('1')

		await component.setProps({ path, flip: 'vertical' })

		expect(getComputedStyle(component.element).getPropertyValue('--sx')).toBe('1')
		expect(getComputedStyle(component.element).getPropertyValue('--sy')).toBe('-1')
	})

	it("accepts a 'rotate' property", async () => {
		await component.setProps({ path, rotate: 90 })

		expect(getComputedStyle(component.element).getPropertyValue('--r')).toBe('90deg')
	})
})
