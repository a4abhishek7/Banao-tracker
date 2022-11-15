let myLeads = []

const ulEl = document.getElementById("ul-el")

const tabBtn = document.getElementById("tab-btn")


tabBtn.addEventListener("click", function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
    render(myLeads)
     });
   
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}