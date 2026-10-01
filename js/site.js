// New Hope Ceramics. Everything on the page is built from PIECES (js/pieces.js).
//   index.html              the studio: all pieces as a grid
//   index.html?k=Bowls      one kind of work
//   index.html?g=Floral     one glaze
//   index.html?p=<id>       one piece, its photos, and how to buy it
// The address is never written out in the page, so address-harvesting bots
// that read pages don't find it. It's put together only when someone clicks
// a contact button, which then opens their mail app.
var MAIL = ["moc.liamg", "htideremeeleel"];
function mailTo(subject) {
	var addr = MAIL[1].split("").reverse().join("") + "@" + MAIL[0].split("").reverse().join("");
	location.href = "mailto:" + addr + (subject ? "?subject=" + encodeURIComponent(subject) : "");
}
function contactButton(cls, text, subject) {
	var b = el("button", { type: "button", class: cls, text: text });
	b.addEventListener("click", function () { mailTo(subject); });
	return b;
}
var FACEBOOK = "https://www.facebook.com/NewHopeCeramics";
var INSTAGRAM = "https://www.instagram.com/newhopeceramics/";
var LEE = "https://leemeredith.github.io/";
var IMG = "media/img/";

var ROOMS = [
	{ label: "Kitchen", kinds: ["Bowls", "Containers", "Pitchers", "Platters"] },
	{ label: "Lounge", kinds: ["Knitting Bowls", "Lamps", "Tile", "Vessels"] },
	{ label: "Studio", kinds: ["Building", "Process", "Glazing", "Earlier work"] }
];
var GLAZES = ["Color", "Floral", "White"];

function el(tag, attrs, children) {
	var node = document.createElement(tag);
	for (var k in attrs || {}) {
		if (k === "text") node.textContent = attrs[k];
		else node.setAttribute(k, attrs[k]);
	}
	(children || []).forEach(function (c) { if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
	return node;
}

// A photo, with its smaller WebP copy offered first.
function photo(src, alt, lazy) {
	var img = el("img", { src: IMG + src, alt: alt || "" });
	if (lazy) img.setAttribute("loading", "lazy");
	return el("picture", {}, [el("source", { type: "image/webp", srcset: IMG + src.replace(/\.\w+$/, ".webp") }), img]);
}

function cover(p) {
	if (p.images.length) return photo(p.images[0], p.title, true);
	return el("span", { class: "no-photo", text: "Photos to come" });
}

function link(q) { return "index.html?" + q; }
function pieceLink(p) { return link("p=" + encodeURIComponent(p.id)); }

// Menus ---------------------------------------------------------------
function dropdown(label, items) {
	var button = el("button", { type: "button", class: "menu-button", "aria-expanded": "false", text: label });
	var list = el("div", { class: "menu-list" }, items);
	var wrap = el("div", { class: "menu" }, [button, list]);
	button.addEventListener("click", function () {
		var open = !wrap.classList.contains("open");
		closeMenus();
		wrap.classList.toggle("open", open);
		button.setAttribute("aria-expanded", open);
	});
	return wrap;
}

function closeMenus() {
	document.querySelectorAll(".menu.open").forEach(function (m) {
		m.classList.remove("open");
		m.querySelector("button").setAttribute("aria-expanded", "false");
	});
}

function count(filter) { return PIECES.filter(filter).length; }

function renderMenu() {
	var nav = document.getElementById("menu");
	ROOMS.forEach(function (room) {
		nav.appendChild(dropdown(room.label, room.kinds.map(function (k) {
			return el("a", { href: link("k=" + encodeURIComponent(k)), text: k + " (" + count(function (p) { return p.kind === k; }) + ")" });
		})));
	});
	nav.appendChild(dropdown("Glaze", GLAZES.map(function (g) {
		return el("a", { href: link("g=" + g), text: g + " (" + count(function (p) { return p.glaze.indexOf(g) >= 0; }) + ")" });
	})));
	nav.appendChild(dropdown("Purchase", [
		contactButton("menu-item", "By email", "New Hope Ceramics"),
		el("a", { href: FACEBOOK, rel: "noopener", text: "On Facebook" })
	]));
	nav.appendChild(contactButton("menu-button", "Contact", "New Hope Ceramics"));
	document.addEventListener("click", function (e) { if (!e.target.closest(".menu")) closeMenus(); });
	document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenus(); });
}

