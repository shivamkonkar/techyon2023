// var selectedDay = null;
// var selectedEventType = null;

// function hideAllEventItems() {
//     var eventItems = document.querySelectorAll('.event_item');
//     for (var i = 0; i < eventItems.length; i++) {
//         eventItems[i].style.display = 'none';
//     }
// }

// function filterEvents(day, eventType) {
//     hideAllEventItems();
//     var selector = `.${day}.${eventType}`;
//     var eventItems = document.querySelectorAll(selector);
//     for (var i = 0; i < eventItems.length; i++) {
//         eventItems[i].style.display = 'block';
//     }
// }

// function filterByDay(day) {
//     selectedDay = day;
//     filterEvents(selectedDay, selectedEventType);
// }

// function filterByEventType(eventType) {
//     selectedEventType = eventType;
//     filterEvents(selectedDay, selectedEventType);
// }

// // Reset selected filters
// function resetFilters() {
//     selectedDay = null;
//     selectedEventType = null;
//     hideAllEventItems();
// }



var selectedDay = null;
var selectedEventType = null;
var noResultMessage = document.getElementById("noResultMessage");

function hideAllEventItems() {
    var eventItems = document.querySelectorAll('.event_item');
    for (var i = 0; i < eventItems.length; i++) {
        eventItems[i].style.display = 'none';
    }
}

function filterEvents(day, eventType) {
    hideAllEventItems();
    var selector = `.${day}.${eventType}`;
    var eventItems = document.querySelectorAll(selector);
    if (eventItems.length === 0) {
        noResultMessage.style.display = 'block';
    } else {
        noResultMessage.style.display = 'none';
    }
    for (var i = 0; i < eventItems.length; i++) {
        eventItems[i].style.display = 'block';
    }
}

function filterByDay(day) {
    selectedDay = day;
    filterEvents(selectedDay, selectedEventType);
}

function filterByEventType(eventType) {
    selectedEventType = eventType;
    filterEvents(selectedDay, selectedEventType);
}

// Reset selected filters and hide the "No result found" message
function resetFilters() {
    selectedDay = null;
    selectedEventType = null;
    hideAllEventItems();
    noResultMessage.style.display = 'none';
}

// Initially, hide the "No result found" message
noResultMessage.style.display = 'none';

