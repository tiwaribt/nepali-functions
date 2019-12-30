var NepaliFunctions = (function () {

	// Available Date Formats
	dateFormats = ['MM/DD/YYYY', 'MM-DD-YYYY', 'YYYY-MM-DD', 'YYYY/MM/DD'];

	function NepaliDateConverter() {

		this.bs_date_eq = "2000-09-17";
		this.ad_date_eq = "1944-01-01";
		this.bs = new Array();

		this.bs[2000] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2001] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2002] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2003] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2004] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2005] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2006] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2007] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2008] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
		this.bs[2009] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2010] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2011] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2012] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
		this.bs[2013] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2014] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2015] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2016] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
		this.bs[2017] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2018] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2019] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2020] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2021] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2022] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
		this.bs[2023] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2024] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2025] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2026] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2027] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2028] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2029] = new Array(31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2030] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2031] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2032] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2033] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2034] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2035] = new Array(30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
		this.bs[2036] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2037] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2038] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2039] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
		this.bs[2040] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2041] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2042] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2043] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
		this.bs[2044] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2045] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2046] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2047] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2048] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2049] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
		this.bs[2050] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2051] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2052] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2053] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
		this.bs[2054] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2055] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2056] = new Array(31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2057] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2058] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2059] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2060] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2061] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2062] = new Array(30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31);
		this.bs[2063] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2064] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2065] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2066] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
		this.bs[2067] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2068] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2069] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2070] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
		this.bs[2071] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2072] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2073] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
		this.bs[2074] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2075] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2076] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
		this.bs[2077] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
		this.bs[2078] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2079] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
		this.bs[2080] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
		this.bs[2081] = new Array(31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2082] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2083] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2084] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2085] = new Array(31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30);
		this.bs[2086] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2087] = new Array(31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30);
		this.bs[2088] = new Array(30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30);
		this.bs[2089] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2090] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2091] = new Array(31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30);
		this.bs[2092] = new Array(30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2093] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2094] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2095] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30);
		this.bs[2096] = new Array(30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
		this.bs[2097] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
		this.bs[2098] = new Array(31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31);
		this.bs[2099] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30);

		this.count_ad_days = count_ad_days;
		this.count_bs_days = count_bs_days;
		this.add_bs_days = add_bs_days;
		this.add_ad_days = add_ad_days;
		this.bs2ad = bs2ad;
		this.ad2bs = ad2bs;
		this.get_days_in_month = get_days_in_month;

		//Format: MM/DD/YYYY
		function count_ad_days(start_date, end_date) {
			var one_day = 1000 * 60 * 60 * 24;
			var x = start_date.split("-");
			var y = end_date.split("-");

			x[2] = Number(x[2]);
			x[1] = Number(x[1]);
			x[0] = Number(x[0]);

			y[2] = Number(y[2]);
			y[1] = Number(y[1]);
			y[0] = Number(y[0]);

			var date1 = Date.UTC(x[0], (x[1] - 1), x[2]);
			var date2 = Date.UTC(y[0], (y[1] - 1), y[2]);

			var Diff = Math.floor((date2 - date1) / (one_day));
			return Diff;
		}

		//Format: MM/DD/YYYY
		function count_bs_days(start_date, end_date) {
			var x = start_date.split("-");
			var y = end_date.split("-");

			var start_year = Number(x[0]);
			var start_month = Number(x[1]);
			var start_days = Number(x[2]);

			var end_year = Number(y[0]);
			var end_month = Number(y[1]);
			var end_days = Number(y[2]);

			/*
			Its not the piece of algorithm, but it works for this program..
			
			1) First add total days in all the years
				
			2) Subtract the days from first (n-1) months of the beginning year 
			
			3) Add the number of days from the last month of the beginning year
				 
			4) Subtract the days from the last months from the end year
			
			5) Add the beginning days excluding the day itself
			
			6) Add the last remaining days excluding the day itself 
			*/

			var days = 0;
			var i = 0;

			//	1) First add total days in all the years
			for (i = start_year; i <= end_year; i++) { days += arraySum(this.bs[i]); }

			//  2) Subtract the days from first (n-1) months of the beginning year
			for (i = 0; i < start_month; i++) { days -= this.bs[start_year][i]; }

			//	3) Add the number of days from the last month of the beginning year
			days += this.bs[start_year][12 - 1];

			//	4) Subtract the days from the last months from the end year
			for (i = end_month - 1; i < 12; i++) { days -= this.bs[end_year][i]; }

			//	5) Subtract the beginning days excluding the day itself
			days -= (start_days + 1);

			//	6) Add the last remaining days excluding the day itself 
			days += (end_days - 1);

			return days;
		}

		//  MM/DD/YYYY returns YYYY-MM-DD
		function add_ad_days(ad_date, num_days) {
			var d = new Date(ConvertDateFormat(ad_date, 'YYYY-MM-DD', 'MM/DD/YYYY'));
			d.setDate(d.getDate() + num_days);
			var month = d.getMonth() + 1;
			month = month < 10 ? '0' + month : month;
			var day = d.getDate();
			day = day < 10 ? '0' + day : day;
			return d.getFullYear() + '-' + month + "-" + day;
		}

		//  DD/MM/YYYY returns YYYY-MM-DD
		function add_bs_days(bs_date, num_days) {
			var x = bs_date.split("-");

			var bs_year = Number(x[0]);
			var bs_month = Number(x[1]);
			var bs_days = Number(x[2]);

			/*
			Algorithm: 
			1) Add the total number of days to the original days
			
			2) Until the number of days becomes applicable to the current month, subtract the days by the number of days in the current month and increase the month
				
			3) If month reaches 12, increase the year by 1 and set the month to 1
			*/

			//	1) Add the total number of days to the original days
			bs_days += num_days;

			//	2) Until the number of days becomes applicable to the current month, subtract the days by the number of days in the current month and increase the month
			while (bs_days > this.bs[bs_year][bs_month - 1]) {
				bs_days -= this.bs[bs_year][bs_month - 1];
				bs_month++;
				//3) If month reaches 12, increase the year by 1 and set the month to 1
				if (bs_month > 12) {
					bs_month = 1;
					bs_year++;
				}
			}
			return bs_year + '-' + (bs_month < 10 ? '0' + bs_month : bs_month) + '-' + (bs_days < 10 ? '0' + bs_days : bs_days);
		}

		function bs2ad(bs_date, format, returnFormat) {
			bs_date = ConvertDateFormat(bs_date, format, "YYYY-MM-DD");
			days_count = this.count_bs_days(this.bs_date_eq, bs_date);
			return ConvertDateFormat(this.add_ad_days(this.ad_date_eq, days_count), 'YYYY-MM-DD', returnFormat);
		}

		function ad2bs(ad_date, format, returnFormat) {
			ad_date = ConvertDateFormat(ad_date, format, "YYYY-MM-DD");
			days_count = this.count_ad_days(this.ad_date_eq, ad_date);
			return ConvertDateFormat(this.add_bs_days(this.bs_date_eq, days_count), 'YYYY-MM-DD', returnFormat);
		}

		function get_days_in_month(year, month) {
			return this.bs[year][month - 1];
		}

		//Find Sum of array
		var arraySum = function (o) {
			for (var s = 0, i = o.length; i; s += o[--i]);
			return s;
		};
	}

	/**
	 * This function returns date in target format.
	 * @param {string} dateString any date string
	 * @param {string} dateFormat source format
	 * @param {string} returnFormat target format
	 * @returns {string} returns date in target format.
	 */
	function ConvertDateFormat(dateString, dateFormat, returnFormat) {
		// Check Date Format Validity
		dateFormat = dateFormat ? (dateFormats.indexOf(dateFormat) > -1 ? dateFormat : 'MM/DD/YYYY') : 'MM/DD/YYYY';
		// Check Date Format Validity
		returnFormat = returnFormat ? (dateFormats.indexOf(dateFormat) > -1 ? returnFormat : 'YYYY-MM-DD') : 'YYYY-MM-DD';

		function addZero(number) {
			number = Number(number);
			return number < 10 ? '0' + number : number;
		}

		var dateParts = [];
		var returnDate = '';
		switch (dateFormat) {
			case 'MM/DD/YYYY':
				dateParts = dateString.split('/');
				returnDate = dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];
				dateParts = returnDate.split('-');
				break;
			case 'MM-DD-YYYY':
				dateParts = dateString.split('-');
				returnDate = dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];
				dateParts = returnDate.split('-');
				break;
			case 'YYYY-MM-DD':
				dateParts = dateString.split('-');
				returnDate = dateParts[0] + '-' + dateParts[1] + '-' + dateParts[2];
				dateParts = returnDate.split('-');
				break;
			case 'YYYY/MM/DD':
				dateParts = dateString.split('/');
				returnDate = dateParts[0] + '-' + dateParts[1] + '-' + dateParts[2];
				dateParts = returnDate.split('-');
				break;
		}

		switch (returnFormat) {
			case 'MM/DD/YYYY':
				returnDate = addZero(dateParts[1]) + '/' + addZero(dateParts[2]) + '/' + dateParts[0];
				break;
			case 'MM-DD-YYYY':
				returnDate = addZero(dateParts[1]) + '-' + addZero(dateParts[2]) + '-' + dateParts[0];
				break;
			case 'YYYY-MM-DD':
				returnDate = dateParts[0] + '-' + addZero(dateParts[1]) + '-' + addZero(dateParts[2]);
				break;
			case 'YYYY/MM/DD':
				returnDate = dateParts[0] + '/' + addZero(dateParts[1]) + '/' + addZero(dateParts[2]);
				break;
		}

		return returnDate;
	}

	/**
	 * This function converts AD date to BS date.
	 * @param {string} adDate any AD date
	 * @param {string} format any format
	 * @param {string} returnFormat any format
	 * @returns {string} converts AD date to BS date.
	 */
	function AD2BS(adDate, format, returnFormat) {
		format = format ? format : "MM/DD/YYYY";
		returnFormat = returnFormat ? returnFormat : "YYYY/MM/DD";
		var ndc = new NepaliDateConverter();
		return ndc.ad2bs(adDate, format, returnFormat);
	}

	/**
	 * This function converts BS date to AD date.
	 * @param {string} bsDate any BS date
	 * @param {string} format any format
	 * @param {string} returnFormat any format
	 * @returns {string} converts BS date to AD date.
	 */
	function BS2AD(bsDate, format, returnFormat) {
		format = format ? (dateFormats.indexOf(format) > -1 ? format : 'YYYY/MM/DD') : "YYYY/MM/DD";
		if (!ValidateBsDate(bsDate, format)) return false;
		returnFormat = returnFormat ? returnFormat : "MM/DD/YYYY";
		var ndc = new NepaliDateConverter();
		return ndc.bs2ad(bsDate, format, returnFormat);
	}

	/**
	 * This function checks the validity of the BS date.
	 * @param {string} bsDate any BS date
	 * @param {string} format any format
	 * @returns {boolean} the validity of the BS date.
	 */
	function ValidateBsDate(bsDate, format) {
		format = format ? (dateFormats.indexOf(format) > -1 ? format : 'YYYY-MM-DD') : "YYYY-MM-DD";
		bsDate = ConvertDateFormat(bsDate, format, 'YYYY-MM-DD');
		var dateParts = bsDate.split('-');
		for (var i = 0; i < dateParts.length; i++)
			dateParts[i] = Number(dateParts[i]);
		var totalDays = GetDaysInBsMonth(dateParts[0], dateParts[1]);
		return (dateParts[1] > 0 && dateParts[1] <= 12) && (dateParts[2] > 0 && dateParts[2] <= totalDays) ? true : false;
	}

	/**
	 * This function returns the current AD date.
	 * @param {string} format any format
	 * @returns {string} the current AD date.
	 */
	function GetCurrentAdDate(format) {
		format = format ? dateFormats.indexOf(format) > -1 ? format : 'MM/DD/YYYY' : 'MM/DD/YYYY';
		var date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
		var dateParts = date.split(',')[0].split('/');
		var day = parseInt(dateParts[1]);
		var month = parseInt(dateParts[0]);
		var year = parseInt(dateParts[2]);
		var dateString = year + '-' + month + '-' + day;
		return ConvertDateFormat(dateString, 'YYYY-MM-DD', format);
	}

	/**
	 * This function returns the current AD year.
	 * @returns {string} the current AD year.
	 */
	function GetCurrentAdYear() {
		var adDate = NepaliFunctions.GetCurrentAdDate();
		return parseInt(adDate.split('/')[2]);
	}

	/**
	 * This function returns the current AD month.
	 * @returns {string} the current AD month.
	 */
	function GetCurrentAdMonth() {
		var adDate = NepaliFunctions.GetCurrentAdDate();
		return parseInt(adDate.split('/')[0]);
	}

	/**
	 * This function returns the current AD day.
	 * @returns {string} the current AD day.
	 */
	function GetCurrentAdDay() {
		var adDate = NepaliFunctions.GetCurrentAdDate();
		return parseInt(adDate.split('/')[1]);
	}

	/**
	 * This function returns the current BS date.
	 * @param {string} format any format
	 * @returns {string} the current BS date.
	 */
	function GetCurrentBsDate(format) {
		var adDate = GetCurrentAdDate();
		return AD2BS(adDate, '', format);
	}

	/**
	 * This function returns the current BS year.
	 * @returns {string} the current BS year.
	 */
	function GetCurrentBsYear() {
		var bsDate = GetCurrentBsDate();
		var dateParts = bsDate.split('/');
		return dateParts[0];
	}

	/**
	 * This function returns the current BS month.
	 * @returns {string} the current BS month.
	 */
	function GetCurrentBsMonth() {
		var bsDate = GetCurrentBsDate();
		var dateParts = bsDate.split('/');
		return dateParts[1];
	}

	/**
	 * This function returns the current BS day.
	 * @returns {string} the current BS day.
	 */
	function GetCurrentBsDay() {
		var bsDate = GetCurrentBsDate();
		var dateParts = bsDate.split('/');
		return dateParts[2];
	}

	/**
	 * This function returns the AD months.
	 * @returns {string} the AD months.
	 */
	function GetAdMonths() {
		return new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	}

	/**
	 * This function returns the AD month.
	 * @param {number} number any number
	 * @returns {string} the AD month.
	 */
	function GetAdMonth(number) {
		var months = GetAdMonths();
		return months[parseInt(number, 10)];
	}

	/**
	 * This function returns the BS months in English.
	 * @returns {string} the BS months.
	 */
	function GetBsMonths() {
		return new Array('Baisakh', 'Jestha', 'Ashar', 'Shrawan', 'Bhadra', 'Ashoj', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra');
	}

	/**
	 * This function returns the BS month in English.
	 * @param {number} number any number
	 * @returns {string} the BS month.
	 */
	function GetBsMonth(number) {
		var months = GetBsMonths();
		return months[parseInt(number, 10)];
	}

	/**
	 * This function returns the BS months.
	 * @returns {Array} the BS months.
	 */
	function GetBsMonthsInUnicode() {
		return new Array('बैशाख', 'जेठ', 'अषाढ', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मङ्सिर', 'पौष', 'माघ', 'फाल्गुन', 'चैत्र');
	}

	/**
	 * This function returns the BS month in unicode.
	 * @param {number} number any number
	 * @returns {string} the BS month in unicode.
	 */
	function GetBsMonthInUnicode(number) {
		var months = GetBsMonthsInUnicode();
		return months[parseInt(number, 10)];
	}

	/**
	 * This function returns the BS days in unicode.
	 * @returns {Array} the BS days in unicode.
	 */
	function GetBsDays() {
		return new Array("आइतवार", "सोमवार", "मङ्गलवार", "बुधवार", "बिहिवार", "शुक्रवार", "शनिवार");
	}

	/**
	 * This function returns the BS day in unicode.
	 * @param {number} number any number
	 * @returns {string} the BS day in unicode.
	 */
	function GetBsDay(number) {
		var days = GetBsDays();
		return days[Number(day) - 1];
	}

	/**
	 * This function returns the BS days in short.
	 * @returns {Array} the BS days in short ("आ", "सो", "मं", "बु", "बि", "शु", "श").
	 */
	function GetBsDaysShort() {
		return new Array("आ", "सो", "मं", "बु", "बि", "शु", "श");
	}

	/**
	 * This function returns the AD days.
	 * @returns {Array} the AD days.
	 */
	function GetAdDays() {
		return new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	}

	/**
	 * This function returns the AD day.
	 * @param {number} number any number
	 * @returns {string} the AD day.
	 */
	function GetAdDay(number) {
		var days = GetAdDays();
		return days[Number(number)];
	}

	/**
	 * This function returns the full BS date.
	 * @param {string} bsDate any number
	 * @param {string} format any number
	 * @param {boolean} unicodeFlag true or false
	 * @returns {string} the full BS date.
	 */
	function GetBsFullDate(bsDate, format, unicodeFlag) {
		var months = [];
		format = format ? (dateFormats.indexOf(format) > -1 ? format : 'YYYY/MM/DD') : "YYYY/MM/DD";
		bsDate = ConvertDateFormat(bsDate, format, 'YYYY-MM-DD');
		var dateParts = bsDate.split('-');
		var day = dateParts[2];
		var month = dateParts[1];
		var year = dateParts[0];

		var returnString = "";
		if (unicodeFlag) {
			months = GetBsMonthsInNepali();
			returnString = ConvertToUnicode(Number(day)) + " " + months[month - 1] + " " + ConvertToUnicode(year);
		} else {
			months = GetBsMonths();
			returnString = Number(day) + " " + months[month - 1] + " " + year;
		}

		return returnString;
	}

	/**
	 * This function returns the full AD date.
	 * @param {string} adDate any number
	 * @param {string} format any number
	 * @returns {string} the full AD date.
	 */
	function GetAdFullDate(adDate, format) {
		format = format ? (dateFormats.indexOf(format) > -1 ? format : 'MM/DD/YYYY') : "MM/DD/YYYY";
		adDate = ConvertDateFormat(adDate, format, 'YYYY-MM-DD');
		var dateParts = adDate.split('-');

		return Number(dateParts[2]) + " " + NepaliFunctions.GetAdMonth(dateParts[1] - 1) + ", " + dateParts[0];
	}

	/**
	 * This function returns the day for the given AD date.
	 * @param {string} adDate any number
	 * @param {string} format any number
	 * @returns {string} the day.
	 */
	function GetAdFullDay(adDate, format) {
		format = format ? (dateFormats.indexOf(format) > -1 ? format : 'MM/DD/YYYY') : "MM/DD/YYYY";
		adDate = ConvertDateFormat(adDate, format, 'YYYY-MM-DD');
		var dateParts = adDate.split('-');

		adDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
		return GetAdDay(adDate.getDay());
	}

	/**
	 * This function returns the BS date after adding the number of days.
	 * @param {string} bsDate any number
	 * @param {number} noOfDays any number
	 * @param {string} format any number
	 * @param {string} returnFormat any number
	 * @returns {string} the BS date after adding the number of days.
	 */
	function BsAddDays(bsDate, noOfDays, format, returnFormat) {
		format = format ? dateFormats.indexOf(format) > -1 ? format : 'YYYY-MM-DD' : 'YYYY-MM-DD';
		if (!ValidateBsDate(bsDate, format)) return false;
		bsDate = ConvertDateFormat(bsDate, format, 'YYYY-MM-DD');
		var ndc = new NepaliDateConverter();
		return ConvertDateFormat(ndc.add_bs_days(bsDate, noOfDays), 'YYYY-MM-DD', returnFormat);
	}

	/**
	 * This function returns that number of days between the two AD dates.
	 * @param {string} startDate any number
	 * @param {string} endDate any number
	 * @param {string} format any number
	 * @returns {number} that number of days between the two AD dates.
	 */
	function AdDatesDiff(startDate, endDate, format) {
		format = format ? dateFormats.indexOf(format) > -1 ? format : 'YYYY-MM-DD' : 'YYYY-MM-DD';
		startDate = ConvertDateFormat(startDate, format, 'YYYY-MM-DD');
		endDate = ConvertDateFormat(endDate, format, 'YYYY-MM-DD');
		var ndc = new NepaliDateConverter();
		return ndc.count_ad_days(startDate, endDate);
	}

	/**
	 * This function returns that number of days between the two BS dates.
	 * @param {string} startDate any number
	 * @param {string} endDate any number
	 * @param {string} format any number
	 * @returns {number} that number of days between the two BS dates.
	 */
	function BsDatesDiff(startDate, endDate, format) {
		format = format ? dateFormats.indexOf(format) > -1 ? format : 'YYYY/MM/DD' : 'YYYY/MM/DD';
		if (!ValidateBsDate(startDate, format)) return false;
		if (!ValidateBsDate(endDate, format)) return false;
		startDate = ConvertDateFormat(startDate, format, 'YYYY-MM-DD');
		endDate = ConvertDateFormat(endDate, format, 'YYYY-MM-DD');

		var ndc = new NepaliDateConverter();
		startDate = ndc.bs2ad(startDate, "YYYY-MM-DD");
		endDate = ndc.bs2ad(endDate, "YYYY-MM-DD");

		return ndc.count_ad_days(startDate, endDate);
	}

	/**
	 * This function returns the number of days in the given AD year and month.
	 * @param {number} year any number
	 * @param {number} month any number
	 * @returns {number} that number of days in the given AD year and month.
	 */
	function GetDaysInAdMonth(year, month) {
		var adDate = new Date(year, month, 0);
		return adDate.getDate()
	}

	/**
	 * This function returns the number of days in the given BS year and month.
	 * @param {number} year any number
	 * @param {number} month any number
	 * @returns {number} that number of days in the given BS year and month.
	 */
	function GetDaysInBsMonth(year, month) {
		var ndc = new NepaliDateConverter();
		return ndc.get_days_in_month(year, month);
	}

	/**
	 * This function converts number to unicode.
	 * @param {number} number any number
	 * @returns {string} that number converted to unicode string.
	 */
	function ConvertToUnicode(number) {
		number = number.toString();
		var returnString = "";
		for (c = 0; c < number.length; c++) returnString += convertNos(number[c]);
		return returnString;

		function convertNos(number) {
			switch (number) {
				case "0":
					return "०";
				case "1":
					return "१";
				case "2":
					return "२";
				case "3":
					return "३";
				case "4":
					return "४";
				case "5":
					return "५";
				case "6":
					return "६";
				case "7":
					return "७";
				case "8":
					return "८";
				case "9":
					return "९";
				default:
					return number;
			}
		}
	}

	/**
	 * This function converts unicode to number.
	 * @param {string} unicode any unicode number
	 * @returns {number} that number.
	 */
	function ConvertToNumber(unicode) {
		unicode = unicode.toString();
		var returnString = "";
		for (c = 0; c < unicode.length; c++) returnString += convertNos(unicode[c]);
		return returnString;

		function convertNos(number) {
			switch (number) {
				case "०":
					return 0;
				case "१":
					return 1;
				case "२":
					return 2;
				case "३":
					return 3;
				case "४":
					return 4;
				case "५":
					return 5;
				case "६":
					return 6;
				case "७":
					return 7;
				case "८":
					return 8;
				case "९":
					return 9;
				default:
					return number;
			}
		}
	}

	/**
	 * This function returns two digit numbers.
	 * @param {number} number any number
	 * @returns {string} that number, with 0 appended if its less than 10.
	 */
	function Get2DigitNo(number) {
		return number < 10 ? "0" + Number(number) : number;
	}

	return {
		AD2BS: AD2BS,
		BS2AD: BS2AD,
		ValidateBsDate: ValidateBsDate,
		GetCurrentAdDate: GetCurrentAdDate,
		GetCurrentAdYear: GetCurrentAdYear,
		GetCurrentAdMonth: GetCurrentAdMonth,
		GetCurrentAdDay: GetCurrentAdDay,
		GetCurrentBsDate: GetCurrentBsDate,
		GetCurrentBsYear: GetCurrentBsYear,
		GetCurrentBsMonth: GetCurrentBsMonth,
		GetCurrentBsDay: GetCurrentBsDay,
		GetAdMonths: GetAdMonths,
		GetAdMonth: GetAdMonth,
		GetBsMonths: GetBsMonths,
		GetBsMonth: GetBsMonth,
		GetBsDays: GetBsDays,
		GetBsDay: GetBsDay,
		GetBsDaysShort: GetBsDaysShort,
		GetAdDays: GetAdDays,
		GetAdDay: GetAdDay,
		GetBsMonthsInNepali: GetBsMonthsInNepali,
		GetBsMonthInNepali: GetBsMonthInNepali,
		GetDaysInAdMonth: GetDaysInAdMonth,
		GetDaysInBsMonth: GetDaysInBsMonth,
		AdDatesDiff: AdDatesDiff,
		BsDatesDiff: BsDatesDiff,
		BsAddDays: BsAddDays,
		GetBsFullDate: GetBsFullDate,
		GetAdFullDate: GetAdFullDate,
		GetAdFullDay: GetAdFullDay,
		ConvertToUnicode: ConvertToUnicode,
		ConvertToNumber: ConvertToNumber,
		Get2DigitNo: Get2DigitNo
	};
})();