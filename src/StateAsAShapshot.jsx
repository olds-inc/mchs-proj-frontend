import React, { useState } from "react";

// https://react.dev/learn/state-as-a-snapshot
export default function StateAsAShapshot() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          // т.к. стейт компонента это не просто переменная а скорее снимок во времени
          // number каждый раз будет равен текущему значению, как будто бы мы 3 раза вызываем
          // setNumber(0 + 1) - первый рендер
          // setNumber(1 + 1) - второй рендер
          // setNumber(3 + 1) - третий рендер
          // setNumber(99 + 1) - сотый рендер
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          // здесь сейм хуйня, стейт не меняется на протяжение хендлера, т.е. setNumber не повлияет на ТЕКУЩИЙ стейт,
          // только на следующий который будет после рендера
          setNumber(number + 5);
          alert(number);

          // даже если вызвать алерт черкз 3 секунды, значение все равно возьмется из текущего стейта
          // т.к. в очередь на выполнение эта функция кладется со значением текущего стейта,
          // не важно что в момент ее выполнения компонент уже перерисовался
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +5
      </button>
    </>
  );
}
