function findIntegers(str) {
  const numbers = str.match(/-?\b\d+([.,]\d+)?\b/g) || [];

  const integers = numbers.filter((el) => {
    const containComa = el.includes(",");
    const containDot = el.includes(".");

    if (containComa || containDot) {
      return false;
    }
    return true;
  });

  const integersCount = `Знайдено ${integers.length} цілих чисел.`;

  return { integers, integersCount };
}

function countWordsStartingWithGEndingWithI(inputString) {
  const words = inputString.split(/\s+/);
  const filteredWords = words.filter((word) => {
    const cleanedWord = word.replace(/[.,!?:;]*/g, "").toLowerCase();
    return (
      cleanedWord.charAt(0) === "г" &&
      cleanedWord.charAt(cleanedWord.length - 1) === "і"
    );
  });
  return filteredWords.length;
}

function searchInfo() {
  const inputText = document.getElementById("inputText").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const regex = /[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+/g;

  const words = inputText.match(regex);

  const wordCount = words ? words.length : 0;

  const specificWords = countWordsStartingWithGEndingWithI(inputText);

  const { integers, integersCount } = findIntegers(inputText);

  if (wordCount > 0) {
    resultsDiv.classList.contains("hide")
      ? resultsDiv.classList.toggle("hide")
      : null;
    resultsDiv.innerHTML += `<p>Кількість слів: ${wordCount}</p>`;
    resultsDiv.innerHTML += `<p>Слова, що починаються з букви "г" і закінчуються на "і": ${specificWords}</p>`;
    resultsDiv.innerHTML += `<p>Кількість цифр: ${integersCount}</p>`;
    resultsDiv.innerHTML += `<p>Цілі числа: ${integers.join(", ")}</p>`;
  }
}
