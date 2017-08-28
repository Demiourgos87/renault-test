# RenaultVu test website
This website was developed as part of onboarding for a job. The website is static.  

## Languages used:  
* HTML  
* SCSS  
* JavaScript  

## Plugins used:  
* jQuery [https://jquery.com/](https://jquery.com/)
* Picturefill  [https://scottjehl.github.io/picturefill/](https://scottjehl.github.io/picturefill/)
* Debounce  [http://benalman.com/projects/jquery-throttle-debounce-plugin/](http://benalman.com/projects/jquery-throttle-debounce-plugin/)
* YouTube iframe API  [https://developers.google.com/youtube/iframe_api_reference](https://developers.google.com/youtube/iframe_api_reference)
* Vimeo Player API [https://developer.vimeo.com/player](https://developer.vimeo.com/player)  

## Tools used:  
* nodejs  [https://nodejs.org/en/](https://nodejs.org/en/)
* Gulp  [https://gulpjs.com/](https://gulpjs.com/)  

## Development instructions:  
The development process includes Gulp task runner. In order to use Gulp, you must have nodejs and npm installed on yout computer. Upon cloning the repository, run the following commands:  

```npm install``` - installs Gulp locally and gulp plugins used by the project  
```gulp``` - runs the Gulp task runner with the default task. The default task includes:  

* Running browser-sync plugin, which automatically creates a local server and opens the project in the browser (default is localhost:3000/)  
* JavaScript file concatenation  
* JavaScript master file minification  
* Sass/SCSS compiling  
* CSS master file minification  
* Automatically watching for changes in any Sass/SCSS file and auto-injecting those changes to the browser  
* Automatically reloading the page when any of the HTML files change  
* Automatically reloading the page when any of the JavaScript files change  

__Note:__ _Distribution ready files are located inside the dist/ directory_

## Live website:  

The website uses Github pages. You can view the live website [here](https://demiourgos87.github.io/renault-test/app/)  
The link above leads to the homepage, links to different pages include:  

* Communication page: [here](https://demiourgos87.github.io/renault-test/app/communication.html)  
* Communication Q&A page: [here](https://demiourgos87.github.io/renault-test/app/communication-qa.html)  
* Default Article page: [here](https://demiourgos87.github.io/renault-test/app/article.html)  
* Article FAQ page: [here](https://demiourgos87.github.io/renault-test/app/article-faq.html)  
* Article Portrait page: [here](https://demiourgos87.github.io/renault-test/app/article-portrait.html)  
* Article Diaporama page: [here](https://demiourgos87.github.io/renault-test/app/article-diaporama.html)  
* Search results page: [here](https://demiourgos87.github.io/renault-test/app/search-results.html)  
* Search results none page: [here](https://demiourgos87.github.io/renault-test/app/search-results-none.html)  
* Live News page: [here](https://demiourgos87.github.io/renault-test/app/live-news.html)  
* All Tags page: [here](https://demiourgos87.github.io/renault-test/app/all-tags.html)  
* CGU page: [here](https://demiourgos87.github.io/renault-test/app/cgu.html)  
* Terms and Conditions page:  [here](https://demiourgos87.github.io/renault-test/app/T&C.html)  
* 404 page: [here](https://demiourgos87.github.io/renault-test/app/404.html)  
* Psychotest page: [here](https://demiourgos87.github.io/renault-test/app/psychotest.html)  
