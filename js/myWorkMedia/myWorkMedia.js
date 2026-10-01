var addressToDirectory = 1;
var httpString = "";
if(addressToDirectory == 0){
	httpString = "file:///Users/user/Sites/newhopeceramics/index.html";
};
if(addressToDirectory == 1){
	httpString = "https://www.newhopeceramics.com/";
};
var home = httpString;
var isConsoleWorkMedia = false;
//col-ms-7 col-mm-5 col-ml-5 col-t-5 col-l-4 col-ll-4 col-4
//midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll
var mainClass = '\"box boxColor0 colorBorder0 mainLink0\"';
var mainAudioClass = '\"box columnL boxColor2 col-t-5 col-l-5 col-ll-5 col-8 colorBorder0 mainLink0\"';
var mainVideoClass = '\"box columnL col-t-8 col-l-8 col-ll-8 col-8 colorBorder0 mainLink0\"';
var myMediaClass = '\"box columnL boxColor0 colorBorder0 mainLink0 col-l-10 col-ll-10 col-10 midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k\"';
var myH2Class = '\"box columnC relatedDiv colorBorder1 col-t-5 col-l-5 col-ll-5 col-5 midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k float-L float-m-L\"';
var myRelatedDivClass = '\"relatedDiv\"';
var arrTest = [];
var outConceptMedia = "";
var outTopicNav = "";
var atStart = true;
var selFromOptIndex = 0;
var mySetFromOpt = "";
var theIndexStrFromOpt = "HOME";
var theIndexFromOpt = 0;
var randomImgSelMode = 0;
//if(isConsole == true){console.log(myStringTesting);}

var idMatchMediaWork;

//myIframe---------------------------------------_
function myIframe_(indexNum,arr,width,height) {
	var outIframe = "";
	var outAudio = "";
	var outConcept = "";
	outConceptMedia = "";
	
	//console.log(allTagNav(arr));	
	var allTagNavArr = [];
	allTagNavArr = allTagNav(arr);
	
	var indexMediaByTagNum;
	indexMediaByTagNum = indexNum;
	
	var alignMode = 1;
	var alignString = "";
	
    var t;
	for(t = 0; t < arr.length; t++) {
		
		var tags = [];
		tags = splitSort(arr[t].myTag, "#");
		tags = uniq(tags);
		
		var w;
		for(w = 0; w < tags.length; w++) {
			if(allTagNavArr[indexMediaByTagNum] == tags[w]){
				if(arrTest[t].url != ""){
					outIframe = myIframe(arrTest[t].url,width,height);
				}else{
					outIframe = "";
				}				
		    	outConcept = "";
		    	var c;
		    	var repConcept;
		    	
		    	for(c = 0; c < arr[t].concept.length; c++) {
		    		
					//make id = 
					var num_Id = c;
					var nId = num_Id.toString();
					var id_ = arr[t].srcName[c] + nId;
			
					if(arrTest[t].srcImg[0].img != ""){
						
						if(arrTest[t].srcImg[0].mode == "0"){
							randomImgSelMode = 0;
						}
						if(arrTest[t].srcImg[0].mode == "1"){
							randomImgSelMode = 1;// random or 1 img
						}
						if(arrTest[t].srcImg[0].mode == "2"){
							randomImgSelMode = 2;
						}
						
						alignMode = 3;
						if(alignMode == 0){
							alignString = "left";
						}
						if(alignMode == 1){
							alignString = "right";
						}
						if(alignMode == 2){
							alignString = "middle";
						}
						if(alignMode == 3){
							alignString = "center";
						}
					
						if(randomImgSelMode == 0){
							var indexImg = c;
					
							var width_ = arrTest[t].srcImg[indexImg].width;
							var height_ = arrTest[t].srcImg[indexImg].height;
							var testImg_W = 450;
					
							if(arrTest[t].srcImg[indexImg].width > testImg_W){
								var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
								width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
								height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
							}
							//myMainImg(myImg, myAlt, width, height, myAlign);
							repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
							repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
						}
						if(randomImgSelMode == 1){

							if(c == 0 && arrTest[t].srcImg.length > 1){	
								var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
							
								var width_ = arrTest[t].srcImg[indexImg].width;
								var height_ = arrTest[t].srcImg[indexImg].height;
								var testImg_W = 450;
					
								if(arrTest[t].srcImg[indexImg].width > testImg_W){
									var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
									width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
									height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
								}
								//myMainImg(myImg, myAlt, width, height, myAlign);
								repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);					
							}
							if(c > 0 && arrTest[t].srcImg.length > 1){	
								repConcept = "";
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
							}
							if(arrTest[t].srcImg.length == 1){
								var indexImg = 0;
							
								var width_ = arrTest[t].srcImg[indexImg].width;
								var height_ = arrTest[t].srcImg[indexImg].height;
								var testImg_W = 450;
					
								if(arrTest[t].srcImg[indexImg].width > testImg_W){
									var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
									width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
									height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
								}
							
								//myMainImg(myImg, myAlt, width, height, myAlign);
								if(c == 0 ){
									repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
									repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);							
								}else{
									repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
								}
														
							}
						}
						
						if(randomImgSelMode == 2){
							repConcept = "";
							if(c == arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
								var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
							
								var width_ = arrTest[t].srcImg[indexImg].width;
								var height_ = arrTest[t].srcImg[indexImg].height;
								var testImg_W = 450;
					
								if(arrTest[t].srcImg[indexImg].width > testImg_W){
									var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
									width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
									height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
								}
								//myMainImg(myImg, myAlt, width, height, myAlign);
								repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);					
							}
							if(c < arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
								repConcept = "";
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
							}
						}
						
					//console.log("  "+);
					}else{
						repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
					}
			
					if(arrTest[t].srcName.length == 1){
						outConcept += myConcept(id_,arrTest[t].srcName[0],repConcept);
					}else{
						outConcept += myConcept(id_,arrTest[t].srcName[c],repConcept);
					}
		    	}
		        
   		    	var outVideo = "";
				if(arrTest[t].video.length > 0){
					outVideo += '<div class=\"box col-t-5 col-l-7 col-ll-7 col-4 floatL\">';
					outVideo += '<div class=\"box col-t-5 col-l-7 col-ll-7 col-4 floatL\">';
					for(var v = 0; v < arrTest[t].video.length; v++) {
						if(arrTest[t].video[v].file != "media/mov/"){
							outVideo += myVideo(arrTest[t].video[v].display, arrTest[t].video[v].file, arrTest[t].video[v].width, arrTest[t].video[v].height, arrTest[t].video[v].autostart, arrTest[t].video[v].loop);
						}else{
							outVideo = "";
						}
					}
					outVideo += '</div></div>';
		        }		    	
		        
		       var outAudio = "";
				if(arrTest[t].audio.length > 0){
					for(var a = 0; a < arrTest[t].audio.length; a++) {
						if(arrTest[t].audio[a].file != "media/audio/"){
							outAudio += myAudio(arrTest[t].audio[a].display, arrTest[t].audio[a].file, arrTest[t].audio[a].width, arrTest[t].audio[a].height, arrTest[t].audio[a].autostart, arrTest[t].audio[a].loop);
						}else{
							outAudio = "";
						}
					}
		        }
		        
		        outConceptMedia += outIframe + outVideo + outConcept + outAudio;
		        
		        outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
		        outConceptMedia +="<br>";// or "<pre>   </pre>";//Defines pre-formatted text
		        outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
			}
		}    		
   	}

    return outConceptMedia;
}

