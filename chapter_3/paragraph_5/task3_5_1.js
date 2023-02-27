// Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result); // каждую проверку вынести в отдельные тесты

  result *= x;
  assert.equal(pow(x, 2), result); // каждую проверку вынести в отдельные тесты

  result *= x;
  assert.equal(pow(x, 3), result); // каждую проверку вынести в отдельные тесты
});

