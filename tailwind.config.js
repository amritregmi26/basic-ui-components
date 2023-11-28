export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    color: {
      "primary": "#334b91",
      "secondary": "#c76069",
      "green": "#008a64",
      "maroon": "#8d2d3a",
      "purple": "#66359c",
      "yellow": "#d0a617",
      "gray": "#a9aabc"
    },
    backgroundColor: theme => ({
      "primary": "#334b91",
      "secondary": "#c76069",
      "green": "#008a64",
      "maroon": "#8d2d3a",
      "purple": "#66359c",
      "yellow": "#d0a617",
      "gray": "#a9aabc"
    }),
    container: {
      center: true
    }
  },
  plugins: [],
}