//onChangeStrFun-------------------------------_
function onChangeStrFun(str,width,height) {
   
    var outIframe = "";
	var outConcept = "";
	outConceptMedia = "";
	
	console.log(str);	
	var allTagNavArr = [];
	allTagNavArr = allTagNav(arrTest);
	
	var indexMediaByTagStr;
	indexMediaByTagStr = str;
	
	var alignMode = 1;
	var alignString = "";

    var t;
	for(t = 0; t < arrTest.length; t++) {
		var tags = [];
		tags = splitSort(arrTest[t].myTag, "#");
		tags = uniq(tags);
		var w;
		for(w = 0; w < tags.length; w++) {
			if(indexMediaByTagStr == tags[w]){
				if(arrTest[t].url != ""){
					outIframe = myIframe(arrTest[t].url,width,height);
				}else{
					outIframe = "";
				}				
		    	outConcept = "";
		    	var c;
		    	var repConcept;
		    	for(c = 0; c < arrTest[t].concept.length; c++) {
		    	
					//make id = 
					var num_Id = c;
					var nId = num_Id.toString();
					var id_ = arrTest[t].srcName[c] + nId;

					if(arrTest[t].srcImg[0].img != ""){
					
						alignMode = 3;
						if(alignMode == 0){
							alignString = "left";
						}
						if(alignMode == 1){
							alignString = "right";
						}
						if(alignMode == 2){
							alignString = "middle";
						}	
						if(alignMode == 3){
							alignString = "center";
						}

						if(arrTest[t].srcImg[0].mode == "0"){
							randomImgSelMode = 0;
						}
						if(arrTest[t].srcImg[0].mode == "1"){
							randomImgSelMode = 1;// random or 1 img
						}
						if(arrTest[t].srcImg[0].mode == "2"){
							randomImgSelMode = 2;
						}
						
						var width_ = 0;
						var height_ = 0;
						var testImg_W = 450;
						
						if(randomImgSelMode == 0){
							var indexImg = c;
					
							width_ = arrTest[t].srcImg[indexImg].width;
							height_ = arrTest[t].srcImg[indexImg].height;
							testImg_W = 450;
					
							//myMainImg(myImg, myAlt, width, height, myAlign);
							repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
							repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
						}
						if(randomImgSelMode == 1){

							if(c == 0 && arrTest[t].srcImg.length > 1){	
								var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
							
								width_ = arrTest[t].srcImg[indexImg].width;
								height_ = arrTest[t].srcImg[indexImg].height;
								testImg_W = 450;
					
								//myMainImg(myImg, myAlt, width, height, myAlign);
								repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);					
							}
							if(c > 0 && arrTest[t].srcImg.length > 1){	
								repConcept = "";
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
							}
							if(arrTest[t].srcImg.length == 1){	
								var indexImg = 0;
							
								width_ = arrTest[t].srcImg[indexImg].width;
								height_ = arrTest[t].srcImg[indexImg].height;
								testImg_W = 450;
					
							
								//myMainImg(myImg, myAlt, width, height, myAlign);
								if(c == 0 ){
									repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
									repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);							
								}else{
									repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
								}
														
							}
						}
						if(randomImgSelMode == 2){
							repConcept = "";
							if(c == arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
								var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
							
								width_ = arrTest[t].srcImg[indexImg].width;
								height_ = arrTest[t].srcImg[indexImg].height;
								testImg_W = 450;
					
								//myMainImg(myImg, myAlt, width, height, myAlign);
								repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);					
							}
							if(c < arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
								repConcept = "";
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
							}
						}
												
					//console.log("  "+);
					}else{
						repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
					}		    		
						    			
		    		//repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
		    		
		    		if(arrTest[t].srcName.length == 1){
		    			outConcept += myConcept(id_,arrTest[t].srcName[0],repConcept);
					}else{
						outConcept += myConcept(id_,arrTest[t].srcName[c],repConcept);
					}
		    	}
		    	
		    	var outVideo = "";
				if(arrTest[t].video.length > 0){
				
					for(var v = 0; v < arrTest[t].video.length; v++) {
						if(arrTest[t].video[v].file != "media/mov/"){
							outVideo += myVideo(arrTest[t].video[v].display, arrTest[t].video[v].file, arrTest[t].video[v].width, arrTest[t].video[v].height, arrTest[t].video[v].autostart, arrTest[t].video[v].loop);
						}else{
							outVideo = "";
						}
					}
				
		        }		    	
		    	
		    	var outAudio = "";
				if(arrTest[t].audio.length > 0){
					for(var a = 0; a < arrTest[t].audio.length; a++) {
						if(arrTest[t].audio[a].file != "media/audio/"){
							outAudio += myAudio(arrTest[t].audio[a].display, arrTest[t].audio[a].file, arrTest[t].audio[a].width, arrTest[t].audio[a].height, arrTest[t].audio[a].autostart, arrTest[t].audio[a].loop);
						}else{
							outAudio = "";
						}
					}
		        }
		        
		        outConceptMedia += outIframe + outVideo + outConcept + outAudio;
// not woking as a spaser		        		        
		        //outConceptMedia += '<div id="myDIV_MyParagraph" class="column main col-t-12 col-l-4 col-ll-4 col-3  midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k"></div>'
// 		        outConceptMedia += '<div class=\"column main col-t-12 col-l-4 col-ll-4 col-3  midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k\"></div>';		        

		        outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
		        outConceptMedia +="<br>";// or "<pre>   </pre>";//Defines pre-formatted text
		        outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
			}
		}    		
   	}
	// if you uncomment you can have the side menu back 
// 	document.getElementById("myDIV_TopicNav_0").innerHTML = topicNav();  
    document.getElementById("myDIV_ConceptMedia").innerHTML = outConceptMedia;
    document.getElementById("myDIV_AtWindowOpen").innerHTML = "";
    
/*
    var _myDIV_AllFromOpt = "myDIV_AllFromOpt";
	document.getElementById(_myDIV_AllFromOpt).innerHTML = allFromOpt(arrTest);
*/
	    
    return outConceptMedia;
}

