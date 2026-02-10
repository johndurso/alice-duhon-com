const performingDates = [    
  {  
    date: "2/19/2026",    
    show: "Bob Keen",    
    venue: "Comedy Cabin",    
    city: "Janesville, WI",    
    time: "7:00pm",    
    link: "https://www.cabinlaughs.com/shows/348403",    
    ticketAvailability: "available"  
  },  
  {  
    date: "2/21/2026",    
    show: "Good Karma Comedy Festival Presents: John Fugelsang",    
    venue: "Church of Satire",    
    city: "Hanover, PA",    
    time: "9:00pm",    
    link: "https://www.churchofsatirecomedyclub.com/event-info/church-of-satire-presents-john-fugelsang-2",    
    ticketAvailability: "available"  
  },
  {  
    date: "2/22/2026",    
    show: "Take A Shot Open Mic Comedy Finals",    
    venue: "My Buddy's",    
    city: "Chicago, IL",    
    time: "9:00pm",    
    link: "https://www.exploretock.com/mybuddys/event/private/c1509a30-1717-4cb3-8bbd-760b93af3a37",    
    ticketAvailability: "available"  
  },  
  {  
    date: "2/28/2026",    
    show: "No Quarter Comedy",    
    venue: "Cheers Bar & Grill",    
    city: "South Bend, IN",    
    time: "6:30pm",    
    link: "https://www.eventbrite.com/e/drew-nickens-live-at-cheers-tickets-1976421506931?aff=oddtdtcreator",    
    ticketAvailability: "available"  
  },  
  {   
    date: "3/20/2026",    
    show: "That's a Choice",    
    venue: "Water Tower Distilling",    
    city: "Ypsilanti, MI",    
    time: "7:00pm",    
    link: "#",    
    ticketAvailability: "free"    
  },    
  {  
    date: "3/24/2026",    
    show: "Comedy Court",    
    venue: "The Lincoln Lodge",    
    city: "Chicago, IL",    
    time: "9:00pm",    
    link: "https://www.eventbrite.com/tickets-external?eid=1977140978891",    
    ticketAvailability: "available"    
  }    
];
    
function performingTemplate(dates) {    
    return `    
        <div class="single-gallery col-lg-8 p-30 mb-30 m-auto">    
            <div class="thumb-content-box d-flex">    
                <div class="thumb-content">    
                    <div class="capt">    
                        <p class="eyebrow theme-color">${dates.date}</p>    
                        <h3>${dates.show}</h3>    
                        <p>${dates.venue}</p>    
                        <p>${dates.city}</p>    
                        <p>${dates.time}</p>    
                    </div>    
                    <a class="${dates.ticketAvailability}" target="_blank" href="${dates.link}">Buy tickets</a>    
                </div>    
            </div>    
        </div>    
    `;    
}
    
const currentDate = new Date();  
// Set time to start of day for accurate date comparison  
currentDate.setHours(0, 0, 0, 0);
    
// Filter to only show upcoming dates (including today)  
const upcomingShows = performingDates.filter(show => {    
    const showDate = new Date(show.date);    
    showDate.setHours(0, 0, 0, 0);  
    return showDate >= currentDate;    
});
    
// Check if there are any upcoming shows    
if (upcomingShows.length > 0) {    
    // Render upcoming shows    
    document.getElementById("performing-dates").innerHTML = `    
        ${upcomingShows.map(performingTemplate).join('')}    
    `;    
} else {    
    // Display message when no shows are scheduled    
    document.getElementById("performing-dates").innerHTML = `    
        <div class="no-shows-message col-lg-8 p-30 mb-30 m-auto text-center">    
            <h3>No Upcoming Shows</h3>    
            <p>Check back soon for new performance dates!</p>    
        </div>    
    `;    
}  