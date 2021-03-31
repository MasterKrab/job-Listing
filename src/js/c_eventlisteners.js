filter.addEventListener("click", async e =>{
   if(e.target.classList.contains("filter__button")){
      searchTerms = [];
      printJobs(await getJobs());
   };

   if(e.target.classList.contains("filter-list__button")){
      searchTerms = searchTerms.filter(term => term.termValue !== e.target.dataset.term);
      filteredTerms();
   };

   searchTerms.length === 0 && filter.classList.remove("filter--show");
   printFilterTerms(searchTerms);
});

result.addEventListener("click", e =>{
   if(e.target.classList.contains("categories__button")){
      for (const term of searchTerms){
         if(e.target.dataset.term === term.termValue) return;
      };

      const termInfo = {
         termValue: e.target.dataset.term,
         type: e.target.dataset.type
      };

      searchTerms.push(termInfo);
      printFilterTerms(searchTerms);
      filter.classList.add("filter--show");

      filteredTerms();
   };
});

document.addEventListener("DOMContentLoaded", async () => printJobs( await getJobs()));