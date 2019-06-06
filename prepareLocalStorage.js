
function prepareLocalStorage(inDevelopment){
  hasPrepared = localStorage['prepareLocalStorage'];
  if (hasPrepared != 'done' || inDevelopment){
    console.debug('Initalsing LocalStorage');
    
    // ****  Prepare Local Storage for Home Screen
    // prepare JSON data structure and put in local storage 
    var home_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "http://www.uni-bamberg.de"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      },
      feki: {
       title: "Feki.de",
       href: "http://www.feki.de"
      }
    };
    localStorage.setItem('home_externalLinks', JSON.stringify(home_externalLinks));
        var contact_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "http://www.uni-bamberg.de"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      },
      feki: {
       title: "Feki.de",
       href: "http://www.feki.de"
      }
    };
    localStorage.setItem('contact_externalLinks', JSON.stringify(contact_externalLinks));

    var studies_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "http://www.uni-bamberg.de"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      },
      feki: {
       title: "Feki.de",
       href: "http://www.feki.de"
      }
    };
    localStorage.setItem('studies_externalLinks', JSON.stringify(studies_externalLinks));
var faculty_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "http://www.uni-bamberg.de"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      },
      feki: {
       title: "Feki.de",
       href: "http://www.feki.de"
      }
    };
    localStorage.setItem('faculty_externalLinks', JSON.stringify(faculty_externalLinks));

    var subjectgroups_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "http://www.uni-bamberg.de"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      },
      feki: {
       title: "Feki.de",
       href: "http://www.feki.de"
      }
    };
    localStorage.setItem('subjectgroups_externalLinks', JSON.stringify(subjectgroups_externalLinks));

     var ac_externalLinks = {
      uniba: {
       title: "Prof. Dr. Ute Schmid",
       href: "https://www.uni-bamberg.de/en/cogsys/schmid-ute/"
      },
      wiai: {
       title: "Prof. Dr. Christoph Schlieder",
       href: "https://www.uni-bamberg.de/en/kinf/staff/prof-dr-christoph-schlieder/"
      },
      feki: {
       title: "Prof. Dr. Andreas Henrich",
       href: "https://www.uni-bamberg.de/minf/team/henrich/"
      },
      fek: {
       title: "Prof. Dr. Tom Gross",
       href: "https://www.uni-bamberg.de/en/hci/team/tom-gross/"
      }

    };
    localStorage.setItem('ac_externalLinks', JSON.stringify(ac_externalLinks));

      var cs_externalLinks = {
      uniba: {
       title: "Prof. Dr. Guido Wirtz",
       href: "https://www.uni-bamberg.de/en/pi/team/wirtz/"
      },
      wiai: {
       title: "Prof. Michael Mendler, PhD",
       href: "https://www.uni-bamberg.de/gdi/team/michael-mendler/"
      },
      feki: {
       title: "Prof. Dr. Udo R. Krieger",
       href: "https://www.uni-bamberg.de/ktr/mitarbeiter/krieger/"
      },
      fek: {
       title: "Prof. Dr. Daniela Nicklas",
       href: "https://www.uni-bamberg.de/en/mobi/team/prof-dr-daniela-nicklas/"
      }

    };
    localStorage.setItem('cs_externalLinks', JSON.stringify(cs_externalLinks));


      var iss_externalLinks = {
      uniba: {
       title: "Prof. Dr. Thorsten Staake",
       href: "https://www.uni-bamberg.de/en/eesys/team/"
      },
      wiai: {
       title: "Prof. Dr. Sven Overhage",
       href: "https://www.uni-bamberg.de/iis/mitarbeiter/overhage/"
      },
      feki: {
       title: "Prof. Dr. Weitzel Tim",
       href: "https://www.uni-bamberg.de/en/isdl/team/weitzel-prof-dr-tim/"
      },
      fek: {
       title: "Prof. Dr. Kai Fischbach",
       href: "https://www.uni-bamberg.de/en/sna/team/prof-dr-kai-fischbach/"
      }

    };
    localStorage.setItem('iss_externalLinks', JSON.stringify(iss_externalLinks));




    
    
    // ****  Prepare Local Storage for Other Screens
    // you can fill the local storage with your data
    
    // ****  Finally
    localStorage.setItem('prepareLocalStorage', 'done');
  }
  else {
    console.debug('Leaving LocalStorage untouched');
  }
}

