// todo - throttle listener;
window.addEventListener('DOMContentLoaded', () =>
  document.getElementById('main').style.marginTop = newMargin());

window.addEventListener('resize', () =>
  document.getElementById('main').style.marginTop = newMargin());

/** keep the text in the  .~* ✨ stars 💫 *~.  */
const newMargin = () => {
  const height = document.documentElement.clientWidth * 0.2;
  return (height < 200) ? `${height}px` : `200px`;
};
