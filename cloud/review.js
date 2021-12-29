// sample from https://docs.parseplatform.org/cloudcode/guide/
// test:
/*
curl -X POST \
  -H "X-Parse-Application-Id: LSDJFKASJFI3S8DSJFDH" \
  -H "X-Parse-REST-API-Key: ENICORNKEY555SDDAS" \
  -H "Content-Type: application/json" \
  -d '{ "movie": "The Matrix" }' \
  http://parse.enicorn.cloud:1337/parse/functions/averageStars
*/

Parse.Cloud.define("averageStars", async (request) => {
  const query = new Parse.Query("Review");
  query.equalTo("movie", request.params.movie);
  const results = await query.find();
  let sum = 0;
  for (let i = 0; i < results.length; ++i) {
    sum += results[i].get("stars");
  }
  return sum / results.length;
});

Parse.Cloud.beforeSave(
  "Review",
  (request) => {
    // do any additional beforeSave logic here
  },
  {
    fields: {
      stars: {
        required: true,
        options: (stars) => {
          return stars >= 1 && stars <= 5;
        },
        error: "Your review must be between one and five stars",
      },
    },
  }
);
