function areAnagrams(s1,s2) {
    const normalize=str=>str.toLowerCase().split('').sort().join('');
          normalize(s1)=normalize(s2);
}
console.log(areAnagrams("silent","listen"));