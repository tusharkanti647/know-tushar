//1 --------------------------  --------------------------------
// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }
  
//   try {
//     throw new ValidationError("Invalid input provided");
//   } catch (error) {
//     console.error(`${error.name}: ${error.message}`);
//   }
  
//2 ----------------------------------------------------------------
// let student1 = {
//     name: "Manish",
//     company: "Gfg",
//     tt:{
//         a:'4'
//     }
// }
// let student2 = Object.assign({}, student1);

// student1.name = "Rakesh"
// student1.tt.a = "10"

// console.log("student 1 name is", student1.name)
// console.log("student 2 name is ", student2.name);
// console.log("student 1 name is", student1.tt.a)
// console.log("student 2 name is ", student2.tt.a);

//3 --------------------------------------------------------------------
function deepClone(obj) {
    // Handle null or undefined values
    if (obj === null || typeof obj !== "object") {
      return obj; // Return the value if it’s not an object
    }
  
    // Handle Date objects
    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }
  
    // Handle Array
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }
  
    // Handle Objects
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]); // Recursively clone
      }
    }
  
    return clonedObj;
  }
  
  // Example Usage
  const original = {
    name: "Rakesh",
    age: 25,
    skills: ["JavaScript", "React"],
    details: { hobbies: ["Reading", "Gaming"], location: "India" },
  };
  
  const cloned = deepClone(original);
  cloned.details.hobbies[0] = "Writing";
  
  console.log(original.details.hobbies[0]); // Output: "Reading"
  console.log(cloned.details.hobbies[0]);   // Output: "Writing"
  