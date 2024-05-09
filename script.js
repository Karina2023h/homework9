let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function total(company) {
  let totalSalary = 0;

  company.sales.forEach((suma) => {
    totalSalary += suma.salary;
  });

  for (let department in company.development) {
    company.development[department].forEach((suma) => {
      totalSalary += suma.salary;
    });
  }
  return totalSalary;
}
let totalSalary = total(company);
console.log("Сума зарплати", totalSalary);
