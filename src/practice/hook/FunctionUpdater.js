
setCounter(conter + 1);

//  Selain memberikan nilah baru, kita juga bissa memberikan argumen pada setCounter, seperti ini:
const stateUpdater = Function(currentCounter) => {
  return currentCounter + 1
}

setCounter(stateUpdater);

// atau langsung dimasukkan ke setCounter seperti ini:
setCounter(function (currentCounter) { return currentCounter + 1 });

// shortcut menggunakan sintak ringkas ES6
setCounter(counter => counter + 1);
