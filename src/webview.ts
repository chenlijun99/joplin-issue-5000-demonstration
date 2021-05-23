document.addEventListener('click', event => {
	const element = event.target;
	// @ts-ignore
	if (element.className === 'toc-item-link') {
		// @ts-ignore
		console.debug('TOC Plugin Webview: Sending scrollToHash message', element.dataset.slug);
		// @ts-ignore
		webviewApi.postMessage({
			name: 'scrollToHash',
			// @ts-ignore
			hash: element.dataset.slug,
		});
	}
})
