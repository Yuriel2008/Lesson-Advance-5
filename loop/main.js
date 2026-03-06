// console.log("Hello, Lesson 2 about JavaScript loops!");
// //  Ctrl + ?
// // for loop
// {
//   for (let i = 0; i < 5; i++) {
//     console.log("For Loop tteration number: " + i);
//   }
// }

// // i++; i--
// {
//   for (let i = 2; i <= 10; i = i + 2) {
//     // if (i % 2 === 0)
//     console.log(i);
//   }
// }
// //
// {
//   let html = "";
//   let ulElemnt = document.getElementById("list");
//   for (let i = 1; i <= 10; i++) {
//     html += "<li>Tôi yêu bạn<li>";
//     html += `<li>Tôi yêu bạn ${i} lần<li>`;
//   }
//   console.log(html);
//   document.getElementById("list").innerHTML = html;
//   document.getElementById("list").innerText = html;
// }
// {
//   let html = "";
//   for (let i = 1; i <= 10; i++) {
//     html += `<li>Tôi yêu bạn ${i} lần<li>`;
//     html += "<li>Tôi yêu bạn " + i + "lần<li>";
//   }
// }
{
  let inputNumberElement = document.getElementById("input-number");
  let btnRenderElement = document.getElementById("press");
  let ulElement = document.getElementById("list");

  btnRenderElement.onclick = function () {
    let value = Number(inputNumberElement.value);
    console.log(value + value);
    let html = "";
    for (let i = 1; i <= value; i++) {
      html += `<li>Tôi yêu bạn ${i} lần<li>`;
    }
    ulElement.innerHTML = html;
  };
  //   btnRenderElement.onclick = function () {
  //     console.log("Clicked!!!");
  //   }
}

// XO Table not the full game only UI