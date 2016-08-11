/**
 * Created by admin on 6.8.2016 г..
 */
$.fn.startingSideBar = function () {

    var sideProperties = {
        name: "side object",
        imgsCount: 5,
        selectedImageIndex: 1,
        selectedImgObj: null
    };

    var coloredImgsUrl = [
        "image-colored-",
        "image-colored-",
        "image-colored-",
        "image-colored-",
        "image-colored-"
    ];

    var rawImgsUrl = [
        "image-",
        "image-",
        "image-",
        "image-",
        "image-"
    ];

    function sideBarMain() {
        //- Variables and objects declaration start
        var stylesUl = {
            "list-style-type" : "none",
            "margin" : "0",
            "padding" : "0"
        };

        var stylesLi = {
            "margin" : "0",
            "padding" : "2"
        };

        var stylesImg = {
            "border" : "1px solid gray",
            "border-radius" : "5px",
            "cursor" : "pointer"
        };

        var $sideWrapper = $(".sidebar-images"), // Main side div
            $sideUl,
            $sideLi,
            $sideImg,
            $selectedImg;

        //-- Variables and objects declaration end
        $sideUl = createDomElement("ul", "side-ul", "", stylesUl);

        for(var i = 0, len = sideProperties.imgsCount; i < len; i += 1){
            var onePlusIx = Number(1 + i);

            $sideImg = createDomElement("img", "side-img-" + onePlusIx, "", stylesImg);
            setImgAttributes($sideImg, 190, 140, "Images/" + coloredImgsUrl[i] + onePlusIx + ".png");
            $sideLi = createDomElement("li", "", "side-imgs-list", stylesLi);

            $sideImg.click(onClickSelectImg);

            $sideLi.append($sideImg);
            $sideUl.append($sideLi);
        }
        $sideWrapper.append($sideUl);

        selectedImg = sideProperties.selectedImgObj;

        return selectedImg;
    }

    //- Sub Functions declaration start

    function setImgAttributes(imgToSetAttributes, width, height, src) {

        $(imgToSetAttributes).attr("src", src).width(width).height(height);
    }

    function createDomElement(name, cssId, cssClass, cssStyles) {
        cssId = "" + cssId;
        cssClass = "" + cssClass;

        var newElement = document.createElement(name);

        // Add css id the the element
        if(!checkIfStringEmptyNullNothing(cssId)){
            $(newElement).attr('id', cssId);
        }

        // Add css class to the element
        if(!checkIfStringEmptyNullNothing(cssClass)){
            $(newElement).addClass(cssClass);
        }

        // Add css styles to the element
        if(!checkIfStringEmptyNullNothing(cssStyles)){
            $(newElement).css(cssStyles);
        }

        return $(newElement);
    }

    function getSelectedImgIx() {

        return sideProperties.selectedImageIndex;
    }

    function getSelectedImg() {

        return sideProperties.selectedImgObj;
    }

    function checkIfStringEmptyNullNothing(stringForCheck) {

        //return (val === undefined || val == null || val.length <= 0)
        if(stringForCheck === ""){
            return true;
        }
        if(stringForCheck == null){
            return true;
        }
        if(stringForCheck === undefined){
            return true;
        }
        if(stringForCheck.length < 2){
            return true;
        }

        return false;
    }

    function onClickSelectImg(ev) {
        //var $imgSelected = ev.target;
        var idSplitted = ev.target.id.split('-');
        var imgIx = Number(idSplitted[idSplitted.length - 1]);

        sideProperties.selectedImageIndex = imgIx;
        sideProperties.selectedImgObj = ev.target;

        var mImgSrc = updateMainImgSrc();

        console.log("src: " + mImgSrc);
        console.log("index: " + sideProperties.selectedImageIndex);
        console.log("image object: " + sideProperties.selectedImgObj);
    }

    function updateMainImgSrc() {
        var workplace = document.getElementById('main-drawing-window');
        var ctx = workplace.getContext('2d');

        var mainImg = document.querySelector('.front'),
            mainImgSrc = '',
            mainImgIx = sideProperties.selectedImageIndex;

        $(mainImg).width(710).height(530);

        mainImgSrc =  "Images/" + rawImgsUrl[mainImgIx - 1] + mainImgIx + ".png";
        $(mainImg).attr('src', mainImgSrc);


        ctx.clearRect(10,70, workplace.width, workplace.height);
        return mainImgSrc;
    }
    //-- Functions declaration end


    //- Function calls
    sideBarMain();
    updateMainImgSrc();
};



