export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#334b91",
      "secondary": "#c76069",
      "green": "#008a64",
      "maroon": "#8d2d3a",
      "purple": "#66359c",
      "yellow": "#d0a617",
      "gray": "#a9aabc",
      "dark": "#303030",
      "white": "#ffffff"
    },
    backgroundColor: theme => ({
      "primary": "#334b91",
      "secondary": "#c76069",
      "green": "#008a64",
      "maroon": "#8d2d3a",
      "purple": "#66359c",
      "yellow": "#d0a617",
      "gray": "#a9aabc",
      "dark": "#303030"
    }),
    container: {
      center: true
    }
  },
  plugins: [],
}

