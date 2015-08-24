
       
	   chrome.contextMenus.create
	   ({
	title: "Validate this page",
	contexts: ["page", "link"],
	onclick: prepare
});
	   
	   
	   function prepare(url)
	   {
		   var baseUrl;
		   if(url.pageUrl)
		   {
			   baseUrl=encodeURI('https://validator.w3.org/nu/?doc='+url.pageUrl);
		   }
		   
		   else if(url.linkUrl)
		   {
			   baseUrl=encodeURI('https://validator.w3.org/nu/?doc='+url.linkUrl);
		   }
		   
			chrome.tabs.create({url: baseUrl});
		}
	   
	   
	   