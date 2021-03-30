const printJobs = jobs =>{
   const fragment = document.createDocumentFragment();
   const jobTemplate = document.getElementById("job-template").content;

   result.textContent= "";

   jobs.forEach(job => {
      jobTemplate.querySelector(".job__image").src = job.logo;

      const typeJob = jobTemplate.querySelector(".type");
      typeJob.children[0].textContent = job.company;

      job.new && typeJob.children[1].classList.add("type__item--show");
      job.featured && typeJob.children[2].classList.add("type__item--show");

      const features = jobTemplate.querySelector(".features");
      features.children[0].textContent = job.postedAt;
      features.children[1].textContent = job.contract;
      features.children[2].textContent = job.location;

      const categories = jobTemplate.querySelector(".categories");

      categories.innerHTML = `
         <li class="categories__item"><button class="categories__button">${job.role}</button></li>
         <li class="categories__item"><button class="categories__button">${job.level}</button></li>
      `;

      job.languages.forEach(item => {
         categories.innerHTML += `<li class="categories__item"><button class="categories__button">${item}</button></li>`;
      });

      job.tools.length > 0 &&
         job.tools.forEach(item => {
            categories.innerHTML += `<li class="categories__item"><button class="categories__button">${item}</button></li>` 
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