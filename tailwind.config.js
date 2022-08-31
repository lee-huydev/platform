/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      primary_1: "#00FFFF",
      primary_2: "#00CACA",
      primary_3: "#0ABF37",
      primary_4: "#22903D",
      primary_5: "#096520",
      primary_6: "#014111",
      error: "#FA9494",
      warning: "#FFB780",
      success: "#66C56D",
      noti: "#62F0CC",
      secondary_1: "#4BC9F0",
      secondary_2: "#E4D7CF",
      secondary_3: "#FFD166",
      secondary_4: "#CDB4DB",
      secondary_5: "#FF6838",
      neutral_1: "#141416",
      neutral_2: "#23262F",
      neutral_3: "#353945",
      neutral_4: "#777E91",
      neutral_5: "#B1B5C4",
      neutral_6: "#E6E8EC",
      neutral_7: "#FCFCFD",
    },
    fontFamily: {
      josefin : ['Josefin Sans', 'sans-serif ']
    },
    extend: {

    },
  },
  plugins: [],
}
