import { describe, beforeEach, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import VueIcon from './../lib/icon.vue'

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

	it('renders an svg with path element', () => {
		expect(component.html()).toContain('svg')
		expect(component.find('path').attributes('d')).toBe(path)
	})

	it("has the 'icon' class", () => {
		expect(component.classes()).toContain('icon')
	})

	it("accepts a 'title' property", async () => {
		await component.setProps({ title: 'foo' })

		expect(component.find('title').text()).toEqual('foo')
	})

	it("accepts a 'description' property", async () => {
		await component.setProps({ title: 'foo', description: 'bar' })

		expect(component.find('desc').text()).toEqual('bar')
	})

	it("accepts a 'size' property", async () => {
		await component.setProps({ path, size: 2 })

		expect(component.attributes().height).toBe('2')
		expect(component.attributes().width).toBe('2')
		expect(component.attributes().viewBox).toBe('0 0 2 2')
	})

	it("accepts a 'flip' property", async () => {
		await component.setProps({ path, flip: 'none' })

		expect(component.classes('flip-horizontal')).toBe(false)
		expect(component.classes('flip-vertical')).toBe(false)

		await component.setProps({ path, flip: 'both' })

		expect(component.classes('flip-horizontal')).toBe(true)
		expect(component.classes('flip-vertical')).toBe(true)

		await component.setProps({ path, flip: 'horizontal' })

		expect(component.classes('flip-horizontal')).toBe(true)
		expect(component.classes('flip-vertical')).toBe(false)

		await component.setProps({ path, flip: 'vertical' })

		expect(component.classes('flip-horizontal')).toBe(false)
		expect(component.classes('flip-vertical')).toBe(true)
	})

	it("accepts a 'rotate' property", async () => {
		await component.setProps({ path, rotate: 90 })

		expect(getComputedStyle(component.element).getPropertyValue('--rotation')).toBe('90deg')
	})

	it("accepts a 'color' property", async () => {
		await component.setProps({ path, color: '#888' })

		expect(component.find('path').attributes()['fill']).toEqual('#888')
	})

	it("accepts a 'spin' property", async () => {
		await component.setProps({ path, spin: '2' })

		expect(getComputedStyle(component.element).getPropertyValue('--spin-direction')).toBe('normal')
		expect(getComputedStyle(component.element).getPropertyValue('--spin-duration')).toBe('500ms')

		await component.setProps({ path, spin: '-8' })

		expect(getComputedStyle(component.element).getPropertyValue('--spin-direction')).toBe('reverse')
		expect(getComputedStyle(component.element).getPropertyValue('--spin-duration')).toBe('125ms')
	})
})
