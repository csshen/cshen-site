const visited = {
  europe: [
    'United Kingdom',
    'France',
    'Switzerland',
    'Germany',
    'Spain',
    'Monaco',
    'Belgium',
    'Netherlands',
    'Luxembourg',
    'Italy',
    'Vatican City',
    'Greece'
  ],
  europe_iso: [
    'GBR', 'FRA', 'BEL', 'CHE', 'DEU', 'MCO', 'GRC', 'ITA', 'VAT', 'LUX',
    'NLD', 'ESP'
  ],
  asia: [
    'China',
    'Malaysia',
    'Singapore'
  ],
  north_america: [
    'United States',
    'Canada'
  ],
  south_america: [
    'Peru'
  ],
  us_states: [
    'Maine',
    'New Hampshire',
    'New York',
    'Pennsylvania',
    'Connecticut',
    'Virginia',
    'North Carolina',
    'South Carolina',
    'Georgia',
    'Florida',
    'Arizona',
    'Nevada',
    'California',
  ],
  us_cities: [
    'New York City',
    'Atlanta',
    'Los Angeles'
  ],
  us_cities_markers: [
    {markerOffset: 45, name: 'New York City', coordinates: [-74.0060, 40.7128]},
    {markerOffset: -25, name: 'Los Angeles', coordinates: [-118.2437, 34.0522]},
    {markerOffset: -25, name: 'Atlanta', coordinates: [-84.3880, 33.7490]},
  ]
}

export default visited;
