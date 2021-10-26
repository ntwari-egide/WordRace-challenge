
/**
 * @author: ntwari egide
 * @description: App component
 */

import { Button, Modal, Space, Typography, Drawer, Row, Col } from 'antd';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useEffect, useState } from 'react';
import FailAudio from "./assets/audio/beep.mp3"
import CompletedWord from "./assets/audio/finished-word.mp3"
import * as actions from "./redux/actions/score.actions"
import "./constants/global-axios-config"
import { ScoreTableComponent } from './components/ScoreTable';
import { useSelector } from 'react-redux';

const {Text, Title} = Typography

function App() {

  const [keypressed, setkeypressed] = useState('')

  const [wellwrittenchars,setwellwrittenchars] = useState(0)

  const [instructionsmodal,setinstructionsmodal] = useState(true)

  const [gameovermodal,setgameovermodal] = useState(false)  

  const [tablevisibility,settablevisibility] = useState(false)

  const [startcountdown,setstartcountdown] = useState(false)

  let [multiplier,setmultiplier] = useState(0)

  let [wordstack,] = useState(['HEAT','KILLS','CORONA','INTERNATIONAL'])

  let [typedcharacters,settypedcharacters] = useState(0)

  let currentword = wordstack[0]

  let otherwords = ["RANDOM", "AMAZING","GEEKS", "PROGRAMING","INSTRUMENT","QUESTIONS","ZEBRA","YOUTUBE","YOMBI"];

  

  if(startcountdown) {
    setTimeout(() => {
      setgameovermodal(true)
    },60000)
  }


  /**
   * @description: handling any key pressed function
   * @param {e}  
   */
  const anykeypressedhandler = (e) => {
    setkeypressed(e.key)

    if(compareWord(currentword.charAt(wellwrittenchars), e.key)) {

      let sizehandler = wellwrittenchars

      setwellwrittenchars(sizehandler + 1 )

      iswordcompleted(sizehandler + 1)

      settypedcharacters(typedcharacters+1)

    } else if(e.key !== "CapsLock") {
      var audio = new Audio(FailAudio);
      audio.play();
      setmultiplier(0)
    }

  }


    /**
   * @description: comparing given strings
   * @param {word1, word2}  
   */
  
  const compareWord = (char1, char2) => {

    console.log('word 1'+char1+' other w: '+char2);

    if(char1 === char2) return true
    return false
  }

  

  
  /**
   * @description: checking if word is completed so as to be removed in the stack
   * @param {length}  
   */

  const iswordcompleted = (length) => {
    if(currentword.length === length){
      wordstack.shift()
      setwellwrittenchars(0)
      wordstack.push(otherwords[Math.floor(Math.random() * wordstack.length)])
      var audio = new Audio(CompletedWord);
      audio.play();

      let mult = multiplier

      setmultiplier(mult + 1)
    }

    if(wordstack.length === 0) setgameovermodal(true)
  }

  /**
   * @description: saving scores in the database
   * @param {length}  
   */
  const saveScoreHandler = () => {
      const newscorerequrest = {
        score: typedcharacters,
        level: 3,
        speed: `${multiplier}X`
      }
    
    actions.saveNewScore(newscorerequrest)

    settablevisibility(true)

  }

  const scoreData = useSelector( state => state.score )
  const stats = useSelector( state => state.stats)

  useEffect(() => {
    actions.getTop10Score()
    actions.getScoreStats()
  },[scoreData,stats])

  console.log("stats ",stats);


  return (
    <div className="App" tabIndex={0} onKeyUp={anykeypressedhandler}>

      <Modal title="Word Race Game Instructions" footer={<> 
        <Button className="quit-game-button">QUIT GAME</Button>
        <Button onClick={() => {
          setinstructionsmodal(false)
          setstartcountdown(true)
        }} className="start-game-button" id="start_game">START GAME</Button>
      </>} visible={instructionsmodal} onCancel={() => setinstructionsmodal(false)}>
        <ul>
          <li><p>By clicking <strong>START GAME</strong> you're going to see word to type</p></li>
          <li><p>When you type <strong>incorrect</strong> character, You are going to hear <strong>sound</strong></p></li>
          <li><p>When you finish writting a word, it is going to be cleared.</p></li>
          <li><p>There is on screen feedback mechanism for showing clicked letter</p></li>
        </ul>
      </Modal>

      <Drawer
        title="Word Race Statistics"
        width={800}
        onClose={() => settablevisibility(false)}
        visible={tablevisibility}
      >
        <br />
        <Title level={4}>Breif statistics</Title>
        
        <br />
        <Row>
          <Col span={8}>Number of games played: </Col>
          <Col>{stats.total} games</Col>
        </Row>

        <br />
        <Row>
          <Col span={8}>Avarage score: </Col>
          <Col>{stats.average}</Col>
        </Row>

        <br />
        <Row>
          <Col span={8}>Max Level reached: </Col>
          <Col>{stats.max}</Col>
        </Row> 

        <br />
        <Title level={4}>Top 10 Scores</Title>
        <ScoreTableComponent dataSource={scoreData} />
      </Drawer>

      
      <Modal title="GAME OVER" footer={<> 
        <Button className="save-game-button" onClick ={saveScoreHandler}>SAVE SCORE</Button>
        <Button onClick={() => {  
          
          setgameovermodal(false)

          window.location.reload()

        }} className="start-game-button">PLAY AGAIN</Button>
      </>} visible={gameovermodal} onCancel={() => setgameovermodal(false)}>
        <Space direction="vertical" className="statistics">
          <Title level={4}>{typedcharacters}</Title>
          <Text>SCORE</Text>
        </Space>

        <Space direction="vertical" className="statistics">
          <Title level={4}>3</Title>
          <Text>LEVEL</Text>
        </Space>

        <Space direction="vertical" className="statistics">
          <Title level={4}>4X</Title>
          <Text>SPEED</Text>
        </Space>
      </Modal>
      <Space className="results-content">
      <Space direction="vertical" className="level-container"><Title level={3} className="result-title">3</Title> <Text className="result">LEVEL</Text></Space>
        
      <Space direction="vertical" className="score-container"><Title level={3} className="result-title">{typedcharacters}</Title> <Text className="result">SCORE</Text></Space>
      
      <Space direction="vertical" className="speed-container"><Title level={3} className="result-title">{multiplier}X</Title> </Space>
      </Space>

      <div className="word-race">
        <Space className="word-container" direction="horizontal">

          {
            wordstack.map(word => {
              if(word === wordstack[0]){
                return <Space className="word">
                  {(() => {
                    let counter = 0

                    return word.split("").map(character =>{
                      counter ++

                      if(counter <= wellwrittenchars && counter !== 0) return <Text className="color_green">{character}</Text>
                      return <Text>{character}</Text>
                    })
                  })()}
                </Space>
              } else return  <Space className="word">{word}</Space>
              // return
            })
            
          }

        </Space>
      </div>

      <Space className="keyboard-characters">
        <Space direction="horizontal">
          <Space className={`key-container ${keypressed === 'Q' ||keypressed === 'q' ? 'key-pressed':''}`}>
            <Text>Q</Text>
          </Space>

          <Space className={`key-container ${keypressed === 'W' ||keypressed === 'w' ? 'key-pressed':''}`}>
            <Text>W</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'E' ||keypressed === 'e' ? 'key-pressed':''}`}>
            <Text>E</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'R' ||keypressed === 'r' ? 'key-pressed':''}`}>
            <Text>R</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'T' ||keypressed === 't' ? 'key-pressed':''}`}>
            <Text>T</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'Y' ||keypressed === 'y' ? 'key-pressed':''}`}>
            <Text>Y</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'U' ||keypressed === 'u' ? 'key-pressed':''}`}>
            <Text>U</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'I' ||keypressed === 'i' ? 'key-pressed':''}`}>
            <Text>I</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'O' ||keypressed === 'o' ? 'key-pressed':''}`}>
            <Text>O</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'P' ||keypressed === 'p' ? 'key-pressed':''}`}>
            <Text>P</Text>
          </Space>
        </Space>
      </Space>

      <Space className="padding-10px keyboard-characters">
        <Space direction="horizontal">
          <Space className={`key-container ${keypressed === 'A' ||keypressed === 'a' ? 'key-pressed':''}`}>
            <Text>A</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'S' ||keypressed === 's' ? 'key-pressed':''}`}>
            <Text>S</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'D' ||keypressed === 'd' ? 'key-pressed':''}`}>
            <Text>D</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'F' ||keypressed === 'f' ? 'key-pressed':''}`}>
            <Text className="specific-character">F</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'G' ||keypressed === 'g' ? 'key-pressed':''}`}>
            <Text>G</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'H' ||keypressed === 'h' ? 'key-pressed':''}`}>
            <Text>H</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'J' ||keypressed === 'j' ? 'key-pressed':''}`}>
            <Text className="specific-character">J</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'K' ||keypressed === 'k' ? 'key-pressed':''}`}>
            <Text>K</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'L' ||keypressed === 'l' ? 'key-pressed':''}`}>
            <Text>L</Text>
          </Space>
        </Space>
      </Space>

      <Space className="padding-20px keyboard-characters">
        <Space direction="horizontal">
          <Space className={`key-container ${keypressed === 'Z' ||keypressed === 'z' ? 'key-pressed':''}`}>
            <Text>Z</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'X' ||keypressed === 'x' ? 'key-pressed':''}`}>
            <Text>X</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'C' ||keypressed === 'c' ? 'key-pressed':''}`}>
            <Text>C</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'V' ||keypressed === 'v' ? 'key-pressed':''}`}>
            <Text>V</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'B' ||keypressed === 'b' ? 'key-pressed':''}`}>
            <Text>B</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'N' ||keypressed === 'n' ? 'key-pressed':''}`}>
            <Text>N</Text>
          </Space>
          <Space className={`key-container ${keypressed === 'M' ||keypressed === 'm' ? 'key-pressed':''}`}>
            <Text>M</Text>
          </Space>
        </Space>
      </Space>
    </div>
  );
}

export default App;
