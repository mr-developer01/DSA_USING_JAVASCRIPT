// Shallow Copy And Deep Copy :--
const obj = {
  names: "Rahul",
  age: 24,
  frnds: {
    frnd1: {
      frnd1Name: "R",
      frnd1Age: 22,
      frnd1Frnds: [1, 2, 3, 4],
    },
    frnd2: {
      frnd2Name: "K",
      frnd2Age: 24,
      frnd2Frnds: [5, 6],
    },
  },
};

// const obj2 = {...obj};
// obj2.names = "Kunal"
// obj2.frnds.frnd1.frnd1Name = "Pratik"

// Easy way to create deep copy of Obj
const obj2 = JSON.parse(JSON.stringify(obj));
obj2.frnds.frnd1.frnd1Name = "Pratik"
obj2.frnds.frnd2.frnd2Name = "Kunal"
obj2.frnds.frnd2.frnd2Frnds = [7,8,9]

// console.log("obj", obj, obj.frnds.frnd2.frnd2Frnds);
// console.log("obj2", obj2, obj2.frnds.frnd2.frnd2Frnds);


// For Job :---
