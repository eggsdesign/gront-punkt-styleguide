var dssizes = {
  size_xsmall: "x-small",
  size_small: "small",
  size_default: "default",
  size_large: "large",
  size_xlarge: "x-large"
};

var buttonpriorities = {
  priority_primary: "primary",
  priority_secondary: "secondary",
  priority_tertiary: "tertiary"
};

var buttonicons = {
  icon_none: "i-none",
  icon_left: "i-left",
  icon_right: "i-right",
  icon_only: "i-only"
};

var buttonstates = {
  state_inactive: "inactive",
  state_active: "active",
  state_hover: "hover",
  state_focused: "focused",
  state_selected: "selected",
  state_disabled: "disabled"
};

var count = 0;

var allThePrimaryButts = [];

var allTheButts = [];
var allTheStates = [];
var allTheSizes = [];
var allTheIcons = [];
var allThePriorities = [];
var allTheStyles = [];

/*
the ...Names are for stripping out the underscores
*/
var allTheStatesNames = [];
var allTheSizesNames = [];
var allTheIconsNames = [];
var allThePrioritiesNames = [];

var newNode = document.createElement("div");

/*Create all the buttons*/

for (var size in dssizes) {
  if (dssizes.hasOwnProperty(size)) {
    for (var state in buttonstates) {
      if (buttonstates.hasOwnProperty(state)) {
        for (var icon in buttonicons) {
          if (buttonicons.hasOwnProperty(icon)) {
            for (var priority in buttonpriorities) {
              if (buttonpriorities.hasOwnProperty(priority)) {
                if (icon == "icon_only") {
                  allTheButts.push(
                    '<button class="' +
                      size +
                      " " +
                      state +
                      " " +
                      icon +
                      " " +
                      priority +
                      ' btn">' +
                      '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="GP-DS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Desktop-HD-Copy" transform="translate(-536.000000, -655.000000)" fill="#000000">\n            <path d="M536,665 C536,670.52 540.47,675 545.99,675 C551.52,675 556,670.52 556,665 C556,659.48 551.52,655 545.99,655 C540.47,655 536,659.48 536,665 Z M538,665 C538,660.58 541.58,657 546,657 C550.42,657 554,660.58 554,665 C554,669.42 550.42,673 546,673 C541.58,673 538,669.42 538,665 Z M545,663 L545,670 L547,670 L547,663 L545,663 Z M545,660 L545,662 L547,662 L547,660 L545,660 Z" id="Shape"></path>\n        </g>\n    </g>\n</svg>' +
                      "</button>"
                  );
                } else if (icon == "icon_left") {
                  allTheButts.push(
                    '<button class="' +
                      size +
                      " " +
                      state +
                      " " +
                      icon +
                      " " +
                      priority +
                      ' btn">' +
                      '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="GP-DS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Desktop-HD-Copy" transform="translate(-536.000000, -655.000000)" fill="#000000">\n            <path d="M536,665 C536,670.52 540.47,675 545.99,675 C551.52,675 556,670.52 556,665 C556,659.48 551.52,655 545.99,655 C540.47,655 536,659.48 536,665 Z M538,665 C538,660.58 541.58,657 546,657 C550.42,657 554,660.58 554,665 C554,669.42 550.42,673 546,673 C541.58,673 538,669.42 538,665 Z M545,663 L545,670 L547,670 L547,663 L545,663 Z M545,660 L545,662 L547,662 L547,660 L545,660 Z" id="Shape"></path>\n        </g>\n    </g>\n</svg>' +
                      "Button" +
                      "</button>"
                  );
                } else if (icon == "icon_right") {
                  allTheButts.push(
                    '<button class="' +
                      size +
                      " " +
                      state +
                      " " +
                      icon +
                      " " +
                      priority +
                      ' btn">' +
                      "Button" +
                      '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="GP-DS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Desktop-HD-Copy" transform="translate(-536.000000, -655.000000)" fill="#000000">\n            <path d="M536,665 C536,670.52 540.47,675 545.99,675 C551.52,675 556,670.52 556,665 C556,659.48 551.52,655 545.99,655 C540.47,655 536,659.48 536,665 Z M538,665 C538,660.58 541.58,657 546,657 C550.42,657 554,660.58 554,665 C554,669.42 550.42,673 546,673 C541.58,673 538,669.42 538,665 Z M545,663 L545,670 L547,670 L547,663 L545,663 Z M545,660 L545,662 L547,662 L547,660 L545,660 Z" id="Shape"></path>\n        </g>\n    </g>\n</svg>' +
                      "</button>"
                  );
                } else if (icon == "icon_none") {
                  allTheButts.push(
                    '<button class="' +
                      size +
                      " " +
                      state +
                      " " +
                      icon +
                      " " +
                      priority +
                      ' btn">' +
                      "Button" +
                      "</button>"
                  );
                }

                allTheStates.push(state);

                allTheSizes.push(size);

                allTheIcons.push(icon);

                allThePriorities.push(priority);
              }
            }
          }
        }
      }
    }
  }
}

for (var i = 0; i < allTheStates.length; i++) {
  allTheStatesNames.push(allTheStates[i].replace("_", "</b> : "));
}

for (var i = 0; i < allTheSizes.length; i++) {
  allTheSizesNames.push(allTheSizes[i].replace("_", "</b> : "));
}

for (var i = 0; i < allTheIcons.length; i++) {
  allTheIconsNames.push(allTheIcons[i].replace("_", "</b> : "));
}

for (var i = 0; i < allThePriorities.length; i++) {
  allThePrioritiesNames.push(allThePriorities[i].replace("_", "</b> : "));
}

for (var i = 0; i < allTheButts.length; i++) {
  //console.log(window.allTheButts[i].getPropertyValue("font-size"));
  elem.innerHTML +=
    "<tr><td>" +
    "<b>" +
    allTheSizesNames[i] +
    " <br /> " +
    "</td><td>" +
    "<b>" +
    allThePrioritiesNames[i] +
    " <br /> " +
    "</td><td>" +
    "<b>" +
    allTheIconsNames[i] +
    " <br />" +
    "</td><td>" +
    "<b>" +
    allTheStatesNames[i] +
    "</td><td>" +
    allTheButts[i] +
    "</td></tr>";
}

for (var i = 0; i < allThePrimaryButts.length; i++) {
  primaryButts.innerHTML += allThePrimaryButts[i];
}

for (var i = 0; i < butthole.length; i++) {
  if (butthole[i].classList.contains("state_disabled")) {
    butthole[i].classList.add("sorry");
    butthole[i].disabled = true;
  }
}
