// New Hope Ceramics: one entry per piece or set. Adding a piece means adding
// one entry here; the menus, pages and grid are all built from this list.
//   kind    Bowls, Containers, Pitchers, Platters, Knitting Bowls, Lamps, Tile,
//           Vessels, Building, Process, Glazing, Earlier work
//   room    Kitchen, Lounge or Studio (the menu it sits under)
//   glaze   any of Color, Floral, White
//   images  paths under media/img/, first one is the cover
var PIECES = [
	{
		id: "bowls-clear-glaze-bowls",
		title: "Clear Glaze Bowls",
		kind: "Bowls",
		room: "Kitchen",
		glaze: [
			"Color"
		],
		handbuilt: false,
		images: [
			"Bowls/BB_0_2.jpg",
			"Bowls/B_0_0.jpg",
			"Bowls/B_0_1.jpg"
		],
		links: []
	},
	{
		id: "bowls-floral-glaze-bowls",
		title: "Floral Glaze Bowls",
		kind: "Bowls",
		room: "Kitchen",
		glaze: [
			"Floral"
		],
		handbuilt: false,
		images: [
			"Bowls/BBf_0_2.jpg",
			"Bowls/Bf_1_1.jpg",
			"Bowls/Bf_0_1.jpg"
		],
		links: []
	},
	{
		id: "containers-clear-glaze-vessels",
		title: "Clear Glaze Vessels",
		kind: "Containers",
		room: "Kitchen",
		glaze: [
			"Color"
		],
		handbuilt: false,
		images: [
			"Containers/Containers_5.jpg"
		],
		links: []
	},
	{
		id: "containers-white-and-clear-glaze-containers",
		title: "White And Clear Glaze Containers",
		kind: "Containers",
		room: "Kitchen",
		glaze: [
			"White"
		],
		handbuilt: false,
		images: [
			"Containers/Containers_1.jpg"
		],
		links: []
	},
	{
		id: "containers-clear-glaze-containers",
		title: "Clear Glaze Containers",
		kind: "Containers",
		room: "Kitchen",
		glaze: [
			"White"
		],
		handbuilt: false,
		images: [
			"Containers/Containers_2.jpg"
		],
		links: []
	},
	{
		id: "containers-clear-glaze-containers-2",
		title: "Clear Glaze Containers",
		kind: "Containers",
		room: "Kitchen",
		glaze: [
			"White"
		],
		handbuilt: false,
		images: [
			"Containers/Containers_4.jpg"
		],
		links: []
	},
	{
		id: "pitchers-white-and-floral-glaze-pitchers",
		title: "White And Floral Glaze Pitchers",
		kind: "Pitchers",
		room: "Kitchen",
		glaze: [],
		handbuilt: false,
		images: [
			"Pitchers/P_PW_6_2.jpg"
		],
		links: []
	},
	{
		id: "pitchers-white-glaze-pitchers",
		title: "White Glaze Pitchers",
		kind: "Pitchers",
		room: "Kitchen",
		glaze: [
			"White"
		],
		handbuilt: false,
		images: [
			"Pitchers/PW_0_1.jpg"
		],
		links: []
	},
	{
		id: "pitchers-floral-glaze-pitchers",
		title: "Floral Glaze Pitchers",
		kind: "Pitchers",
		room: "Kitchen",
		glaze: [
			"Floral"
		],
		handbuilt: false,
		images: [
			"Pitchers/P_2_0.jpg"
		],
		links: []
	},
	{
		id: "platters-color-glaze-platters",
		title: "Color Glaze Platters",
		kind: "Platters",
		room: "Kitchen",
		glaze: [
			"Color"
		],
		handbuilt: false,
		images: [
			"Platters/Platters_0.jpg"
		],
		links: []
	},
	{
		id: "platters-square-oval",
		title: "Square / Oval Platters",
		kind: "Platters",
		room: "Kitchen",
		glaze: [
			"Color"
		],
		handbuilt: true,
		images: [
			"Platters/Platters_2.jpg",
			"Platters/Platters_4.jpg",
			"Platters/Platters_5.jpg"
		],
		links: []
	},
	{
		id: "knitting-bowls-color",
		title: "Knitting Bowls — Color",
		kind: "Knitting Bowls",
		room: "Lounge",
		glaze: [
			"Color"
		],
		handbuilt: false,
		images: [
			"Bowls/KBowls_0.jpg"
		],
		links: []
	},
	{
		id: "lamps",
		title: "Lamps",
		kind: "Lamps",
		room: "Lounge",
		glaze: [],
		handbuilt: false,
		images: [
			"Lamps/Lamps_0.jpg",
			"Lamps/Lamps_1.jpg"
		],
		links: []
	},
	{
		id: "tile-floral",
		title: "Tile — Floral",
		kind: "Tile",
		room: "Lounge",
		glaze: [
			"Floral"
		],
		handbuilt: false,
		images: [
			"Tile/Tiles_1.jpg"
		],
		links: []
	},
	{
		id: "vessels-floral",
		title: "Vessels — Floral",
		kind: "Vessels",
		room: "Lounge",
		glaze: [
			"Floral"
		],
		handbuilt: false,
		images: [],
		links: []
	},
	{
		id: "vessels-color",
		title: "Vessels — Color",
		kind: "Vessels",
		room: "Lounge",
		glaze: [
			"Color"
		],
		handbuilt: false,
		images: [],
		links: []
	},
	{
		id: "vessels-white",
		title: "Vessels — White",
		kind: "Vessels",
		room: "Lounge",
		glaze: [
			"White"
		],
		handbuilt: false,
		images: [],
		links: []
	},
	{
		id: "process",
		title: "Process",
		kind: "Process",
		room: "Studio",
		glaze: [],
		handbuilt: false,
		images: [
			"Process/2019-03-27 12.16.32.jpg",
			"Process/2019-04-15 20.51.00.jpg",
			"Process/2019-05-03 10.13.06.jpg",
			"Process/2019-05-10 11.51.37.jpg",
			"Process/2019-05-14 09.37.10.jpg",
			"Process/2019-05-14 14.28.48.jpg",
			"Process/2019-05-15 11.36.54.jpg",
			"Process/2019-07-17 11.18.15.jpg",
			"Process/2019-07-21 16.25.55.jpg",
			"Process/2019-08-07 14.17.40.jpg",
			"Process/2019-08-14 06.09.49.jpg"
		],
		links: []
	},
	{
		id: "ceramics",
		title: "The Building",
		kind: "Building",
		room: "Studio",
		glaze: [],
		handbuilt: false,
		images: [
			"Building/Building_0.jpg",
			"Building/Building_1.jpg",
			"Building/Building_3.jpg",
			"Building/Building_4.jpg",
			"Building/Building_5.jpg",
			"Building/Building_6.jpg",
			"Building/Building_7.jpg",
			"Building/Building_10.jpg",
			"Building/Building_11.jpg",
			"Building/Building_8.jpg"
		],
		links: [
			{
				label: "Photos on Flickr",
				url: "https://www.flickr.com/photos/antisuji/albums/72157647565271623"
			}
		]
	},
	{
		id: "ceramics-earlier-work",
		title: "Earlier work",
		kind: "Earlier work",
		room: "Studio",
		glaze: [],
		handbuilt: false,
		images: [
			"Containers/Containers_5.jpg",
			"Containers/Containers_0.JPG",
			"Ceramics/the_ceramics_still_have_2.jpg",
			"Ceramics/the_ceramics_still_have_3.jpg",
			"Ceramics/the_ceramics_still_have_4.jpg",
			"Ceramics/the_ceramics_still_have_5.jpg",
			"Ceramics/the_ceramics_still_have_6.jpg",
			"Ceramics/the_ceramics_still_have_7.jpg",
			"Ceramics/the_ceramics_still_have_8.jpg",
			"Ceramics/the_ceramics_still_have_9.jpg",
			"Ceramics/the_ceramics_still_have_10.jpg",
			"Ceramics/the_ceramics_still_have_11.jpg",
			"Ceramics/the_ceramics_still_have_12.jpg",
			"Ceramics/the_ceramics_still_have_13.jpg",
			"Ceramics/the_ceramics_still_have_14.jpg",
			"Ceramics/the_ceramics_still_have_15.jpg",
			"Ceramics/the_ceramics_still_have_16.jpg",
			"Ceramics/the_ceramics_still_have_17.jpg",
			"Ceramics/the_ceramics_still_have_18.jpg",
			"Ceramics/the_ceramics_still_have_19.jpg",
			"Ceramics/pots.jpg"
		],
		links: [
			{
				label: "Photos on Flickr",
				url: "https://www.flickr.com/photos/antisuji/albums/72157647565271623"
			}
		]
	},
	{
		id: "glazing",
		title: "Glazing",
		kind: "Glazing",
		room: "Studio",
		glaze: [],
		images: [
			"Glazing/2019-05-14 11.45.44.jpg",
			"Glazing/2019-05-14 13.15.49.jpg",
			"Glazing/2019-05-14 13.21.08.jpg",
			"Glazing/2019-05-16 08.38.57.jpg",
			"Glazing/2019-07-08 11.17.07.jpg",
			"Glazing/2019-07-08 11.17.59.jpg",
			"Glazing/2019-07-08 11.18.33.jpg",
			"Glazing/2019-07-08 11.19.12.jpg",
			"Glazing/2019-07-08 11.20.26.jpg",
			"Glazing/2019-07-08 11.21.43.jpg",
			"Glazing/2019-07-09 08.39.38.jpg",
			"Glazing/2019-07-18 09.41.41.jpg",
			"Glazing/2019-08-14 21.56.04.jpg",
			"Glazing/2019-08-16 08.24.50.jpg",
			"Glazing/2019-08-16 08.28.24.jpg",
			"Glazing/Glazing_0.jpg"
		],
		links: []
	}
];
