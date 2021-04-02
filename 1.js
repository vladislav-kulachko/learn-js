let message;
let D;

let question = confirm((message = "Хотите вычислить обьем?"));

if (question === true) {
  D = prompt((message = "Введите диаметр"));
} else if (question === false) {
  question = confirm(
    (message =
      "Неужели он настолько мал что вы дрожите, осознавая результат;)???")
  );
}
do {
  if (question === false) {
    D = prompt((message = "Введите диаметр"));
  }

  if (D === null) {
    question = confirm(
      (message =
        "Неужели он настолько мал что вы дрожите, осознавая результат;)???")
    );
  }
  if (question === true) {
    break;
  }
} while (D === null);

const circleArea = (Math.PI * D ** 2) / 4;
console.log(circleArea.toFixed(2));
console.log(typeof circleArea);
console.log(D);
console.log(question);
