// Представьте, что у вас есть мешок риса, из которого вам нужно отмерить ровно 1 кг. 
// В вашем распоряжении простейшие весы с двумя чашами, миски, куда можно пересыпать рис, и гирька в жалкий 1 г. 
// Сколько взвешиваний потребуется, чтобы отмерить 1 кг риса?

const riceBag = 1000; // Assuming 1000 grams represent 1 Kg of rice
const weight = 1;

// Function to simulate weighing with the 1 gram weight
function weigh(rice) {
  return Math.floor(rice * 2 / 3); // Approximate 2/3 of the rice
}

// Initial portion of rice
let portion1 = weigh(riceBag);

// Remove 1/3 of the initial portion
let remainingRice = riceBag - portion1;


// Second portion of rice
let portion2 = weigh(remainingRice);

// Combine both portions
let combinedRice = portion1 + portion2;

// Third portion of rice
let portion3 = weigh(combinedRice);

// Final rice to reach 1 Kg
let finalRice = riceBag - portion1 - portion2 - portion3;

// Total rice weighed
let totalRice = portion1 + portion2 + portion3 + finalRice;

// Number of weighs performed
const weighs = 7;

// console.log(`Total rice weighed: ${totalRice} grams`);
// console.log(`Number of weighs: ${weighs}`);

const findCountWeighs = () => {
  let rice = 0;
  rice = rice + 1;
  console.log(rice)
  rice = rice + 1;
  console.log(rice)

}

findCountWeighs()

