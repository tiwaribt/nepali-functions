var NepaliFunctions = (function () {
    "use strict";

    // Available Date Formats
    var dateFormats = ["MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD", "YYYY/MM/DD"];

    function NepaliDateConverter() {

        var bsDateEq = {
            year: 2000,
            month: 9,
            day: 17
        }, adDateEq = {
            year: 1944,
            month: 1,
            day: 1
        }, bs = [];

        bs[2000] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2001] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2002] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2003] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2004] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2005] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2006] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2007] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2008] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
        bs[2009] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2010] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2011] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2012] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
        bs[2013] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2014] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2015] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2016] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
        bs[2017] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2018] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2019] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2020] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2021] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2022] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
        bs[2023] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2024] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2025] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2026] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2027] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2028] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2029] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
        bs[2030] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2031] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2032] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2033] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2034] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2035] = [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
        bs[2036] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2037] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2038] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2039] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
        bs[2040] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2041] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2042] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2043] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
        bs[2044] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2045] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2046] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2047] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2048] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2049] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
        bs[2050] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2051] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2052] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2053] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
        bs[2054] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2055] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2056] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
        bs[2057] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2058] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2059] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2060] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2061] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2062] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31];
        bs[2063] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2064] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2065] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2066] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
        bs[2067] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2068] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2069] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2070] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
        bs[2071] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2072] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2073] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
        bs[2074] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2075] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2076] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
        bs[2077] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
        bs[2078] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2079] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
        bs[2080] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
        bs[2081] = [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2082] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2083] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2084] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2085] = [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30];
        bs[2086] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2087] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
        bs[2088] = [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30];
        bs[2089] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2090] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2091] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
        bs[2092] = [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2093] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2094] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2095] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30];
        bs[2096] = [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
        bs[2097] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
        bs[2098] = [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31];
        bs[2099] = [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30];

        //Find Sum of array
        function arraySum(o) {
            var sum = 0;
            o.forEach(function (val) {
                sum += val;
            });
            return sum;
        }

        function countAdDays(startDate, endDate) {
            var oneDay = 1000 * 60 * 60 * 24;

            var date1 = Date.UTC(
                startDate.year,
                (startDate.month - 1),
                startDate.day
            ), date2 = Date.UTC(
                endDate.year,
                (endDate.month - 1),
                endDate.day
            );

            var Diff = Math.abs((date2 - date1) / (oneDay));
            return Diff;
        }

        function countBsDays(startDate, endDate) {
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

            // 1) First add total days in all the years
            for (i = startDate.year; i <= endDate.year; i += 1) {
                days += arraySum(bs[i]);
            }

            // 2) Subtract the days from first (n-1) months of
            // the beginning year
            for (i = 0; i < startDate.month; i += 1) {
                days -= bs[startDate.year][i];
            }

            // 3) Add the number of days from the last month
            // of the beginning year
            days += bs[startDate.year][12 - 1];

            // 4) Subtract the days from the last months from the end year
            for (i = endDate.month - 1; i < 12; i += 1) {
                days -= bs[endDate.year][i];
            }

            // 5) Subtract the beginning days excluding the day itself
            days -= (startDate.day + 1);

            // 6) Add the last remaining days excluding the day itself
            days += (endDate.day - 1);

            return days;
        }

        function addAdDays(adDate, numDays) {
            var d = new Date(ConvertDateFormat(adDate, "MM/DD/YYYY"));
            d.setDate(d.getDate() + numDays);
            return {
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate()
            };
        }

        //  DD/MM/YYYY returns YYYY-MM-DD
        function addBsDays(bsDate, numDays) {
            /*
            Algorithm:
            1) Add the total number of days to the original days

            2) Until the number of days becomes applicable to
            current month, subtract the days by the number of days
            in the current month and increase the month

            3) If month reaches 12, increase the year by 1
            and set the month to 1
            */

            // 1) Add the total number of days to the original days
            bsDate.day += numDays;

            // 2) Until the number of days becomes applicable to
            // the current month, subtract the days by the number
            // of days in the current month and increase the month
            while (bsDate.day > bs[bsDate.year][bsDate.month - 1]) {
                bsDate.day -= bs[bsDate.year][bsDate.month - 1];
                bsDate.month += 1;
                //3) If month reaches 12, increase the year by 1
                // and set the month to 1
                if (bsDate.month > 12) {
                    bsDate.month = 1;
                    bsDate.year += 1;
                }
            }
            return {
                year: bsDate.year,
                month: bsDate.month,
                day: bsDate.day
            };
        }

        function bs2ad(bsDate) {
            var daysCount = countBsDays(bsDateEq, bsDate);
            return addAdDays(adDateEq, daysCount);
        }

        function ad2bs(adDate) {
            var daysCount = countAdDays(adDateEq, adDate);
            return addBsDays(bsDateEq, daysCount);
        }

        function getDaysInMonth(year, month) {
            return bs[year][month - 1];
        }

        return {
            countAdDays: countAdDays,
            countBsDays: countBsDays,
            addBsDays: addBsDays,
            addAdDays: addAdDays,
            bs2ad: bs2ad,
            ad2bs: ad2bs,
            getDaysInMonth: getDaysInMonth
        };
    }

    /**
     * This function returns date in object format {year, month, day}.
     * @param {string} dateString any date string
     * @param {string} dateFormat source format
     * @returns {object} returns date in object format.
     * @example
     * NepaliFunctions.ConvertToDateObject("2000-01-01", "YYYY-MM-DD")
     * // returns { year: 2000, month: 1, day: 1}
     * @example
     * NepaliFunctions.ConvertToDateObject("2000/01/01", "YYYY/MM/DD")
     * // returns { year: 2000, month: 1, day: 1}
     * @example
     * NepaliFunctions.ConvertToDateObject("01-01-2000", "MM-DD-YYYY")
     * // returns { year: 2000, month: 1, day: 1}
     * @example
     * NepaliFunctions.ConvertToDateObject("01/01/2000", "MM/DD/YYYY")
     * // returns { year: 2000, month: 1, day: 1}
     */
    function ConvertToDateObject(dateString, dateFormat) {
        var dateParts = [];
        var dateObj = {
            year: null,
            month: null,
            day: null
        };

        switch (dateFormat) {
            case "MM/DD/YYYY":
                dateParts = dateString.split("/");
                dateObj = {
                    year: Number(dateParts[2]),
                    month: Number(dateParts[0]),
                    day: Number(dateParts[1])
                };
                break;
            case "MM-DD-YYYY":
                dateParts = dateString.split("-");
                dateObj = {
                    year: Number(dateParts[2]),
                    month: Number(dateParts[0]),
                    day: Number(dateParts[1])
                };
                break;
            case "YYYY-MM-DD":
                dateParts = dateString.split("-");
                dateObj = {
                    year: Number(dateParts[0]),
                    month: Number(dateParts[1]),
                    day: Number(dateParts[2])
                };
                break;
            case "YYYY/MM/DD":
                dateParts = dateString.split("/");
                dateObj = {
                    year: Number(dateParts[0]),
                    month: Number(dateParts[1]),
                    day: Number(dateParts[2])
                };
                break;
        }

        return dateObj;
    }

    /**
     * This function returns date in target format.
     * @param {string} dateObj any date object
     * @param {string} returnFormat target format
     * @returns {string} returns date in target format.
     * @example
     * NepaliFunctions.ConvertDateFormat({year: 2000, month: 1, day: 1}, "YYYY-MM-DD")
     * // Returns "2001-01-01"
     * @example
     * NepaliFunctions.ConvertDateFormat({year: 2000, month: 1, day: 1}, "YYYY/MM/DD")
     * // Returns "2001/01/01"
     * @example
     * NepaliFunctions.ConvertDateFormat({year: 2000, month: 1, day: 1}, "MM-DD-YYYY")
     * // Returns "01-01-2001"
     * @example
     * NepaliFunctions.ConvertDateFormat({year: 2000, month: 1, day: 1}, "MM/DD/YYYY")
     * // Returns "01/01/2001"
     */
    function ConvertDateFormat(dateObj, returnFormat) {
        var returnDate = "";
        // Check Date Format Validity
        returnFormat = (returnFormat ? (dateFormats.indexOf(returnFormat) > -1 ? returnFormat : "YYYY-MM-DD") : "YYYY-MM-DD");

        function addZero(number) {
            number = Number(number);
            return number < 10 ? "0" + number : number;
        }

        switch (returnFormat) {
            case "MM/DD/YYYY":
                returnDate = addZero(dateObj.month) + "/" + addZero(dateObj.day) + "/" + dateObj.year;
                break;
            case "MM-DD-YYYY":
                returnDate = addZero(dateObj.month) + "-" + addZero(dateObj.day) + "-" + dateObj.year;
                break;
            case "YYYY-MM-DD":
                returnDate = dateObj.year + "-" + addZero(dateObj.month) + "-" + addZero(dateObj.day);
                break;
            case "YYYY/MM/DD":
                returnDate = dateObj.year + "/" + addZero(dateObj.month) + "/" + addZero(dateObj.day);
                break;
        }

        return returnDate;
    }

    /**
     * This function converts AD date object to BS date object.
     * @param {object} adDate any AD date object
     * @returns {string} converts AD date object to BS date object.
     * @example
     * NepaliFunctions.AD2BS({year: 2001, month: 6, day: 1})
     * // returns {year: 2058, month: 2, day: 19}
     * @example
     * NepaliFunctions.AD2BS({year: 2008, month: 5, day: 28})
     * // returns {year: 2065, month: 2, day: 15}
     */
    function AD2BS(adDate) {
        var ndc = new NepaliDateConverter();
        return ndc.ad2bs(adDate);
    }

    /**
     * This function converts BS date object to AD date object.
     * @param {object} bsDate any BS date object
     * @returns {string} converts BS date object to AD date object.
     * @example
     * NepaliFunctions.BS2AD({year: 2058, month: 2, day: 19})
     * // returns {year: 2001, month: 6, day: 1}
     * @example
     * NepaliFunctions.BS2AD({year: 2065, month: 2, day: 15})
     * // returns {year: 2008, month: 5, day: 28}
     */
    function BS2AD(bsDate) {
        var ndc = new NepaliDateConverter();
        return ndc.bs2ad(bsDate);
    }

    /**
     * This function checks the validity of the BS date.
     * @param {object} bsDate any BS date object
     * @returns {boolean} the validity of the BS date object.
     * @example
     * NepaliFunctions.ValidateBsDate({year: 2000, month: 2, day: 30})
     * // Returns true
     * @example
     * NepaliFunctions.ValidateBsDate({year: 2064, month: 4, day: 32})
     * // Returns true
     * @example
     * NepaliFunctions.ValidateBsDate({year: 2000, month: 13, day: 30})
     * // Returns false
     * @example
     * NepaliFunctions.ValidateBsDate({year: 2000, month: 12, day: 32})
     * // Returns false
     */
    function ValidateBsDate(bsDate) {
        var totalDays = GetDaysInBsMonth(bsDate.year, bsDate.month);
        return (bsDate.month > 0 && bsDate.month <= 12) &&
            (bsDate.day > 0 && bsDate.day <= totalDays) ? true : false;
    }

    /**
     * This function returns the current AD date object.
     * @returns {object} the current AD date object.
     * @example
     * NepaliFunctions.GetCurrentAdDate()
     * // Returns {year: 2020, month: 1, day: 1}
     * // if today"s date is 1st January 2020
     */
    function GetCurrentAdDate() {
        var date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
        var dateParts = date.split(",")[0].split("/");
        var day = parseInt(dateParts[1]);
        var month = parseInt(dateParts[0]);
        var year = parseInt(dateParts[2]);
        return {
            year: year,
            month: month,
            day: day
        };
    }

    /**
     * This function returns the current AD year.
     * @returns {number} the current AD year.
     * @example
     * NepaliFunctions.GetCurrentAdYear()
     * // Returns 2020
     * // if today"s date is 1st January 2020
     */
    function GetCurrentAdYear() {
        var adDate = GetCurrentAdDate();
        return Number(adDate.year);
    }

    /**
     * This function returns the current AD month.
     * @returns {number} the current AD month.
     * @example
     * NepaliFunctions.GetCurrentAdMonth()
     * // Returns 1
     * // if today"s date is 1st January 2020
     */
    function GetCurrentAdMonth() {
        var adDate = GetCurrentAdDate();
        return Number(adDate.month);
    }

    /**
     * This function returns the current AD day.
     * @returns {number} the current AD day.
     * @example
     * NepaliFunctions.GetCurrentAdDay()
     * // Returns 1
     * // if today"s date is 1st January 2020
     */
    function GetCurrentAdDay() {
        var adDate = GetCurrentAdDate();
        return Number(adDate.day);
    }

    /**
     * This function returns the current BS date object.
     * @returns {object} the current BS date object.
     * @example
     * NepaliFunctions.GetCurrentBsDate()
     * // Returns {year: 2076, month: 9, day: 1}
     * // if today"s date is 1st Poush 2076
     */
    function GetCurrentBsDate() {
        var adDate = GetCurrentAdDate();
        return AD2BS(adDate);
    }

    /**
     * This function returns the current BS year.
     * @returns {number} the current BS year.
     * @example
     * NepaliFunctions.GetCurrentBsYear()
     * // Returns 2076
     * // if today"s date is 1st Poush 2076
     */
    function GetCurrentBsYear() {
        var bsDate = GetCurrentBsDate();
        return Number(bsDate.year);
    }

    /**
     * This function returns the current BS month.
     * @returns {number} the current BS month.
     * @example
     * NepaliFunctions.GetCurrentBsMonth()
     * // Returns 9
     * // if today"s date is 1st Poush 2076
     */
    function GetCurrentBsMonth() {
        var bsDate = GetCurrentBsDate();
        return Number(bsDate.month);
    }

    /**
     * This function returns the current BS day.
     * @returns {number} the current BS day.
     * @example
     * NepaliFunctions.GetCurrentBsDay()
     * // Returns 1
     * // if today"s date is 1st Poush 2076
     */
    function GetCurrentBsDay() {
        var bsDate = GetCurrentBsDate();
        return Number(bsDate.day);
    }

    /**
     * This function returns the AD months.
     * @returns {array} the AD months.
     * @example
     * NepaliFunctions.GetAdMonths()
     * // Returns ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     */
    function GetAdMonths() {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

    /**
     * This function returns the AD month.
     * @param {number} number any number
     * @returns {string} the AD month.
     * @example
     * NepaliFunctions.GetAdMonth(0)
     * // Returns January
     * @example
     * NepaliFunctions.GetAdMonth(5)
     * // Returns June
     * @example
     * NepaliFunctions.GetAdMonth(11)
     * // Returns December
     * @example
     * NepaliFunctions.GetAdMonth(-1)
     * // Returns null
     * @example
     * NepaliFunctions.GetAdMonth(12)
     * // Returns null
     */
    function GetAdMonth(number) {
        number = Number(number);
        if (isNaN(number) || number < 0 || number > 11) {
            return null;
        }

        var months = GetAdMonths();
        return months[number];
    }

    /**
     * This function returns the BS months in English.
     * @returns {array} the BS months.
     * @example
     * NepaliFunctions.GetBsMonths()
     * // Returns  ["Baisakh", "Jestha", "Ashar", "Shrawan", "Bhadra", "Ashoj", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"]
     */
    function GetBsMonths() {
        return ["Baisakh", "Jestha", "Ashar", "Shrawan", "Bhadra", "Ashoj", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"];
    }

    /**
     * This function returns the BS month in English.
     * @param {number} number any number
     * @returns {string} the BS month.
     * @example
     * NepaliFunctions.GetBsMonth(0)
     * // Returns Baisakh
     * @example
     * NepaliFunctions.GetBsMonth(5)
     * // Returns Bhadra
     * @example
     * NepaliFunctions.GetBsMonth(11)
     * // Returns Chaitra
     * @example
     * NepaliFunctions.GetBsMonth(-1)
     * // Returns null
     * @example
     * NepaliFunctions.GetBsMonth(12)
     * // Returns null
     */
    function GetBsMonth(number) {
        number = Number(number);
        if (isNaN(number) || number < 0 || number > 11) {
            return null;
        }

        var months = GetBsMonths();
        return months[number];
    }

    /**
     * This function returns the BS months.
     * @returns {array} the BS months.
     * @example
     * NepaliFunctions.GetBsMonthsInUnicode()
     * // Returns ["बैशाख", "जेठ", "अषाढ", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मङ्सिर", "पौष", "माघ", "फाल्गुन", "चैत्र"]
     */
    function GetBsMonthsInUnicode() {
        return ["बैशाख", "जेठ", "अषाढ", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मङ्सिर", "पौष", "माघ", "फाल्गुन", "चैत्र"];
    }

    /**
     * This function returns the BS month in unicode.
     * @param {number} number any number
     * @returns {string} the BS month in unicode.
     * @example
     * NepaliFunctions.GetBsMonthInUnicode(0)
     * // Returns बैशाख
     * @example
     * NepaliFunctions.GetBsMonthInUnicode(5)
     * // Returns भाद्र
     * @example
     * NepaliFunctions.GetBsMonthInUnicode(11)
     * // Returns चैत्र
     * @example
     * NepaliFunctions.GetBsMonthInUnicode(-1)
     * // Returns null
     * @example
     * NepaliFunctions.GetBsMonthInUnicode(12)
     * // Returns null
     */
    function GetBsMonthInUnicode(number) {
        number = Number(number);
        if (isNaN(number) || number < 0 || number > 11) {
            return null;
        }

        var months = GetBsMonthsInUnicode();
        return months[number];
    }

    /**
     * This function returns the BS days in unicode.
     * @returns {array} the BS days in unicode.
     * @example
     * NepaliFunctions.GetBsDaysUnicode()
     * // Returns ["आइतवार", "सोमवार", "मङ्गलवार", "बुधवार", "बिहिवार", "शुक्रवार", "शनिवार"]
     */
    function GetBsDaysUnicode() {
        return ["आइतवार", "सोमवार", "मङ्गलवार", "बुधवार", "बिहिवार", "शुक्रवार", "शनिवार"];
    }

    /**
     * This function returns the BS day in unicode.
     * @param {number} number any number
     * @returns {string} the BS day in unicode.
     * @example
     * NepaliFunctions.GetBsDayUnicode(0)
     * // Returns आइतवार
     * @example
     * NepaliFunctions.GetBsDayUnicode(4)
     * // Returns बिहिवार
     * @example
     * NepaliFunctions.GetBsDayUnicode(7)
     * // Returns null
     */
    function GetBsDayUnicode(number) {
        number = Number(number);
        if (isNaN(number) || number < 0 || number > 6) {
            return null;
        }

        var days = GetBsDaysUnicode();
        return days[Number(number) - 1];
    }

    /**
     * This function returns the BS days in short.
     * @returns {array} the BS days in short.
     * @example
     * NepaliFunctions.GetBsDaysUnicodeShort()
     * // Returns ["आ", "सो", "मं", "बु", "बि", "शु", "श"]
     */
    function GetBsDaysUnicodeShort() {
        return ["आ", "सो", "मं", "बु", "बि", "शु", "श"];
    }

    /**
     * This function returns the AD days.
     * @returns {array} the AD days.
     * @example
     * NepaliFunctions.GetAdDays()
     * // Returns ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
     */
    function GetAdDays() {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }

    /**
     * This function returns the AD day.
     * @param {number} number any number
     * @returns {string} the AD day.
     * @example
     * NepaliFunctions.GetAdDay(0)
     * // Returns Sunday
     * @example
     * NepaliFunctions.GetAdDay(5)
     * // Returns Friday
     * @example
     * NepaliFunctions.GetAdDay(7)
     * // Returns null
     */
    function GetAdDay(number) {
        number = Number(number);
        if (isNaN(number) || number < 0 || number > 6) {
            return null;
        }

        var days = GetAdDays();
        return days[Number(number)];
    }

    /**
     * This function returns the full BS date.
     * @param {object} bsDate any date object
     * @param {boolean} unicodeFlag true or false
     * @returns {string} the full BS date.
     * @example
     * NepaliFunctions.GetBsFullDate({year: 2075, month: 3, day: 15}, false)
     * // Returns 15 Ashar 2075
     * @example
     * NepaliFunctions.GetBsFullDate({year: 2075, month: 5, day: 2}, false)
     * // Returns 2 Bhadra 2075
     * @example
     * NepaliFunctions.GetBsFullDate({year: 2075, month: 3, day: 15}, true)
     * // Returns १५ अषाढ २०७५
     * @example
     * NepaliFunctions.GetBsFullDate({year: 2075, month: 5, day: 2}, true)
     * // Returns २ भाद्र २०७५
     */
    function GetBsFullDate(bsDate, unicodeFlag) {
        var months = [];

        var returnString = "";
        if (unicodeFlag) {
            months = GetBsMonthsInUnicode();
            returnString = ConvertToUnicode(bsDate.day) + " " + months[bsDate.month - 1] + " " + ConvertToUnicode(bsDate.year);
        } else {
            months = GetBsMonths();
            returnString = bsDate.day + " " + months[bsDate.month - 1] + " " + bsDate.year;
        }

        return returnString;
    }

    /**
     * This function returns the full AD date.
     * @param {object} adDate any date object
     * @returns {string} the full AD date.
     * @example
     * NepaliFunctions.GetAdFullDate({year: 2001, month: 3, day: 15})
     * // Returns 15 March 2001
     * @example
     * NepaliFunctions.GetAdFullDate({year: 2003, month: 5, day: 2})
     * // Returns 2 May 2003
     */
    function GetAdFullDate(adDate) {
        return adDate.day + " " + NepaliFunctions.GetAdMonth(adDate.month - 1) + " " + adDate.year;
    }

    /**
     * This function returns the day for the given AD date object.
     * @param {object} adDate any date object
     * @returns {string} the day.
     * @example
     * NepaliFunctions.GetAdFullDay({year: 2001, month: 3, day: 15})
     * // Returns Thursday
     * @example
     * NepaliFunctions.GetAdFullDay({year: 2003, month: 5, day: 2})
     * // Returns Friday
     */
    function GetAdFullDay(adDate) {
        adDate = new Date(adDate.year, adDate.month - 1, adDate.day);
        return GetAdDay(adDate.getDay());
    }

    /**
     * This function returns the BS date object after adding the number of days.
     * @param {object} bsDate any object
     * @param {number} noOfDays any number
     * @returns {object} the BS date object after adding the number of days.
     * @example
     * NepaliFunctions.BsAddDays({year: 2001, month: 3, day: 15}, 2)
     * // Returns {year: 2001, month: 3, day: 17}
     * @example
     * NepaliFunctions.BsAddDays({year: 2003, month: 5, day: 2}, 90)
     * // Returns {year: 2003, month: 8, day: 1}
     */
    function BsAddDays(bsDate, noOfDays) {
        var ndc = new NepaliDateConverter();
        return ndc.addBsDays(bsDate, noOfDays);
    }

    /**
     * This function returns that number of days between the two AD dates objects.
     * @param {object} startDate any date object
     * @param {object} endDate any date object
     * @returns {number} that number of days between the two AD dates.
     * @example
     * NepaliFunctions.AdDatesDiff({year: 2001, month: 3, day: 15}, {year: 2001, month: 3, day: 17})
     * // Returns 2
     * @example
     * NepaliFunctions.AdDatesDiff({year: 2003, month: 5, day: 2}, {year: 2003, month: 8, day: 1})
     * // Returns 91
     */
    function AdDatesDiff(startDate, endDate) {
        var ndc = new NepaliDateConverter();
        return ndc.countAdDays(startDate, endDate);
    }

    /**
     * This function returns that number of days between the two BS dates.
     * @param {object} startDate any number
     * @param {object} endDate any number
     * @returns {number} that number of days between the two BS dates.
     * @example
     * NepaliFunctions.BsDatesDiff({year: 2001, month: 3, day: 15}, {year: 2001, month: 3, day: 17})
     * // Returns 2
     * @example
     * NepaliFunctions.BsDatesDiff({year: 2003, month: 5, day: 2}, {year: 2003, month: 8, day: 1})
     * // Returns 90
     */
    function BsDatesDiff(startDate, endDate) {
        if (!ValidateBsDate(startDate) || !ValidateBsDate(endDate)) {
            return false;
        }

        var ndc = new NepaliDateConverter();
        startDate = ndc.bs2ad(startDate);
        endDate = ndc.bs2ad(endDate);

        return ndc.countAdDays(startDate, endDate);
    }

    /**
     * This function returns the number of days in the given AD year and month.
     * @param {number} year any number
     * @param {number} month any number
     * @returns {number} that number of days in the given AD year and month.
     * @example
     * NepaliFunctions.GetDaysInAdMonth(2015, 2)
     * // Returns 28
     * @example
     * NepaliFunctions.GetDaysInAdMonth(2020, 1)
     * // Returns 31
     */
    function GetDaysInAdMonth(year, month) {
        var adDate = new Date(year, month, 0);
        return adDate.getDate();
    }

    /**
     * This function returns the number of days in the given BS year and month.
     * @param {number} year any number
     * @param {number} month any number
     * @returns {number} that number of days in the given BS year and month.
     * @example
     * NepaliFunctions.GetDaysInBsMonth(2015, 2)
     * // Returns 32
     * @example
     * NepaliFunctions.GetDaysInBsMonth(2020, 1)
     * // Returns 31
     */
    function GetDaysInBsMonth(year, month) {
        var ndc = new NepaliDateConverter();
        return ndc.getDaysInMonth(year, month);
    }

    /**
     * This function converts number to unicode.
     * @param {number} number any number
     * @returns {string} that number converted to unicode string.
     * @example
     * NepaliFunctions.ConvertToUnicode(123456789)
     * // Returns १२३४५६७८९
     * @example
     * NepaliFunctions.ConvertToUnicode(123.50)
     * // Returns 31
     */
    function ConvertToUnicode(number) {

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

        number = number.toString();
        var returnString = "";
        var c = 0;
        for (c = 0; c < number.length; c += 1) {
            returnString += convertNos(number[c]);
        }
        return returnString;
    }

    /**
     * This function converts unicode to number.
     * @param {string} unicode any unicode number
     * @returns {number} that number.
     * @example
     * NepaliFunctions.ConvertToNumber("१२३४५६७८९")
     * // Returns 123456789
     * @example
     * NepaliFunctions.ConvertToNumber("१२३.५")
     * // Returns 123.5
     */
    function ConvertToNumber(unicode) {

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

        unicode = unicode.toString();
        var returnString = "";
        for (var c = 0; c < unicode.length; c += 1) {
            returnString += convertNos(unicode[c]);
        }
        return returnString;
    }

    /**
     * This function returns two digit numbers.
     * @param {number} number any number
     * @returns {string} that number, with 0 appended if its less than 10.
     * @example
     * NepaliFunctions.Get2DigitNo(1)
     * // Returns 01
     * @example
     * NepaliFunctions.Get2DigitNo(12)
     * // Returns 12
     */
    function Get2DigitNo(number) {
        return number < 10 ? "0" + Number(number) : number;
    }
    
    /**
     * This function returns number to words in string.
     * @param {number} number any number
     * @param {boolean} isCurrency true if you want to display currency
     * @returns {string} that number, converted to words.
     * @example
     * NepaliFunctions.NumberToWordsUnicode(123456000.12, true)
     * // Returns Twelve Crore Thirty Four Lakh Fifty Six Thousand Rupees and Twelve Paisa
     * @example
     * NepaliFunctions.NumberToWordsUnicode(12, true)
     * @example
     * NepaliFunctions.NumberToWordsUnicode(123456000.12, false)
     * // Returns Twelve Crore Thirty Four Lakh Fifty Six Thousand
     * @example
     * NepaliFunctions.NumberToWordsUnicode(12, false)
     * // Returns Twelve
     */
    function NumberToWords(number, isCurrency) {
        number =  number || 0;
        if (isNaN(number) || Math.floor(number).toString().length > 13){
            return null;
        }

        var words = '';
        var decimals = 0;
        var numberString = number.toString();

        // Handle Decimal
        if(numberString.indexOf('.') > -1){
            var numParts = numberString.split(".");
            decimals = Number(numParts[1]);
        }

        var tenns = Math.floor(number % 100);
    
        if (number.toString().length > 2) {
            var hundred = number.toString().substring(number.toString().length - 3, number.toString().length - 2);
        }

        var thousands = Math.floor(number % 100000);
        thousands = thousands.toString();
        thousands = thousands.substring(0, thousands.length - 3);

        var lakhs = Math.floor(number % 10000000);
        lakhs = lakhs.toString();
        lakhs = lakhs.substring(0, lakhs.length - 5);

        var crores = Math.floor(number % 1000000000);
        crores = crores.toString();
        crores = crores.substring(0, crores.length - 7);

        var arabs = Math.floor(number % 100000000000);
        arabs = arabs.toString();
        arabs = arabs.substring(0, arabs.length - 9);

        var kharabs = Math.floor(number % 10000000000000);
        kharabs = kharabs.toString();
        kharabs = kharabs.substring(0, kharabs.length - 11);

        if (kharabs > 0) { words += convert99ToWords(kharabs) + ' Kharab'; }
        if (arabs > 0) { words += ' ' + convert99ToWords(arabs) + ' Arab'; }
        if (crores > 0) { words += ' ' + convert99ToWords(crores) + ' Crore'; }
        if (lakhs > 0) { words += ' ' + convert99ToWords(lakhs) + ' Lakh'; }
        if (thousands > 0) { words += ' ' + convert99ToWords(thousands) + ' Thousand'; }
        if (hundred > 0) { words += ' ' + convert99ToWords(hundred) + ' Hundred' }
        if (tenns > 0) { words += ' ' + convert99ToWords(tenns); }

        if (words.trim() != "" && isCurrency)
            words += ' Rupees';

        if (decimals > 0 && isCurrency) {
            words += ' and ' + convert99ToWords(decimals) + ' Paisa';
        }

        function convert99ToWords(number){

            var digitWords = {
                0: '',
                1: 'One',
                2: 'Two',
                3: 'Three',
                4: 'Four',
                5: 'Five',
                6: 'Six',
                7: 'Seven',
                8: 'Eight',
                9: 'Nine',
                10: 'Ten',
                11: 'Eleven',
                12: 'Twelve',
                13: 'Thirteen',
                14: 'Fourteen',
                15: 'Fifteen',
                16: 'Sixteen',
                17: 'Seventeen',
                18: 'Eighteen',
                19: 'Nineteen',
                20: 'Twenty',
                30: 'Thirty',
                40: 'Forty',
                50: 'Fifty',
                60: 'Sixty',
                70: 'Seventy',
                80: 'Eighty',
                90: 'Ninety'
            };

            number = Number(number);
            var numberString = number.toString();
            if(number < 20){
                return digitWords[number];
            } else {
                return digitWords[numberString[0] * 10] + ' ' + digitWords[numberString[1]];
            }
        }

        while(words.indexOf('  ') > -1){
            words = words.replace('  ', ' ');
        }

        return words.trim();
    }

    /**
     * This function returns number to words in unicode string.
     * @param {number} number any number
     * @param {boolean} isCurrency true if you want to display currency
     * @returns {string} that number, converted to words in unicode.
     * @example
     * NepaliFunctions.NumberToWordsUnicode(123456000.12, true)
     * // Returns बाह्र करोड चौतीस लाख छपन्न हजार रुपैंया, बाह्र पैसा
     * @example
     * NepaliFunctions.NumberToWordsUnicode(12, true)
     * @example
     * NepaliFunctions.NumberToWordsUnicode(123456000.12, false)
     * // Returns बाह्र करोड चौतीस लाख छपन्न हजार
     * @example
     * NepaliFunctions.NumberToWordsUnicode(12, false)
     * // Returns बाह्र
     */
    function NumberToWordsUnicode(number, isCurrency) {
        number = number || 0;
        // Confirm it is a number
        if (isNaN(number) || Math.floor(number).toString().length > 13) { 
            return null; 
        }
    
        var units =
        ["सुन्य", "एक", "दुई", "तीन", "चार", "पाँच", "छ", "सात", "आठ", "नौ", "दस",
            "एघार", "बाह्र", "तेह्र", "चौध", "पन्ध्र", "सोह्र", "सत्र", "अठाह्र", "उन्नाइस", "बीस",
            "एकाइस", "बाइस", "तेइस", "चौबीस", "पचीस", "छब्बीस", "सत्ताइस", "अठ्ठाइस", "उनन्तीस", "तीस",
            "एकतीस", "बतीस", "तेतीस", "चौतीस", "पैतीस", "छतीस", "सरतीस", "अरतीस", "उननचालीस", "चालीस",
            "एकचालीस", "बयालिस", "तीरचालीस", "चौवालिस", "पैंतालिस", "छयालिस", "सरचालीस", "अरचालीस", "उननचास", "पचास",
            "एकाउन्न", "बाउन्न", "त्रिपन्न", "चौवन्न", "पच्पन्न", "छपन्न", "सन्ताउन्न", "अन्ठाउँन्न", "उनान्न्साठी ", "साठी",
            "एकसाठी", "बासाठी", "तीरसाठी", "चौंसाठी", "पैसाठी", "छैसठी", "सत्सठ्ठी", "अर्सठ्ठी", "उनन्सत्तरी", "सतरी",
            "एकहत्तर", "बहत्तर", "त्रिहत्तर", "चौहत्तर", "पचहत्तर", "छहत्तर", "सत्हत्तर", "अठ्हत्तर", "उनास्सी", "अस्सी",
            "एकासी", "बयासी", "त्रीयासी", "चौरासी", "पचासी", "छयासी", "सतासी", "अठासी", "उनान्नब्बे", "नब्बे",
            "एकान्नब्बे", "बयान्नब्बे", "त्रियान्नब्बे", "चौरान्नब्बे", "पंचान्नब्बे", "छयान्नब्बे", "सन्तान्‍नब्बे", "अन्ठान्नब्बे", "उनान्सय"];
            
        var words = "";
        var decimals = 0;

        number = number.toString();
    
        // Check for decimal numbers
        if (number.indexOf('.') != -1) {
            var number_parts = number.split('.');
            number = number_parts[0];
            decimals = number_parts[1];
            var decimal_tens = decimals.substring(0, 2).toString();
            if (decimal_tens.length == 1) { decimal_tens = decimal_tens.toString() + '0'; }
            var decimal_words = units[parseInt(decimal_tens)].toString() + ' ' + 'पैसा';
        }
    
        // Check Total Length of Number
        if (number.length > 13) {
            alert("Number greater than kharab not supported"); return;
        } else {
            var tenns = Math.floor(number % 100);
    
            if (number.toString().length > 2) {
                var hundred = number.toString().substring(number.toString().length - 3, number.toString().length - 2);
            }
    
            var thousands = Math.floor(number % 100000);
            thousands = thousands.toString();
            thousands = thousands.substring(0, thousands.length - 3);
    
            var lakhs = Math.floor(number % 10000000);
            lakhs = lakhs.toString();
            lakhs = lakhs.substring(0, lakhs.length - 5);
    
            var crores = Math.floor(number % 1000000000);
            crores = crores.toString();
            crores = crores.substring(0, crores.length - 7);
    
            var arabs = Math.floor(number % 100000000000);
            arabs = arabs.toString();
            arabs = arabs.substring(0, arabs.length - 9);
    
            var kharabs = Math.floor(number % 10000000000000);
            kharabs = kharabs.toString();
            kharabs = kharabs.substring(0, kharabs.length - 11);
    
            if (kharabs > 0) { words += units[kharabs] + ' खरब'; }
            if (arabs > 0) { words += ' ' + units[arabs] + ' अरब'; }
            if (crores > 0) { words += ' ' + units[crores] + ' करोड'; }
            if (lakhs > 0) { words += ' ' + units[lakhs] + ' लाख'; }
            if (thousands > 0) { words += ' ' + units[thousands] + ' हजार'; }
            if (hundred > 0) { words += ' ' + units[hundred] + ' सय' }
            if (tenns > 0) { words += ' ' + units[tenns]; }
    
            if (words.trim() != "" && isCurrency)
                words += ' रुपैंया';
    
            if (decimals > 0 && isCurrency) {
                words += (words.trim() != "" ? ' ' : "") + decimal_words;
            }
    
            return words.trim();
        }
    }

    return {
        ConvertToDateObject: ConvertToDateObject,
        ConvertDateFormat: ConvertDateFormat,
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
        GetBsDaysUnicode: GetBsDaysUnicode,
        GetBsDayUnicode: GetBsDayUnicode,
        GetBsDaysUnicodeShort: GetBsDaysUnicodeShort,
        GetAdDays: GetAdDays,
        GetAdDay: GetAdDay,
        GetBsMonthsInUnicode: GetBsMonthsInUnicode,
        GetBsMonthInUnicode: GetBsMonthInUnicode,
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
        Get2DigitNo: Get2DigitNo,
        NumberToWords: NumberToWords,
        NumberToWordsUnicode: NumberToWordsUnicode
    };
})();