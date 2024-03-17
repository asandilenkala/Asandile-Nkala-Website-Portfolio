const main = $(".main")

$.ajax{(
  url: "https://api.github.com/users/asandilenkala/repos",
  method: "GET"
)}.then(results => console.log(results))
