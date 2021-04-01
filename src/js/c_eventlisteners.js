filter.addEventListener("click", async e =>{
   if(e.target.classList.contains("filter__button")){
      searchTerms = [];
      languages = [];
      tools = [];
      role = "";
      level = "";
   }

   if(e.target.classList.contains("filter-list__button")){
      searchTerms = searchTerms.filter(term => term.termValue !== e.target.dataset.term);

      if(e.target.dataset.type === "role") role = "";
      if(e.target.dataset.type === "level") level = "";
      
      if(e.target.dataset.type === "languages")
         languages = languages.filter(language => language !== e.target.dataset.term);

      if(e.target.dataset.type === "tools")
         tools = tools.filter(tool => tool !== e.target.dataset.term);
   
   }

   searchTerms.length === 0 && filter.classList.remove("filter--show");

   filteredTerms();
   printFilterTerms(searchTerms);
});

result.addEventListener("click", e =>{
   if(e.target.classList.contains("categories__button")){
      for (const term of searchTerms){
         if(e.target.dataset.term === term.termValue) return;
      }
      
      if(e.target.dataset.type === "role") role = e.target.dataset.term;
      if(e.target.dataset.type === "level") level = e.target.dataset.term;
      e.target.dataset.type === "languages" && languages.push(e.target.dataset.term);
      e.target.dataset.type === "tools" && tools.push(e.target.dataset.term);

      const termInfo = {
         termValue: e.target.dataset.term,
         type: e.target.dataset.type
      };

      searchTerms.push(termInfo);
      printFilterTerms(searchTerms);
      filter.classList.add("filter--show");

      filteredTerms();
   }
});

document.addEventListener("DOMContentLoaded", async () => printJobs( await getJobs()));