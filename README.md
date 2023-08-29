# Western Orthodox Prayer
This is the repository for the Western Orthodox Prayer web application for praying the traditional Benedictine Divine 
Office according to the use of the Antiochian Western Rite Vicariate (AWRV) of the Eastern Orthodox Catholic Church.

## How to build and run
1. Install [Node.js ](https://nodejs.org/en/download)(the LTS release should be fine, I tested with v19.1.0)
2. Clone this repository using git
3. In the project directory, run `npm install`
4. Run a local instance with `npm run dev`
## About this project

### The app itself
This application is build with the Ionic Framework + Vue, in order to make it available for web and mobile devices/form 
factors (hopefully) with little hassle. It is designed to require Internet access only for the initial page load; the 
rest is stored and retrieved offline, so it can (theoretically) be used anywhere.

This application is a work in progress; only Compline is currently available (although all the Marian antiphons have 
implemented) and only runs in the browser as a local instance. See "Planned Tasks" below for more details.

### Audience
The primary audience for this application is the laity, and as such there are some texts and rubrics that have been 
tweaked to avoid parts reserved only for priests or monastics. For example:
- "The Lord be with you" / "And with thy spirit" is replaced with "O Lord, hear my prayer" / "And let my cry come unto to thee"
- At Compline, instead of "Sir, ask a blessing" there is "O Lord, grant a blessing"
- Prayers and references related to the monastic community will be removed or tweaked

There are no plans to implement Matins, either from the *Monastic Breviary Matins* book or any Matins parts from *The 
Monastic Diurnal*; simply because it is far too complex both to implement and to pray. There is theoretically room for 
including other WR prayers and/or devotions outside the Office, but the primary goal is Lauds through Compline for the laity.

### Relationship with the Orthodox Church
**This project does not have ecclesiastical approbation, and cannot be used in place of official service books, 
especially for priests or monastics who are bound to pray the Office!**

### Planned Tasks

#### Application Platforms
- [x] Hosted Progressive Web Application
- [ ] Android application
- [ ] iOS application (big maybe, since it costs a ton of money just to have the tools)

#### App Features (roughly in order of effort/importance)
- [x] Date picker
- [ ] Option to render basic prayers, abbreviate them, or omit them
- [ ] Hours throughout the year (*in progress*)
  - [x] Compline (outside of Triduum)
  - [ ] Prime
  - [ ] Sext
  - [ ] Terce
  - [ ] None
  - [ ] Vespers (including suffrage)
  - [ ] Lauds (including suffrage)
- [ ] Proper of the Season 
  - [ ] Propers transcribed
  - [ ] Propers implemented for the above hours
- [ ] Common of the Saints
  - [ ] Common of the Blessed Virgin Mary
  - [ ] Office of the Dead (excluding Matins)
  - [ ] Rest of the Commons
- [ ] Proper of the Saints
  - [ ] Propers transcribed
  - [ ] Propers implemented for above hours
- [ ] Other useful parts
  - [ ] The Seven Penetential Psalms
  - [ ] Itenary (a little office before travelling)
  - [ ] Preparation for Holy Communion (only those required of priests by the AWRV)
  - [ ] Thanksgiving after Holy Communion (only those required of priests by the AWRV)
- [ ] Other prayers or devotions if I feel like it

## Feedback and Contributing
I don't have a proper feedback channel implemented yet, but in the meantime you are welcome to create a GitHub account 
and open a ticket. Please send any feedback you have, whether it's a bug, feature request, or a nitpick. I am currently 
not taking pull requests.