function getPassword(password) {
  const lengthScore = password.length >= 8 ? 3 : 0; // Добавляем 3 балла, если длина >= 8
  const uppercaseScore = /[A-Z]/.test(password) ? 2 : 0; // Добавляем 2 балла, если есть заглавные буквы
  const lowercaseScore = /[a-z]/.test(password) ? 2 : 0; // Добавляем 2 балла, если есть строчные буквы
  const numberScore = /\d/.test(password) ? 2 : 0; // Добавляем 2 балла, если есть цифры
  const specialCharacterScore = /[!@#$%^&*]/.test(password) ? 3 : 0; // Добавляем 3 балла, если есть специальные символы

  const totalScore = lengthScore + uppercaseScore + lowercaseScore + numberScore + specialCharacterScore;

  if (totalScore >= 10) {
    return "Сильный пароль";
  } else if (totalScore >= 7) {
    return "Средний пароль";
  } else {
    return "Слабый пароль. Попробуйте добавить буквы верхнего и нижнего регистра, цифры и специальные символы.";
  }
}

const password = "ThisIsP@sword";
const isGoodPassword = getPassword(password);