//onChangeSrcStrFun-------------------------------_
function onChangeSrcStrFun(str,width,height) {
   	
    var outIframe = "";
	var outConcept = "";
	outConceptMedia = "";
	outTopicNav = ""; 
	console.log(str);	
	var allTagNavArr = [];
	allTagNavArr = allTagNav(arrTest);
	
	var indexMediaByTagStr;
	indexMediaByTagStr = str;

	var alignMode = 1;
	var alignString = "";
    
	for(var t = 0; t < arrTest.length; t++) {
		if(indexMediaByTagStr == arrTest[t].srcName[0]){
			
			var tags = [];
			tags = splitSort(arrTest[t].mainTag, "#");
			tags = uniq(tags);
			
			if(arrTest[t].url != ""){
				outIframe = myIframe(arrTest[t].url,width,height);
			}else{
				outIframe = "";
			}

			outConcept = "";
			var c;
			var repConcept;
			for(c = 0; c < arrTest[t].concept.length; c++) {
			
				//make id = 
				var num_Id = c;
				var nId = num_Id.toString();
				var id_ = arrTest[t].srcName[c] + nId;
				
				if(arrTest[t].srcImg[0].img != ""){
					
					alignMode = 3;
					if(alignMode == 0){
						alignString = "left";
					}
					if(alignMode == 1){
						alignString = "right";
					}
					if(alignMode == 2){
						alignString = "middle";
					}	
					if(alignMode == 3){
							alignString = "center";
					}
					
					if(arrTest[t].srcImg[0].mode == "0"){
						randomImgSelMode = 0;
					}
					if(arrTest[t].srcImg[0].mode == "1"){
						randomImgSelMode = 1;// random or 1 img
					}
					if(arrTest[t].srcImg[0].mode == "2"){
						randomImgSelMode = 2;
					}
					
					console.log(" randomImgSelMode "+ randomImgSelMode);
					
					var width_ = 0;
					var height_ = 0;
					var testImg_W = 450;
					
					if(randomImgSelMode == 0){
						var indexImg = c;
					
						width_ = arrTest[t].srcImg[indexImg].width;
						height_ = arrTest[t].srcImg[indexImg].height;
						testImg_W = 450;
					
						//myMainImg(myImg, myAlt, width, height, myAlign);
						repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
						repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
					}
					
					if(randomImgSelMode == 1){

						if(c == 0 && arrTest[t].srcImg.length > 1){	
							var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
							
							width_ = arrTest[t].srcImg[indexImg].width;
							height_ = arrTest[t].srcImg[indexImg].height;
							testImg_W = 450;
					
							//myMainImg(myImg, myAlt, width, height, myAlign);
							repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
							repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
						}
						if(c > 0 && arrTest[t].srcImg.length > 1){	
							repConcept = "";
							repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
						}
						
						if(arrTest[t].srcImg.length == 1){	
							var indexImg = 0;
							
							width_ = arrTest[t].srcImg[indexImg].width;
							height_ = arrTest[t].srcImg[indexImg].height;
							testImg_W = 450;
					
							if(arrTest[t].srcImg[indexImg].width > testImg_W){
								var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
								width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
								height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
							}
							
							//myMainImg(myImg, myAlt, width, height, myAlign);

							if(c == 0 ){
								repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);							
							}else{
								repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
							}							
						}
					}
					
					if(randomImgSelMode == 2){
						repConcept = "";
						if(c == arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
							var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
							
							width_ = arrTest[t].srcImg[indexImg].width;
							height_ = arrTest[t].srcImg[indexImg].height;
							testImg_W = 450;
					
							//myMainImg(myImg, myAlt, width, height, myAlign);
							repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
							repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);					
						}
						if(c < arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
							repConcept = "";
							repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
						}
					}
					//console.log("  "+);
				}else{
					repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
				}
				
				if(arrTest[t].srcName.length == 1){
					outConcept += myConcept(id_,arrTest[t].srcName[0],repConcept);
				}else{
					outConcept += myConcept(id_,arrTest[t].srcName[c],repConcept);
				}
			}
			
			var outVideo = "";
			if(arrTest[t].video.length > 0){
				for(var v = 0; v < arrTest[t].video.length; v++) {
					if(arrTest[t].video[v].file != "media/mov/"){
						outVideo += myVideo(arrTest[t].video[v].display, arrTest[t].video[v].file, arrTest[t].video[v].width, arrTest[t].video[v].height, arrTest[t].video[v].autostart, arrTest[t].video[v].loop);
					}else{
						outVideo = "";
					}
				}
			}		    	
			
			var outAudio = "";
			if(arrTest[t].audio.length > 0){
				for(var a = 0; a < arrTest[t].audio.length; a++) {
					if(arrTest[t].audio[a].file != "media/audio/"){
						outAudio += myAudio(arrTest[t].audio[a].display, arrTest[t].audio[a].file, arrTest[t].audio[a].width, arrTest[t].audio[a].height, arrTest[t].audio[a].autostart, arrTest[t].audio[a].loop);
					}else{
						outAudio = "";
					}
				}
			}
			
			outConceptMedia += outIframe + outVideo + outConcept + outAudio;
			
			outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
			outConceptMedia +="<br>";// or "<pre>   </pre>";//Defines pre-formatted text
			outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
	
		}
   		
   	}

   	// if you uncomment you can have the side menu back 
// 	document.getElementById("myDIV_TopicNav_0").innerHTML = topicNav();
 	

   	outConceptMedia += relatedNav(str, tags);
    document.getElementById("myDIV_ConceptMedia").innerHTML = outConceptMedia;
    document.getElementById("myDIV_AtWindowOpen").innerHTML = "";
	
/*
    var _myDIV_AllFromOpt = "myDIV_AllFromOpt";
	document.getElementById(_myDIV_AllFromOpt).innerHTML = allFromOpt(arrTest);    
*/
	 
    return outConceptMedia;
}

//onChangeSrcStrFun-------------------------------_
function onChangeSrcStrFun_AllNoNav(width,height) {
   	
    var outIframe = "";
	var outConcept = "";
	outConceptMedia = "";
	outTopicNav = ""; 

	var allTagNavArr = [];
	allTagNavArr = allTagNav(arrTest);
	
	var alignMode = 1;
	var alignString = "";
    
	for(var t = 0; t < arrTest.length; t++) {
			
		var tags = [];
		tags = splitSort(arrTest[t].mainTag, "#");
		tags = uniq(tags);
		
		if(arrTest[t].url != ""){
			outIframe = myIframe(arrTest[t].url,width,height);
		}else{
			outIframe = "";
		}

		outConcept = "";
		var c;
		var repConcept;
		for(c = 0; c < arrTest[t].concept.length; c++) {
		
			//make id = 
			var num_Id = c;
			var nId = num_Id.toString();
			var id_ = arrTest[t].srcName[c] + nId;
			
			if(arrTest[t].srcImg[0].img != ""){
				
				alignMode = 3;
				if(alignMode == 0){
					alignString = "left";
				}
				if(alignMode == 1){
					alignString = "right";
				}
				if(alignMode == 2){
					alignString = "middle";
				}	
				if(alignMode == 3){
					alignString = "center";
				}
				
				if(arrTest[t].srcImg[0].mode == "0"){
					randomImgSelMode = 0;
				}
				if(arrTest[t].srcImg[0].mode == "1"){
					randomImgSelMode = 1;// random or 1 img
				}
				if(arrTest[t].srcImg[0].mode == "2"){
					randomImgSelMode = 2;
				}
				
				console.log(" randomImgSelMode "+ randomImgSelMode);
				
				var width_ = 0;
				var height_ = 0;
				var testImg_W = 450;
				
				if(randomImgSelMode == 0){
					var indexImg = c;
				
					width_ = arrTest[t].srcImg[indexImg].width;
					height_ = arrTest[t].srcImg[indexImg].height;
					testImg_W = 450;
				
					//myMainImg(myImg, myAlt, width, height, myAlign);
					repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
					repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
				}
				
				if(randomImgSelMode == 1){

					if(c == 0 && arrTest[t].srcImg.length > 1){	
						var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
						
						width_ = arrTest[t].srcImg[indexImg].width;
						height_ = arrTest[t].srcImg[indexImg].height;
						testImg_W = 450;
				
						//myMainImg(myImg, myAlt, width, height, myAlign);
						repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
						repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
					}
					if(c > 0 && arrTest[t].srcImg.length > 1){	
						repConcept = "";
						repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
					}
					
					if(arrTest[t].srcImg.length == 1){	
						var indexImg = 0;
						
						width_ = arrTest[t].srcImg[indexImg].width;
						height_ = arrTest[t].srcImg[indexImg].height;
						testImg_W = 450;
				
						if(arrTest[t].srcImg[indexImg].width > testImg_W){
							var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
							width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
							height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
						}
						
						//myMainImg(myImg, myAlt, width, height, myAlign);

						if(c == 0 ){
							repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
							repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);							
						}else{
							repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
						}							
					}
				}
				
				if(randomImgSelMode == 2){
					repConcept = "";
					if(c == arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
						var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
						
						width_ = arrTest[t].srcImg[indexImg].width;
						height_ = arrTest[t].srcImg[indexImg].height;
						testImg_W = 450;
				
						//myMainImg(myImg, myAlt, width, height, myAlign);
						repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
						repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);					
					}
					if(c < arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
						repConcept = "";
						repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
					}
				}
				//console.log("  "+);
			}else{
				repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
			}
			
			if(arrTest[t].srcName.length == 1){
				outConcept += myConcept(id_,arrTest[t].srcName[0],repConcept);
			}else{
				outConcept += myConcept(id_,arrTest[t].srcName[c],repConcept);
			}
		}
		
		var outVideo = "";
		if(arrTest[t].video.length > 0){
			for(var v = 0; v < arrTest[t].video.length; v++) {
				if(arrTest[t].video[v].file != "media/mov/"){
					outVideo += myVideo(arrTest[t].video[v].display, arrTest[t].video[v].file, arrTest[t].video[v].width, arrTest[t].video[v].height, arrTest[t].video[v].autostart, arrTest[t].video[v].loop);
				}else{
					outVideo = "";
				}
			}
		}		    	
		
		var outAudio = "";
		if(arrTest[t].audio.length > 0){
			for(var a = 0; a < arrTest[t].audio.length; a++) {
				if(arrTest[t].audio[a].file != "media/audio/"){
					outAudio += myAudio(arrTest[t].audio[a].display, arrTest[t].audio[a].file, arrTest[t].audio[a].width, arrTest[t].audio[a].height, arrTest[t].audio[a].autostart, arrTest[t].audio[a].loop);
				}else{
					outAudio = "";
				}
			}
		}
		
		outConceptMedia += outIframe + outVideo + outConcept + outAudio;
		
		outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
		outConceptMedia +="<br>";// or "<pre>   </pre>";//Defines pre-formatted text
		outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
		
   	}

    document.getElementById("myDIV_ConceptMedia").innerHTML = outConceptMedia;
    document.getElementById("myDIV_AtWindowOpen").innerHTML = "";
		 
    return outConceptMedia;
}


