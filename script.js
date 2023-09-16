const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    console.log(developers);
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt('Enter name:');
    const age = parseInt(prompt('Enter age:'));
    const profession = prompt('Enter profession:');
    const newDeveloper = { name, age, profession };
    developers.push(newDeveloper);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    developers = developers.filter(dev => dev.profession !== 'admin');
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [ /* Add some dummy data here */ ];
    const concatenatedArray = developers.concat(dummyArray);
    console.log(concatenatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = developers.reduce((acc, dev) => acc + dev.age, 0);
    const avgAge = totalAge / developers.length;
    console.log(`Average Age: ${avgAge}`);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = developers.some(dev => dev.age > 25);
    console.log(`Is there at least one person above 25? ${isAbove25}`);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = developers.map(dev => dev.profession);
    const uniqueProfessions = [...new Set(professions)];
    console.log(uniqueProfessions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    developers.sort((a, b) => a.age - b.age);
    console.log(developers);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = developers.find(dev => dev.name === 'John');
    if (john) {
        john.profession = 'manager';
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const developerCount = developers.filter(dev => dev.profession === 'developer').length;
    const adminCount = developers.filter(dev => dev.profession === 'admin').length;
    console.log(`Developers: ${developerCount}, Admins: ${adminCount}`);
  }