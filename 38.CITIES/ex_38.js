// Challenge Coding Qno:38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country)); // Output : Karachi is in Pakistan.
    // Output : Islamabad is in Pakistan.
    // Output : Gaza is in Palestine.
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Gaza", "Palestine");
