fetch('https://www.api.roocket.ru/2/shyshy.dns.army')
            .then(function (response) {
                return response.json();
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("online");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
                mainContainer.appendChild(div);
            }
        }