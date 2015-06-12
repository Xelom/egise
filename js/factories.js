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
    },

    getEventhall: function(eventhallId) {
      var ref = new Firebase("http://egise.firebaseio.com/eventHalls/");
      var eventhallRef = ref.child(eventhallId);
      return $firebaseObject(eventhallRef);
    },

    getEventPriceList: function(eventId, eventDate) {
      var ref = new Firebase("http://egise.firebaseio.com/eventPrices/");
      var innerRef = ref.child(eventId);
      var eventPriceRef = ref.child(eventDate);
      return $firebaseObject(eventPriceRef);
    }
  }

}]);
