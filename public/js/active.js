(function ($) {
  "use strict";

  $(".html").rProgressbar({
    percentage: 80,
    fillBackgroundColor: "#1abc9c",
  });
  $(".css").rProgressbar({
    percentage: 80,
    fillBackgroundColor: "#2ecc71",
  });

  $(".javascript").rProgressbar({
    percentage: 65,
    fillBackgroundColor: "#34495e",
  });

  $(".jquery").rProgressbar({
    percentage: 95,
    fillBackgroundColor: "#f1c40f",
    backgroundColor: "#e67e22",
  });

  $(".node").rProgressbar({
    percentage: 60,
    fillBackgroundColor: "#9b59b6",
  });
  $(".express").rProgressbar({
    percentage: 50,
    fillBackgroundColor: "#b5b659",
  });
  $(".docker").rProgressbar({
    percentage: 70,
    fillBackgroundColor: "#e3476a",
  });
  $(".k8s").rProgressbar({
    percentage: 75,
    fillBackgroundColor: "#5386d5",
  });
})(jQuery);
