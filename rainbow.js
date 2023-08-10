window.onload = function () {
    // Your code here
    const container = document.getElementById('container');
    var seasons = document.getElementById('seasons');
    var daytime = document.getElementById('daytime');
    var time = document.getElementById('time');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '800');
    svg.setAttribute('height', '400');
    svg.id = 'svg';
    container.appendChild(svg);


    function buildSVG(circles) {
        svg.innerHTML = '';
        circles.forEach(circle => svg.appendChild(circle));
    }
    // Define the builderseason function
    function builderseason(e) {
        const colors = {
            summer: ['red', 'yellow', 'orange', 'red', 'yellow', 'orange', 'red'],
            winter: ['blue', '#ADD8E6', '#007FFF', '#4166F5', '#0067A5', '#OF4D92', 'darkblue'],
            spring: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
        };
        const circleRadius = [200, 180, 175, 150, 125, 100, 90];

        const colorList = e ? colors[e.value] : colors.summer;
        const circles = colorList.map((color, index) => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '400');
            circle.setAttribute('cy', '450');
            circle.setAttribute('r', circleRadius[index]);
            circle.setAttribute('stroke', 'none');
            circle.setAttribute('stroke-width', '2');
            circle.setAttribute('fill', color);
            return circle;
        });

        buildSVG(circles);
    }

    // Define the builderdaytime function
    function builderdaytime(event) {
        const backgrounds = {
            morning: 'violet',
            noon: 'white',
            dusk: 'black'
        };
        const selectedOption1 = event.target.options[event.target.selectedIndex];
        const colorvalue = selectedOption1.getAttribute('value');

        var color = backgrounds[colorvalue];
        var circle = document.getElementsByTagName('circle')[0];
        circle.removeAttribute('class');
        const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", "dynamicShadow");
        var svg = document.getElementById('svg');
        const existingFilter = svg.querySelector("#dynamicShadow");
        if (existingFilter) {
            svg.removeChild(existingFilter);
        }
        svg.appendChild(filter);
        const dropShadow = document.createElementNS("http://www.w3.org/2000/svg", "feDropShadow");
        dropShadow.setAttribute("dx", 10);
        dropShadow.setAttribute("dy", 15);
        dropShadow.setAttribute("stdDeviation", 15);
        dropShadow.setAttributeNS(null, "flood-color", color);
        dropShadow.setAttribute("flood-opacity", 0.9);
        filter.appendChild(dropShadow);

        circle.setAttribute("filter", "url(#dynamicShadow)");


        // circle[0].classList.add(backgrounds[e.value]);
    }

    // Define the buildertime function
    function buildertime(event) {
        const selectedOption1 = event.target.options[event.target.selectedIndex];
        const degree = selectedOption1.getAttribute('degree');
        console.log(degree);
        svg.style.transform = `rotate(${degree}deg)`;
    }

    // Attach event listeners
    seasons.addEventListener('change', function () {
        builderseason(this);
    });

    daytime.addEventListener('change', function () {
        builderdaytime(event);
    });

    time.addEventListener('change', function () {
        buildertime(event);
    });

    builderseason();

};
