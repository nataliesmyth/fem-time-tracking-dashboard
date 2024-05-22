const timeFrameTabs = document.querySelectorAll('.nav-link');
const timeFrameName = ['daily', 'weekly', 'monthly'];
const prevTimeFrame = ['Yesterday', 'Last Week', 'Last Month'];
const cards = document.querySelectorAll('.tracking-card');
let currentTimeFrame = document.getElementById('daily');

currentTimeFrame.style.color = '#FFF';

async function handleClick(timeFrameNo) {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        for (let i = 0; i < 6; i++) {
            const currTime = data[i].timeframes[timeFrameName[timeFrameNo]].current;
            const prevTime = data[i].timeframes[timeFrameName[timeFrameNo]].previous;
            cards[i].querySelector('.current-time').textContent = currTime + ((currTime > 1) ? 'hrs': 'hr');
            cards[i].querySelector('.previous-time').textContent = prevTimeFrame[timeFrameNo] + ' - ' + prevTime + ((prevTime > 1) ? 'hrs': 'hr');
        }
    }
    catch(e) {
        console.error(e);
    }
}

timeFrameTabs.forEach((e) => {
    e.addEventListener('click', function() {
        currentTimeFrame.style.color = 'hsl(235, 45%, 61%)';
        currentTimeFrame = e;
        e.style.color = 'white';
        handleClick(e.dataset.index);
    });
});

handleClick(timeFrameTabs[0].dataset.index);