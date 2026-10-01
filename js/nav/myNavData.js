var addressToDirectory = 1;
var httpString = "";
if(addressToDirectory == 0){
	httpString = "file:///Users/user/Sites/newhopeceramics/";
};
if(addressToDirectory == 1){
	httpString = "https://www.newhopeceramics.com/";
};

//var httpString = "https://www.newhopeceramics.com/";
var httpMail = "mailto:lee@newhopeceramics.com";
var dirAdd_IMG = "media/img/";
//navUpper--------------------_
var navUpper = [
{
"url": httpString + "artistStatement.html",
"displayTitle": "link to leemere",
"acckey": "L",
"display": "Lee",
"par": "",
"links":[
		{
		"srcName":"",
		"url": "",
		"downloads":"",
		"displayTitle": "link to",
		"acckey": "",
		"display": "",
		}
		],
},
{
"url": httpMail,
"displayTitle": "link to Contact",
"display": "Contact",
"par": "",
"links":[
		{
		"srcName":"",
		"url": "",
		"downloads":"",
		"displayTitle": "link to",
		"acckey": "",
		"display": "",
		}
		],
},
{
"url": httpString + "index.html",
"displayTitle": "link to HOME",
"acckey": "H",
"display": "HOME",
"par": "",
"links":[
		{
		"srcName":"",
		"url": "",
		"downloads":"",
		"displayTitle": "link to",
		"acckey": "",
		"display": "",
		}
		],
},
{
"url": "",//httpString + "written.html"
"displayTitle": "link to Glaze",
"acckey": "",
"display": "Glaze",
"par": "",
"links":[
		{
		"srcName":"Color",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Color",
		"acckey": "",
		"display": "Color",
		},
		{
		"srcName":"Floral",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Floral",
		"acckey": "",
		"display": "Floral",
		},
		{
		"srcName":"White",
		"url": "",
		"downloads":"",
		"displayTitle": "link to White",
		"acckey": "",
		"display": "White",
		}
		],
},
{
"url": "",//httpString + "audio.html"
"displayTitle": "link to Kitchen",
"acckey": "k",
"display": "Kitchen",
"par": "",
"links":[
		{
		"srcName":"Bowls",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Bowls",
		"acckey": "",
		"display": "Bowls",
		},
		{
		"srcName":"Containers",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Containers",
		"acckey": "",
		"display": "Containers",
		},
/*
		{
		"srcName":"Cups",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Cups",
		"acckey": "",
		"display": "Cups",
		},		
*/
		{
		"srcName":"Pitchers",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Pitchers",
		"acckey": "",
		"display": "Pitchers",
		},
		{
		"srcName":"Platters",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Platters",
		"acckey": "",
		"display": "Platters",
		}		
		],
},
{
"url": "",//httpString + "audio.html"
"displayTitle": "link to Lounge",
"acckey": "L",
"display": "Lounge",
"par": "",
"links":[
		{
		"srcName":"Knitting Bowls",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Knitting Bowls",
		"acckey": "",
		"display": "Knitting Bowls",
		},		
		{
		"srcName":"Lamps",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Lamps",
		"acckey": "",
		"display": "Lamps",
		},
		{
		"srcName":"Tile",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Tile",
		"acckey": "",
		"display": "Tile",
		},
		{
		"srcName":"Vessels",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Vessels",
		"acckey": "",
		"display": "Vessels",
		}
		],
},
{
"url": "",//httpString + "audio.html"
"displayTitle": "link to Purchase",
"acckey": "P",
"display": "Purchase",
"par": "",
"links":[
		{
		"srcName":"Facebook",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Facebook",
		"acckey": "",
		"display": "Facebook",
		}
		],
},
{
"url": "",//httpString + "languages.html"
"displayTitle": "link to Studio",
"acckey": "",
"display": "Studio",
"par": "",
"links":[
		{
		"srcName":"Building",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Building",
		"acckey": "",
		"display": "Building",
		},
		{
		"srcName":"Process",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Process",
		"acckey": "",
		"display": "Process",
		},
/*
		{
		"srcName":"Videos",
		"url": "",
		"downloads":"",
		"displayTitle": "link to Videos",
		"acckey": "",
		"display": "Videos",
		}
*/
		],
}
];

