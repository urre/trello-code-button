const addCodeButton = () => {

	var button = document.createElement('a')
	var span = document.createElement('span')
	const commmentInputBox = document.querySelector('.js-new-comment-input')
	const commmentInput = document.querySelector('.js-new-comment')
	const addCommmentButton = document.querySelector('.js-add-comment')

	if (!commmentInputBox) { return }

	span.classList.add('icon-sm')
	span.classList.add('icon-codeblock')

	button.appendChild(span)
	button.classList.add('button-link')
	button.innerHTML += '&nbsp;Code block'

	if(document.querySelector('.window-sidebar')) {
		let sidebar = document.querySelector('.window-sidebar > .u-clearfix')
		sidebar.appendChild(button)
	}

	button.addEventListener('click', function(e) {
		e.preventDefault();

		commmentInputBox.value = '```\nWrite/Paste code or script tag here and press ⌘ + Enter\n```'
		commmentInputBox.style.height = (commmentInputBox.scrollHeight) + 100 + 'px'
		commmentInputBox.parentElement.parentElement.parentElement.parentElement.classList.add('is-focused')

		addCommmentButton.disabled = false;

		setTimeout(() => {
			commmentInputBox.focus()
			commmentInputBox.setSelectionRange(4, 60)
			}, 100)

	})
}

window.onload = () => {
	setTimeout(() => {
		addCodeButton()

		const cards = document.querySelectorAll('.list-card');

			for(let card of cards) {
				card.addEventListener('click', function(){
					addCodeButton()
				});
			}
		}, 1000)
}
