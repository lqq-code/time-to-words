// ## Examples

// - '0:00' > 'midnight'
// - '12:00' > 'midday'

// - '2:00' > 'two o'clock'

// - '2:03' > 'three past two'
// - '2:11' > 'eleven past two'
// - '2:15' > 'quarter past two' ;
// - '2:30' > 'half past two'

// - '2:33' > 'twenty seven to three'
// - '2:40' > 'twenty to three'
// - '2:45' > 'quarter to three' ;
// - '2:55' > 'five to three'
const timeToWords = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine',
  'half',
];

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const [hourString, mintueString] = time.split(':');
  const hour = Number(hourString);
  const mintues = Number(mintueString);

  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  if (mintues === 0) {
    return `${timeToWords[hour]} o'clock`;
  }

  if (mintues > 30) {
    const remainTimes = 60 - mintues;
    return `${timeToWords[remainTimes]} to ${timeToWords[hour + 1]}`;
  }

  return `${timeToWords[mintues]} past ${timeToWords[hour]}`;
}

module.exports = { convertTimeToWords };
