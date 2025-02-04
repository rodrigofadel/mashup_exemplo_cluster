const app_id = "f5df5cad-abdb-4665-9fa5-d8b8a195d33e";

const config = {
  host: "XXXXXXXXXX.us.qlikcloud.com",
  prefix: "/",
  port: window.location.port,
  isSecure: true,
  webIntegrationId: "XXXXXXXXXXXXXXXXXXXXXXXX",
};

require.config({
  webIntegrationId: config.webIntegrationId,
  baseUrl: "https://XXXXXXXX.us.qlikcloud.com/resources",
  paths: {
    jqcloud: "//cdn.jsdelivr.net/npm/jqcloud2@2.0.3/dist/jqcloud.min",
  },
});

require([
  "js/qlik",
  "jqcloud",
], function (
  qlik,
) {
  window.qlik = qlik;

  // print error on console
  qlik.setOnError(function (error) {
    console.log(error);
  });

  //open apps
  var app = qlik.openApp(app_id, config);

  function getQlikObjects() {
    app.getObject("kpi-01", "LxVmzjP");
    app.getObject("kpi-02", "jwHMHfL");
    app.getObject("chart-01", "kharFE");
    app.getObject("chart-02", "yYjqQK");
  }

  // events
  $(document).ready(function () {
    getQlikObjects();
  });
});
