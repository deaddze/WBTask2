function recursiveDOMTraversal(node) {
  // Вывод информации о текущем узле
  // console.log('Тег:', node.tagName);

  // Рекурсивно обходим всех детей текущего узла
  for (let i = 0; i < node.children.length; i++) {
    recursiveDOMTraversal(node.children[i]);
  }
}

// Пример использования: начать обход с корневого элемента body
const rootNode = document.querySelector('.task-17');
recursiveDOMTraversal(rootNode);