//onChangeFun-------------------------------_
function onChangeFun(width,height) {

    var x = document.getElementById("mySelect");
    var xi = x.selectedIndex;
    var outIframe = "";
	var outConcept = "";
	outConceptMedia =  "";
	
	var alignMode = 1;
	var alignString = "";
	
	//console.log(allTagNav(arrTest));	
	var allTagNavArr = [];
	allTagNavArr = allTagNav(arrTest);
	
	var indexMediaByTagNum;
	indexMediaByTagNum = x.options[xi].value;

	if(indexMediaByTagNum == theIndexFromOpt || indexMediaByTagNum == 0){
		myOpenSelf(home);
	}
    
    var t;
	for(t = 0; t < arrTest.length; t++) {
		var tags = [];
		tags = splitSort(arrTest[t].myTag, "#");
		tags = uniq(tags);
		var w;
		for(w = 0; w < tags.length; w++) {
			if(allTagNavArr[indexMediaByTagNum] == tags[w]){
				if(arrTest[t].url != ""){
					outIframe = myIframe(arrTest[t].url,width,height);
				}else{
					outIframe = "";
				}
		    	outConcept = "";
		    	var c;
		    	var repConcept;
		    	for(c = 0; c < arrTest[t].concept.length; c++) {
		    	
					//make id = 
					var num_Id = c;
					var nId = num_Id.toString();
					var id_ = arrTest[t].srcName[c] + nId;
				
					if(arrTest[t].srcImg[0].img != ""){
				
						if(arrTest[t].srcImg[0].mode == "0"){
							randomImgSelMode = 0;
						}
						if(arrTest[t].srcImg[0].mode == "1"){
							randomImgSelMode = 1;// random or 1 img
						}
						if(arrTest[t].srcImg[0].mode == "2"){
							randomImgSelMode = 2;
						}
						
						alignMode = 3;
						if(alignMode == 0){
							alignString = "left";
						}
						if(alignMode == 1){
							alignString = "right";
						}
						if(alignMode == 2){
							alignString = "middle";
						}	
						if(alignMode == 3){
							alignString = "center";
						}
				
						if(randomImgSelMode == 0){
							var indexImg = c;
				
							var width_ = arrTest[t].srcImg[indexImg].width;
							var height_ = arrTest[t].srcImg[indexImg].height;
							var testImg_W = 450;
				
							if(arrTest[t].srcImg[indexImg].width > testImg_W){
								var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
								width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
								height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
							}
							//myMainImg(myImg, myAlt, width, height, myAlign);
							repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
							repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
						}
						if(randomImgSelMode == 1){
							if(c == 0 && arrTest[t].srcImg.length > 1){	
								var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
					
								var width_ = arrTest[t].srcImg[indexImg].width;
								var height_ = arrTest[t].srcImg[indexImg].height;
								var testImg_W = 450;
			
								if(arrTest[t].srcImg[indexImg].width > testImg_W){
									var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
									width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
									height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
								}
								//myMainImg(myImg, myAlt, width, height, myAlign);
								repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);					
							}
							if(c > 0 && arrTest[t].srcImg.length > 1){	
								repConcept = "";
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
							}
							if(arrTest[t].srcImg.length == 1){	
								var indexImg = 0;
					
								var width_ = arrTest[t].srcImg[indexImg].width;
								var height_ = arrTest[t].srcImg[indexImg].height;
								var testImg_W = 450;
			
								if(arrTest[t].srcImg[indexImg].width > testImg_W){
									var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
									width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
									height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
								}
					
								//myMainImg(myImg, myAlt, width, height, myAlign);
								if(c == 0 ){
									repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
									repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);							
								}else{
									repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
								}
										
							}
						}						
						if(randomImgSelMode == 2){
							repConcept = "";
							if(c == arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
								var indexImg = Math.floor(Math.random() * arrTest[t].srcImg.length);
							
								var width_ = arrTest[t].srcImg[indexImg].width;
								var height_ = arrTest[t].srcImg[indexImg].height;
								var testImg_W = 450;
					
								if(arrTest[t].srcImg[indexImg].width > testImg_W){
									var widthSubTestW = arrTest[t].srcImg[indexImg].width - testImg_W;							
									width_ = arrTest[t].srcImg[indexImg].width - widthSubTestW;
									height_ = arrTest[t].srcImg[indexImg].height - widthSubTestW;
								}
								//myMainImg(myImg, myAlt, width, height, myAlign);
								repConcept = myMainImg(arrTest[t].srcImg[indexImg].img, "", width_, height_, alignString);
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);					
							}
							if(c < arrTest[t].concept.length-1 && arrTest[t].srcImg.length > 1){	
								repConcept = "";
								repConcept += myConRep(arrTest[t].concept[c], arrTest[t].links);
							}
						}
						
						//console.log("  "+);
					}else{
						repConcept = myConRep(arrTest[t].concept[c], arrTest[t].links);
					}
				
					if(arrTest[t].srcName.length == 1){
						outConcept += myConcept(id_,arrTest[t].srcName[0],repConcept);
					}else{
						outConcept += myConcept(id_,arrTest[t].srcName[c],repConcept);
					}
				}

		    	var outVideo = "";
				if(arrTest[t].video.length > 0){
					for(var v = 0; v < arrTest[t].video.length; v++) {
						if(arrTest[t].video[v].file != "media/mov/"){
							outVideo += myVideo(arrTest[t].video[v].display, arrTest[t].video[v].file, arrTest[t].video[v].width, arrTest[t].video[v].height, arrTest[t].video[v].autostart, arrTest[t].video[v].loop);
						}else{
							outVideo = "";
						}
					}
		        }        
		        
		        var outAudio = "";
				if(arrTest[t].audio.length > 0){
					for(var a = 0; a < arrTest[t].audio.length; a++) {
						if(arrTest[t].audio[a].file != "media/audio/"){
							outAudio += myAudio(arrTest[t].audio[a].display, arrTest[t].audio[a].file, arrTest[t].audio[a].width, arrTest[t].audio[a].height, arrTest[t].audio[a].autostart, arrTest[t].audio[a].loop);
						}else{
							outAudio = "";
						}
					}
		        }
		        
		        outConceptMedia += outIframe + outVideo + outConcept + outAudio;
		        		        
		        outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
		        outConceptMedia +="<br>";// or "<pre>   </pre>";//Defines pre-formatted text
		        outConceptMedia += '<div class=\"clearthefloats x8\"></div>';
			}
		}    		
   	}

   	// if you uncomment you can have the side menu back 
    //document.getElementById("myDIV_TopicNav_0").innerHTML = topicNav();
    document.getElementById("myDIV_ConceptMedia").innerHTML = outConceptMedia;
    document.getElementById("myDIV_AtWindowOpen").innerHTML = "";
    
    return outConceptMedia;
}

//myAudio------------------------------------_
function myAudio(name, audio, width, height, autostart, loop){
	var out = "";
	//OLD WAY
	//<div class="columnL main x2"><embed class="box x2 floatL" src="audio/concomitant.mp3" width="140" height="40" autostart="false" loop="FALSE"></embed></div>;
	//out += '<embed class="box x2 floatL" src="' + audio + '" width="'+width+'" height="'+height+'" autostart="'+autostart+'" loop="'+loop+'"></embed></div>';
	
	// <audio controls>
	// <source src="horse.ogg" type="audio/ogg">
	// <source src="horse.mp3" type="audio/mpeg">
	// Your browser does not support the audio element.
	// </audio>
	
    out += '<div class='+mainAudioClass+'><h>'+name+'<h><p><audio controls><source src="' + audio + '" type="audio/mpeg">Your browser does not support the audio element.</audio></p></div>';
    return out;
}

