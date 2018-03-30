console.log('hello there!');
addAmplitudeListeners();

// todo - throttle listener;
window.addEventListener('DOMContentLoaded', () =>
  document.getElementById('main').style.marginTop = newMargin());

window.addEventListener('resize', () =>
  document.getElementById('main').style.marginTop = newMargin());

/** keep the text in the  .~* ✨ stars 💫 *~.  */
function newMargin() {
  const height = document.documentElement.clientWidth * 0.2;
  return (height < 200) ? `${height}px` : `200px`;
}

// attach amplitude event listeners
function addAmplitudeListeners() {
  window.addEventListener('DOMContentLoaded', () => {
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const angelist = document.getElementById('angelist');
    const medium = document.getElementById('medium');

    // linkedin
    linkedin.href = '#';
    linkedin.addEventListener('mouseover', () => {
      logEvent('ButtonMouseover', { button: 'linkedin' });
    });
    linkedin.addEventListener('click', () => {
      logEvent('ButtonClick', { button: 'linkedin' });
      window.open('https://www.linkedin.com/in/davidcsally', '_self');
    });

    // github
    github.href = '#';
    github.addEventListener('mouseover', () => {
      logEvent('ButtonMouseover', { button: 'github' });
    });
    github.addEventListener('click', () => {
      logEvent('ButtonClick', { button: 'github' });
      window.open('https://github.com/davidcsally', '_self');
    });

    // angelist
    angelist.href = '#';
    angelist.addEventListener('mouseover', () => {
      logEvent('ButtonMouseover', { button: 'angelist' });
    });
    angelist.addEventListener('click', () => {
      logEvent('ButtonClick', { button: 'angelist' });
      window.open('https://angel.co/david-sally', '_self');
    });

    // medium
    medium.href = '#';
    medium.addEventListener('mouseover', () => {
      logEvent('ButtonMouseover', { button: 'medium' });
    });
    medium.addEventListener('click', () => {
      logEvent('ButtonClick', { button: 'medium' });
      window.open('https://medium.com/@davidchristophersally', '_self');
    });
  });
}

function logEvent(name, properties) {
  amplitude.getInstance().logEvent(name, properties);
}
