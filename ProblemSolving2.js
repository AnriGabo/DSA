// marathonDistance  25 mile marathon

// Input მასივი უნდა იყოს სადაც იქნება კილომეტრები ნამბერების სახით ნაჩვენები, იმ შემთხვევაში თუ
// მასივების დაჯამებით 25 კილომეტრზე მეტი იქნება მაშინ იქნქბეa true, otherwise false

// Math abs ის მეშვეობით ხდება ნეგატიური ციფრების პოზიტიურად აღქმა
// 1)გადავაკონვერტიროთ ყველა ციფრი პოზიტიურად

function marathonDistance(km) {
  const convertNaturalAndSumAllTheNum =
    km.map((item) => Math.abs(item)).reduce((acc, cur) => acc + cur, 0) >= 25
      ? true
      : false;
  return convertNaturalAndSumAllTheNum;
}

console.log(marathonDistance([-6, 15, 4]));

// output: boolean
