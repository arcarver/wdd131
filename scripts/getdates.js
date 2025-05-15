const year = document.query-selector("#year");
const today = new date();

year.inner-html = `${today.get-full-year()}`;

const last-mod = document.query-selector("#last");
last-mod.inner-html = `${document.last-modified}`;