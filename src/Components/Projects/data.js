import pos from '../../assets/Images/pos.jpg'
import todotask from '../../assets/Images/todotask.jpg'
import studsys from '../../assets/Images/studsys.jpg'
import panote from '../../assets/Images/panote.jpg'
import quotes from '../../assets/Images/quotes.jpg'
import weather from '../../assets/Images/weather.jpg'
import netflixlp from '../../assets/Images/netflixlandingpage.jpg'
import techlp from '../../assets/Images/techlandingpage.jpg'

const data=[
    {
        index:crypto.randomUUID(),
        ProjectName:"Point of Sale",
        img:pos,
        category:"desktopapp",
        link:"https://github.com/beernaard/Point_of_Sale",
        demo:null,
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Student Management System",
        img:studsys,
        category:"webapp",
        link:"https://github.com/beernaard/StudentManagamentSystem",
        demo:null,
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Todo list App",
        img:todotask,
        category:"webapp",
        link:"https://github.com/beernaard/fullstack-todo-list",
        demo:null,
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"PaNOTE App",
        img:panote,
        category:"webapp",
        link:"https://github.com/beernaard/panote-app-react",
        demo:"https://beernaard.github.io/panote-app-react/",
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Quotes Generator",
        img:quotes,
        category:"webapp",
        link:"https://github.com/beernaard/quotes-generator-api",
        demo:null,
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Weather App",
        img:weather,
        category:"webapp",
        link:"https://github.com/beernaard/weather-app",
        demo:null,
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Tech Company Website",
        img:techlp,
        category:"landingpage",
        link:"https://github.com/beernaard/landing_page_tech_agency",
        demo:"https://beernaard.github.io/landing_page_tech_agency/",
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Netflix Landing Page Clone",
        img:netflixlp,
        category:"landingpage",
        link:"https://github.com/beernaard/netflix_ui_clone",
        demo:"https://beernaard.github.io/netflix_ui_clone/",
    },

]

export default data