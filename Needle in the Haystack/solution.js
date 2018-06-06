function findNeedle(haystack) {
 for (let n of haystack) {
   if (n === 'needle') return `found the needle at position ${haystack.indexOf(n)}`;
 }
}