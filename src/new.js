const computeBMI = ({weight, height, country}) => {
    const heightInMeters = height * featToMeter;
    let BMI = weight / (heightInMeters * heightInMeters);
    
    if (countriesWithLowerBmi.includes(country))
      BMI *= bmiCountryRatio;
    
    return Math.round(BMI, 2);
  };