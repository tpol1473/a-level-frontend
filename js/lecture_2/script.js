var a;
let b = 2;

function makeSomeCoolStaff() {
  console.log(a); // 1) a = undefine
  console.log(b); // 2) b = 2
  console.log(c); // 3) c = undefine

  const c = 5;
  
  if (true) {
    let a = 3;
    b = 4;

    console.log(a); // 4) a = 3
    console.log(b); // 5) b = 4
    console.log(c); // 6) c = 5
  }

  console.log(a); // 7) a = 3
  console.log(b); // 8) b = 4
  console.log(c); // 9) c = 5
}

makeSomeCoolStaff();

console.log(a); // 10) a = undefine
console.log(b); // 11) b = 4
console.log(c); // 12) c = undefine
