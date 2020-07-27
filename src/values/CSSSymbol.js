import { defineClass } from './CSSValue.utils.js'
import { symbolOfImportant } from '../tokenize.strings.js'
import CSSToken from './CSSToken.js'

/**
 * ## CSSSymbol
 *
 * The CSSSymbol class is the token object for all symbols in CSS.
 *
 * @class @extends {CSSToken}
 * @argument {string} value - Value of the symbol.
 */
export default function CSSSymbol(value) {
	this.value = value == null ? symbolOfImportant : String(value)
}

defineClass(`CSSSymbol`, CSSSymbol, CSSToken, {
	type: [ 10, function () {
		return this.value.charCodeAt(0)
	} ],
})