const years = 10;

class DriverLicense {
  constructor(driver) {
    this.driver = driver;
    this.year = new Date().getFullYear() + years;
  }

  validLicense() {
    return this.year >= new Date().getFullYear();
  }

  renewLicense(appovedExams) {
    if (appovedExams === true) {
      this.year += years;
    }
    return this.year;
  }

}

module.exports = DriverLicense;