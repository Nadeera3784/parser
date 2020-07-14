import CSSNode from './CSSNode.js'

export default class CSSString extends CSSNode {}

const { prototype } = CSSString
const { defineProperty } = Object

defineProperty(prototype, `toStringTypes`, {
	value: {
		opener: String,
		value:  String,
		closer: String,
	},
	configurable: true,
	writable:     true,
})
