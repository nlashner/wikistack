const html = require("html-template-tag");
const layout = require("./layout");
// const express = require("express")

// const PORT = 8000
// app.listen(PORT, () => {
//   console.log(`Listening in ${PORT}`)
// } )



module.exports = (pages) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
      <!-- PLACEHOLDER LIST OF PAGES -->
    </ul>
  </ul>`);
