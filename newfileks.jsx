const displayUsers = (users) => {
    users.forEach(user => {
      const select = document.querySelector(".select-text");
      const option = document.querySelector("option");
      
      option.text = user.name;
      option.value = user.id;
      select.appendChild(option);
    })
  }

  const displayUsers = (users) => {
    users.forEach((user) => {
      const option = document.createElement("OPTION");
      const name = document.createTextNode(user.name);
      option.value = user.id;
      option.appendChild(name);
      document.querySelector('select').appendChild("option");
    })
  }

  const countriesWithLowerBmi = 
  ['Chad','Sierra Leone','Mali','Gambia', 'Uganda', 'Ghana','Senegal','Somalia', 'Ivory Coast','Isreal' ]

const computeBMI = ({weight, height, country}) => {
const heightInMeters = height * featToMeter;
let BMI = weight / (heightInMeters^2);

if (countriesWithLowerBmi.includes(country))
BMI *= bmiCountryRatio;

    return Math.round(BMI, 2);
};

   