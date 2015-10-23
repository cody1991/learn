{
        key: 'onPreImageLoaded',
        value: function onPreImageLoaded() {
          if (this.options.smallImage === 'reject' && (this.preImage.width * this.options.maxZoom < this.previewSize.w * this.options.exportZoom || this.preImage.height * this.options.maxZoom < this.previewSize.h * this.options.exportZoom)) {
            this.onImageError(_constants.ERRORS.SMALL_IMAGE);
            if (this.image.src) {
              this.setImageLoadedClass();
            }
            return;
          }

          if (this.options.allowCrossOrigin) {
            this.image.crossOrigin = this.preImage.src.indexOf('data:') === 0 ? null : 'Anonymous';
          }

          function _base64ToArrayBuffer(base64) {
            var binary_string = window.atob(base64.split(",")[1]);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
              bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
          }

          console.log("image source: " + this.preImage.src);
          var exif = EXIF.readFromBinaryFile(_base64ToArrayBuffer(this.preImage.src));
          console.log("exif orientation: " + exif.Orientation);

          var canvas = document.createElement("canvas");
          canvas.width = this.preImage.width;
          canvas.height = this.preImage.height;
          var ctx = canvas.getContext("2d");
          var x = 0;
          var y = 0;
          ctx.save();

          if (exif.Orientation != "undefined") {

            if (exif.Orientation > 4) {

            canvas.width = this.preImage.height;
            canvas.height = this.preImage.width;

        }

            switch (exif.Orientation) {
              case 2:
                console.log("2");
                // horizontal flip
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                break;
              case 3:
                console.log("3");
                // 180° rotate left
                ctx.translate(canvas.width, canvas.height);
                ctx.rotate(Math.PI);
                break;
              case 4:
                console.log("4");
                // vertical flip
                ctx.translate(0, canvas.height);
                ctx.scale(1, -1);
                break;
              case 5:
                console.log("5");
                // vertical flip + 90 rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.scale(1, -1);
                break;
              case 6:
                console.log("6");
                // 90° rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(0, -canvas.height);
                y = canvas.height-canvas.width;
                break;
              case 7:
                console.log("7");
                // horizontal flip + 90 rotate right
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(canvas.width, -canvas.height);
                ctx.scale(-1, 1);
                y = canvas.height-canvas.width;
                x = canvas.width-canvas.height;
                break;
              case 8:
                console.log("8");
                // 90° rotate left
                ctx.rotate(-0.5 * Math.PI);
                ctx.translate(-canvas.width, 0);
                x = canvas.width-canvas.height;
                break;
            }

            ctx.drawImage(this.preImage, x, y);
            ctx.restore();
            var finalImage = canvas.toDataURL("image/jpeg", 1.0);

            this.image.src = this.imageSrc = finalImage;
          } else {
            this.image.src = this.imageSrc = this.preImage.src;
          }
        }
      },