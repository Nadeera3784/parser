import CSSToken from '../CSSToken.js'
import fromTokenizer from './CSSComment.fromTokenizer.js'

import { assign, defineClass } from '../../../utils/define.js'

export default function CSSComment(init) {
	assign(this, init)
}

defineClass(
	CSSComment,
	CSSToken,
	{
		props: [ 6, [ `opener`, `value`, `closer` ] ],
	},
	{
		fromTokenizer: [ 7, fromTokenizer ],
	}
)
