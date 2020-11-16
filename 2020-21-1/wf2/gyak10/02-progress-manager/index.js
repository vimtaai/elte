const list = document.querySelector("#todos");

function handleStepClick(event) {
  if (!event.target.matches("ul li")) {
    return;
  }

  const li = event.target;
  // Ha nem volt még kipipálva
  if (!li.classList.contains("done")) {
    // Kipipáljuk
    li.classList.add("done");

    // Meg az összes előtte lévőt is
    let otherLi = li.previousElementSibling;
    while (otherLi !== null) {
      otherLi.classList.add("done");
      otherLi = otherLi.previousElementSibling;
    }

    // Ha ez volt az utolsó
    if (li.nextElementSibling === null) {
      li.parentNode.parentNode.classList.add("done");
    }
  } else {
    // Eldöntés: van-e mögötte olyan, ami "done"
    let otherLi = li.nextElementSibling;
    while (otherLi !== null && !otherLi.classList.contains("done")) {
      otherLi = otherLi.nextElementSibling;
    }

    // Ha nem találtunk ilyet
    if (otherLi === null) {
      // Levesszük a stílusosztályt
      li.classList.remove("done");
    }

     // Ha ez volt az utolsó
     if (li.nextElementSibling === null) {
      li.parentNode.parentNode.classList.remove("done");
    }
  }

  // const notDone = li.parentNode.querySelector("li:not(.done)");
  // if (!notDone) {
  //   li.parentNode.parentNode.classList.add("done");
  // } else {
  //   li.parentNode.parentNode.classList.remove("done");
  // }
}
list.addEventListener("click", handleStepClick);