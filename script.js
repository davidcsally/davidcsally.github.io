console.log('hello there!')

window.addEventListener('resize', () =>
  document.getElementById('main').style.marginTop = newMargin());

/** keep the text in the  .~* ✨ stars 💫 *~.  */
function newMargin() {
  const height = document.documentElement.clientWidth * 0.2;
  return (height < 200) ? `${height}px` : `200px`;
}

// todo - throttle listener;
