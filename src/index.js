const WebService = require("./pptr");
const Rules = require("./rules");
const Log = require("./log");

(async () => {
  const data = await WebService.run("https://nohu99.org/");
  Log.log("Data received");
  const { links, imgs } = data;
  const newLinks = Rules.format(links);
})();
