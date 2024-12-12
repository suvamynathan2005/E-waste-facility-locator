const stateDistricts = {
    IN: {
      "Tamil Nadu": ["Erode", "Coimbatore"]
    }
  };
  
  const states = {
    IN: Object.keys(stateDistricts.IN)
  };
  
  function populateStates() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const selectedCountry = countrySelect.value;
  
    // Clear previous state and district options
    stateSelect.innerHTML = '<option value="">--Select State--</option>';
    districtSelect.innerHTML = '<option value="">--Select District--</option>';
  
    if (selectedCountry && states[selectedCountry]) {
      // Populate state options
      states[selectedCountry].forEach(function (state) {
        const option = document.createElement('option');
        option.value = state;
        option.text = state;
        stateSelect.add(option);
      });
    }
  }
  
  function populateDistricts() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;
    districtSelect.innerHTML = '<option value="">--Select District--</option>';
  
    if (selectedCountry && selectedState && stateDistricts[selectedCountry][selectedState]) {
      // Populate district options based on selected state
      stateDistricts[selectedCountry][selectedState].forEach(function (district) {
        const option = document.createElement('option');
        option.value = district;
        option.text = district;
        districtSelect.add(option);
      });
    }
  }
  
  function performSearch() {
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;
    const resultsDiv = document.getElementById('results');
  
    // Clear previous results
    resultsDiv.innerHTML = '';
  
    if (country === 'IN' && state === 'Tamil Nadu' && district) {
      let links;
      if (district === 'Erode') {
        links = [
          { text: 'All waste collector', url: '#', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62594.52300004786!2d77.61314242461907!3d11.323182610771442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f69a039d775%3A0x1afa50c572c9fabb!2sAll%20waste%20collector!5e0!3m2!1sen!2sin!4v1726599953579!5m2!1sen!2sin' },
          { text: 'Chenniappan Material Recovering Facility', url: '#', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62602.188776584095!2d77.5188973486328!3d11.288086800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96ddeda1a4621%3A0x1e970b5baace39f1!2sCHENNIAPPAN%20MATERIAL%20RECOVERING%20FACILITY!5e0!3m2!1sen!2sin!4v1726601127730!5m2!1sen!2sin' },
          { text: 'Olirum Erode Foundation', url: '#', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.9706954345447!2d77.71677847449467!3d11.336851048607768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f3e52968043%3A0x4f7c98d5009c9068!2sOlirum%20Erodu%20Foundation!5e0!3m2!1sen!2sin!4v1726601240216!5m2!1sen!2sin' }
        ];
      } else if (district === 'Coimbatore') {
        links = [
          { text: 'Tharani Electronics Waste', url: '#', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250724.17063119795!2d76.80646249197973!3d10.920614157416376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858565db4f511%3A0x9d15bfd05045a942!2sTharani%20Electronics%20Waste-Electronics%20Waste%7CBattery%7CComputer%20Waste%7CUPS%20Recycling%20Collection%20Center%20Management%20Coimbatore.!5e0!3m2!1sen!2sin!4v1726601738890!5m2!1sen!2sin' },
          { text: 'Waste Care - Dry Municipal Waste Management', url: '#', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125289.0555191714!2d76.7904800972656!3d11.092274399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f79c0f94520f%3A0x9611914f880038ad!2sWaste%20Care%20-%20Dry%20Municipal%20Waste%20Management%2C%20Scrap%2C%20Plastic%2C%20Paper%2C%20Glass%2C%20E-%20waste!5e0!3m2!1sen!2sin!4v1726681192548!5m2!1sen!2sin' },
          { text: 'SS E-waste buyer', url: '#', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125353.82279352674!2d76.82287309726563!3d10.94016910000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b6b336d3e9b%3A0x512e6848a5a65fa!2sSS%20E-waste%20buyer!5e0!3m2!1sen!2sin!4v1726681375627!5m2!1sen!2sin' },
          { text: 'Cercle X (Infinite Cercle) - EPR, Metal, Plastic Scrap and Waste Management', url: '#', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125358.85963549046!2d76.81927939726562!3d10.928252500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b5afe757acd%3A0x940a6b6c3000d64!2sCercle%20X%20(Infinite%20Cercle)%20-%20EPR%2C%20Metal%2C%20Plastic%20Scrap%20and%20Waste%20Management!5e0!3m2!1sen!2sin!4v1726681598749!5m2!1sen!2sin' },
          { text: 'Green India Recyclers', url: '#', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125434.72052657611!2d76.84720659726563!3d10.747195600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8475f6e9cbdbf%3A0x39fb07dc77be8d02!2sGreen%20India%20Recyclers!5e0!3m2!1sen!2sin!4v1726681680182!5m2!1sen!2sin' }
        ];
      }
  
      if (links) {
        // Create a list element
        const ul = document.createElement('ul');
        // Append each link as a list item
        links.forEach(link => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${link.url}" data-map="${link.mapSrc}" onclick="showMap(event, '${link.mapSrc}')">${link.text}</a>`;
          ul.appendChild(li);
        });
        // Append the list to the results div
        resultsDiv.appendChild(ul);
      }
    } else {
      resultsDiv.innerHTML = '<p>Please select a country, state, and district.</p>';
    }
  }
  
  // Function to show the embedded map
  function showMap(event, mapSrc) {
    event.preventDefault(); // Prevent default link behavior
    const mapIframe = document.getElementById('map');
  
    if (mapSrc) {
      // Set the iframe src to the selected map
      mapIframe.src = mapSrc; 
      mapIframe.style.display = 'block'; // Show the map
    } else {
      mapIframe.style.display = 'none'; // Hide the map if no src provided
  
    }
  }
  
  
  
  
  
  
  
  