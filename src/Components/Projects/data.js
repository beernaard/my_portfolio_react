import pos from '../../assets/Images/pos.jpg'
import todotask from '../../assets/Images/todotask.jpg'
import studsys from '../../assets/Images/studsys.jpg'
import panote from '../../assets/Images/panote.jpg'
import quotes from '../../assets/Images/quotes.jpg'
import weather from '../../assets/Images/weather.jpg'

const data=[
    {
        index:crypto.randomUUID(),
        ProjectName:"Point of Sale",
        img:pos,
        category:"desktopapp",
        link:"https://github.com/beernaard/Point_of_Sale",
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Student Management System",
        img:studsys,
        category:"webapp",
        link:"https://github.com/beernaard/StudentManagamentSystem",
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Todo list App",
        img:todotask,
        category:"webapp",
        link:"https://github.com/beernaard/fullstack-todo-list",
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"PaNOTE App",
        img:panote,
        category:"webapp",
        link:"https://github.com/beernaard/panote-app-react",
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Quotes Generator",
        img:quotes,
        category:"webapp",
        link:"https://github.com/beernaard/quotes-generator-api",
    },
    {
        index:crypto.randomUUID(),
        ProjectName:"Weather App",
        img:weather,
        category:"webapp",
        link:"https://github.com/beernaard/weather-app",
    },

]

export default data