//myVideo------------------------------------_
function myVideo(name, video, width, height, autostart, loop){
	var out = "";
	
	// <video id="myVideo" width="320" height="176" controls>
	//   <source src="mov_bbb.mp4" type="video/mp4">
	//   <source src="mov_bbb.ogg" type="video/ogg">
	//   Your browser does not support HTML5 video.
	// </video>

	var myWidth = width;
	if (idMatchMediaWork == 0) {
		myWidth = 285;
	}
	if (idMatchMediaWork == 1) {
		myWidth = 340;
	}
	if (idMatchMediaWork == 2) {
		myWidth = 405;
	}
	if (idMatchMediaWork == 3) {
		myWidth = width;
	}
	if (idMatchMediaWork == 4) {
		myWidth = width;
	}
	if (idMatchMediaWork == 5) {
		myWidth = width;
	}
	if (idMatchMediaWork == 6) {
		myWidth = width;
	}

    out += '<div class='+mainVideoClass+'><h>'+name+'<h><p><video width="'+myWidth+'" height="'+height+'" controls><source src="' + video + '" type="video/mp4">Your browser does not support HTML5 video.</audio></p></div>';
    return out;
}

//myNavLinks------------------------------------_
function myNavLinks(arr){
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '"title="' + arr[i].displayTitle + '">' + arr[i].display + '</a>';//target="_blank"
    }
    return out;
}

//myConcept------------------------------------_
function myConcept(id, srcName,concept) {
    var myId = id;
    var myClass = "";
    var out = "";
	var myConceptRepNav = concept;
		
	//<div class="box boxColor0 x2 colorBorder0 mainLink0"><h2>Concept</h2><div class="columnL main xp5"><p>thisThatAnd</p></div></div>
    out += '<div class=' + myMediaClass + '><h2 class=' + myH2Class + '>' + srcName + '</h2><div id= "divCon_1_"'+ myId +' class=\" center_H main col-ms-9 col-mm-9 col-ml-9 col-t-9 col-l-12 col-ll-12 col-12\"><p id= "pCon_0_"'+ myId +' >' + myConceptRepNav + '</p></div></div>';
    return out;
}

//myMainImg---------------------------------------_
function myMainImg(myImg, myAlt, width, height, myAlign) {
    var out = "";
        
	out += '<img src="' + myImg + '"alt="'+myAlt+'" width="'+width+'" height="'+height+'"align="'+myAlign+'">';//"align="right">';
	
    return out;
}


//myIframe---------------------------------------_
function myIframe(url,width,height) {
    var out = "";
	/*
	<div class="box xp3 floatL">
		<iframe src="https://player.vimeo.com/video/103338706" width="700" height="513" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	</div>
	*/
	//'box xp3 floatL' ' or no
	
	var myWidth = width;
	if (idMatchMediaWork == 0) {
		myWidth = 300;
	}
	if (idMatchMediaWork == 1) {
		myWidth = 355;
	}
	if (idMatchMediaWork == 2) {
		myWidth = 405;
	}
	if (idMatchMediaWork == 3) {
		myWidth = width;
	}
	if (idMatchMediaWork == 4) {
		myWidth = width;
	}
	if (idMatchMediaWork == 5) {
		myWidth = width + width/2;
	}
	if (idMatchMediaWork == 6) {
		myWidth = width + width;
	}
	
    out += '<div class= \"box col-t-7 col-l-7 col-ll-7 col-7 floatL\"><iframe src=\"' + url + '"width="' + myWidth + '"height="' + height + '"frameborder=\"0\"webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
    return out;
}

//myConRep------------------------------_
function myConRep(myStr,arr) {
	var outStr = myStr;
	var u;
	for(u = 0; u < arr.length; u++) {
	
		var regex = new RegExp(arr[u].display, 'g');
		outStr = outStr.replace(regex, '<a href="' + arr[u].url + '" target="_blank" title="' + arr[u].displayTitle + '" >' + arr[u].display + '</a>');
		
		//target="_blank"
		
	}
	
	if(outStr == undefined){
		outStr = myStr;
	}
	
    return outStr;
}

//myTag----------------------------------------------------_
//setFromOpt-------------------------------_
function setFromOpt(str) {
    document.getElementById("mySelect").value = str;
}

//allFromOpt-------------------------------_
function allFromOpt(arr) {
	/*
	<form action="action_page.php">
		<select name="cars" id="mySelect" onchange="myFunction()">
			<option value="volvo">Volvo</option>
		</select>
		<br><br>
		<input type="submit">
	</form>
	*/

	if(atStart == true){
		atStart = false;
	}
	var newArr = [];
	newArr = arr;
		
	//testonChangeFun(newArr,700,515) = new function(){onChangeFun(newArr,700,515);}
	var allTagNavArr = [];
	var index
	allTagNavArr = allTagNav(arr);
	
	// this is fix for EI v 11.0
	for(var i=0;i<allTagNavArr.length; ++i) {
		if(allTagNavArr[i] == theIndexStrFromOpt){
			theIndexFromOpt = i;
		}
	}
	
	// this needs fix for EI v 11.0
	//theIndexFromOpt = allTagNavArr.findIndex(findIndex_);
	
	var action = "";
	var name = "Tag";
	var id = "mySelect";
	
	var str = "";
	str = '<form action="' + action + '"><select name="' + name + '" id="' + id + '" onchange="onChangeFun(700,515), window.scrollTo(0, 0)">';

	for(var i=0;i<allTagNavArr.length; ++i) {
		if(i == 0){
			str += '<option value="' + i + '"selected="selected">' + allTagNavArr[i] + '</option>';
		}else{
			str += '<option value="' + i + '">' + allTagNavArr[i] + '</option>';
		}
		
	}
	str += '</select></form>';
	return str;
}

//allTagNav---------------------------------------_
function allTagNav(arr){
	var allStr;
	var words = [];
	var out = [];
	var i;
	for(i = 0; i < arr.length; i++) {
		allStr += arr[i].myTag;
	}
	allStr += "#-_-_-_-_-_-_-_-_-_Tags_-_-_-_-_-_-_-_-_-_-";
	allStr += "#HOME";
	words = splitSort(allStr, "#");
	out = uniq(words);
	return out;
}

//splitSort---------------------------------------_
function splitSort(str, splOn){
	var words = str.split(splOn);
	words.sort();
	return words;
}

//uniq---------------------------------------_
function uniq(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}

//indexes-------------------------------_
function indexes(source, find) {
  var result = [];
  var i;
  for(i=0;i<source.length; ++i) {
    // If you want to search case insensitive use 
    // if (source.substring(i, i + find.length).toLowerCase() == find) {
    if (source.substring(i, i + find.length) == find) {
      result.push(i);
    }
  }
  return result;
}

function findIndex_(test) {
    return test == theIndexStrFromOpt;//"HOME";
}


//titleCase-----------------------------_
function titleCase(string) { return string.charAt(0).toUpperCase() + string.slice(1); }

