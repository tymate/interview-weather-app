 //  ternary operators to determine the angle of the compass

export function angle(windDirection) {
  try {
    return windDirection == 'N' // direction 
      ? 0 // degree
      : windDirection == 'NNE'
      ? 30
      : windDirection == 'NE'
      ? 50
      : windDirection == 'ENE'
      ? 70
      : windDirection == 'E'
      ? 90
      : windDirection == 'ESE'
      ? 120
      : windDirection == 'SE'
      ? 140
      : windDirection == 'SSE'
      ? 160
      : windDirection == 'S'
      ? 180
      : windDirection == 'SSW'
      ? 210
      : windDirection == 'SW'
      ? 230
      : windDirection == 'WSW'
      ? 250
      : windDirection == 'W'
      ? 270
      : windDirection == 'WNW'
      ? 300
      : windDirection == 'NW'
      ? 320
      : windDirection == 'NNW'
      ? 340
      : 0; // goes to 0° if it's not working
  } catch (err) {
    return '';
  } 
}
