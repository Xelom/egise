angular.module('egise.factories',[])

.factory("events",["$firebaseArray","$firebaseObject", function($firebaseArray, $firebaseObject) {
  return {
    getEvents : function() {
      var eventsRef = new Firebase("https://egise.firebaseio.com/events");
      return $firebaseArray(eventsRef);
    },

    getEventDetail : function(eventId) {
      var ref = new Firebase("https://egise.firebaseio.com/eventDetails/");
      var eventRef = ref.child(eventId);
      return $firebaseObject(eventRef);
    },

    getEventDates: function(eventId) {
      var ref = new Firebase("https://egise.firebaseio.com/eventDates/");
      var eventRef = ref.child(eventId);
      return $firebaseArray(eventRef);
    }
  }

}]);