//myButtonNav------------------------------------_
function myButtonNavHome(arr) {
    
    var out = "";
    
	// <div class="button-group dropdown">
	//   <button class="dropdown-toggle button">Default Dropdown</button>
	//   <div class="dropdown-body">
	// 		<button class="dropdown-toggle button">Item111111 1</button>
	// 		<a href="http://google.com" class="dropdown-menu-item" target="_blank">Google.com</a>
	// 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolore.</p>
	//   </div>
	// </div>

	var str = "";
	var strOut = "";
	var addDivAtEnd = false;
	var buttIndex;

	for(var db = 0; db < arr.length; db++) {
	
		if(db == 0 || db == 4 || db == 5){// #5 is HOME so if more or less is add to [] you need to update !!! 
			
			var maxLenOfDisp_S = 2;
			var maxLenOfDisp_M = 3;
			var maxLenOfDisp_L = 5;
			var getSmallDisplay = '';
	
			if (idMatchMediaWork == 0) {
				getSmallDisplay = arr[db].display;
			}
			if (idMatchMediaWork == 1) {
				getSmallDisplay = arr[db].display;
			}
			if (idMatchMediaWork == 2) {
				getSmallDisplay = arr[db].display;
			}
			if (idMatchMediaWork == 3) {
				getSmallDisplay = arr[db].display;
			}
			if (idMatchMediaWork == 4) {
				getSmallDisplay = arr[db].display;
			}
			if (idMatchMediaWork == 5) {
				getSmallDisplay = arr[db].display;
			}
			if (idMatchMediaWork == 6) {
				getSmallDisplay = arr[db].display;
			}
			
			if(arr[db].url == ""){
				if(arr[db].links[0].srcName != "" && arr[db].links.length > 0){
					str = '<div class="button-group dropdown midBigFont-t midBigFont-l midBigFont-ll midBigFont-k"><button class="dropdown-toggle button midBigFont-t midBigFont-l midBigFont-ll midBigFont-k">' + getSmallDisplay + '</button>';
					str += '<div class="dropdown-body dropdown-body-ms-lr dropdown-body-mm-lr dropdown-body-ml-lr dropdown-body-t-lr dropdown-body-l-lr dropdown-body-lr midBigFont-t midBigFont-l midBigFont-ll midBigFont-k">';
					var dc;
					for(dc = 0; dc < arr[db].links.length; dc++) {
						if(arr[db].links[dc].url == ""){
							var n = arr[db].links[dc].display.toString();
							var testN = n.toString();
							str += '<button class="dropdown-toggle button midBigFont-t midBigFont-l midBigFont-ll midBigFont-k" onclick="onChangeStrFun(\''+testN+'\',700,515);return false;">'+arr[db].links[dc].display+'</button>';
							str += '<div class=\"clearthefloats\"></div>';
						}
						if(arr[db].links[dc].url != ""){
							var n = arr[db].links[dc].display.toString();
							var testN = n.toString();
							str += '<button class="dropdown-toggle button midBigFont-t midBigFont-l midBigFont-ll midBigFont-k" onclick="myOpenSelf(\''+arr[db].links[dc].url+'\');return false;">'+arr[db].links[dc].display+'</button>';
							str += '<div class=\"clearthefloats\"></div>';						
						}
					}
					str += '</div>';
					addDivAtEnd = true;
				}else{
					addDivAtEnd = false;
					//onChangeStrFun()
					var n = arr[db].display;
					var testN = n.toString();
					str = '<button button="#home" class="dropdown-toggle button midBigFont-t midBigFont-l midBigFont-ll midBigFont-k" onclick="onChangeStrFun(\''+testN+'\',700,515);return false;">' + getSmallDisplay + '</button>';
				}
				
			}else{
				addDivAtEnd = false;
				//onChangeStrFun()
				var n = arr[db].url;
				var testN = n.toString();
				str = '<button button="#home" class="dropdown-toggle button midBigFont-t midBigFont-l midBigFont-ll midBigFont-k" onclick="myOpenSelf(\''+arr[db].url+'\');return false;">' + getSmallDisplay + '</button>';
				//str = '<button button="#home" class="dropdown-toggle button" onclick="myReload();return false;">' + arr[db].display + '</button>';
			}
			if(addDivAtEnd == true){
				str += '</div>';
			}
			strOut += str;					
		}					
	}
	//console.log(str);
    return strOut;
}


//myButtonNav------------------------------------_
function myButtonNav(arr) {
    
    var out = "";
    
	// <div class="button-group dropdown">
	//   <button class="dropdown-toggle button">Default Dropdown</button>
	//   <div class="dropdown-body">
	// 		<button class="dropdown-toggle button">Item111111 1</button>
	// 		<a href="http://google.com" class="dropdown-menu-item" target="_blank">Google.com</a>
	// 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolore.</p>
	//   </div>
	// </div>

	var str = "";
	var strOut = "";
	var addDivAtEnd = false;
	var buttIndex;

	for(var db = 0; db < arr.length; db++) {
		var maxLenOfDisp_S = 2;
		var maxLenOfDisp_M = 3;
		var maxLenOfDisp_L = 5;
		var getSmallDisplay = '';

		if (idMatchMediaWork == 0) {
			if(arr[db].display.length >= maxLenOfDisp_S){
				getSmallDisplay = arr[db].display.slice(0,maxLenOfDisp_S-1);
			}else{
				getSmallDisplay = arr[db].display;
			}
		}
		if (idMatchMediaWork == 1) {
			if(arr[db].display.length >= maxLenOfDisp_M){
				getSmallDisplay = arr[db].display.slice(0,maxLenOfDisp_M-1);
			}else{
				getSmallDisplay = arr[db].display;
			}
		}
		if (idMatchMediaWork == 2) {
			if(arr[db].display.length >= maxLenOfDisp_L){
				getSmallDisplay = arr[db].display.slice(0,maxLenOfDisp_L-1);
			}else{
				getSmallDisplay = arr[db].display;
			}
		}
		if (idMatchMediaWork == 3) {
			getSmallDisplay = arr[db].display;
		}
		if (idMatchMediaWork == 4) {
			getSmallDisplay = arr[db].display;
		}
		if (idMatchMediaWork == 5) {
			getSmallDisplay = arr[db].display;
		}
		if (idMatchMediaWork == 6) {
			getSmallDisplay = arr[db].display;
		}

		if(arr[db].url == ""){
			if(arr[db].links[0].srcName != "" && arr[db].links.length > 0){
				str = '<div class="button-group dropdown midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k"><button class="dropdown-toggle button midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k">' + getSmallDisplay + '</button>';
				str += '<div class="dropdown-body dropdown-body-ms-lr dropdown-body-mm-lr dropdown-body-ml-lr dropdown-body-t-lr dropdown-body-l-lr dropdown-body-lr midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k">';
				var dc;
				for(dc = 0; dc < arr[db].links.length; dc++) {
					if(arr[db].links[dc].url == ""){
						var n = arr[db].links[dc].display.toString();
						var testN = n.toString();
						str += '<button class="dropdown-toggle button midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k" onclick="onChangeStrFun(\''+testN+'\',700,515);return false;">'+arr[db].links[dc].display+'</button>';
						str += '<div class=\"clearthefloats\"></div>';
					}
					if(arr[db].links[dc].url != ""){
						var n = arr[db].links[dc].display.toString();
						var testN = n.toString();
						str += '<button class="dropdown-toggle button midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k" onclick="myOpenSelf(\''+arr[db].links[dc].url+'\');return false;">'+arr[db].links[dc].display+'</button>';
						str += '<div class=\"clearthefloats\"></div>';						
					}
				}
				str += '</div>';
				addDivAtEnd = true;
			}else{
				addDivAtEnd = false;
				//onChangeStrFun()
				var n = arr[db].display;
				var testN = n.toString();
				str = '<button button="#home" class="dropdown-toggle button midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k" onclick="onChangeStrFun(\''+testN+'\',700,515);return false;">' + getSmallDisplay + '</button>';
			}
			
		}else{
			addDivAtEnd = false;
			//onChangeStrFun()
			var n = arr[db].url;
			var testN = n.toString();
			str = '<button button="#home" class="dropdown-toggle button midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k" onclick="myOpenSelf(\''+arr[db].url+'\');return false;">' + getSmallDisplay + '</button>';
			//str = '<button button="#home" class="dropdown-toggle button" onclick="myReload();return false;">' + arr[db].display + '</button>';
		}
		if(addDivAtEnd == true){
			str += '</div>';
		}
		strOut += str;					
	}
	//console.log(str);
    return strOut;
}

