import '../styles/index.scss';
import { modals } from './libs/modals';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modals('modalBlock', 'openButton', 'closeButton');
});
