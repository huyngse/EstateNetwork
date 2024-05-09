export function abbreviateNumber(number: number) {
    const abbreviations = [
      { value: 1e9, symbol: "tỷ" },
      { value: 1e6, symbol: "triệu" },
      { value: 1e3, symbol: "nghìn" }
    ];
  
    for (let i = 0; i < abbreviations.length; i++) {
      if (number >= abbreviations[i].value) {
        const abbreviatedValue = number / abbreviations[i].value;
        const roundedValue = Math.round(abbreviatedValue * 10) / 10;
        return roundedValue.toLocaleString() + " " + abbreviations[i].symbol;
      }
    }
  
    return number.toLocaleString();
  }