//navMain--------------------_
var navMainStyle = "width:140px;height:140px;border:0;"
var navMain = [
{
"url": "",//"myMediaTest.html",//museum
"displayTitle": "link to Museum",
"acckey": "M",
"display": "Museum",
"img": dirAdd_IMG + "myIcons/navMain/MET_ART_0.jpg",
"style": navMainStyle,
"alt": "Museum Work",
},
{
"url": "",//httpString + "pCom.html"
"displayTitle": "link to P-Com",
"acckey": "P",
"display": "Pcom",
"img": dirAdd_IMG + "myIcons/navMain/EMG_0.jpg",
"style": navMainStyle,
"alt": "Pcom Work",
},
{
"url": "",//httpString + "presidentTurntable.html"
"displayTitle": "link to Pardoning Snowden",
"acckey": "",
"display": "Snowden",
"img": dirAdd_IMG + "myIcons/navMain/ObamaPardoningES_0.jpg",
"style": navMainStyle,
"alt": "Turntable Work",
},
{
"url": "",//httpString + "animation.html"
"displayTitle": "link to Animator",
"acckey": "",
"display": "Animator",
"img": dirAdd_IMG + "myIcons/navMain/animation_0.jpg",
"style": navMainStyle,
"alt": "Animation Work",
},
{
"url": "",//httpString + "dialogger.html"
"displayTitle": "link to Dialogger",
"acckey": "D",
"display": "Dialogger",
"img": dirAdd_IMG + "myIcons/navMain/dialog_0.jpg",
"style": navMainStyle,
"alt": "Dialogger Work",
},
{
"url": "",//httpString + "DC.html"
"displayTitle": "link to DC",
"acckey": "",
"display": "Diamonds And Code",
"img": dirAdd_IMG + "myIcons/navMain/DCode_0.jpg",
"style": navMainStyle,
"alt": "Diamonds And Code Work",
},
{
"url": "",//httpString + "ARM.html"
"displayTitle": "link to ARM",
"acckey": "",
"display": "ARM",
"img": dirAdd_IMG + "myIcons/navMain/ARM_0.jpg",
"style": navMainStyle,
"alt": "ARM Work",
},
{
"url": "",//httpString + "speechScrolls.html"
"displayTitle": "link to Speech Scroll",
"acckey": "",
"display": "Speech Scroll",
"img": dirAdd_IMG + "myIcons/navMain/flaoting_0.jpg",
"style": navMainStyle,
"alt": "Speech Scroll Work",
},
{
"url": "",//httpString + "juggler.html"
"displayTitle": "link to Juggling",
"acckey": "",
"display": "Juggling",
"img": dirAdd_IMG + "myIcons/navMain/juggler_0.jpg",
"style": navMainStyle,
"alt": "Juggling Work",
},
{
"url": "",//httpString + "colorPicker.html"
"displayTitle": "link to Color Picker",
"acckey": "",
"display": "Color Picker",
"img": dirAdd_IMG + "myIcons/navMain/cPic_0.jpg",
"style": navMainStyle,
"alt": "Color Picker Work",
},
{
"url": "",//httpString + "writing.html"
"displayTitle": "link to Written",
"acckey": "",
"display": "Written",
"img": dirAdd_IMG + "myIcons/navMain/C1_0.jpg",
"style": navMainStyle,
"alt": "Written Work",
},
{
"url": "",//httpString + "writing.html"
"displayTitle": "link to DJ",
"acckey": "",
"display": "DJ",
"img": dirAdd_IMG + "myIcons/navMain/DJ_NavMain_0.jpg",
"style": navMainStyle,
"alt": "DJ Work",
}
/*
{
"url": "",//httpString + "test_1.html"
"displayTitle": "link to Test",
"acckey": "",
"display": "Test",
"img": dirAdd_IMG + "myIcons/navMain/test_1.jpg",
"style": navMainStyle,
"alt": "Test Work",
}
*/
];

//navBottom--------------------_
var navBottom = [
{
"url": httpString,
"displayTitle": "link to HOME",
"acckey": "",
"display": "HOME",
},
{
"url": httpMail,
"displayTitle": "link to Contact",
"display": "Contact",
}
];

//navSocial--------------------_
var navSocialStyle = "width:25px;height:25px;border:0;"
var navSocial = [
{
"url": httpString + "index.html",
"displayTitle": "HOME",
"acckey": "H",
"display": "HOME",
"img": dirAdd_IMG + "socialIcons/home_0.png",
"style": navSocialStyle,
"alt": "HOME",
},
{
"url": "https://www.facebook.com/NewHopeCeramics",
"displayTitle": "Facebook",
"acckey": "F",
"display": "Facebook",
"img": dirAdd_IMG + "socialIcons/facebook.png",
"style": navSocialStyle,
"alt": "Facebook",
},
{
"url": "https://github.com/leeMeredith",
"displayTitle": "Github",
"acckey": "G",
"display": "Github",
"img": dirAdd_IMG + "socialIcons/GitHub-Mark-120px-plus.png",
"style": navSocialStyle,
"alt": "Github",
},
/*
{
"url": "https://plus.google.com/u/0/115195678288352964279",
"displayTitle": "Google",
"acckey": "G",
"display": "Google",
"img": dirAdd_IMG + "socialIcons/g.png",
"style": navSocialStyle,
"alt": "Google",
},
*/
{
"url": "https://www.instagram.com/newhopeceramics/",
"displayTitle": "Instagram",
"acckey": "I",
"display": "Instagram",
"img": dirAdd_IMG + "socialIcons/instagram_256.png",
"style": navSocialStyle,
"alt": "Instagram",
},
{
"url": "https://www.linkedin.com/in/lee-meredith-877b519?trk=hp-identity-name",
"displayTitle": "Linkedin",
"acckey": "L",
"display": "Linkedin",
"img": dirAdd_IMG + "socialIcons/linkedin_circle_black_512.png",
"style": navSocialStyle,
"alt": "Linkedin",
},
{
"url": "https://twitter.com/tesuji",
"displayTitle": "Twitter",
"acckey": "T",
"display": "Twitter",
"img": dirAdd_IMG + "socialIcons/twitter_512.png",
"style": navSocialStyle,
"alt": "Twitter",
},
{
"url": "https://vimeo.com/leemeredith",
"displayTitle": "Vimeo",
"acckey": "V",
"display": "Vimeo",
"img": dirAdd_IMG + "socialIcons/vimeo_254.png",
"style": navSocialStyle,
"alt": "Vimeo",
}
];
