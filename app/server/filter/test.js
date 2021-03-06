var Filter = require("./index").Filter;

var filters = {
  point: [
    {
      name: "kiss",
      radius: 100,
      point: {
        lat: 66.66,
        lon: 77.77
      }
    }
  ],
  date: [
    {
      name: "bajs",
      start: (new Date(2014,08,22)).toISOString(),
      end: (new Date(2015,07,30)).toISOString()
    }
  ]
}

var expression = "kiss*bajs+kiss";

var f = new Filter();
f.QueryParams(filters, expression);
f.Parse();
var el = f.ElasticsearchQuery();
console.log(JSON.stringify(el, null, 2));
