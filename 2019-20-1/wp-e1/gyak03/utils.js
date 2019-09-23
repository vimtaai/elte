// ! segédfüggvények

export function getCoordinates(element) {
  const styles = getComputedStyle(element);
  const x = (parseInt(styles.left.slice(0, -2)) / window.innerWidth * 100);
  const y = (parseInt(styles.top.slice(0, -2)) / window.innerHeight * 100);
  // return { x: x, y: y };
  return {x, y};
}