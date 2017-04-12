const years = 10;

class DriverLicense {
  constructor(driver) {
    this.driver = driver;
    this.year = new Date().getFullYear() + years;
  }

  renewLicense(appovedExams) {
    if (appovedExams === true) {
      this.year += years;
    }
    return this.year;
  }

}

module.exports = DriverLicense;