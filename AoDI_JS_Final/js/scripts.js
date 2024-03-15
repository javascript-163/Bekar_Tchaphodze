document.addEventListener("DOMContentLoaded", function () {
  // burger menu

  const menuButton = document.getElementById('menu_button');
  const icon = menuButton.querySelector('i');
  const nav = document.querySelector("nav");

  menuButton.addEventListener("click", () => {
    if (nav.style.display === "block") {
      nav.style.display = "none";
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    } else {
      nav.style.display = "block";
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  });


  // auth menu
  const userButton = document.getElementById("user_button");
  const userMenu = document.getElementById("user_menu");
  const authLinks = document.getElementById("auth_links");
  const msgLoggedIn = document.getElementById("msg_logged_in");
  const greetingMsg = document.getElementById("greeting_message");

  if (sessionStorage.getItem('isLoggedIn')) {
    authLinks.style.display = "none";
    greetingMsg.innerText = `Hello ${sessionStorage.getItem('activeUser')}`;
    msgLoggedIn.style.display = "block";
  }

  userButton.addEventListener("click", () => {
    if (userMenu.style.display === "flex") {
      userMenu.style.display = "none";
    } else {
      userMenu.style.display = "flex";
    }
  });


  // Events widget

  const countries = [
    ["Afghanistan", "AFG"], ["Albania", "ALB"], ["Algeria", "DZA"], ["Andorra", "AND"], ["Angola", "AGO"], ["Antigua and Barbuda", "ATG"], ["Argentina", "ARG"], ["Armenia", "ARM"], ["Australia", "AUS"], ["Austria", "AUT"], ["Azerbaijan", "AZE"], ["Bahamas", "BHS"], ["Bahrain", "BHR"], ["Bangladesh", "BGD"], ["Barbados", "BRB"], ["Belarus", "BLR"], ["Belgium", "BEL"], ["Belize", "BLZ"], ["Benin", "BEN"], ["Bhutan", "BTN"], ["Bolivia", "BOL"], ["Bosnia and Herzegovina", "BIH"], ["Botswana", "BWA"], ["Brazil", "BRA"], ["Brunei", "BRN"], ["Bulgaria", "BGR"], ["Burkina Faso", "BFA"], ["Burundi", "BDI"], ["Cabo Verde", "CPV"], ["Cambodia", "KHM"], ["Cameroon", "CMR"], ["Canada", "CAN"], ["Central African Republic", "CAF"], ["Chad", "TCD"], ["Chile", "CHL"], ["China", "CHN"], ["Colombia", "COL"], ["Comoros", "COM"], ["Congo", "COG"], ["Costa Rica", "CRI"], ["Croatia", "HRV"], ["Cuba", "CUB"], ["Cyprus", "CYP"], ["Czechia", "CZE"], ["Denmark", "DNK"], ["Djibouti", "DJI"], ["Dominica", "DMA"], ["Dominican Republic", "DOM"], ["Ecuador", "ECU"], ["Egypt", "EGY"], ["El Salvador", "SLV"], ["Equatorial Guinea", "GNQ"], ["Eritrea", "ERI"], ["Estonia", "EST"], ["Eswatini", "SWZ"], ["Ethiopia", "ETH"], ["Fiji", "FJI"], ["Finland", "FIN"], ["France", "FRA"], ["Gabon", "GAB"], ["Gambia", "GMB"], ["Georgia", "GEO"], ["Germany", "DEU"], ["Ghana", "GHA"], ["Greece", "GRC"], ["Grenada", "GRD"], ["Guatemala", "GTM"], ["Guinea", "GIN"], ["Guinea-Bissau", "GNB"], ["Guyana", "GUY"], ["Haiti", "HTI"], ["Honduras", "HND"], ["Hungary", "HUN"], ["Iceland", "ISL"], ["India", "IND"], ["Indonesia", "IDN"], ["Iran", "IRN"], ["Iraq", "IRQ"], ["Ireland", "IRL"], ["Israel", "ISR"], ["Italy", "ITA"], ["Jamaica", "JAM"], ["Japan", "JPN"], ["Jordan", "JOR"], ["Kazakhstan", "KAZ"], ["Kenya", "KEN"], ["Kiribati", "KIR"], ["Kosovo", "XKX"], ["Kuwait", "KWT"], ["Kyrgyzstan", "KGZ"], ["Laos", "LAO"], ["Latvia", "LVA"], ["Lebanon", "LBN"], ["Lesotho", "LSO"], ["Liberia", "LBR"], ["Libya", "LBY"], ["Liechtenstein", "LIE"], ["Lithuania", "LTU"], ["Luxembourg", "LUX"], ["Madagascar", "MDG"], ["Malawi", "MWI"], ["Malaysia", "MYS"], ["Maldives", "MDV"], ["Mali", "MLI"], ["Malta", "MLT"], ["Marshall Islands", "MHL"], ["Mauritania", "MRT"], ["Mauritius", "MUS"], ["Mexico", "MEX"], ["Micronesia", "FSM"], ["Moldova", "MDA"], ["Monaco", "MCO"], ["Mongolia", "MNG"], ["Montenegro", "MNE"], ["Morocco", "MAR"], ["Mozambique", "MOZ"], ["Myanmar", "MMR"], ["Namibia", "NAM"], ["Nauru", "NRU"], ["Nepal", "NPL"], ["Netherlands", "NLD"], ["New Zealand", "NZL"], ["Nicaragua", "NIC"], ["Niger", "NER"], ["Nigeria", "NGA"], ["North Korea", "PRK"], ["North Macedonia", "MKD"], ["Norway", "NOR"], ["Oman", "OMN"], ["Pakistan", "PAK"], ["Palau", "PLW"], ["Palestine", "PSE"], ["Panama", "PAN"], ["Papua New Guinea", "PNG"], ["Paraguay", "PRY"], ["Peru", "PER"], ["Philippines", "PHL"], ["Poland", "POL"], ["Portugal", "PRT"], ["Qatar", "QAT"], ["Romania", "ROU"], ["Russia", "RUS"], ["Rwanda", "RWA"], ["Saint Kitts and Nevis", "KNA"], ["Saint Lucia", "LCA"], ["Saint Vincent and the Grenadines", "VCT"], ["Samoa", "WSM"], ["San Marino", "SMR"], ["Sao Tome and Principe", "STP"], ["Saudi Arabia", "SAU"], ["Senegal", "SEN"], ["Serbia", "SRB"], ["Seychelles", "SYC"], ["Sierra Leone", "SLE"], ["Singapore", "SGP"], ["Slovakia", "SVK"], ["Slovenia", "SVN"], ["Solomon Islands", "SLB"], ["Somalia", "SOM"], ["South Africa", "ZAF"], ["South Korea", "KOR"], ["South Sudan", "SSD"], ["Spain", "ESP"], ["Sri Lanka", "LKA"], ["Sudan", "SDN"], ["Suriname", "SUR"], ["Sweden", "SWE"], ["Switzerland", "CHE"], ["Syria", "SYR"], ["Taiwan", "TWN"], ["Tajikistan", "TJK"], ["Tanzania", "TZA"], ["Thailand", "THA"], ["Timor-Leste", "TLS"], ["Togo", "TGO"], ["Tonga", "TON"], ["Trinidad and Tobago", "TTO"], ["Tunisia", "TUN"], ["Turkey", "TUR"], ["Turkmenistan", "TKM"], ["Tuvalu", "TUV"], ["Uganda", "UGA"], ["Ukraine", "UKR"], ["United Arab Emirates", "ARE"], ["United Kingdom", "GBR"], ["United States", "USA"], ["Uruguay", "URY"], ["Uzbekistan", "UZB"], ["Vanuatu", "VUT"], ["Vatican City", "VAT"], ["Venezuela", "VEN"], ["Vietnam", "VNM"], ["Yemen", "YEM"], ["Zambia", "ZMB"], ["Zimbabwe", "ZWE"]
  ];

  class Event {
    constructor(name, venue, date, url) {
      this.name = name;
      this.venue = venue;
      this.date = date;
      this.url = url;
    }

    // method for creating divs for event
    createEventElement() {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('event');

      const eventName = document.createElement('h3');
      eventName.textContent = this.name;
      eventDiv.appendChild(eventName);

      const eventVenue = document.createElement('p');
      eventVenue.textContent = `Venue: ${this.venue}`;
      eventDiv.appendChild(eventVenue);

      const eventDate = document.createElement('p');
      eventDate.textContent = `Date: ${new Date(this.date).toLocaleDateString()}`;
      eventDiv.appendChild(eventDate);

      const eventLink = document.createElement('a');
      eventLink.textContent = 'More Info';
      eventLink.href = this.url;
      eventLink.target = '_blank';
      eventDiv.appendChild(eventLink);

      return eventDiv;
    }
  }

  const inputField = document.getElementById('autocomplete');
  const autocompleteList = document.getElementById('autocomplete-list');
  const widgetInnerRight = document.getElementById('widget_inner_right');

  // function to autocomplete and then api call
  function updateAutocompleteOptions() {
    const inputValue = inputField.value.toLowerCase();
    autocompleteList.innerHTML = '';

    const filteredCountries = countries.filter(country => country[0].toLowerCase().startsWith(inputValue));

    filteredCountries.forEach(country => {
      const listItem = document.createElement('li');
      listItem.textContent = country[0];
      autocompleteList.appendChild(listItem);

      listItem.addEventListener('click', () => {
        inputField.value = country[0];
        autocompleteList.innerHTML = '';

        const countryCode = country[1];
        const apiKey = 'd46dee17-6f71-47e0-a888-1da0d17eb007';
        const apiUrl = `https://www.jambase.com/jb-api/v1/events?page=1&perPage=3&apikey=${apiKey}&geoCountryIso3=${countryCode}`;

        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            widgetInnerRight.innerHTML = '';

            data.events.forEach(eventData => {
              const newEvent = new Event(eventData.name,
                `${eventData.location.name}, ${eventData.location.address.addressLocality}, ${eventData.location.address.addressCountry.name}`,
                eventData.startDate, eventData.url);
                
              widgetInnerRight.appendChild(newEvent.createEventElement());
            });
          })
          .catch(error => {
            console.error('Error:', error);
          });
      });
    });
  }

  inputField.addEventListener('input', updateAutocompleteOptions);
});

