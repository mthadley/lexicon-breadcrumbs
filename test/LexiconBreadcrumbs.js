'use strict';

import LexiconBreadcrumbs from '../src/LexiconBreadcrumbs';

describe('LexiconBreadcrumbs', () => {
	let component;

	function getItems() {
		return [
			{
				href: '#',
				label: 'Home'
			},
			{
				href: '#',
				label: 'Components'
			},
			{
				href: '#',
				label: 'Breadcrumbs and Paginations'
			},
			{
				href: '#',
				label: 'Page'
			},
			{
				active: true,
				label: 'Active'
			}
		];
	}

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should generate a breadcrumbs when passed an items configuration', () => {
		component = new LexiconBreadcrumbs({
			items: getItems()
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testLexiconBreadcrumbs.html']);
	});

	it('should generate a breadcrumbs with elementClasses', () => {
		component = new LexiconBreadcrumbs({
			elementClasses: 'foo',
			items: getItems()
		});

		assert.strictEqual(component.element.outerHTML, __html__['test/fixture/testElementClassesLexiconBreadcrumbs.html']);
	});
});
