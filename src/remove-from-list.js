export default function removeKFromList(l, k) {
  // Удаляем подходящие элементы в начале списка
  while (l !== null && l.value === k) {
    l = l.next;
  }
  // Теперь l — либо null, либо первый узел, который не равен k
  let current = l;
  while (current && current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return l;
}