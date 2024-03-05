  /*/*-====================Top-for-header ====================-*/
  window.addEventListener('scroll', function () {
    let scrollTopPosition = 0; // Верхня позиція прокрутки, коли елемент має бути зафіксований
    let header = document.getElementById("header");

    if (window.scrollY > scrollTopPosition) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
    /*/*-====================END - Top-for-header ====================-*/
    /*/*-====================toggleMenu ====================-*/

    var hambButton = document.getElementById("hamb-bnt");
    var openSidebar = document.getElementById("sidebar");
    
    hambButton.addEventListener("click", function() {
        hambButton.classList.toggle("is-active");
        openSidebar.classList.toggle("open");
    });
    
    
    document.addEventListener("click", function(event) {
        var isClickInsideSidebar = openSidebar.contains(event.target);
        var isClickInsideHambButton = hambButton.contains(event.target);
    
        
        if (!isClickInsideSidebar && !isClickInsideHambButton) {
            openSidebar.classList.remove("open");
            hambButton.classList.remove("is-active");
        }
    });
/*/*-====================END - toggleMenu ====================-*/
  /*/*-====================TABS====================-*/
function openTab(tabId) {
    
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.remove("active"));

  
  const selectedTab = document.getElementById(tabId + "-content");
  selectedTab.classList.add("active");

  const tabElement = document.getElementById(tabId);
  if (selectedTab.classList.contains("active")) {
     
      const tabstop = document.querySelectorAll(".active-top");
      tabstop.forEach(tabstop => tabstop.classList.remove("active-top"));

      tabElement.classList.add("active-top");
      
  } else {
      tabElement.classList.remove("active-top");
  }
}


const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");


monthly.addEventListener("click", () => openTab("monthly"));
yearly.addEventListener("click", () => openTab("yearly"));
/*/*-====================END-TABS====================-*/

