
import './App.css';
import {Link }from 'react-scroll'

const menuItems=
[{
  id:1,
  title:"home",
  content:"Out here, under the open sky and endless stars, you can't buy happiness but you can buy a tickets.",

},

{
  id:2,
  title:"About",
  content:"Enjoy ur life with travel and reach your dream destination."
},

{
  id:3,
  title:"Contact",
  content:"Happiness is to fullfill our dreams so dream with your lovely places.",
},

{
  id:4,
  title:"Service",
  content:"you can't buy a time and happiness but you can buy a tickets for ur dream destination soo book a tickets.",
}
];

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>ROUTER</h1>
          <ul>
            {menuItems.map((menu) => (
              <li>
                <Link
                  to={menu.title}
                  smooth={true}
                  offset={-430}
                  duration={500}
                  
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>


      <main>
  {menuItems.map((menu) => (
    <div className="content" key={menu.id}>
      <h1 className="content-header" id={menu.title}>
        
      </h1>
      <h3>{menu.content}</h3>
    </div>
  ))}
</main>

    </div>
  );
}

export default App;