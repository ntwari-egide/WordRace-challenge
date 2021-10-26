## WORD RACE CHALLENGE
**SCREEN SHOOTS**
Welcome instructions content, **start game**

![enter image description here](https://res.cloudinary.com/dpqasrwfu/image/upload/v1635190533/2_mbmlhu.png)

Play ground

![enter image description here](https://res.cloudinary.com/dpqasrwfu/image/upload/v1635190533/3_gnvd5u.png)

Displaying Top 10 Scores after saving game scores and statistics

![enter image description here](https://res.cloudinary.com/dpqasrwfu/image/upload/v1635230552/4_iptueu.png)

**FRONT END CONCEPTS**

 1. Screen feedback mechanism
	 
	 - I used **onKeyUp** function on **App component** so that I can capture every key pressed, then I use state to hightlight pressed key
	 - Function handling onKeyUp press is **anykeypressedhandler**
	 - anykeypressedhandler function is used to handle all check events, we set a state that is handling clicked key so as to highlight that key in **Yellow** color	
	 
2. Word stack implementation mechanism
	- in **onkeypressedhandler** I have to check whether a key pressed is the same as the current character in the word. 
	- Inside **iswordcompleted**, if word is finished, we remove it from the stack and automatically **add new word** which is selected randomly from the **array** of words
	
3. Progress view implementation
	- Score is calculated as the total of all **well typed characters**, we used **typedcharacters** state to manage it

4. Game over  implementation
	- Game over happens when the stack is empty or after one minute times out
	- - I've implemented the modal to display **score, level, speed multiplier**, on that modal there is I've added
	- when save score is presssed, we submit function of action type to redux to consume POST api
	- when 	Play again is clicked, we hide the modal and then we reload the page to set every state to inital state value
	- when save score is clicked, Drawer is rendered to show Top 10 scores

5. Sound setting implementation
	- When **iswordcompleted** function is called, and word is completed, the track called **CompleteWord** is played
	- If key pressed is not equal to exact character, and it is not a Capslock, The **FailedAudio** audio is played


**BACK END CONCEPTS**

1. Structure of the code arrangement, We've implemented **controllers**, **App Js** as an entry point of the application, **router** which is going to route to application apis request to corresponding controllers, **modal** which contains a class of Score and Db Connection definitions

2.  GET `/api/v1/scores`, get all scores
3. POST `/api/v1/scores`, saving new scores in mongo db database
4. GET `/api/v1/scores/get-top-10` , getting all top 10 scores
5. Schema of Score Document:
	
```
| ----------- | ----------- |---------------|
| Name 		  | Type        |  Required     |
| ----------- | ----------- |---------------|
| Score       | Number      | Required      |
| Level       | Number      | Required      |
| Speed       | String      | Required      |
| Played At   | Date        | Not Required  |
| ----------- | ----------- |---------------|
```
 


6. Getting Top 10 scores from database

	
	```javascript
	Score
        .find()
        .sort({score: -1})
        .limit(10)
        .exec()
        .then(top10Scores => {
            res.json({
                length: top10Scores.length,
                data: top10Scores
            })
        })
	```
