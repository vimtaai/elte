// 5. Az oldalon minden olyan hivatkozást tiltsunk le, amelyik nem ELTÉs címre mutat!
// const linkElements = document.querySelectorAll("a");
// const body = document.querySelector("body"); // document.body

function onLinkClick(event) {
	const realTarget = event.target.closest("a");

	if (realTarget === null) {
		return;
	}

	console.log(event);
	const linkElement = event.target;
	const href = linkElement.getAttribute("href");
	console.log(href);
	const url = new URL(href);
	const domain = url.hostname;
	// console.log(url);

	if (!domain.endsWith("elte.hu")) {
		event.preventDefault();
	}
}

// for (const linkElement of linkElements) {
//     linkElement.addEventListener("click", onLinkClick);
// }
document.body.addEventListener("click", onLinkClick);
