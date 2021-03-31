const filteredTerms = async () =>{
   const jobs = await getJobs();
   const filteredTerms = [];
   let validTerm;

   for (let i = 0; i < jobs.length; i++){
      
      for (let j = 0; j < searchTerms.length; j++){
         validTerm = false;

         if(searchTerms[j].type == "languages" || searchTerms[j].type == "tools")
            validTerm = jobs[i][searchTerms[j].type].includes(searchTerms[j].termValue) ? true : false; 
         else
            validTerm = jobs[i][searchTerms[j].type] == searchTerms[j].termValue ? true : false;
      };

      validTerm && filteredTerms.push(jobs[i]);
   };

   printJobs(filteredTerms);
};

const printFilterTerms = terms =>{
   filterList.textContent = "";

   terms.forEach(term =>{
      const filterTemplate = document.getElementById("filter-template").content;
      filterTemplate.querySelector(".filter-list__term").textContent = term.termValue;

      const filterButton = filterTemplate.querySelector(".filter-list__button");
      filterButton.dataset.term = term.termValue;
      filterButton.ariaLabel = `Delete search term ${term.termValue}`;

      const cloneFilterTemplate = document.importNode(filterTemplate, true);
      fragment.appendChild(cloneFilterTemplate);
   });

   filterList.appendChild(fragment);
};

const printJobs = jobs =>{
   const jobTemplate = document.getElementById("job-template").content;

   result.textContent= "";
   
   jobs.forEach(job => {
      job.featured
      ? jobTemplate.querySelector(".job").classList.add("job--featured")
      : jobTemplate.querySelector(".job").classList.remove("job--featured");


      const image = jobTemplate.querySelector(".job__image");
      image.src = job.logo;
      image.alt = `${job.company} logo`

      const typeJob = jobTemplate.querySelector(".type");
      typeJob.children[0].textContent = job.company;

      job.new 
      ? typeJob.children[1].classList.add("type__item--show")
      : typeJob.children[1].classList.remove("type__item--show");

      job.featured 
      ? typeJob.children[2].classList.add("type__item--show")
      : typeJob.children[2].classList.remove("type__item--show");

      jobTemplate.querySelector(".job__title").textContent = job.position;

      const features = jobTemplate.querySelector(".features");
      features.children[0].textContent = job.postedAt;
      features.children[1].textContent = job.contract;
      features.children[2].textContent = job.location;

      const categories = jobTemplate.querySelector(".categories");

      categories.innerHTML = `
         <li class="categories__item"><button class="categories__button" data-type="role" data-term="${job.role}">${job.role}</button></li>
         <li class="categories__item"><button class="categories__button" data-type="level" data-term="${job.level}">${job.level}</button></li>
      `;

      job.languages.forEach(item => {
         categories.innerHTML += `<li class="categories__item"><button class="categories__button" data-type="languages" data-term="${item}">${item}</button></li>`;
      });

      job.tools.length > 0 &&
         job.tools.forEach(item => {
            categories.innerHTML += `<li class="categories__item"><button class="categories__button" data-type="tools" data-term="${item}">${item}</button></li>` 
         });

      const cloneJobTemplate = document.importNode(jobTemplate, true);
      fragment.appendChild(cloneJobTemplate);
   });

   result.appendChild(fragment);
};

const getJobs = async () =>{
   try {
      const request = await fetch(`./data.json`);
      const data = await request.json();
      return data;
   } catch (error) {
      console.error(error);
   };
};