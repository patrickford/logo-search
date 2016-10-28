$(document).ready(function() {

  var programs = [
    {
      type: "acm",
      financing: "loan",
      level: "kindergarden",
      selected: false
    },
    {
      type: "aci",
      financing: "scholarship",
      level: "kindergarden",
      selected: false
    },
    {
      type: "afe",
      financing: "scholarship",
      level: "high-school",
      selected: false
    },    
    {
      type: "acm",
      financing: "scholarship",
      level: "kindergarden",
      selected: false
    },
    {
      type: "aci",
      financing: "scholarship",
      level: "kindergarden",
      selected: false
    },
    {
      type: "afe",
      financing: "loan",
      level: "high-school",
      selected: false
    },  
    {
      type: "acm",
      financing: "loan",
      level: "high-school",
      selected: false
    },
    {
      type: "aci",
      financing: "scholarship",
      level: "kindergarden",
      selected: false
    },
    {
      type: "afe",
      financing: "scholarship",
      level: "high-school",
      selected: false
    }    
  ]

  function refreshLogos() {
    $("#logos").empty();
    for (var i = 0; i < programs.length; i++) {
      var icon = "'images/" + programs[i].type;
      if (programs[i].selected) {
        icon += "-color.png'";
      } else {
        icon += "-fade.png'";
      }
      $("#logos").append("<img class='icon' src=" + icon + "/>");
    }
  }

  $("#myForm").submit(function(e) {
    e.preventDefault();
    var financing = $("#financing option:selected").val();
    var level = $("#level option:selected").val();  
    for (var i = 0; i < programs.length; i++) {
      programs[i].selected = ((programs[i].financing === financing || financing === "all")
                              && (programs[i].level === level || level === "all"));     
    }
    refreshLogos();
  });

  refreshLogos();
})