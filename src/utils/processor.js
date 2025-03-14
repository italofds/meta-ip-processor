import $ from 'jquery';

// It works for both versions of Meta company's responses, before and after 2024. 
// To achieve this, the code searches for elements in tables (old format) or in divs (new format).

export async function fileProcess(htmlString) {		
	//Disable source loading from 'src' and 'href' attributes
	htmlString = htmlString.replace(/src=/gi, 'data-src=').replace(/href=/gi, 'data-href=');
	const $html = $(htmlString);
	
	//Remove all page breaks
	$html.find('.pageBreak').remove();
	
	//Get only text from html and replace all white spaces and line breaks
	const $htmlText = $html.text().replace(/\s+/g, '');
	
	//Find right format: IP Address First then Time or Time First then IP Adress
	const format1Regex = /IpAddressesIpAddress((?:\d{1,3}\.){3}\d{1,3}(?::\d+)?|\[(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}\]:\d+|(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4})Time(\d{4}-\d{2}-\d{2})(\d{2}:\d{2}:\d{2})Utc/i;
	const format2Regex = /IpAddressesTime(\d{4}-\d{2}-\d{2})(\d{2}:\d{2}:\d{2})UtcIpAddress((?:\d{1,3}\.){3}\d{1,3}(?::\d+)?|\[(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}\]:\d+|(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4})/i;
	
	const ipTimeArray = [];
	const ipTimeBlockRegex = /IpAddress((?:\d{1,3}\.){3}\d{1,3}(?::\d+)?|\[(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}\]:\d+|(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4})Time(\d{4}-\d{2}-\d{2})(\d{2}:\d{2}:\d{2})Utc/ig;
	const timeIpBlockRegex = /Time(\d{4}-\d{2}-\d{2})(\d{2}:\d{2}:\d{2})UtcIpAddress((?:\d{1,3}\.){3}\d{1,3}(?::\d+)?|\[(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}\]:\d+|(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4})/ig;
	let match;

	//If the file corresponds to format1, process first IP then Time as default format
	if(format1Regex.test($htmlText)) {
		while ((match = ipTimeBlockRegex.exec($htmlText)) !== null) {
			const ipPort = formatIP(match[1]);
			const date = `${match[2]} ${match[3]} UTC`;
			const ipTimeObj = {"ip" : ipPort.ip, "timestamp" : date, "port" : ipPort.port};

			ipTimeArray.push(ipTimeObj);
		}
		
	//If the file corresponds to format1, process first Time then IP as default format
	} else if(format2Regex.test($htmlText)) {		
		while ((match = timeIpBlockRegex.exec($htmlText)) !== null) {
			const ipPort = formatIP(match[3]);
			const date = `${match[1]} ${match[2]} UTC`;
			const ipTimeObj = {"ip" : ipPort.ip, "timestamp" : date, "port" : ipPort.port};

			ipTimeArray.push(ipTimeObj);
		}

	// If none of the formats are found, an error message will appear.
	} else {
		alert("Não foi possível processar o arquivo: não foram encontrados registros de IP e Data no formato esperado.");
	}

	return ipTimeArray;
}

function formatIP(IPAddressRaw){
	var result = {};
	
	// Check if it's IPv4
	if(IPAddressRaw.includes(".")) {

		const parts = IPAddressRaw.split(':');
		result.ip = parts[0];
		result.port = parts[1] || null;
	}
	
	// Check if it's IPv6
	else {

		if (IPAddressRaw.includes('[')) {
			const matches = IPAddressRaw.match(/\[(.*)\](?::(\d+))?/);
			if (matches) {
				result.ip = matches[1];
				result.port = matches[2] || null;
			}
		} else {
			result.ip = IPAddressRaw;
		}


		var arrayIPParts = result.ip.split(":");
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
		
		result.ip = arrayIPPartsFormated.join(":").toUpperCase();
	}
	
	return result;
}
