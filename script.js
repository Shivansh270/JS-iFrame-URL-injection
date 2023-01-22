document.getElementById("open-iframe").addEventListener("click", function(){
    var currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("iframe_url", "https://example.com");
    window.location.href = currentUrl.href;
  });
  
  if (new URL(window.location.href).searchParams.get("iframe_url")) {
    var iframeUrl = new URL(window.location.href).searchParams.get("iframe_url");
    var iframe = document.createElement("iframe");
    iframe.src = iframeUrl;
    iframe.id = 'iframe';
    
    var container = document.getElementById("iframe-container");
    container.appendChild(iframe);
    
    var hoverBtn = document.createElement("button");
    hoverBtn.innerHTML = "Hover";
    hoverBtn.id = 'hover-btn';
    
    container.appendChild(hoverBtn);
    
    hoverBtn.addEventListener("mouseover", function() {
      iframe.classList.add("hover");
    });
    
    hoverBtn.addEventListener("mouseout", function() {
      iframe.classList.remove("hover");
    });
  }