const minDistancePixels = 60;

// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/
fetch('js/timelinedata.json').then((response) => response.json()).then((json) => {
    const data = json.data; 
    
    let previousDateTime = null;
    let closestDateTimeDifference = null;
    data.forEach(project => {
        const dateTime = Date.parse(new Date(project.date));
        if (previousDateTime == null){
            previousDateTime = dateTime;
            return;
        }

        const dateTimeDifference = dateTime - previousDateTime;
        previousDateTime = dateTime;

        if (closestDateTimeDifference == null) {
            closestDateTimeDifference = dateTimeDifference;
        }
        else if (dateTimeDifference < closestDateTimeDifference){
            closestDateTimeDifference = dateTimeDifference;
        }
    });

    const pixelsPerTime = minDistancePixels / closestDateTimeDifference;

    previousDateTime = null;
    closestDateTimeDifference = null;
    const listParrent = document.getElementById("timeline-list");
    data.forEach(project => {
        console.log(project);

        const dateTime = Date.parse(new Date(project.date));
        let dateTimeDifference = 0;
        if (previousDateTime != null) {
            dateTimeDifference = dateTime - previousDateTime;
        }
        previousDateTime = dateTime;
        
        let listElement = listParrent.appendChild(document.createElement("li"));
        if (project.link != false)
        {
            listElement = listElement.appendChild(document.createElement("a"));
            listElement.href = project.link;
        }
        listElement = listElement.appendChild(document.createElement("section"));
        listElement.classList.add("list-section")



        const dateText = listElement.appendChild(document.createElement("span"));
        dateText.textContent = project.date;

        const projectTitle = listElement.appendChild(document.createElement("h3"));
        projectTitle.textContent = project.title;

        console.log((dateTimeDifference * pixelsPerTime))
        listElement.style.marginTop = (dateTimeDifference * pixelsPerTime) + "px";
        console.log(listElement.style.marginTop);
    });
});