function dropdownListen(elem) {
  elem.onclick = function(e) {
	// go no farther if inside the dropdown was clicked
	if (!e.target.matches('.dropdown-menu-item, .dropdown-body, p')) {
	  // If the current dropdown is not already open, check all of the others and close any that are found
	  if (!this.classList.contains('shown')) {
		// create object containing all .dropdown elements, again
		var dropdowns = document.getElementsByClassName("dropdown");
		// loop through "dropdowns"
		for (var d = 0; d < dropdowns.length; d++) {
		  var openDropdown = dropdowns[d];
		  // remove class "shown" if any open dropdown is found
		  if (openDropdown.classList.contains('shown')) {
			openDropdown.classList.remove('shown');
		  }
		}
	  }
	  // toggle the class of the dropdown that was clicked
	  this.classList.toggle('shown');
	}
  }
}
	
document.onclick = function(e) {
	
	  if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            console.log(" TEST " + i > -1);
            return i > -1;            
        };
	}
	
	function selectorMatches(el, selector) {
	var p = Element.prototype;
	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
		};
		console.log(" selectorMatches " + i > -1);
	return f.call(el, selector);
	}

	
  // close any open dropdowns when clicking anywhere else on the document
  if (!e.target.matches('.dropdown-toggle, .dropdown-menu-item, .dropdown-body, p')) {
	// create object containing all .dropdown elements, again
	var dropdowns = document.getElementsByClassName("dropdown");
	// loop through "dropdowns"
	for (var d = 0; d < dropdowns.length; d++) {
	  var openDropdown = dropdowns[d];
	  // remove class "shown" if any open dropdown is found
	  if (openDropdown.classList.contains('shown')) {
		openDropdown.classList.remove('shown');
	  }
	}
  }  
}

//myNavMain---------------------------------------_
function myNavMainFormImgOnsubmit(arr) {//add action
	var myMethod = "get";
	var myType = "image";
	var width = "100";
	var height = "100";
	var maxLenOfDisp_S = 2;
	var maxLenOfDisp_M = 3;
	var maxLenOfDisp_L = 5;
	var getSmallDisplay = '';
	
	if (idMatchMediaWork == 0) {
		width = "100";
		height = "100";
	}
	if (idMatchMediaWork == 1) {
		width = "100";
		height = "100";
	}
	if (idMatchMediaWork == 2) {
		width = "100";
		height = "100";
	}
	if (idMatchMediaWork == 3) {
		width = "100";
		height = "100";
	}
	if (idMatchMediaWork == 4) {
		width = "100";
		height = "100";
	}
	if (idMatchMediaWork == 5) {
		width = "100";
		height = "100";
	}
	if (idMatchMediaWork == 6) {
		width = "100";
		height = "100";
	}

	var onclick = 0;//fun + "return false";
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
    	
    	var num_Id = i;
		var nId = num_Id.toString();
		var topicNavP_Id = "myNavMainFormImgOnsubmit_Id_" + nId;
		
    	out += '<div id="'+topicNavP_Id+'" class="boxZero xMainNavPic_ xMainNavPic_m floatL tooltip"><span class="tooltiptext">'+arr[i].display+'</span><form action="javascript:;" onsubmit="onChangeStrFun(\''+arr[i].display+'\',700,515), window.scrollTo(0, 0)" method="'+myMethod+'"><input type="'+myType+'" src="' + arr[i].img + '"onclick="'+onclick+'return false" width="'+width+'" height="'+height+'"></form></div>';
    }
    return out;
}

//topicNav------------------------------_
function topicNav() {
	var myMethod = "get";
	var myType = "image";

	var alignMode = 1;
	var alignString = "";

	var width = "140";
	var height = "140";

	var onclick = 0;//fun + "return false";
    var out = "";
	
	var iconsImgIndex = 0;
	
	var t;
	for(t = 0; t < arrTest.length; t++) {
		var maxLenOfCon = 200;
		if(arrTest[t].concept[0].length >= maxLenOfCon){
			getSmallConcept = arrTest[t].concept[0].slice(0,maxLenOfCon-1);
			getSmallConcept += "..."
		}else{
			getSmallConcept = arrTest[t].concept[0];
		}
		
		// if(url){}
		
		//make id = 
		var num_Id = t;
		var nId = num_Id.toString();
		var topicNavP_Id = "topicNavP_Id_" + nId;
		
		out += '<div class="box navRight colorBorder0 midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k"><h2>'+arrTest[t].srcName[0]+'</h2>'
		if(arrTest[t].iconsImg[iconsImgIndex].display == ""){
			if(arrTest[t].iconsImg[iconsImgIndex].url_P == ""){
				out += '<p id="'+topicNavP_Id+'">'+getSmallConcept+'</p>';
			}else{
				out += '<p id="'+topicNavP_Id+'"><a href="'+arrTest[t].iconsImg[iconsImgIndex].url_P+'" title="link to '+arrTest[t].iconsImg[iconsImgIndex].url_P+'" accesskey="O">'+getSmallConcept+'</a></p>';
			}
		}
		if(arrTest[t].iconsImg[iconsImgIndex].display != ""){
			if(alignMode == 0){
				alignString = "left";
			}
			if(alignMode == 1){
				alignString = "right";
			}
			if(arrTest[t].iconsImg[iconsImgIndex].url_P == ""){
				//<a href="dAC_gamePlay_00.html" title="link to GamePlay" accesskey="O">Game Play</a>
				//out += '<p id="'+topicNavP_Id+'"><form action="javascript:;" onsubmit="onChangeSrcStrFun(\''+arrTest[t].iconsImg[iconsImgIndex].display+'\',700,515)" method="'+myMethod+'"><input type="'+myType+'" src="' + arrTest[t].iconsImg[iconsImgIndex].img + '"onclick="'+onclick+'return false" width="'+width+'" height="'+height+'"align="right"></form><a href="dAC_gamePlay_00.html" title="link to GamePlay" accesskey="O">'+getSmallConcept+'</a></p>';			
				width = arrTest[t].iconsImg[iconsImgIndex].width;
				height = arrTest[t].iconsImg[iconsImgIndex].height;
				out += '<p><form action="javascript:;" onsubmit="onChangeSrcStrFun(\''+arrTest[t].srcName[0]+'\',700,515), window.scrollTo(0, 0)" method="'+myMethod+'"><input type="'+myType+'" src="' + arrTest[t].iconsImg[iconsImgIndex].img + '"onclick="'+onclick+'return false" width="'+width+'" height="'+height+'" align="'+alignString+'"></form>'+getSmallConcept+'</p>';
			}else{
				out += '<p id="'+topicNavP_Id+'"><form action="javascript:;" onsubmit="onChangeSrcStrFun(\''+arrTest[t].iconsImg[iconsImgIndex].display+'\',700,515), window.scrollTo(0, 0)" method="'+myMethod+'"><input type="'+myType+'" src="' + arrTest[t].iconsImg[iconsImgIndex].img + '"onclick="'+onclick+'return false" width="'+width+'" height="'+height+'" align="'+alignString+'" ></form><a href="'+arrTest[t].iconsImg[iconsImgIndex].url_P+'" title="link to '+arrTest[t].iconsImg[iconsImgIndex].url_P+'" accesskey="O">'+getSmallConcept+'</a></p>';
			}
		}
		out += '</div>';
		
		out += '<div class=\"clearthefloats x2\"></div>';
		out +="<br>";// or "<pre>   </pre>";//Defines pre-formatted text
		
	}
	
	//window.scrollTo(0, 0);
    return out;
}

