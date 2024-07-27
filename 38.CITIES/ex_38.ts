// Challenge Coding Qno:38

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`);  // Output : Karachi is in Pakistan.
                                               // Output : Islamabad is in Pakistan.
                                               // Output : Gaza is in Palestine.
}

describe_city("Karachi");
describe_city("Islamabad");
describe_city("Gaza", "Palestine");