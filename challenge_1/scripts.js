// scripts.js
  import {company as company} from "./configuration.js";
  import {year as year} from "./configuration.js";



  const message = '©' + company + '(' + year + ')';
  document.querySelector('footer').innerText = message;