var isLoggedIn = false;
var activeUser = '';

// register function

function validateRegistrationForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm_password').value;
  var registerMessageSpan = document.getElementById('register_message');

  // check if any fields are empty
  if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
    registerMessageSpan.innerText = 'Please fill in all fields.';
  }

  // check if two passwords match
  if (password !== confirmPassword) {
    registerMessageSpan.innerText = 'Passwords do not match.';
  }

  // check if user already exists
  if (localStorage.getItem(email)) {
    registerMessageSpan.innerText = 'User with this email already exists.';
  }

  // store user in local storage
  var user = { username: username, password: password };
  localStorage.setItem(email, JSON.stringify(user));

  registerMessageSpan.innerText = 'Registration successful.';
}

// sign in function

function validateSignInForm() {
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var email = emailInput.value;
  var password = passwordInput.value;
  var signInMessageSpan = document.getElementById('sign_in_message');

  // check if any fields are empty
  if (email.trim() === '' || password.trim() === '') {
    signInMessageSpan.innerText = 'Please enter both email and password.';
  }

  // check if user already exists
  var storedUser = JSON.parse(localStorage.getItem(email));
  if (storedUser && storedUser.password === password) {
    signInMessageSpan.innerText = 'Sign-in successful.';
    sessionStorage.setItem('isLoggedIn', '1');
    sessionStorage.setItem('activeUser', storedUser.username);
    emailInput.value = '';
    passwordInput.value = '';
  } else {
    signInMessageSpan.innerText = 'Invalid email or password.';
    passwordInput.value = '';
  }
}