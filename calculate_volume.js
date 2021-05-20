let message;
let D;
let L;
let question = confirm((message = "Хотите вычислить обьем?"));

function sizeFnc(D, L) {
  const size = ((Math.PI * D ** 2) / 4) * L;
  return size;
}

if (question === true) {
  D = prompt((message = "Введите диаметр"));
  L = prompt((message = "Введите длинну"));
  sizeFnc(D, L);
} else if (question === false) {
  question = confirm(
    (message = "Неужели он настолько мал что вы боитесь узнать результат;)???")
  );
}

do {
  if (question === false) {
    D = prompt((message = "Введите диаметр"));
    L = prompt((message = "Введите длинну"));
    sizeFnc(D, L);
  }

  if (D === null || L === null) {
    question = confirm(
      (message =
        "Неужели он настолько мал что вы боитесь узнать результат;)???")
    );
  }
  if (question === true) {
    break;
  }
} while (D === null || L === null);

console.log(sizeFnc(D, L).toFixed(1));
// const size = ((Math.PI * D ** 2) / 4) * L;
// console.log(size.toFixed(2));
console.log(D);
console.log(L);
console.log(question);
