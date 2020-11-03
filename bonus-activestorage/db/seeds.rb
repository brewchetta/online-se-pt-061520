Artist.destroy_all

artists = [
  {
    first_name: "Claude",
    last_name: "Monet",
    birth_year: 1840,
  },
  {
    first_name: "Frida",
    last_name: "Kahlo",
    birth_year: 1907,
  },
  {
    first_name: "Vincent",
    last_name: "van Gogh",
    birth_year: 1853,
  },
  {
    first_name: "Kehinde",
    last_name: "Wiley",
    birth_year: 1977,
  },
  {
    first_name: "Salvador",
    last_name: "Dali",
    birth_year: 1904,
  },
]

artists.each do |artist|
  Artist.create!(artist)
end
