import { Space, Typography } from 'antd';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useState } from 'react';

/**
 * @author: ntwari egide
 * @description: App component
 */


const {Text, Title} = Typography

function App() {

  const [keypressed, setkeypressed] = useState('')

  const [wellwrittenchars,setwellwrittenchars] = useState(0)

  let [wordstack,setremainingstack] = useState(['HEAT','KILLS','CORONA'])

  let currentword = wordstack[0]

  

  /**
   * @description: handling any key pressed function
   * @param {e}  
   */
  const anykeypressedhandler = (e) => {
    setkeypressed(e.key)

      console.log('Leng ',wellwrittenchars);

    if(compareWord(currentword.charAt(wellwrittenchars), e.key)) {

      let sizehandler = wellwrittenchars

      setwellwrittenchars(sizehandler + 1 )

      iswordcompleted(sizehandler + 1)

    } else {
      var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
      audio.play();
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

  const iswordcompleted = (length) => {
    if(currentword.length === length){
      wordstack.shift()
      setwellwrittenchars(0)
    }
  }


  return (
    <div className="App" tabIndex={0} onKeyUp={anykeypressedhandler}>

      <Space className="results-content">
      <Space direction="vertical" className="level-container"><Title level={3} className="result-title">3</Title> <Text className="result">LEVEL</Text></Space>
        
      <Space direction="vertical" className="score-container"><Title level={3} className="result-title">420</Title> <Text className="result">SCORE</Text></Space>
      
      <Space direction="vertical" className="speed-container"><Title level={3} className="result-title">4X</Title> </Space>
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
          <Space className={`key-container ${keypressed === 'W' ||keypressed === 'w' ? 'key-pressed':'w'}`}>
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
