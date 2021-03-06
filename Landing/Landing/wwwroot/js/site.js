var itemClassPrefix = "page";
var animatedClass = "animated";
var animationendEvent = "animationend";

var pagesCount = 3;
var allPages;

var MoveDirection = {
    Up: -1,
    Down: 1,
    None: 0
}

function animateCss(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add(animatedClass, animationName)

    function handleAnimationEnd() {
        node.classList.remove(animatedClass, animationName)
        node.removeEventListener(animationendEvent, handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener(animationendEvent, handleAnimationEnd)
}

var getPointFromEvent = function (e) {
    return {
        X: e.changedTouches[0].pageX,
        Y: e.changedTouches[0].pageY
    };
}

var jqClass = function (className) {
    return $("." + className);
}

var classNm = function (cl) {
    return "." + cl;
}

var initPages = function () {
    allPages = [];
    for (var i = 0; i < pagesCount; ++i) {
        allPages.push(itemClassPrefix + i);
    }
    allPages.forEach(p => {
        jqClass(p).hide();
        setDuration(p, "500ms");
    });
    jqClass(allPages[0]).show();
}

var setDuration = function (className, duration) {
    jqClass(className)
        .css("-webkit-animation-duration", duration)
        .css("animation-duration", duration);
}

var getMoveDirection = function (endPoint, startPoint) {
    if (Math.abs(endPoint.Y - startPoint.Y) < 10) {
        return MoveDirection.None;
    }
    if (endPoint.Y > startPoint.Y) {
        return MoveDirection.Down;
    }
    return MoveDirection.Up;
}

var tryGoToNext = function (currentPageNum) {
    if (currentPageNum == pagesCount - 1) {
        return currentPageNum;
    }
    currentPageNum++;
    animateCss(classNm(allPages[currentPageNum - 1]), "fadeOutUp", function () {
        jqClass(allPages[currentPageNum - 1]).hide();
        jqClass(allPages[currentPageNum]).show();
        animateCss(classNm(allPages[currentPageNum]), "fadeInUp");
    });
    return currentPageNum;
}

var tryGoToPrev = function (currentPageNum) {
    if (currentPageNum == 0) {
        return currentPageNum;
    }
    currentPageNum--;
    animateCss(classNm(allPages[currentPageNum + 1]), "fadeOutDown", function () {
        jqClass(allPages[currentPageNum + 1]).hide();
        jqClass(allPages[currentPageNum]).show();
        animateCss(classNm(allPages[currentPageNum]), "fadeInDown");
    });
    return currentPageNum;
}

var makeItemsScrollable = function () {
    if (!isPortaitMode())return;

    initPages();

    var touchStartPoint = null;
    var currentPageNum = 0;

    jQuery("body").on("touchstart", function (e) {
        touchStartPoint = getPointFromEvent(e);
    });

    jQuery("body").on("touchend", function (e) {
        if (!touchStartPoint) return;
        var endPoint = getPointFromEvent(e);
        var moveDir = getMoveDirection(endPoint, touchStartPoint);
        switch (moveDir) {
            case MoveDirection.Up:
                currentPageNum = tryGoToNext(currentPageNum);
                break;
            case MoveDirection.Down:
                currentPageNum = tryGoToPrev(currentPageNum);
                break;
            default:
                break;
        }
        touchStartPoint = null;
    });
}

var isPortaitMode = function () {
    return window.innerHeight > window.innerWidth;
}

$(document).ready(makeItemsScrollable);