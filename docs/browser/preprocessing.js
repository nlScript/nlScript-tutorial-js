class Preprocessing {
  constructor(imageId) {
    this.image = IJS.Image.load(document.getElementById(imageId).src);
    this.pixelWidth = 1.0;
    this.units = "pixel";
  }

  setPixelWidth(pw, units) {
    this.pixelWidth = pw;
    this.units = units;
  }

  getPixelWidth() {
    return this.pixelWidth;
  }

  getUnits() {
    return this.units;
  }

  convertToGray() {
    this.image = this.image.then(function(img) {
      return Promise.resolve(img.grey());
    });
  }

  intensityNormalization() {
    console.log("intensityNormalization() not yet implemented.");
  }

  subtractBackground(radius) {
    console.log("subtractBackground() not yet implemented.");
  }

  gaussianBlur(stdDev) {
    let radius = Math.ceil(stdDev * Math.sqrt(-2 * Math.log(0.002))) + 1; // see ImageJ's GaussianBlur.makeGaussianKernel()
    this.image = this.image.then(function(img) {
      let ret = img.gaussianFilter({
        radius: radius,
        sigma: stdDev
      });
      return Promise.resolve(ret);
    });
  }

  medianFilter(radius) {
    this.image = this.image.then(function(img) {
      let ret = img.medianFilter({
        radius: radius
      });
      return Promise.resolve(ret);
    });
  }

  show(imageId) {
    this.image.then(function(img) {
      document.getElementById(imageId).src = img.toDataURL();
    });
  }
}

