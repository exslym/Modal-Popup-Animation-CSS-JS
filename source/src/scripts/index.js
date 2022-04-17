import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	const modal = document.querySelector('#modal');
	const openModal = document.querySelector('.open-button');
	const closeModal = document.querySelector('.close-button');

	openModal.addEventListener('click', () => {
		document.querySelector('html').classList.add('noScroll');
		modal.showModal();
	});

	closeModal.addEventListener('click', () => {
		document.querySelector('html').classList.remove('noScroll');
		modal.setAttribute('closing', '');
		modal.addEventListener(
			'animationend',
			() => {
				modal.removeAttribute('closing');
				modal.close();
			},
			{ once: true }
		);
	});

	modal.addEventListener('click', function (e) {
		if (e.target.nodeName === 'DIALOG') {
			document.querySelector('html').classList.remove('noScroll');
			modal.setAttribute('closing', '');
			modal.addEventListener(
				'animationend',
				() => {
					modal.removeAttribute('closing');
					modal.close();
				},
				{ once: true }
			);
		}
	});
});
