var photostackEle = document.getElementById('photostack');
var cropEle = $('#image-editor');
var resultEle = $('#result');
var create = document.getElementById('create');
var result;

window.onload = function() {
    var photostack = new Photostack(photostackEle, {
        callback: function(item) {}
    });
}

function cropStart() {

    // wx 
    // 0 is female
    // 1 is male
    var urlParams = function(url) {
        var urlParamsList = {};
        var params = url.search.replace(/^\?/, "").split('&');
        for (var i = 0; i < params.length; i++) {
            var param = params[i];
            var temp = param.split("=");
            urlParamsList[temp[0]] = decodeURI(temp[1]);
        }
        return urlParamsList;
    }
    var sex = urlParams(window.location).sex;

    if (sex == 0) {
        sex = 'female';
    } else {
        sex = 'male';
    }

    cropEle.show();

    var cropboxW = $('.cropit-image-preview-container').width();
    var rangeWrapper = $('.range-wrapper');
    var cropboxH = cropboxW * 4 / 3;

    var crop = cropEle.cropit({
        imageState: {
            src: result,
        },
        imageBackground: true,
        width: cropboxW,
        height: cropboxH,
        smallImage: 'stretch',
        allowCrossOrigin: true,
        sex: sex,
        onImageLoading: function() {
            console.log('image is loading');
        },
        onImageLoaded: function() {
            console.log('image is laoded');
        },
        onZoomEnabled: function() {
            rangeWrapper.show();
            console.log('zoom enable');
        },
        onZoomDisabled: function() {
            rangeWrapper.hide();
            console.log('zoom disabled');
        }
    });

    $('#export').click(function() {
        var imageData = crop.cropit('export', {
            type: 'image/jpeg',
            quality: 1,
            originalSize: true,
        });

        cropEle.hide();
        resultEle.find('img').attr('src', imageData);
        resultEle.css('display', 'table').show();
    });
}
