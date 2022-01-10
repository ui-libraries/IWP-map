// if "cumulative" is selected
if (countValue == "cumulative") {
  // if "2+" is selected
  if (langValue == 2) {
    // iterate through the output array
    for (x = 0; x < output.length; x++) {
      // if the layer country property equals the output country property...
      if (props.country === output[x].country) {
        // count all multilingual writers (including writers who returned for more that one year)
        var cumulativeMultiCount = output[x].writerPop.join("").split("</a>").length - 1;
        var cumulativeMultiRadius = calcRadius(Number(cumulativeMultiCount)); // feed it the cumulative multilingual writer totals
        // set the cumulativeMultiPopup property to the following
        //var cumulativeMultiPopup = "<b>" + props.country + "&nbsp;(" + props.multilingual_writer_total_cumulative + ")</b><hr />" + output[x].writerPop.join("");
        var cumulativeMultiPopup = "<b>" + props.country + "&nbsp;(" + cumulativeMultiCount + ")</b><hr />" + output[x].writerPop.join("");
      };
    };
    // bind the cumulative multilingual popup
    layer.bindPopup(cumulativeMultiPopup, {
      maxHeight: 300,
      maxWidth: 350
    });
  };
