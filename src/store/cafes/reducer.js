const defaultState = {
  cafes: [
    {
      id: 2, title: "Super Bean", rating: 10, addr: { country: "Russia ", city: "Voronezh", street: "Kosmonavtov ", build: "17b" },
      menu: [
        { id: 1, title: "Americano", option: "250ml", price: "100rub" },
        { id: 2, title: "Cappucino", option: "250ml", price: "120rub" },
        { id: 3, title: "Mocha", option: "350ml", price: "170rub" },
        { id: 4, title: "Latte", option: "350ml", price: "160rub" },
        { id: 5, title: "Americano", option: "250ml", price: "100rub" },
        { id: 6, title: "Cappucino", option: "250ml", price: "120rub" },
        { id: 7, title: "Mocha", option: "350ml", price: "170rub" },
        { id: 8, title: "Latte", option: "350ml", price: "160rub" }]
    },
    {
      id: 4, title: "Pikale", rating: 9, addr: { country: "Canada ", city: "Ottawa", street: "Portage Avenue ", build: "7" },
      menu: [{ id: 1, title: "Americano", option: "350ml", price: "12$" }]
    },
    {
      id: 1, title: "Zaryad", rating: 8, addr: { country: "Russia ", city: "Voronezh", street: "Komissarzhevskoi ", build: "8" },
      menu: [{ id: 1, title: "Americano", option: "250ml", price: "110rub" }]
    },
    {
      id: 3, title: "Starbins", rating: 7, addr: { country: "America ", city: "New York", street: "Park Avenue ", build: "1" },
      menu: [{ id: 1, title: "Americano", option: "350ml", price: "16$" }]
    }
  ]
}

export function CafesReducer(state = defaultState) {
  return state
}