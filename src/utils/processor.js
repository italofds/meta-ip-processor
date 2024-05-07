import $ from 'jquery';

// It works for both versions of Meta company's responses, before and after 2024. 
// To achieve this, the code searches for elements in tables (old format) or in divs (new format).

export function fileProcess(htmlString) {

    htmlString = htmlString.replace(/src=/gi, 'data-src=').replace(/href=/gi, 'data-href=');//Disable source loading from 'src' and 'href' attributes
    const $html = $(htmlString);

    const $ipTimeBlock = $html.find('div.t.i,th').filter(function() {
        var textContent = $(this).clone().children().remove().end().text().trim();
        return textContent === "Ip Addresses";
    }).parent();

    const $ipElements = $ipTimeBlock.find('div.t.i,th').filter(function() {
        var textContent = $(this).clone().children().remove().end().text().trim();
        return textContent === "IP Address";
    }).parent().find('.m,td');

    const ips = $ipElements.map(function() {
        return $(this).text().trim();
    }).get();

    const $timeElements = $ipTimeBlock.find('div.t.i,th').filter(function() {
        var textContent = $(this).clone().children().remove().end().text().trim();
        return textContent === "Time";
    }).parent().find('.m,td');

    const timestamps = $timeElements.map(function() {
        return $(this).text().trim();
    }).get();

    if (ips.length !== timestamps.length) {
        console.error("An error occurred while processing the logs file: timestamp quantities and IP address do not match.");
        return [];
    }

    const results = ips.map((ip, index) => ({
        ip: formatIP(ip),
        timestamp: timestamps[index]
    }));

    return results;
  }

  function formatIP(IPAddressRaw){
	var ipAddressFormated;

	// Check if it's IPv4
	if(IPAddressRaw.indexOf(":") == -1) {
		ipAddressFormated = IPAddressRaw;		
	}

	// Check if it's IPv6
	else {
		var arrayIPParts = IPAddressRaw.split(":");
		var arrayIPPartsFormated = [];

		for (let ipPart of arrayIPParts) {
			if(ipPart.length < 2) {
				ipPart = "000" + ipPart;
			} else if(ipPart.length < 3) {
				ipPart = "00" + ipPart;
			} else if(ipPart.length < 4) {
				ipPart = "0" + ipPart;
			}
			
			arrayIPPartsFormated.push(ipPart);
		} 
		
		ipAddressFormated = arrayIPPartsFormated.join(":");
	}
	
	return ipAddressFormated.toUpperCase();
}
  