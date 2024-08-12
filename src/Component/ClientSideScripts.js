import { useEffect } from 'react';
import $ from 'jquery';

const ClientSideScripts = () => {
  useEffect(() => {
    // Ensure jQuery and Waypoints are loaded
    if ($ && $.fn.waypoint) {
      $(".odometer").waypoint(function () {
        var odo = $(".odometer");
        odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      }, {
        offset: "80%",
        triggerOnce: true
      });
    }
  }, []);

  return null;
};

export default ClientSideScripts;
