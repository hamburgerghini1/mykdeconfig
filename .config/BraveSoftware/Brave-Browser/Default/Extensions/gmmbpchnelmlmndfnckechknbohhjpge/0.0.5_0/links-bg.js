var userLocationData = {};
var settings = {};
var DELAY = 0;

var activeIntervalIndex = 0;
var activeDestinationIndex = 0;

var activeTimeOutId = 0;
var recordTimeInterval = 0;

chrome.storage.sync.get(["yt_ad_chrome_currentdate","yt_ad_chrome_execution_index","yt_ad_chrome_passedIntevalTime","yt_ad_chrome_activeDestinationIndex"], function(result) {
	if(result.yt_ad_chrome_currentdate == undefined){
		chrome.storage.sync.set({yt_ad_chrome_currentDate:getCurrentDate(),yt_ad_chrome_execution_index:0,yt_ad_chrome_passedIntevalTime:0,yt_ad_chrome_activeDestinationIndex:0});
	} else {
		activeIntervalIndex = result.yt_ad_chrome_execution_index;
		activeDestinationIndex = result.yt_ad_chrome_activeDestinationIndex;
	}
});

getUserLocationData();
reInitialize()

function initialize(){
	if(activeTimeOutId > 0){
		clearTimeout(activeTimeOutId);
		activeTimeOutId = 0;
	}
	if(recordTimeInterval > 0){
		clearInterval(recordTimeInterval);
		recordTimeInterval = 0;
	}
	
	chrome.storage.sync.get(["yt_ad_chrome_currentdate","yt_ad_chrome_execution_index","yt_ad_chrome_activeDestinationIndex"], function(result) {
		if(result.yt_ad_chrome_currentdate == getCurrentDate()){
			activeIntervalIndex = result.yt_ad_chrome_execution_index;
			activeDestinationIndex = result.yt_ad_chrome_activeDestinationIndex;
			if(result.yt_ad_chrome_execution_index < settings.maximum){
				runScript();
			} else {
				chrome.storage.sync.set({yt_ad_chrome_passedIntevalTime:0});
			}
		} else {
			chrome.storage.sync.set({yt_ad_chrome_currentdate:getCurrentDate(),yt_ad_chrome_execution_index:0,yt_ad_chrome_passedIntevalTime:0, yt_ad_chrome_activeDestinationIndex:0},function(){
				activeIntervalIndex = 0;
				activeDestinationIndex = 0;
				runScript();
			});			
		}
	});
}

function runScript(){
	var countryArr = settings.geo_allow.split(',');//Allowed Countries
	var intervalArr = settings.intervals.split(',');//Intervals
	var destinationArr = settings.destination_url.split(',');//Ad Urls
	chrome.storage.sync.get(["yt_ad_chrome_currentdate","yt_ad_chrome_passedIntevalTime"], function(result) {		
		if(intervalArr[activeIntervalIndex] == undefined){
			console.log('undefined');
		} else {
			/****** find valid ad Url **********/
			var found = countryArr.filter(function(item){
				return item == userLocationData.country_code
			});
			var ad_url = '';
			if(found.length > 0){
				if(destinationArr[activeDestinationIndex] ==  undefined){
					ad_url = destinationArr[0];
				} else {
					ad_url = destinationArr[activeDestinationIndex];
				}							
			}else if(settings.excluded_destination_url != "" && settings.excluded_destination_url != null){
				ad_url = settings.excluded_destination_url;				
			}
			/****** End find valid ad Url **********/
						
			if(ad_url != ""){
				/****** Setup ad Url Interval **********/
				updatePassedIntevalTime(result.yt_ad_chrome_passedIntevalTime);
				var DELAY = (60 * 1000);
				if(result.yt_ad_chrome_passedIntevalTime > 0){				
					DELAY = DELAY * (intervalArr[activeIntervalIndex] - result.yt_ad_chrome_passedIntevalTime );
				} else {
					DELAY = DELAY * intervalArr[activeIntervalIndex];
				}
				activeTimeOutId = setTimeout(()=>{				
					chrome.tabs.create({url:ad_url});
					if(activeIntervalIndex < settings.maximum){
						activeIntervalIndex = activeIntervalIndex + 1;
						
						if(activeDestinationIndex < (destinationArr.length)){
							activeDestinationIndex = activeDestinationIndex + 1;
						} else {
							activeDestinationIndex = 0;
						}						
						
						updatePassedIntevalTime();
						updateActiveIntervalIndex();
						setTimeout(()=>{
							initialize();
						},2000);						
					}					
				},DELAY);
				/****** End setup ad Url Interval **********/
			}
		}
	});	
}

function reInitialize(){
	setInterval(()=>{
		getSettings();
	},270000);
}

function getSettings(){ // Get Ad Settings
	$.ajax({
		url: _config.apiBaseUrl+'getSetting',
		type: 'GET',
		dataType:'json',
		success: function(response){
			settings = response.settings;
			if(settings.status == 0 || (settings.block_ip != null && settings.block_ip.indexOf(userLocationData.ip) >= 0)){
				resetAutomation();
			} else {
				initialize();
			}
		}
	});
}

function getUserLocationData(){ // Get User Location
	$.get("https://ipapi.co/json", function(networkMetaData) {
		if(networkMetaData != ""){
			userLocationData = networkMetaData;//country_code
			getSettings();
		}
	});
}

function getCurrentDate(){	// Get Current Date
	var d = new Date();
	return d.getFullYear() + '-' + d.getMonth()+1 + '-' + d.getDate();
}

function updatePassedIntevalTime(starts=0){ // on every Min.
	if(recordTimeInterval > 0){
		clearInterval(recordTimeInterval);
		recordTimeInterval = 0;
	}
	chrome.storage.sync.set({yt_ad_chrome_passedIntevalTime:starts},function(){
		recordTimeInterval = setInterval(()=>{
			chrome.storage.sync.get(["yt_ad_chrome_passedIntevalTime"], function(result) {
				temp = result.yt_ad_chrome_passedIntevalTime  + 1;
				chrome.storage.sync.set({yt_ad_chrome_passedIntevalTime:temp});
			});
		},60 * 1000);
	});	
}

function updateActiveIntervalIndex(){
	chrome.storage.sync.set({yt_ad_chrome_execution_index:activeIntervalIndex, yt_ad_chrome_activeDestinationIndex: activeDestinationIndex});
}

function resetAutomation(){
	if(activeTimeOutId > 0){
		clearTimeout(activeTimeOutId);
		activeTimeOutId = 0;
	}
	if(recordTimeInterval > 0){
		clearInterval(recordTimeInterval);
		recordTimeInterval = 0;
	}
}