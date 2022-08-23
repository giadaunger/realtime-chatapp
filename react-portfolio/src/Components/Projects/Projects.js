import React from 'react';
import "./css/projects.css"
import "./css/responsive.css"

function Projects() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

  return (
    <div className="project-wrapper">
        <div className="header-div">
            <h1 className="header-h1">My projects</h1>
            <p className="header-p">
                These are my projects. I included the projects that are not quite finished aswell, 
                such as my various portfolios. I included them because, even if the project is not 
                fully completed, you can still see improvement when compared.
            </p>
        </div>
        

    
        <div className="project">
            <h2 className="project-h2">Portfolio 1.0</h2>
            <img src={require("./img/img1.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>This was my very first portfolio. It has a very simple design and structure.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">HTML</span>
                <span className="info-span">CSS</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://fluffy-mooncake-a74051.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/myFirstPortfolio')}>View code</button>
            </div>
        </div>



        <div className="project">
            <h2 className="project-h2">Portfolio 2.0</h2>
            <img src={require("./img/img2.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>This was my second first portfolio. It's pretty similar to the first one I did. I Never finished this portfolio because I had too many ideas and bearly any planning.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">HTML</span>
                <span className="info-span">CSS</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://silly-mandazi-af2b65.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/mySecondPortfolio')}>View code</button>
            </div>
        </div>



        <div className="project">
            <h2 className="project-h2">Hangman game</h2>
            <img src={require("./img/img3.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>This is a simple Hangman game build with only VanillaJS. This was my first time using JS in a project.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">VanillaJS</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://harmonious-bublanina-728d39.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/hangMan')}>View code</button>
            </div>
        </div>



        <div className="project">
            <h2 className="project-h2">Dinosaur game</h2>
            <img src={require("./img/img4.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>This is the second time I used JavaScript in a project. This is still a very simple VanillaJS game, but a little more advanced than the Hangman game. </p>
            </div>
            
            <div className="info-div">
                <span className="info-span">VanillJS</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://stately-llama-2a3330.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/DinosaurGame')}>View code</button>
            </div>
        </div>



        <div className="project">
            <h2 className="project-h2">Portfolio 3.0</h2>
            <img src={require("./img/img11.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>This is the third portfolio that I have made. But this time I have implemented some VanillaJS.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">HTML</span>
                <span className="info-span">CSS</span>
                <span className="info-span">VanillJS</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://giadaunger.github.io/myOfficialPortfolio/GiadaUngerPortfolio/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/myOfficialPortfolio')}>View code</button>
            </div>
        </div>


        <div className="project">
            <h2 className="project-h2">Todo list - React</h2>
            <img src={require("./img/img9.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>A simple todo list, build with React.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">CSS</span>
                <span className="info-span">React</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://epic-mirzakhani-4d76b1.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/React-Todo')}>View code</button>
            </div>
        </div>


        <div className="project">
            <h2 className="project-h2">Todo list - VueJs</h2>
            <img src={require("./img/img6.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>Simple todo list build with VueJs.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">CSS</span>
                <span className="info-span">VueJs</span>
                <span className="info-span">Vite</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://infallible-heisenberg-b660c3.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/vue-Todo')}>View code</button>
            </div>
        </div>


        <div className="project">
            <h2 className="project-h2">Todo - Node</h2>

            <div className="description">
                <p>Todo list build with Node.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">Node</span>
                <span className="info-span">React</span>
                <span className="info-span">HTTP</span>
                <span className="info-span">Axios</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/TodoNode/tree/main/todoNode')}>View code</button>
            </div>
        </div>



        <div className="project">
            <h2 className="project-h2">The cat API</h2>
            <img src={require("./img/img5.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>This was the first time using an API. The purpose of this project was to learn how to use an API in different ways, fetch information, and so on.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">HTML</span>
                <span className="info-span">CSS</span>
                <span className="info-span">VanillaJS</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://giadaunger.github.io/TheCatAPI/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/TheCatAPI')}>View code</button>
            </div>
        </div>



        <div className="project">
            <h2 className="project-h2">Book API</h2>

            <div className="description">
                <p>Builded an SQL-database to store information about the book API. You can add, remove and edit books.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">SQL</span>
                <span className="info-span">React</span>
                <span className="info-span">Express</span>
                <span className="info-span">MVC model</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/TodoNode/tree/main/bookApi')}>View code</button>
            </div>
        </div>


        <div className="project">
            <h2 className="project-h2">Shopping Cart</h2>
            <img src={require("./img/img7.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>Built a store with a functional shoppingcart. The backend (the information about the items for sale) is stored in a JS file. The frontend was buildt using React.</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">HTML</span>
                <span className="info-span">CSS</span>
                <span className="info-span">React</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://zippy-gaufre-01fcf9.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/ShoppingCart')}>View code</button>
            </div>
        </div>


        <div className="project">
            <h2 className="project-h2">Hakans Lager</h2>
            <img src={require("./img/img8.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>Builded a similar project as "Shoppi Cart"-project. For practise. </p>
            </div>
            
            <div className="info-div">
                <span className="info-span">HTML</span>
                <span className="info-span">CSS</span>
                <span className="info-span">React</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://cheery-sunburst-442908.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/hakansLager')}>View code</button>
            </div>
        </div>


        <div className="project">
            <h2 className="project-h2">Fake store API</h2>
            <img src={require("./img/img10.png")} alt="project pic" className="project-pic" />

            <div className="description">
                <p>Builded another webshop, but this time with an already existing API. In this project I'm fetching informatiom about the items for sale, from an API. Instead of hardcoding and storing the data in a JS file</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">HTML</span>
                <span className="info-span">CSS</span>
                <span className="info-span">React</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://gilded-biscotti-54e83c.netlify.app/')}>View project</button>
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/storeAPI')}>View code</button>
            </div>
        </div>


        <div className="project">
            <h2 className="project-h2">HTTP server</h2>

            <div className="description">
                <p>Builded my first HTTP-server, without Node</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">HTTP</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/MyFirstWebbserver')}>View code</button>
            </div>
        </div>


        <div className="project">
            <h2 className="project-h2">Real time chat app</h2>

            <div className="description">
                <p>This is a real time chat app, that supports chatting in miltiple rooms at the same tima. You can add and remove rooms, and the app stores the messages long term</p>
            </div>
            
            <div className="info-div">
                <span className="info-span">Express</span>
                <span className="info-span">VanillaJs</span>
                <span className="info-span">Knex</span>
                <span className="info-span">CSS</span>
                <span className="info-span">HTML</span>
            </div>

            <div className="btn-div">
                <button className="project-btn" onClick={() => openInNewTab('https://github.com/giadaunger/TodoNode/tree/main/chatRoomV2')}>View code</button>
            </div>
        </div>

    </div>
  );
}

export default Projects;
