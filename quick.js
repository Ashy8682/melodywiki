function quick(url, id) {
            var fin = "<div style=\"background-color: #cccccc; vertical-align: top; padding: 5px; border-style: solid;\"width=35%><h3 style=\"text-align: center;\">"
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    let lines = data.split("\n");
                    let title = lines[1].substring(7);
                    fin += title + "</h3>"; // Add Title
                    fin += "<img src=\"https://raw.githubusercontent.com/Ashy8682/melodywiki/main/" + title.replace(" ", "%20") + "/cover.jpg\"/>"; // Add Cover
                    fin += "<p style=\"text-align: center;\">" + lines[2].substring(9) + "</p>"; // Add Caption
                    var line = 3;
                    var pro = lines[line++].split(": ");
                    fin += "<table><tbody>";
                    while ((pro[0] != '\r') && (line != lines.length-1)) {
                        console.log(pro);
                        fin += "<tr><td>" + pro[0] + "</td><td style=\"padding-left: 30px;\">" + pro[1] + "</td></tr>";
                        pro = lines[line++].split(": ");
                    }
                    fin += "</tbody></table></div>";
                    document.getElementById(id).innerHTML = fin;
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById(id).innerHTML = "Failed to load content.";
                });
        }
