const fs = require("fs");

let work = [
    "React",
    "React Hooks",
    "GSAP",
    "Redux"
]

let learning = `
<svg width="415" height="200" viewBox="0 0 415 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
    #main {
        animation: fadeIn 1000ms ease-out;
    }

    #seperator {
        transform-origin: 23px;
        animation: elongate 300ms 500ms ease-out backwards;
    }

    #list1 {
        animation: fadeIn 300ms 700ms ease-out backwards;
    }

    #list2 {
        animation: fadeIn 300ms 900ms ease-out backwards;
    }

    #list3 {
        animation: fadeIn 300ms 1100ms ease-out backwards;
    }

    #list4 {
        animation: fadeIn 300ms 1300ms ease-out backwards;
    }

    @keyframes elongate {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }

    @keyframes fadeIn {
        from {
            opacity : 0;
        }

        to {
            opacity : 1;
        }
    }
</style>
<g id="main">
    <rect width="415" height="200" fill="white"/>
    <rect id="outer_box" x="0.5" y="0.5" width="414" height="199" rx="9.5" stroke="#E1E4E8"/>
    <text id="learning" fill="black" xml:space="preserve" style="white-space: pre" font-family="Open Sans" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="23" y="35.207">Currently learning</tspan></text>
    <line xmlns="http://www.w3.org/2000/svg" id="seperator" x1="23.5" y1="54.5" x2="318.5" y2="54.5" stroke="#E1E4E8" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="list">
        <text id="list1" fill="black" xml:space="preserve" style="white-space: pre" font-family="Open Sans" font-size="16" letter-spacing="0em"><tspan x="23" y="87.207">${work[0]}</tspan></text>
        <text id="list2" fill="black" xml:space="preserve" style="white-space: pre" font-family="Open Sans" font-size="16" letter-spacing="0em"><tspan x="23" y="117.207">${work[1]}</tspan></text>
        <text id="list3" fill="black" xml:space="preserve" style="white-space: pre" font-family="Open Sans" font-size="16" letter-spacing="0em"><tspan x="23" y="147.207">${work[2]}</tspan></text>
        <text id="list4" fill="black" xml:space="preserve" style="white-space: pre" font-family="Open Sans" font-size="16" letter-spacing="0em"><tspan x="23" y="177.207">${work[3]}</tspan></text>
    </g>
</g>
</svg>
` 

fs.writeFile('./learning.svg', learning, (err) => console.log);