// Pages ---------------------------------------------------------------
function tile(p) {
	return el("a", { class: "tile", href: pieceLink(p) }, [
		cover(p),
		el("span", { class: "tile-title", text: p.title }),
		el("span", { class: "tile-kind", text: [p.kind].concat(p.glaze).join(" · ") })
	]);
}

function renderGrid(title, list, intro) {
	var main = document.getElementById("main");
	document.title = (title ? title + " — " : "") + "New Hope Ceramics";
	if (title) main.appendChild(el("h1", { text: title }));
	if (intro) main.appendChild(el("p", { class: "intro", text: intro }));
	main.appendChild(list.length ? el("div", { class: "grid" }, list.map(tile)) : el("p", { text: "Nothing here yet." }));
}

function buyBox(p) {

	return el("aside", { class: "buy" }, [
		el("h2", { text: "Interested in this piece?" }),
		el("p", { text: "Pieces are sold directly from the studio. Get in touch to ask about availability and price." }),
		el("p", { class: "buy-links" }, [
			contactButton("buy-button", "Email the studio", "New Hope Ceramics: " + p.title),
			el("a", { class: "buy-button", href: FACEBOOK, rel: "noopener", text: "Message on Facebook" })
		])
	]);
}

function renderPiece(p) {
	var main = document.getElementById("main");
	document.title = p.title + " — New Hope Ceramics";
	main.appendChild(el("p", { class: "crumb" }, [
		el("a", { href: link("k=" + encodeURIComponent(p.kind)), text: p.kind }),
		p.glaze.length ? " · " + p.glaze.join(", ") + " glaze" : "",
		p.handbuilt ? " · Handbuilt" : ""
	]));
	main.appendChild(el("h1", { text: p.title }));
	if (p.room !== "Studio") main.appendChild(buyBox(p));
	main.appendChild(p.images.length
		? el("div", { class: "photos" }, p.images.map(function (src, i) { return photo(src, p.title + (p.images.length > 1 ? ", photo " + (i + 1) : ""), i > 0); }))
		: el("p", { class: "no-photo wide", text: "Photos to come" }));
	(p.links || []).forEach(function (l) {
		main.appendChild(el("p", {}, [el("a", { href: l.url, rel: "noopener", text: l.label })]));
	});
	var more = PIECES.filter(function (q) { return q !== p && q.kind === p.kind; })
		.concat(PIECES.filter(function (q) { return q !== p && q.kind !== p.kind && q.glaze.some(function (g) { return p.glaze.indexOf(g) >= 0; }); }))
		.slice(0, 6);
	if (more.length) {
		main.appendChild(el("h2", { class: "more-title", text: "More like this" }));
		main.appendChild(el("div", { class: "grid" }, more.map(tile)));
	}
}

function renderPage() {
	var q = new URLSearchParams(location.search);
	var p = PIECES.filter(function (x) { return x.id === q.get("p"); })[0];
	if (p) return renderPiece(p);
	if (q.get("k")) return renderGrid(q.get("k"), PIECES.filter(function (x) { return x.kind === q.get("k"); }));
	if (q.get("g")) return renderGrid(q.get("g") + " glaze", PIECES.filter(function (x) { return x.glaze.indexOf(q.get("g")) >= 0; }));
	renderGrid("", PIECES.filter(function (x) { return x.room !== "Studio"; }),
		"Functional pottery from the New Hope Ceramics studio: bowls, pitchers, platters, lamps and vessels, glazed in colour, florals and white.");
}

renderMenu();
renderPage();
document.querySelectorAll("[data-contact]").forEach(function (b) { b.addEventListener("click", function () { mailTo("New Hope Ceramics"); }); });
