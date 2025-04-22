import React from "react";
import '../styles/showcase.css'

const Showcase = () => {
    return (
      <div className="showcase">
        <div className="showcase-row">
            <div className="showcase-left">
              <img src="/images/Top_Bar.png" alt="Top_Bar.png"/>
              <div className="overlay-div">
                <img src="/images/creepycook.png" alt="creepycook.png"/>
              </div>
            </div>
            <div className="showcase-right">
              <img src="/images/Top_Square.png" alt="Top_square.png" />
              <div className="overlay-div showcase-description">
                <h1>Creepy Cook!</h1>
                <p>Cooking | Horror | Roguelike</p>
                <p>Team Rocket</p>
                <p>In this survival strength game, players must scavenge a ruined city for ingredients to cook an offering. They must avoid monsters while collecting ingredients.</p>
              </div>
            </div>
        </div>

        <div className="showcase-row second-row">
            <div className="showcase-left">
              <img src="/images/Middle_Square.png" alt="Top_square.png"/>
              <div className="overlay-div showcase-description">
                <h1>Trackline</h1>
                <p>Rhythm | Action</p>
                <p>Team Magma</p>
                <p>A rhythm-based action game about a Walkman wielding rebel fighting their way out of the expansive urban underground by switching the tempo with their cassette tapes.</p>
              </div>
            </div>
            <div className="showcase-right">
              <img src="/images/Middle_Bar.png" alt="Top_Bar.png"/>
              <div className="overlay-div">
                <img src="/images/trackline.png" alt="creepycook.png"/>
              </div>
            </div>
        </div>


        <div className="showcase-row third-row">
            <div className="showcase-left">
              <img src="/images/Bottom_Bar.png" alt="Top_Bar.png"/>
              <div className="overlay-div">
                <img src="/images/creatureark.png" alt="creepycook.png"/>
              </div>
            </div>
            <div className="showcase-right">
              <div className="image-wrapper">
                <img src="/images/Bottom_Square.png" alt="Top_square.png" />
                <div className="overlay-div showcase-description">
                    <h1>Creature Ark</h1>
                    <p>Creature Collector | Narrative | RPG</p>
                    <p>Team Aqua</p>
                    <p>You and your mythical creatures need a new place to live when your home island is swallowed up by a flood. You'll have to navigate the oceans and explore islands to escape this recession-defining housing crisis!</p>
                </div>
            </div>

            </div>
        </div>
      </div>
    )
}

export default Showcase
