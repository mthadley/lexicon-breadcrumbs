import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './LexiconBreadcrumbs.soy';

/**
 * Implementation of the Lexicon Breadcrumbs Element
 *
 * @see  {@link http://liferay.github.io/lexicon/content/breadcrumbs/|Lexicon Definition}
 */
class LexiconBreadcrumbs extends Component {
}

/**
 * State definition.
 * @ignore
 * @static
 * @type {!Object}
 */
LexiconBreadcrumbs.STATE = {
	/**
	 * @typedef Item
	 * @type {object}
	 * @property {?boolean} active - Whether or not the item will be rendered as active.
	 * @property {?string} href - href for the link.
	 * @property {!string} label - Text to display for the item.
	 */

	/**
	 * The items to be rendered as breadcrumbs.
	 * @default []
	 * @instance
	 * @memberof LexiconBreadcrumbs
	 * @type {Array.<Item>}
	 */
	items: {
		validator: core.isArray,
		value: []
	}
};

// Register component
Soy.register(LexiconBreadcrumbs, templates);

export default LexiconBreadcrumbs;
