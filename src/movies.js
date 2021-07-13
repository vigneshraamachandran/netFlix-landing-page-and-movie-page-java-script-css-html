import React,{Component} from 'react';
import './movies.css';
import r1c1 from '../src/image/xoxo.jpg';
import r1c2 from '../src/image/imperial-dreams.jpg';
import r1c3 from '../src/image/clinical.jpg';
import r1c4 from '../src/image/Barry.jpg';
import r1c5 from '../src/image/dangerous-lies.jpg';
import r2c1 from '../src/image/the-prince-switch.jpg';
import r2c2 from '../src/image/project-power.jpg';
import r2c3  from '../src/image/prom.jpg';
import r2c4  from '../src/image/sword-of-destiniy.jpg';
import r2c5  from '../src/image/things-heared-and-seen.png';
import r3c1  from '../src/image/collar-bomb.jpg';
import r3c2  from '../src/image/let-it-show.jpg';
import r3c3  from '../src/image/set it up.jpg';
import r3c4  from '../src/image/wolftown.jpg';
import r3c5  from '../src/image/the body.jpg';
import r4c1  from '../src/image/the tall grass.jpg';
import r4c2  from '../src/image/the night come for us.jpg';
import r4c3  from '../src/image/the-ivosy-game.jpg';
import r4c4  from '../src/image/uncorked.jpg';
import r4c5  from '../src/image/white-tiger.jpg';
import r5c1 from '../src/image/okja.jpg';
import r5c2 from '../src/image/queens gambit.jpg';
import r5c3 from '../src/image/riverdale.jpg';
import r5c4 from '../src/image/strangers thing.jpg';
import r5c5 from '../src/image/oxyzen.jpg';
import r6c1 from '../src/image/king.jpg';
import r6c2 from '../src/image/kissingbooth.jpg';
import r6c3 from '../src/image/life.jpg';
import r6c4 from '../src/image/moneyheist.jpg';
import r6c5 from '../src/image/murder-mistry.jpg';
import r7c1 from '../src/image/baby sitter.jpg';
import r7c2 from '../src/image/close.jpg';
import r7c3 from '../src/image/fear.jpg';
import r7c4 from '../src/image/goodoonpaper.jpg';
import r7c5 from '../src/image/iceroad.jpg';
import r8c1 from '../src/image/13reasony.jpg';
import r8c2 from '../src/image/6-underground.jpg';
import r8c3 from '../src/image/all the boy i loved.jpg';
import r8c4 from '../src/image/allbridhtplace.jpg';
import r8c5  from '../src/image/armyofdead.jpg';


class Movies extends Component{
    render(){
        return(
        <div>
                {/* first row of movies */}
            <div className="flimlist">
            <div  className="r1c1">
    <img src={r1c1} alt="r1c1"/>
             </div>
            <div className="r1c2">
    <img  src={r1c2 } alt="extrastion"/>
            </div>
            <div className="r1c3">
    <img  src={r1c3} alt="extrastion"/>
            </div>
            <div className="r1c4">
    <img src={r1c4} alt="extrastion"/>
            </div>
            <div className="r1c5">
    <img src={r1c5} alt="extrastion"/>
            </div>
            </div>
            {/* 2 row of movies */}
            <div className="fimlist2">
            <div className="r2c1">
    <img src={r2c1} alt="extrastion"/>
            </div>
            <div className="r2c2">
    <img src={r2c2} alt="projectpower"/>
            </div>
            <div className="r2c3">
              <img src={r2c3} alt="prom"/>
          </div>
          <div className="r2c4">
             <img src={r2c4} alt="swardofdestiny"/>
          </div>
          <div className="r2c5">
               <img src={r2c5} alt="thinghearsandsee"/>
          </div>
          </div> 
             {/* 3 row of movies */} 
             <div className="flimlist3">
             <div className="r3c1">
    <img src={r3c1} alt="collerbomb"/>
            </div>
            <div className="r3c2">
    <img src={r3c2} alt="lititshow"/>
            </div>
            <div className="r3c3">
              <img src={r3c3} alt="uncrocked"/>
          </div>
          <div className="r3c4">
             <img src={r3c4} alt="whitetiger"/>
          </div>
          <div className="r3c5">
               <img src={r3c5} alt="thinghearsandsee"/>
          </div>
             </div>
             {/* first row of movies */}
             <div className="flimlist4">
             <div className="r4c1">
    <img src={r4c1} alt="extrastion"/>
            </div>
            <div className="r4c2">
    <img src={r4c2} alt="projectpower"/>
            </div>
            <div className="r4c3">
              <img src={r4c3} alt="prom"/>
          </div>
          <div className="r4c4">
             <img src={r4c4} alt="swardofdestiny"/>
          </div>
          <div className="r4c5">
               <img src={r4c5} alt="thinghearsandsee"/>
          </div>
             </div>
                {/* first row of movies */}
                <div className="flimlist4">
             <div className="r5c1">
    <img src={r5c1} alt="extrastion"/>
            </div>
            <div className="r5c2">
    <img src={r5c2} alt="projectpower"/>
            </div>
            <div className="r5c3">
              <img src={r5c3} alt="prom"/>
          </div>
          <div className="r5c4">
             <img src={r5c4} alt="swardofdestiny"/>
          </div>
          <div className="r5c5">
               <img src={r5c5} alt="thinghearsandsee"/>
          </div>
             </div>
                {/* 6 row of movies */}
                <div className="flimlist4">
             <div className="r6c1">
    <img src={r6c1} alt="extrastion"/>
            </div>
            <div className="r6c2">
    <img src={r6c2} alt="projectpower"/>
            </div>
            <div className="r6c3">
              <img src={r6c3} alt="prom"/>
          </div>
          <div className="r6c4">
             <img src={r6c4} alt="swardofdestiny"/>
          </div>
          <div className="r6c5">
               <img src={r6c5} alt="thinghearsandsee"/>
          </div>
             </div>
                {/* 7 row of movies */}
                <div className="flimlist4">
             <div className="r7c1">
    <img src={r7c1} alt="extrastion"/>
            </div>
            <div className="r7c2">
    <img src={r7c2} alt="projectpower"/>
            </div>
            <div className="r7c3">
              <img src={r7c3} alt="prom"/>
          </div>
          <div className="r7c4">
             <img src={r7c4} alt="swardofdestiny"/>
          </div>
          <div className="r7c5">
               <img src={r7c5} alt="thinghearsandsee"/>
          </div>
             </div>
                {/* first 8 row of movies */}
                <div className="flimlist4">
             <div className="r8c1">
    <img src={r8c1} alt="extrastion"/>
            </div>
            <div className="r8c2">
    <img src={r8c2} alt="projectpower"/>
            </div>
            <div className="r8c3">
              <img src={r8c3} alt="prom"/>
          </div>
          <div className="r8c4">
             <img src={r8c4} alt="swardofdestiny"/>
          </div>
          <div className="r8c5">
               <img src={r8c5} alt="r8c5"/>
          </div>
             </div>
        </div>
        )
    }
}
export default Movies;