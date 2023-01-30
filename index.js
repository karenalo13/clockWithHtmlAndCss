// window.onload= function(){
//     let children = document.querySelectorAll('.numbers');
//     console.log(children)
//     for (let i = 0; i < children.length; i++) {
//         children[i].style.transform = `rotate(${30*(i+1)}deg)`;
//     }
//     console.log("1")
// }

window.onload = function () {
  document
    .querySelectorAll(".numbers ")
    .forEach(
      (x, index) =>
        (x.style.transform = `rotate(calc( ${index + 1} * var(--rotation)  ))`)
    );

  document
    .querySelectorAll(".numbers span")
    .forEach(
      (x, index) =>
        (x.style.transform = `rotate(calc( ${
          -1 * (index + 1)
        } * var(--rotation)))`)
    );

  let dateNow = new Date();
  let hoursNow = dateNow.getHours();
  let minutesNow = dateNow.getMinutes();
  let startMinutesDeg = minutesNow * 6 + "deg";
  let endMinutesDeg = minutesNow * 6 + 360 + "deg";
  console.log(hoursNow % 12);
  console.log((hoursNow % 12) * 30);
  let startHourDeg = (hoursNow % 12) * 30 + "deg";
  let endHourDeg = (hoursNow % 12) * 30 + 360 + "deg";

  console.log(startHourDeg);
  console.log(endHourDeg);

  //stabilim punctul de start pentru linia ce arata minutele
  document.documentElement.style.setProperty(
    "--start-minute-deg",
    `${startMinutesDeg}`
  ); 
  document.documentElement.style.setProperty(
    "--end-minute-deg",
    `${endMinutesDeg}`
  );

  //stabilim punctul de start pentru linia ce arata orele
  document.documentElement.style.setProperty(
    "--start-hour-deg",
    `${startHourDeg}`
  );
  document.documentElement.style.setProperty("--end-hour-deg", `${endHourDeg}`);

  document.getElementById(
    "minute"
  ).style.transform = `rotate(${startMinutesDeg})`;

  document.getElementById("hour").style.transform = `rotate(${startHourDeg})`;
  console.log(document.getElementById("hour").style.transform);
};