//relatedNav------------------------------_
function relatedNav(str, arr) {

	var tags = [];
	tags = arr;
	var myMethod = "get";
	var myType = "image";
	
	var alignMode = 0;
	var alignString = "";	
	
	var width = "140";
	var height = "140";
	var onclick = 0;//fun + "return false";
    var outConceptMedia = "";
    var indexMediaByTagStr = str;
	var cont = 0;
	
	var iconsImgIndex = 1;
    
    if (idMatchMediaWork == 0) {
		iconsImgIndex = 1;
	}
	if (idMatchMediaWork == 1) {
		iconsImgIndex = 1;
	}
	if (idMatchMediaWork == 2) {
		iconsImgIndex = 1;
	}
	if (idMatchMediaWork == 3) {
		iconsImgIndex = 1;
	}
	if (idMatchMediaWork == 4) {
		iconsImgIndex = 1;
	}
	if (idMatchMediaWork == 5) {
		iconsImgIndex = 1;
	}
	if (idMatchMediaWork == 6) {
		iconsImgIndex = 1;
	}
    
    outConceptMedia = '<div class="box boxColor1 colorBorder0 col-7 floatL" >';
		
	var tagsIndex = [];
	for(var at = 0; at < arrTest.length; at++) {
		for(var rm = 0; rm < tags.length; rm++) {
			
			var tagsTest = [];
			tagsTest = splitSort(arrTest[at].myTag, "#");//mainTag
			tagsTest = uniq(tagsTest);
		
			var num_Id = 0;
			if(indexMediaByTagStr != arrTest[at].srcName[0]){
				for(var tt = 0; tt < tagsTest.length; tt++) {
					if(tags[rm] == tagsTest[tt] && tags[rm] != "" && tagsTest[tt] != ""){
						tagsIndex.push(at);
					}	
				}
			}
		}
	}

	tagsIndex = uniq(tagsIndex);
	for(var ti = 0; ti < tagsIndex.length; ti++) {
		cont++;// keep this to clearthefloats
		
		var maxLenOfCon = 150;
		if(arrTest[tagsIndex[ti]].concept[0].length >= maxLenOfCon){
			getSmallConcept = arrTest[tagsIndex[ti]].concept[0].slice(0,maxLenOfCon-1);
			getSmallConcept += "..."
		}else{
			getSmallConcept = arrTest[tagsIndex[ti]].concept[0];
		}

		num_Id = ti;
		var nId = num_Id.toString();
		var relatedNavP_Id = "relatedNavP_Id_" + nId;
		
		if(arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].display != ""){
			alignMode = 0;
			if(alignMode == 0){
				alignString = "left";
			}
			if(alignMode == 1){
				alignString = "right";
			}
			if(arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].url_P == ""){
				
				width = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].width;
				height = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].height;
				
				if (idMatchMediaWork == 0) {
					width = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].width;
					height = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].height;
				}
				if (idMatchMediaWork == 1) {
					width = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].width;
					height = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].height;
				}
				if (idMatchMediaWork == 2) {
					width = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].width;
					height = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].height;
				}
				if (idMatchMediaWork == 3) {
					width = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].width;
					height = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].height;
				}
				if (idMatchMediaWork == 4) {
					width = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].width;
					height = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].height;
				}
				if (idMatchMediaWork == 5) {
					width = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].width;
					height = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].height;
				}
				if (idMatchMediaWork == 6) {
					width = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].width;
					height = arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].height;
				}

				outConceptMedia += '<div class="relatedDiv col-ms-11 col-mm-9 col-ml-8 col-t-4 col-l-12 col-ll-12 col-12 midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k floatL boxColor2"><form action="javascript:;" onsubmit="onChangeSrcStrFun(\''+arrTest[tagsIndex[ti]].srcName[0]+'\',700,515), window.scrollTo(0, 0)" method="'+myMethod+'"><input type="'+myType+'" src="' + arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].img + '"onclick="'+onclick+'return false" width="'+width+'" height="'+height+'" align="'+alignString+'"></form>';
			}else{
				outConceptMedia += '<div class="relatedDiv col-ms-11 col-mm-9 col-ml-8 col-t-4 col-l-12 col-ll-12 col-12 midFont-ms midFont-mm midFont-ml midFont-t midFont-l midFont-ll midBigFont-k floatL boxColor2"><form action="javascript:;" onsubmit="onChangeSrcStrFun(\''+arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].display+'\',700,515), window.scrollTo(0, 0)" method="'+myMethod+'"><input type="'+myType+'" src="' + arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].img + '"onclick="'+onclick+'return false" width="'+width+'" height="'+height+'" align="'+alignString+'"></form>';
			}
		}
		
		outConceptMedia += '<div class='+myRelatedDivClass+'>';//relatedDiv
		
		outConceptMedia += '<h2>'+arrTest[tagsIndex[ti]].srcName[0]+'</h2>';
	
		if(arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].url_P == ""){
			//<a href="dAC_gamePlay_00.html" title="link to GamePlay" accesskey="O">Game Play</a>
			//outConceptMedia += '<p id="'+relatedNavP_Id+'"><form action="javascript:;" onsubmit="onChangeSrcStrFun(\''+arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].display+'\',700,515)" method="'+myMethod+'"><input type="'+myType+'" src="' + arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].img + '"onclick="'+onclick+'return false" width="'+width+'" height="'+height+'" align="'+alignString+'"></form><a href="dAC_gamePlay_00.html" title="link to GamePlay" accesskey="O">'+getSmallConcept+'</a></p>';
			outConceptMedia += '<p id="'+relatedNavP_Id+'" class="relatedP">'+getSmallConcept+'</p>';
		}else{
			outConceptMedia += '<p id="'+relatedNavP_Id+'" class="relatedP"><a href="'+arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].url_P+'" title="link to '+arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].url_P+'" accesskey="O">'+getSmallConcept+'</a></p>';
		}
							
	if(arrTest[tagsIndex[ti]].iconsImg[iconsImgIndex].display != ""){outConceptMedia += '</div></div>';}else{outConceptMedia += '</div>';}
		
	if (idMatchMediaWork == 0) {
		if(cont==1){
			//outConceptMedia += '</div>';
			outConceptMedia += '<div class="clearthefloats colorBorder0 xp5 yr0"></div>';
			cont = 0;
		}
	}
	if (idMatchMediaWork == 1) {
		if(cont==1){
			//outConceptMedia += '</div>';
			outConceptMedia += '<div class="clearthefloats colorBorder0 xp5 yr0"></div>';
			cont = 0;
		}
	}
	if (idMatchMediaWork == 2) {
		if(cont==1){
			//outConceptMedia += '</div>';
			outConceptMedia += '<div class="clearthefloats colorBorder0 xp5 yr0"></div>';
			cont = 0;
		}
	}
	if (idMatchMediaWork == 3) {
		if(cont==3){
			//outConceptMedia += '</div>';
			outConceptMedia += '<div class="clearthefloats colorBorder0 xp5 yr0"></div>';
			cont = 0;
		}
	}
	if (idMatchMediaWork == 4) {
		if(cont==3){
			//outConceptMedia += '</div>';
			outConceptMedia += '<div class="clearthefloats colorBorder0 xp5 yr0"></div>';
			cont = 0;
		}
	}
	if (idMatchMediaWork == 5) {
		if(cont==3){
			//outConceptMedia += '</div>';
			outConceptMedia += '<div class="clearthefloats colorBorder0 xp5 yr0"></div>';
			cont = 0;
		}
	}
	if (idMatchMediaWork == 6) {
		if(cont==3){
			//outConceptMedia += '</div>';
			outConceptMedia += '<div class="clearthefloats colorBorder0 xp5 yr0"></div>';
			cont = 0;
		}
	}
	
// 		if(cont==1){}
// 		if(cont==2){}

/*
		if(cont==3){
			//outConceptMedia += '</div>';
			outConceptMedia += '<div class="clearthefloats colorBorder0 xp5 yr0"></div>';
			cont = 0;
		}
*/

	}
	//console.log(tagsIndex);
	
	if(outConceptMedia != '<div class="box boxColor1 xp5 colorBorder0 floatL" >'){
		outConceptMedia += '</div>';
		outConceptMedia += '<div class="clearthefloats"></div>';//"<br>";
	}else{
		outConceptMedia = "";
	}
	
    return outConceptMedia;
}

//scrollWin------------------------------_
function scrollWin(X,Y) {
    window.scrollTo(X, Y);
}

//myAlertFunction------------------------_
var myStringTesting = "It\'s alright";
function myAlertFunction(isAlert){
	if(isAlert == true){
		alert("It\'s alright");
	}
	console.log(myStringTesting);
	//if(isConsole == true){console.log(myStringTesting);}
	return myStringTesting;
}

//myReload------------------------_
function myReload() {
    location.reload();
}

//myOpenSelf--------------------------_
function myOpenSelf(str) {
    window.open(str, "_self");
}


/*
	(ol0)  (
	( * ) )
	$--)
	<<
*/