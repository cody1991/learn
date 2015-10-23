$(function() {

    var cropboxW = $('.cropit-image-preview-container').width();
    var cropboxH = cropboxW * 4 / 3;

    var crop = $('.image-editor').cropit({
        imageBackground: true,
        width: cropboxW,
        height: cropboxH,
        smallImage: 'stretch',
        allowCrossOrigin: true,
        onImageLoading: function() {
            console.log('image is loading')
        },
        onImageLoaded: function() {
            console.log('image is laoded');
        },
        onZoomEnabled: function() {
            console.log('zoom enable');
        },
        onZoomDisabled: function() {
            console.log('zoom disabled');
        }
    });

    $('.export').click(function() {
        var imageData = crop.cropit('export', {
            type: 'image/jpeg',
            quality: 0.9,
            originalSize: true,
        });
        window.open(imageData);
    });
});
