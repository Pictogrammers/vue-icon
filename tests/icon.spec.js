import { describe, beforeEach, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import VueIcon from './../lib/icon.vue'

const path = 'M 10 10 H 90 V 90 H 10 L 10 10'

describe('VueMdi component', () => {
	let component

	beforeEach(() => {
		component = mount(VueIcon, {
			propsData: {
				path,
			},
		})
	})

	it('renders an svg with path element', () => {
		//  Checking for the existence of an svg tag
		expect(component.html()).toContain('svg')

		//  Cheking for rendering path element
		const pathEl = component.find('path')

		expect(pathEl.attributes('d')).toBe(path)
	})

	it("accepts a 'title' property", async () => {
		await component.setProps({ title: 'foo' })

		//  Cheking for rendering of the aria-labelledby attribute
		//expect(component.attributes()['aria-labelledby']).toMatch('icon_labelledby')

		//  Cheking for rendering title
		const title = component.find('title')

		expect(title.text()).toEqual('foo')
	})

	it("accepts a 'description' property", async () => {
		await component.setProps({ title: 'foo', description: 'bar' })

		//  Cheking for rendering of the aria-labelledby attribute
		//expect(component.attributes()['aria-labelledby']).toMatch('icon_labelledby').toMatch('icon_describedby')

		//  Cheking for rendering description
		const description = component.find('desc')

		expect(description.text()).toEqual('bar')
	})

	it("accepts a 'size' property", async () => {
		await component.setProps({ path, size: 2 })

		//  Checking the styles width and height properties of the svg element
		expect(component.attributes().height).toBe('2')
		expect(component.attributes().width).toBe('2')
		expect(component.attributes().viewBox).toBe('0 0 2 2')
	})

	it("accepts a 'color' property", async () => {
		await component.setProps({ path, color: '#888' })

		//  Checking the fill property of the path element
		const path = component.find('path')

		expect(path.attributes()['fill']).toEqual('#888')
	})
})
